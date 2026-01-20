"use client";

import { useState } from "react";
import Link from "next/link";
import { questions, categories } from "@/data/questions";

export default function QuestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const filteredQuestions = selectedCategory === "All" 
    ? questions 
    : questions.filter(q => q.category === selectedCategory);

  const handleQuestionClick = (id: number) => {
    if (selectedQuestion === id) {
      setShowAnswer(!showAnswer);
    } else {
      setSelectedQuestion(id);
      setShowAnswer(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block">
            ← Back to Home
          </Link>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Top 100 Practice Questions
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Comprehensive question bank with logical explanations based on WAC, RCW, 
              and best practices for AFH Administrator Training preparation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === "All"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All ({questions.length})
              </button>
              {categories.map((category) => {
                const count = questions.filter(q => q.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <div
                key={question.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Q{question.id}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {question.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {question.question}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleQuestionClick(question.id)}
                    className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    {selectedQuestion === question.id && showAnswer ? "Hide Answer" : "Show Answer"}
                  </button>
                </div>

                {selectedQuestion === question.id && showAnswer && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <h4 className="font-semibold text-green-900 mb-2">Answer:</h4>
                      <p className="text-green-800">{question.answer}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 mb-3">
                      <h4 className="font-semibold text-blue-900 mb-2">Logic & Reasoning:</h4>
                      <p className="text-blue-800">{question.logic}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-900 mb-2">Reference:</h4>
                      <p className="text-purple-800 font-mono">{question.reference}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500 mt-8">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">
              How to Use These Questions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Study by category to focus on specific areas of knowledge</li>
              <li>Read the logic and reasoning to understand the "why" behind each answer</li>
              <li>Memorize the WAC/RCW references to cite regulations accurately</li>
              <li>Practice explaining answers to others to reinforce understanding</li>
              <li>Review questions you get wrong multiple times until mastered</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

