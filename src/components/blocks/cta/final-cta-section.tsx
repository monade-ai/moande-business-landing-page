// Path: src/components/blocks/cta/final-cta-section.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FinalCTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const particles = Array.from({ length: 15 });

  return (
    <section className="relative w-full overflow-hidden bg-primary py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_60%)]" />

        {/* Floating particles animation */}
        {particles.map((_, i) => {
          const size = Math.random() * 4 + 1; // size between 1px and 5px
          const duration = Math.random() * 15 + 10; // duration between 10s and 25s
          const delay = Math.random() * 5;
          const initialY = Math.random() * 100;
          const initialX = Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-foreground/10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${initialY}%`,
                left: `${initialX}%`,
              }}
              aria-hidden="true"
              animate={{
                y: [0, (Math.random() - 0.5) * 40],
                x: [0, (Math.random() - 0.5) * 40],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="container relative z-10 mx-auto max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl"
          >
            Ready to Transform Your Development Process?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl font-sans text-lg text-primary-foreground/80 sm:text-xl"
          >
            Join 500+ teams building the future with AI-powered development.
          </motion.p>

          <motion.form
            variants={itemVariants}
            className="mt-10 w-full max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-4 sm:relative sm:items-center">
              <label htmlFor="email-cta" className="sr-only">
                Email Address
              </label>
              <Input
                id="email-cta"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-14 w-full rounded-full border-none bg-background px-6 text-foreground shadow-sm transition-shadow duration-300 hover:shadow-md focus:shadow-md focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-primary sm:pr-[175px]"
                aria-label="Email Address"
              />
              <Button
                type="submit"
                className="h-12 w-full shrink-0 rounded-full bg-secondary px-6 text-base font-semibold text-secondary-foreground shadow-md transition-all hover:bg-secondary/90 sm:absolute sm:right-2 sm:top-1/2 sm:h-12 sm:w-auto sm:-translate-y-1/2"
              >
                Get Started Free
              </Button>
            </div>
          </motion.form>

          <motion.p
            variants={itemVariants}
            className="mt-4 font-sans text-sm text-primary-foreground/70"
          >
            No credit card required
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary-foreground/80" aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-primary-foreground">
                SOC 2 Certified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary-foreground/80" aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-primary-foreground">
                GDPR Compliant
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTASection;
