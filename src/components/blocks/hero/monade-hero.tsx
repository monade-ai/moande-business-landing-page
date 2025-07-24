// Path: src/components/blocks/hero/monade-hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, Loader2, Phone } from "lucide-react";

// Custom VoiceLemon Interactive Component
const VoiceLemon = () => {
  const [audioLevel, setAudioLevel] = useState(0);
  const audioContextRef = useRef<any>(null);
  const analyserRef = useRef<any>(null);
  const animationRef = useRef<any>(null);

  // --- Lemon shape logic and constants (EXACTLY as provided) --- //
  const createLemonPills = () => {
    const pills = [];
    const centerX = 400;
    const centerY = 320;
    const rows = 16;
    let pillId = 0;
    let actualRowIndex = 0;
    for (let row = 0; row < rows; row++) {
      if (row === 7 || row === 8 || row === 9) continue;
      if (row === rows - 1) continue;
      const progress = row / (rows - 1);
      const y = 140 + actualRowIndex * 30;
      let width;
      if (progress < 0.1) {
        width = 80 + (progress / 0.1) * 60;
      } else if (progress < 0.2) {
        const upperProgress = (progress - 0.1) / 0.1;
        width = 140 + upperProgress * 120;
      } else if (progress < 0.4) {
        const upperProgress = (progress - 0.2) / 0.2;
        width = 260 + upperProgress * 100;
      } else if (progress < 0.6) {
        width = 360 + Math.sin((progress - 0.4) / 0.2 * Math.PI) * 20;
      } else if (progress < 0.75) {
        const taperProgress = (progress - 0.6) / 0.15;
        width = 370 - taperProgress * 120;
      } else if (progress < 0.9) {
        const midTaperProgress = (progress - 0.75) / 0.15;
        width = 250 - midTaperProgress * 160;
      } else if (progress < 0.95) {
        const bottomProgress = (progress - 0.9) / 0.05;
        width = 90 - bottomProgress * 40;
      } else {
        width = 50;
      }
      const pillWidth = 48;
      const pillPadding = 8;
      const totalPillSpace = pillWidth + pillPadding;
      let pillsInRow = Math.max(1, Math.floor(width / totalPillSpace));
      if (progress >= 0.4 && progress <= 0.6) {
        pillsInRow += 1;
      }
      if (row === 6) {
        pillsInRow = Math.max(1, pillsInRow - 2);
      }
      if (row < 2 && pillsInRow === 1) {
        actualRowIndex++;
        continue;
      }
      const totalRowWidth = pillsInRow * totalPillSpace - pillPadding;
      const startX = centerX - totalRowWidth / 2;
      for (let col = 0; col < pillsInRow; col++) {
        const x = startX + col * totalPillSpace;
        pills.push({
          id: `pill-${pillId++}`,
          x: x,
          y: y,
          layer: Math.floor(actualRowIndex / 4),
          row: actualRowIndex,
          col: col,
        });
      }
      actualRowIndex++;
    }
    return pills;
  };

  const pills = createLemonPills();

  // --- Audio visual logic (always listening) --- //
  const updateAudioLevel = () => {
    if (!analyserRef.current) return;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserRef.current.getByteFrequencyData(dataArray);
    const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
    const normalizedLevel = Math.min(average / 70, 1);
    setAudioLevel(normalizedLevel);
    animationRef.current = requestAnimationFrame(updateAudioLevel);
  };

  useEffect(() => {
    let didCancel = false;
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      if (didCancel) return;
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);
      updateAudioLevel();
    });
    return () => {
      didCancel = true;
      if (audioContextRef.current) audioContextRef.current.close();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      setAudioLevel(0);
    };
  }, []);

  const getPillOpacity = (pillIndex: number, layer: number, row: number) => {
    if (audioLevel === 0) return 0;
    const centerRow = 7;
    const distanceFromCenter = Math.abs(row - centerRow) / 8;
    const threshold = distanceFromCenter * 0.6;
    const baseOpacity = audioLevel > threshold ? 0.8 + audioLevel * 0.2 : 0;
    const randomFactor = 0.9 + Math.random() * 0.2;
    return Math.min(baseOpacity * randomFactor, 1);
  };

  return (
    <div className="flex flex-col items-center w-full justify-center select-none p-0 m-0">
      <svg width="800" height="720" viewBox="0 0 800 720" className="drop-shadow-lg">
        {pills.map((pill, index) => (
          <rect
            key={pill.id}
            x={pill.x}
            y={pill.y}
            width="48"
            height="24"
            rx="12"
            ry="12"
            fill={`rgba(255, 235, 59, ${getPillOpacity(index, pill.layer, pill.row)})`}
            stroke="#fbbf24"
            strokeWidth="1.5"
            className="transition-all duration-150"
          />
        ))}
        <rect
          x="392"
          y="100"
          width="16"
          height="50"
          rx="8"
          fill="#22c55e"
          opacity={audioLevel > 0.3 ? 0.9 : 0.5}
          className="transition-opacity duration-200"
        />
        <ellipse
          cx="420"
          cy="114"
          rx="16"
          ry="8"
          fill="#22c55e"
          opacity={audioLevel > 0.5 ? 0.9 : 0.5}
          className="transition-opacity duration-200"
        />
      </svg>
    </div>
  );
};

export interface MonadeHeroProps {
  onFormSubmit?: (email: string) => void;
}

export default function MonadeHero({ onFormSubmit }: MonadeHeroProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [callState, setCallState] = useState<'idle' | 'calling' | 'in-call'>('idle');
  const [callDuration, setCallDuration] = useState(0);

  // Framer Motion hooks for the slider
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(number);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setIsValidNumber(validatePhoneNumber(value));
  };

  const handleDragEnd = () => {
    if (!constraintsRef.current) return;
    const dragBuffer = 50;
    const maxDrag = constraintsRef.current.offsetWidth - 72;

    if (x.get() > maxDrag - dragBuffer) {
      setCallState('calling');
      setTimeout(() => {
        setCallState('in-call');
        setCallDuration(0);
      }, 1500);
    } else {
      x.set(0);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (callState === 'in-call') {
      timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callState]);

  const formatTime = (total: number) => {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  };

  // Icon components
  const IdleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#FACC15"/>
      <path d="M14 7L17 4" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const CallingSpinner = () => <Loader2 className="animate-spin w-8 h-8 text-white" />;
  const InCallIcon = () => <Phone className="w-8 h-8 text-white" />;

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F8F8]">
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-20 py-24 sm:py-32 lg:py-44 lg:gap-x-16">
          {/* Left Column: Hero and Slider */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#333333] drop-shadow-[0_4px_32px_rgba(54,141,255,0.11)]">
              AI Sales Rep that knows who's worth your time.
            </h1>
            <p className="mt-6 text-lg leading-8 sm:text-xl sm:leading-9 text-[#555555] drop-shadow-[0_4px_20px_rgba(0,0,0,0.14)] max-w-2xl">
              Automatically qualify leads, follow up intelligently, and surface high-priority prospects to your sales team. No more cold calls, just warm conversations.
            </p>

            {/* Slider moved here */}
            <div className="mt-12 flex flex-col items-center">
              <motion.div
                ref={constraintsRef}
                className="relative w-full h-20 rounded-full flex items-center p-2 shadow-inner bg-yellow-400/70 backdrop-blur-sm"
                animate={callState}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  drag="x"
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                  style={{ x }}
                  className={`w-16 h-16 rounded-full absolute flex items-center justify-center shadow-lg
                    ${isValidNumber && callState === 'idle' ? 'bg-gradient-to-br from-green-500 to-green-700 cursor-grab active:cursor-grabbing' : 'bg-gray-400 cursor-not-allowed'}`}
                  whileHover={isValidNumber && callState === 'idle' ? { scale: 1.1, boxShadow: "0px 0px 20px rgba(16, 185, 129, 0.7)" } : {}}
                  whileTap={isValidNumber && callState === 'idle' ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <AnimatePresence exitBeforeEnter initial={false}>
                    {callState === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <IdleIcon />
                      </motion.div>
                    )}
                    {callState === 'calling' && (
                      <motion.div key="calling" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
                        <CallingSpinner />
                      </motion.div>
                    )}
                    {callState === 'in-call' && (
                      <motion.div key="in-call" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <InCallIcon />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="flex-grow text-center">
                  {callState === 'idle' && (
                    <input
                      type="tel"
                      placeholder="Enter your number here"
                      className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 text-xl text-center"
                      value={phoneNumber}
                      onChange={handleInputChange}
                    />
                  )}
                  {callState === 'calling' && (
                    <motion.span className="text-white text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      Calling...
                    </motion.span>
                  )}
                  {callState === 'in-call' && (
                    <motion.span className="text-white text-xl font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {formatTime(callDuration)}
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {callState === 'idle' && isValidNumber && (
                <p className="mt-4 text-lg text-green-700 animate-pulse">
                  Swipe to call &gt;&gt;&gt;
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Voice Lemon */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <VoiceLemon />
          </div>
        </div>
      </div>
    </section>
  );
}
