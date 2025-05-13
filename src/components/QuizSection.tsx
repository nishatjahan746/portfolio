import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  professionalExplanation: string;
  funExplanation: string;
}

interface QuizSectionProps {
  title?: string;
  description?: string;
}

const QuizSection = ({
  title = "Test Your Data Science Knowledge",
  description = "Take this quick quiz to see how much you know about data science concepts!",
}: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isFunMode, setIsFunMode] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const questions: Question[] = [
    {
      id: 1,
      question:
        "What does the 'R-squared' value represent in regression analysis?",
      options: [
        "The correlation between two variables",
        "The proportion of variance explained by the model",
        "The root mean squared error",
        "The regression coefficient",
      ],
      correctAnswer: 1,
      professionalExplanation:
        "R-squared represents the proportion of the variance in the dependent variable that is predictable from the independent variable(s).",
      funExplanation:
        "It's like knowing what percentage of your ice cream melting can be blamed on the hot weather! 🍦☀️",
    },
    {
      id: 2,
      question: "Which of these is NOT a common clustering algorithm?",
      options: [
        "K-means",
        "DBSCAN",
        "Random Forest",
        "Hierarchical clustering",
      ],
      correctAnswer: 2,
      professionalExplanation:
        "Random Forest is a supervised learning algorithm used for classification and regression, not for clustering.",
      funExplanation:
        "Random Forest is the odd one out - it's like bringing a chainsaw to a knitting circle! 🌲✂️",
    },
    {
      id: 3,
      question: "What is the purpose of feature scaling in machine learning?",
      options: [
        "To reduce the number of features",
        "To normalize features to a similar range",
        "To increase model complexity",
        "To visualize data better",
      ],
      correctAnswer: 1,
      professionalExplanation:
        "Feature scaling ensures that features with larger ranges don't dominate the learning process in algorithms sensitive to feature magnitudes.",
      funExplanation:
        "It's like making sure all your friends are the same height in a group photo - no one gets to dominate just because they're taller! 📏👨‍👩‍👧‍👦",
    },
  ];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    // Check if answer is correct and update score
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    // Wait for feedback to be shown before moving to next question
    setTimeout(() => {
      setShowFeedback(false);

      // Move to next question or show results
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
    setShowFeedback(false);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-indigo-950 min-h-[600px] flex items-center justify-center">
      <div className="container max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              {title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              {description}
            </p>
          </motion.div>

          <div className="flex items-center space-x-2">
            <Label
              htmlFor="fun-mode"
              className={
                isFunMode
                  ? "text-pink-500"
                  : "text-slate-600 dark:text-slate-300"
              }
            >
              {isFunMode ? "Fun Mode" : "Professional Mode"}
            </Label>
            <Switch
              id="fun-mode"
              checked={isFunMode}
              onCheckedChange={setIsFunMode}
              className={isFunMode ? "bg-pink-500" : ""}
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {!showResults ? (
            <Card className="w-full shadow-lg border-t-4 border-indigo-500 dark:border-indigo-400">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                    Score: {score}
                  </span>
                </CardTitle>
                <CardDescription className="text-lg font-medium mt-4">
                  {currentQuestionData.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedOption?.toString()}
                  className="space-y-3"
                >
                  {currentQuestionData.options.map((option, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-2 p-3 rounded-md border ${selectedOption === index ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30" : "border-gray-200 dark:border-gray-700"}`}
                      onClick={() => handleOptionSelect(index)}
                    >
                      <RadioGroupItem
                        value={index.toString()}
                        id={`option-${index}`}
                      />
                      <Label
                        htmlFor={`option-${index}`}
                        className="flex-grow cursor-pointer"
                      >
                        {option}
                        {isFunMode && index === 2 && (
                          <span className="ml-2">🤔</span>
                        )}
                        {isFunMode && index === 0 && (
                          <span className="ml-2">🧐</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-6 p-4 rounded-md ${selectedOption === currentQuestionData.correctAnswer ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"}`}
                  >
                    <div className="flex items-start">
                      {selectedOption === currentQuestionData.correctAnswer ? (
                        <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="h-6 w-6 mr-2 flex-shrink-0 text-red-600 dark:text-red-400" />
                      )}
                      <div>
                        <p className="font-medium">
                          {selectedOption === currentQuestionData.correctAnswer
                            ? "Correct!"
                            : "Not quite right"}
                        </p>
                        <p className="mt-1">
                          {isFunMode
                            ? currentQuestionData.funExplanation
                            : currentQuestionData.professionalExplanation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null || showFeedback}
                  className="w-full"
                >
                  {currentQuestion < questions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="w-full shadow-lg border-t-4 border-indigo-500 dark:border-indigo-400">
              <CardHeader>
                <CardTitle>Quiz Results</CardTitle>
                <CardDescription>
                  You scored {score} out of {questions.length}!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-6xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <p className="text-lg">
                    {score === questions.length
                      ? isFunMode
                        ? "Perfect score! You're a data science wizard! 🧙‍♂️✨"
                        : "Perfect score! Excellent understanding of data science concepts."
                      : score >= questions.length / 2
                        ? isFunMode
                          ? "Not bad! Keep learning and you'll be a data guru soon! 📊🚀"
                          : "Good job! You have a solid foundation in data science."
                        : isFunMode
                          ? "Oops! Time to hit the books... or just Google it! 📚🔍"
                          : "Keep learning! Data science is a journey of continuous improvement."}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={resetQuiz} className="w-full">
                  Try Again
                </Button>
              </CardFooter>
            </Card>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
