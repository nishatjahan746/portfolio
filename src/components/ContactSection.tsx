import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, Copy, Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  linkedIn?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email = "nishat.jahan@example.com",
  phone = "+880 1234 567890",
  linkedIn = "https://linkedin.com/in/nishatjahan",
}) => {
  const [copied, setCopied] = React.useState<{
    email: boolean;
    phone: boolean;
  }>({
    email: false,
    phone: false,
  });

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Contact Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any opportunities or
            collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Email */}
                <div className="flex flex-col items-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-100">
                    Email
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                    {email}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => copyToClipboard(email, "email")}
                        >
                          {copied.email ? (
                            <>
                              <Check className="h-4 w-4" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" /> Copy Email
                            </>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied.email ? "Copied!" : "Copy to clipboard"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-100">
                    Phone
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                    {phone}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => copyToClipboard(phone, "phone")}
                        >
                          {copied.phone ? (
                            <>
                              <Check className="h-4 w-4" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" /> Copy Number
                            </>
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied.phone ? "Copied!" : "Copy to clipboard"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col items-center p-6 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-slate-800 dark:text-slate-100">
                    LinkedIn
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                    Connect with me
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" /> Visit Profile
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
