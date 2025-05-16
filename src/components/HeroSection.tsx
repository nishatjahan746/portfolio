import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  action?: () => void;
}

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nishat.jahan@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/nishatjahan",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/nishatjahan",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/nishatjahan",
      label: "Twitter",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "#",
      label: "Copy Email",
      action: copyEmail,
    },
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/90">
      {/* Particle Background */}
      <ParticleBackground />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nishat Jahan
          </motion.h1>

          <motion.div
            className="h-1 w-24 bg-primary rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 flex items-center overflow-hidden whitespace-nowrap">
                <motion.span
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: [-20, 0, 0, 20],
                    transition: {
                      times: [0, 0.1, 0.9, 1],
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    },
                  }}
                >
                  Data Scientist
                </motion.span>
                <motion.span
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: [-20, 0, 0, 20],
                    transition: {
                      times: [0, 0.1, 0.9, 1],
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 6,
                    },
                  }}
                >
                  ML Engineer
                </motion.span>
                <motion.span
                  animate={{
                    opacity: [0, 1, 1, 0],
                    x: [-20, 0, 0, 20],
                    transition: {
                      times: [0, 0.1, 0.9, 1],
                      duration: 5,
                      repeat: Infinity,
                      repeatDelay: 1,
                      delay: 12,
                    },
                  }}
                >
                  Data Analyst
                </motion.span>
              </span>
            </span>
            <span className="ml-2">| Curious Mind | Life-Long Learner</span>
          </motion.h2>

          <motion.p
            className="max-w-lg text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Transforming complex data into meaningful insights. Passionate about
            AI/ML, data visualization, and solving real-world problems through
            data-driven approaches.
          </motion.p>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <TooltipProvider>
              {socialLinks.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={link.action}
                      asChild={!link.action}
                    >
                      {link.action ? (
                        link.icon
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.icon}
                        </a>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {link.label === "Copy Email" && copied
                      ? "Email Copied!"
                      : link.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </motion.div>

          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-2 bg-primary rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ParticleBackground = () => {
  const [particles, setParticles] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    // Create particles
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    setParticles(newParticles);

    // Animation loop
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          let x = particle.x + particle.vx;
          let y = particle.y + particle.vy;

          // Boundary check
          if (x < 0 || x > window.innerWidth) particle.vx *= -1;
          if (y < 0 || y > window.innerHeight) particle.vy *= -1;

          // Wrap around if out of bounds
          if (x < 0) x = window.innerWidth;
          if (x > window.innerWidth) x = 0;
          if (y < 0) y = window.innerHeight;
          if (y > window.innerHeight) y = 0;

          return {
            ...particle,
            x,
            y,
          };
        }),
      );
    };

    const animationId = setInterval(animateParticles, 50);

    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <svg className="w-full h-full">
        {particles.map((particle, index) => (
          <circle
            key={index}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="currentColor"
            className="text-primary"
            style={{ opacity: particle.opacity }}
          />
        ))}

        {/* Add some connecting lines between nearby particles */}
        {particles.map((particle, i) => {
          return particles
            .slice(i + 1)
            .map((otherParticle, j) => {
              const distance = Math.sqrt(
                Math.pow(particle.x - otherParticle.x, 2) +
                  Math.pow(particle.y - otherParticle.y, 2),
              );

              if (distance < 100) {
                const opacity = 0.2 * (1 - distance / 100);
                return (
                  <line
                    key={`${i}-${i + j + 1}`}
                    x1={particle.x}
                    y1={particle.y}
                    x2={otherParticle.x}
                    y2={otherParticle.y}
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="0.5"
                    style={{ opacity }}
                  />
                );
              }
              return null;
            })
            .filter(Boolean);
        })}
      </svg>
    </div>
  );
};

export default HeroSection;
