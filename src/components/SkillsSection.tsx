import React from "react";
import { motion } from "framer-motion";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { PieChart, BarChart2, Database, Code, Brain } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const SkillsSection = () => {
  const skills: Skill[] = [
    {
      name: "Python",
      level: 85,
      icon: <Code className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      name: "R",
      level: 75,
      icon: <BarChart2 className="h-5 w-5" />,
      color: "bg-cyan-500",
    },
    {
      name: "SQL",
      level: 80,
      icon: <Database className="h-5 w-5" />,
      color: "bg-violet-500",
    },
    {
      name: "Data Visualization",
      level: 90,
      icon: <PieChart className="h-5 w-5" />,
      color: "bg-amber-500",
    },
    {
      name: "Machine Learning",
      level: 70,
      icon: <Brain className="h-5 w-5" />,
      color: "bg-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My expertise in data science combines analytical tools,
              programming languages, and visualization techniques to extract
              meaningful insights from complex datasets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                    Core Competencies
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`p-1.5 rounded-md ${skill.color.replace("bg-", "bg-opacity-20 text-")}`}
                            >
                              {skill.icon}
                            </span>
                            <span className="font-medium text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
                    Skills Visualization
                  </h3>

                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {skills.map((skill) => (
                      <motion.div
                        key={`viz-${skill.name}`}
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${skill.color} text-white`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.1,
                          }}
                        >
                          <div className="text-2xl">{skill.icon}</div>
                        </motion.div>
                        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <Separator className="my-6" />

                  <div className="text-center">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Continuously expanding my skillset through projects,
                      courses, and hands-on experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <Card className="overflow-hidden border-none shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                  Additional Skills
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Statistical Analysis",
                    "Data Cleaning",
                    "Tableau",
                    "Power BI",
                    "Jupyter Notebooks",
                    "Git/GitHub",
                    "Deep Learning",
                    "Natural Language Processing",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
