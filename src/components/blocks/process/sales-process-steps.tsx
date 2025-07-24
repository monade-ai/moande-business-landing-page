// Path: src/components/blocks/process/sales-process-steps.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Search, LayoutTemplate, CodeXml, Rocket, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Identify AI opportunities in your existing workflow and business processes.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description: "Architect scalable and efficient AI-powered solutions with our intuitive visual builder.",
    icon: LayoutTemplate,
  },
  {
    number: "03",
    title: "Develop",
    description: "Accelerate your time-to-market with production-ready code generation and integration.",
    icon: CodeXml,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Go live with confidence and scale seamlessly with our enterprise-grade infrastructure.",
    icon: Rocket,
  },
];



interface MotionIconProps {
  icon: LucideIcon;
  progress: any; // MotionValue<number>
  className?: string;
}

const MotionIcon: React.FC<MotionIconProps> = ({ icon: Icon, progress, className }) => {
  const opacity = useTransform(progress, [0, 1], [0, 1]);
  return (
    <div className={cn("relative h-full w-full", className)}>
      <Icon className="absolute inset-0 h-full w-full text-slate-400 dark:text-slate-500" />
      <motion.div style={{ opacity }}>
        <Icon className="absolute inset-0 h-full w-full text-primary" />
      </motion.div>
    </div>
  );
};


export default function SalesProcessSteps() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  // Vertical line animation for desktop
  const scaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  
  // Horizontal line animation for mobile
  const scaleX = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  // Create progress MotionValues for each step's icon animation
  const iconProgresses = processSteps.map((_, i) => {
    const start = 0.1 + i * 0.2; // Staggered start times
    const end = start + 0.15;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  });

  return (
    <section className="relative bg-background py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,theme(colors.slate.100)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.100)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 dark:bg-[linear-gradient(to_right,theme(colors.slate.900)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.slate.900)_1px,transparent_1px)]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            From Idea to Production in 4 Steps
          </h2>
        </div>

        <div ref={targetRef} className="mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-border" aria-hidden="true" />
              <motion.div
                className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-primary"
                style={{ scaleY, transformOrigin: 'top' }}
              />
              <div className="space-y-24">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={cn(
                      "relative flex items-center",
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    )}
                  >
                    <div className={cn("w-[calc(50%-10rem)]", index % 2 === 0 ? "text-right" : "order-2 text-left")}>
                      <p className="font-display text-[80px] font-bold leading-none text-primary">{step.number}</p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 font-sans text-base text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-background">
                      <MotionIcon icon={step.icon} progress={iconProgresses[index]} className="h-8 w-8" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-6 right-6 top-6 h-0.5 -translate-y-1/2 bg-border" />
              <motion.div
                className="absolute left-6 right-6 top-6 h-0.5 -translate-y-1/2 bg-primary"
                style={{ scaleX, transformOrigin: 'left' }}
              />
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background">
                    <MotionIcon icon={step.icon} progress={iconProgresses[index]} className="h-6 w-6" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8">
              {processSteps.map((step) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-display text-5xl font-bold text-primary">{step.number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 font-sans text-base text-slate-600 dark:text-slate-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
