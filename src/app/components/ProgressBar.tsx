// app/components/ProgressBar.js

"use client";

import React from "react";

// Este componente recebe os "steps" (passos) como uma propriedade (prop).
// Ele não tem estado próprio, apenas renderiza o que o componente pai manda.
const ProgressBar = ({ steps = [] }) => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 flex flex-row gap-4 z-50">
      {/* Mapeia o array 'steps' recebido via props */}
      {steps.map((isActive, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full transition-colors duration-300 ${
            isActive ? "bg-black" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;