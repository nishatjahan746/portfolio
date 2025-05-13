import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Mail, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Card } from "./ui/card";

import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import QuizSection from "./QuizSection";

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [funMode, setFunMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real implementation, we would apply the theme class to the document
    document.documentElement.classList.toggle("dark");
  };

  const toggleFunMode = () => {
    setFunMode(!funMode);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("nishat.jahan@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`min-h-screen w-full bg-gradient-to-br ${darkMode ? "from-gray-900 to-gray-800 text-white" : "from-blue-50 to-purple-50 text-gray-800"}`}
    >
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">NJ</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {funMode ? "🎉 Fun" : "👔 Pro"}
            </span>
            <Switch checked={funMode} onCheckedChange={toggleFunMode} />
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <HeroSection darkMode={darkMode} funMode={funMode} />

        <SkillsSection darkMode={darkMode} funMode={funMode} />

        <ProjectsSection darkMode={darkMode} funMode={funMode} />

        <QuizSection darkMode={darkMode} funMode={funMode} />

        <section id="contact" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {funMode ? "📬 Drop Me a Line!" : "Contact Me"}
            </h2>

            <Card
              className={`p-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"}`}
            >
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full rounded-md border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} p-2`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full rounded-md border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} p-2`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full rounded-md border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"} p-2`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button className="w-full">
                  {funMode ? "🚀 Launch Message!" : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="mt-8 flex justify-center space-x-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-blue-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-gray-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://medium.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-green-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Medium</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={copyEmail}
                      className="text-2xl hover:text-purple-500 transition-colors flex items-center"
                    >
                      {copied ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        <Mail className="h-6 w-6" />
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copied ? "Email copied!" : "Copy email"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>
        </section>
      </main>

      <footer
        className={`py-6 text-center ${darkMode ? "bg-gray-900" : "bg-white bg-opacity-50"}`}
      >
        <p className="text-sm">
          Made with {funMode ? "🔥 and ✨" : "❤️"} by Nishat Jahan
        </p>
        <p className="text-xs mt-2 text-gray-500">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
