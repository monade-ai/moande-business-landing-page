// Path: src/components/blocks/testimonials/testimonials-with-graphs.tsx
"use client";

import React from 'react';
import { motion, Variants } from "motion/react";
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";

// --- Animated Graph Components ---

const AnimatedLineChart = () => (
  <motion.svg
    viewBox="0 0 100 50"
    className="w-full h-full text-primary"
    initial="initial"
    whileHover="hover"
  >
    <motion.path
      d="M 5 45 Q 25 5, 45 25 T 85 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={{
        initial: { pathLength: 0 },
        hover: { pathLength: 1 },
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.g
      variants={{ hover: { transition: { staggerChildren: 0.2, delayChildren: 1 } } }}
    >
      {[
        { cx: 5, cy: 45 },
        { cx: 45, cy: 25 },
        { cx: 85, cy: 10 },
      ].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="4"
          fill="var(--color-primary-foreground)"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            initial: { scale: 0, opacity: 0 },
            hover: { scale: 1, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      ))}
    </motion.g>
  </motion.svg>
);

const AnimatedBarChart = () => {
    const bars = [40, 65, 50, 80, 55];
    const containerVariants: Variants = {
        hover: {
            transition: { staggerChildren: 0.1 }
        }
    };
    const barVariants: Variants = {
        initial: { scaleY: 0, opacity: 0 },
        hover: { scaleY: 1, opacity: 1 }
    };
    
    return (
        <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-primary"
            initial="initial"
            whileHover="hover"
        >
            <motion.g variants={containerVariants}>
                {bars.map((height, i) => (
                    <motion.rect
                        key={i}
                        x={i * 20 + 5}
                        y={100 - height}
                        width="10"
                        height={height}
                        rx="2"
                        className="fill-current"
                        variants={barVariants}
                        style={{ originY: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                ))}
            </motion.g>
        </motion.svg>
    );
};

const AnimatedPieChart = () => {
    const percentage = 0.65;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
  
    return (
      <motion.svg
        viewBox="0 0 100 100"
        className="w-24 h-24"
        initial="initial"
        whileHover="hover"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-muted"
          strokeWidth="10"
          fill="transparent"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-primary"
          strokeWidth="10"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          transform="rotate(-90 50 50)"
          variants={{
            initial: { strokeDashoffset: circumference },
            hover: { strokeDashoffset: circumference * (1 - percentage) },
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
         <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className="text-2xl font-bold font-display fill-slate-700"
            variants={{
                initial: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            {`${Math.round(percentage * 100)}%`}
        </motion.text>
      </motion.svg>
    );
  };


// --- Data ---

const testimonials = [
  {
    id: 1,
    graph: AnimatedLineChart,
    quote: "Since adopting Syntho, our deployment frequency has increased by 150%. It's an essential tool for our CI/CD pipeline.",
    name: "Elena Rodriguez",
    title: "Principal Engineer",
    company: "Innovate Inc.",
    rating: 5,
  },
  {
    id: 2,
    graph: AnimatedBarChart,
    quote: "Code quality metrics are through the roof. We've seen a 40% reduction in production bugs and a more stable system overall.",
    name: "Marcus Chen",
    title: "Tech Lead",
    company: "QuantumLeap",
    rating: 5,
  },
  {
    id: 3,
    graph: AnimatedPieChart,
    quote: "Our developer satisfaction score jumped to 95% after integrating this platform. The team loves the intuitive interface.",
    name: "Sarah O'Connor",
    title: "VP of Engineering",
    company: "Digital Weavers",
    rating: 5,
  },
  {
      id: 4,
      graph: AnimatedBarChart,
      quote: "The ability to visualize performance bottlenecks has been a game-changer. We've optimized our critical paths by 60%.",
      name: "David Kim",
      title: "Staff Software Engineer",
      company: "Velocity Solutions",
      rating: 5,
  },
  {
      id: 5,
      graph: AnimatedPieChart,
      quote: "Onboarding new developers is 75% faster now. They can get up to speed with our complex codebase in days, not weeks.",
      name: "Aisha Adebayo",
      title: "Engineering Manager",
      company: "NextGen Systems",
      rating: 5,
  },
  {
      id: 6,
      graph: AnimatedLineChart,
      quote: "System uptime has never been better. The predictive analytics helped us prevent major outages before they happened.",
      name: "Ben Carter",
      title: "SRE Lead",
      company: "CloudSphere",
      rating: 5,
  },
];

// --- Sub-components ---

const StarRating = ({ rating, className }: { rating: number; className?: string }) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-secondary fill-secondary" : "text-muted-foreground/30"
        )}
      />
    ))}
  </div>
);

const cardVariants: Variants = {
    initial: { 
      y: 0,
      scale: 1,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px -1px rgba(0, 0, 0, 0.07)"
    },
    hover: { 
      y: -6,
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
    }
  };

interface TestimonialCardProps {
    graph: React.ComponentType;
    quote: string;
    name: string;
    title: string;
    company: string;
    rating: number;
}
  
const TestimonialCard = ({ graph: Graph, quote, name, title, company, rating }: TestimonialCardProps) => (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-card border border-border rounded-lg p-6 lg:p-8 flex flex-col h-full overflow-hidden"
    >
        <div className="h-32 mb-6 -mx-4 -mt-4 flex items-center justify-center bg-muted/50 border-b border-border">
          <Graph />
        </div>
        <StarRating rating={rating} className="mb-4" />
        <blockquote className="flex-grow">
        <p className="text-lg italic font-body text-text">
            &ldquo;{quote}&rdquo;
        </p>
        </blockquote>
        <footer className="mt-6">
        <cite className="not-italic">
            <div className="font-semibold font-display text-heading">{name}</div>
            <div className="text-sm text-muted-foreground">{title}, {company}</div>
        </cite>
        </footer>
    </motion.div>
);

// --- Main Component ---

export default function TestimonialsWithGraphs() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-heading">
            Trusted by 500+ Development Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
