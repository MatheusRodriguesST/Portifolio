"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaProjectDiagram, FaLaptopCode, FaRocket, FaComments } from "react-icons/fa";

const cards = [
  {
    icon: <FaCode size={30} />,
    title: "Tecnologias",
    content: "React, Node.js, TailwindCSS, SQLite, PostgreSQL, Git, Figma, Docker.",
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: "Projetos",
    content: "Portfólio pessoal, sistemas de tarefas, sites institucionais e aplicações web completas.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "Serviços",
    content: "Criação de sites modernos, landing pages, sistemas web sob demanda e reformulação de interfaces.",
  },
  {
    icon: <FaTools size={30} />,
    title: "Habilidades",
    content: "Comunicação, proatividade, trabalho em equipe e foco em resolução de problemas.",
  },
  {
    icon: <FaRocket size={30} />,
    title: "Objetivo",
    content: "Me tornar um desenvolvedor fullstack referência, liderando projetos com impacto positivo.",
  },
  {
    icon: <FaComments size={30} />,
    title: "Contato",
    content: "📧 matheus.dev@email.com • GitHub: matheusdev • LinkedIn: /matheusdev",
  },
];

const InfoCards = () => {
  return (
    <div className="w-full px-6 py-10 bg-[#f9f7f1]">
      <h2 className="text-4xl font-bold text-center mb-10">Sobre Mim</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#f5e1ce] rounded-3xl p-6 shadow-lg backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-[#3c3c3c] mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-700 text-sm">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
