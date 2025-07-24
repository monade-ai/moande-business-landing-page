// Path: src/components/blocks/tech-showcase/technology-grid.tsx
"use client";

import React from 'react';
import { motion } from 'motion/react';

// SVG Illustrations as styled React Components

const AiCodeIllustration = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
    <rect x="4" y="12" width="28" height="40" rx="4" fill="currentColor" fillOpacity="0.1" />
    <path d="M12 20L18 26L12 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 36H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="32" y="12" width="28" height="40" rx="4" className="text-primary" fill="currentColor" fillOpacity="0.1" />
    <path d="M40 20L46 26L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M50 36H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 42H41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 48H39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M28.5 28L35.5 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
    <path d="M28.5 36L35.5 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3"/>
    <path d="M36 32.5L34.5 34L33 32.5L34.5 31L36 32.5Z" className="text-secondary" fill="currentColor"/>
    <path d="M30 25.5L28.5 27L27 25.5L28.5 24L30 25.5Z" className="text-secondary" fill="currentColor"/>
  </svg>
);

const EnterpriseIntegrationIllustration = () => (
    <svg width="68" height="64" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
        <circle cx="34" cy="32" r="8" className="text-primary" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="34" cy="32" r="3" className="text-primary" fill="currentColor"/>
        <path d="M34 24V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="8" r="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
        <path d="M34 40V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="56" r="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
        <path d="M48.2426 46.2426L55.3137 53.3137" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="58.8492" cy="56.8492" r="4" transform="rotate(45 58.8492 56.8492)" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
        <path d="M19.7574 19.7574L12.6863 12.6863" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9.15078" cy="9.15078" r="4" transform="rotate(45 9.15078 9.15078)" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
         <path d="M48.2426 19.7574L55.3137 12.6863" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="58.8492" cy="9.15078" r="4" transform="rotate(135 58.8492 9.15078)" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
        <path d="M19.7574 46.2426L12.6863 53.3137" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9.15078" cy="56.8492" r="4" transform="rotate(-45 9.15078 56.8492)" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
    </svg>
);


const RealtimeCollaborationIllustration = () => (
    <svg width="68" height="64" viewBox="0 0 68 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 20C24 15.5817 27.5817 12 32 12H36C40.4183 12 44 15.5817 44 20V28H24V20Z" className="text-slate-400" fill="currentColor" fillOpacity="0.2"/>
        <circle cx="34" cy="36" r="16" className="text-primary" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="34" cy="36" r="10" className="text-primary" fill="currentColor" fillOpacity="0.2"/>
        <circle cx="18" cy="40" r="6" className="text-secondary" fill="currentColor" fillOpacity="0.8"/>
        <circle cx="50" cy="40" r="6" className="text-slate-500" fill="currentColor" fillOpacity="0.8"/>
        <circle cx="34" cy="18" r="6" className="text-primary" fill="currentColor" fillOpacity="0.8"/>
    </svg>
);


const ProductionMonitoringIllustration = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
        <rect x="4" y="8" width="56" height="48" rx="4" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 48V24L22 34L32 28L42 38L52 32V48H12Z" className="text-primary" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 24L22 34L32 28L42 38L52 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="24" r="3" className="text-primary" fill="white" stroke="currentColor" strokeWidth="2"/>
        <circle cx="52" cy="32" r="3" className="text-primary" fill="white" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 16H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M54 16H46" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


// Tech Icons as styled React Components
const ReactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-11.5 -10.23 23 20.46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);
const PythonIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 10.75H18.75V15.75H14.25V19.25H9.75V5.25H18.75V10.75H14.25Z" fill="#306998"/>
    <path d="M9.75 13.25H5.25V8.25H9.75V4.75H14.25V18.75H5.25V13.25H9.75Z" fill="#FFD43B"/>
  </svg>
);
const DockerIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#0db7ed" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.92,11.23c-1.39,0-2.83.5-3.83,1.51V7.12H5.06V16.4h6.08c.11,0,.22,0,.33,0,1.2,.22,2.39,.22,3.58,0,1-.2,2.12-.51,2.83-1.31,1.15-1.28,1-3.53-1-3.86Zm-11,.44H8.62v-2h2.29Zm3.44,0h-2.29v-2h2.29Zm3.44,0h-2.29v-2h2.29Z" />
    <path d="M22.56,12.7c-1.44-.13-2.81,.18-4.06,.82a4.42,4.42,0,0,0-2.3,2.69c-1.39,3-4.4,4.32-7.55,3.3V21h12.4a4.17,4.17,0,0,0,3.57-2.36c.86-1.67,.44-3.79-1-4.94Z" />
    </svg>
);
const KubernetesIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="#326ce5" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.22,14.22l7.56-7.56a1,1,0,0,1,1.41,0l7.56,7.56a1,1,0,0,1,0,1.41l-7.56,7.56a1,1,0,0,1-1.41,0l-7.56-7.56a1,1,0,0,1,0-1.41ZM12,12.81,5.34,6.16,3.93,7.58,10.59,14.22,3.93,20.84,5.34,22.26,12,15.63l6.66,6.66,1.41-1.42L13.41,14.22l6.66-6.64-1.41-1.42Z"/>
        <path d="M12,1.29a1,1,0,0,1,.71.29l7.56,7.56a1,1,0,0,1,0,1.41L12,18.71,3.93,10.64a1,1,0,0,1,0-1.41L11.29,1.58A1,1,0,0,1,12,1.29Z"/>
    </svg>
);


interface TechCardProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  icons: React.ComponentType<{ className?: string }>[];
}

const technologies: TechCardProps[] = [
  {
    title: "AI-Powered Code Generation",
    description: "Leverage cutting-edge AI to instantly generate, refactor, and optimize your code, accelerating development cycles.",
    illustration: <AiCodeIllustration />,
    icons: [ReactIcon, PythonIcon],
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect with your existing toolchain, from version control systems to CI/CD pipelines and databases.",
    illustration: <EnterpriseIntegrationIllustration />,
    icons: [DockerIcon, KubernetesIcon],
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in a shared environment, with synchronized editing, and instant feedback.",
    illustration: <RealtimeCollaborationIllustration />,
    icons: [ReactIcon, DockerIcon],
  },
  {
    title: "Production Monitoring",
    description: "Gain deep insights into your application's health and performance with integrated, real-time analytics dashboards.",
    illustration: <ProductionMonitoringIllustration />,
    icons: [KubernetesIcon, PythonIcon],
  },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

const TechnologyCard = ({ title, description, illustration, icons }: TechCardProps) => (
  <motion.div
    variants={itemVariants}
    className="group relative flex h-full flex-col text-center p-10 bg-slate-50 rounded-xl border border-slate-200/80 transition-all duration-300 ease-in-out hover:bg-card hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-2 hover:border-primary"
  >
    <div className="flex-grow flex flex-col">
        <div className="mb-8 flex justify-center items-center h-20">
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-rotate-3">
                {illustration}
            </div>
        </div>
        <h3 className="text-xl font-semibold font-display text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 font-body text-base leading-relaxed flex-grow">{description}</p>
    </div>
    <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-center space-x-6 filter grayscale transition-all duration-300 group-hover:filter-none">
            {icons.map((Icon, i) => <Icon key={i} className="h-8 w-8" />)}
        </div>
    </div>
  </motion.div>
);

export default function TechnologyGrid() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900">
            Built for Modern Development
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform is engineered with the latest technologies to provide a robust, scalable, and efficient development experience.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, i) => (
            <TechnologyCard key={i} {...tech} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}