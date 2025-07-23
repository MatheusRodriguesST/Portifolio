"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InfoCards from "@/app/components/InfoCards";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  const blocks = [
    "Atualmente estou no segundo ano do ensino médio no Instituto Federal do Espírito Santo, com previsão de término em 2027.",
    "Também participo de projetos extracurriculares e estudo constantemente para me aprimorar como desenvolvedor.",
    "Fiz este portfólio utilizando um design responsivo e minimalista, com fácil acesso e uso de blur e transparência, que formam meu estilo. Também consigo criar sites com estilos variados.",
    "Junto a um outro desenvolvedor, faço parte de uma pequena startup que cria sites e aplicações para pequenas empresas a preços acessíveis.",
  ];

  return (
    <>
      <Link href="/">
        <Image
          src="/left-arrow-svgrepo-com.svg"
          alt="Voltar"
          className="w-10 h-10 mt-40 ml-10 hover:scale-110 transition-transform duration-300 ease-out"
          width={40}
          height={40}
        />
      </Link>

      <div className="w-[90%] max-w-4xl mx-auto my-10 p-10 bg-[#f9f7f1] rounded-3xl shadow-2xl backdrop-blur-xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-10 text-center">
          Um pouco sobre quem sou
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed text-justify">
          Sou Matheus Rodrigues, um desenvolvedor web fullstack de 17 anos com uma paixão por transformar ideias em soluções digitais inovadoras. Minha jornada começou há dois anos, quando mergulhei no mundo da programação, explorando tecnologias como React, Node.js e Tailwind CSS.
        </p>
      </div>

      <InfoCards />

      <div className="flex flex-wrap justify-center gap-8 px-4 mt-20 mb-32">
        {blocks.map((text, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="w-full md:w-[45%] bg-white/10 p-8 rounded-3xl shadow-xl backdrop-blur-xl border border-white/30"
          >
            <p className="text-lg md:text-xl text-black/90">{text}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
