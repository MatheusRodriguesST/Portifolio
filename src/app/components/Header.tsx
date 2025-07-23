"use client";

import React, { useState, useEffect, useRef, RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const sectionRefs: RefObject<HTMLDivElement>[] = [
    introRef,
    sobreRef,
    projetosRef,
    experienceRef,
  ];
  const [activeSteps, setActiveSteps] = useState([true, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.4;
      let currentActiveIndex = 0;

      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          if (top < triggerPoint) {
            currentActiveIndex = index;
          }
        }
      });

      const newActiveSteps = Array(sectionRefs.length).fill(false);
      newActiveSteps[currentActiveIndex] = true;
      setActiveSteps(newActiveSteps);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          } else {
            entry.target.classList.remove("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <>
      <div className="fixed top-60 ml-[7%] transform -translate-x-1/2 flex flex-col gap-15 z-50 max-md:hidden">
        {activeSteps.map((isActive, index) => (
          <div
            key={index}
            className={`w-15 h-15 rounded-full transition-all duration-300 border-2 md:max-w-lg ${
              isActive ? "bg-black scale-125" : "bg-transparent scale-100"
            }`}
          />
        ))}
      </div>

      <div
        ref={introRef}
        className="w-[700px] h-fit rounded-4xl flex flex-col mx-auto my-20 mt-30 p-10 max-md:w-[97%] max-md:-mx-4 max-md:mt-20 overflow-x-hidden"
      >
        <h2 className="text-xl">Olá, eu sou</h2>
        <h1 className="text-7xl w-100 max-md:-ml-2">Matheus Rodrigues</h1>
        <h2 className="mt-10 text-3xl w-100 max-md:w-80">
          Eu sou um web developer que ajuda as pessoas a botarem suas ideias em execução.
        </h2>
        <Link href="/contato">
          <button className="w-80 h-15 bg-black rounded-4xl mt-10 text-white text-2xl transition-all duration-700 ease-in-out hover:w-100 hover:scale-105 hover:shadow-lg">
            Entre em Contato
          </button>
        </Link>

        <div
          ref={sobreRef}
          className="mt-15 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h1 className="text-4xl">Sobre</h1>
          <h1 className="text-2xl mt-5 ml-1 w-130 max-md:w-80">
            Um jovem programador de 17 anos que tem uma base sólida e experiência de 2 anos no desenvolvimento web fullstack.
          </h1>
          <Link href="/sobre">
            <button className="w-50 h-12 mt-7 bg-amber-50 text-black rounded-4xl text-2xl border-black ml-5 transition-all duration-300 ease-in-out hover:translate-x-1 hover:scale-105 hover:shadow-2xl">
              Saber Mais
            </button>
          </Link>
        </div>

        <div
          ref={projetosRef}
          className="mt-20 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h1 className="text-3xl">Projetos</h1>
          <div className="mt-10">
            <div className="flex flex-row justify-between items-center max-md:w-[100%]">
              <h1 className="text-xl">{">"} Desenvolvedor Web na Unova</h1>
              <h1>2025-Present</h1>
              <Image
                src="/arrow.svg"
                alt="Arrow Icon"
                className="w-10 h-10"
                width={160}
                height={40}
              />
            </div>
          </div>
        </div>

        <div
          ref={experienceRef}
          className="mt-20 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <h1 className="text-3xl">Conhecimento</h1>
          <h1 className="text-3xl mt-8 max-md:ml-2 max-md:text-2xl max-md:w-80">
            Tecnologias e Ferramentas que Domino
          </h1>
          <div className="flex flex-col gap-3 mt-10">
            <div className="bg-white/80 h-fit rounded-4xl items-center p-5 backdrop-blur-2xl shadow-2xl max-md:ml-2 transition-all duration-300 ease-in-out hover:translate-x-1 hover:scale-101">
              <h1 className="text-lg">Frontend: React, Next.js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3</h1>
            </div>
            <div className="bg-white/80 h-fit rounded-4xl items-center p-5 backdrop-blur-2xl shadow-2xl max-md:ml-2 transition-all duration-300 ease-in-out hover:translate-x-1 hover:scale-101">
              <h1 className="text-lg">Backend: Node.js, Express, MongoDB, SQL</h1>
            </div>
            <div className="bg-white/80 h-fit rounded-4xl items-center p-5 backdrop-blur-2xl shadow-2xl max-md:ml-2 transition-all duration-300 ease-in-out hover:translate-x-1 hover:scale-101">
              <h1 className="text-lg">Outros: Git, GitHub, Figma (para colaboração com designers)</h1>
            </div>
          </div>
          <h1 className="mt-5 text-xl">
            Com essas ferramentas, consigo construir aplicações web completas, otimizadas para desempenho e acessibilidade.
          </h1>
          <h1 className="text-3xl mt-10">Certificados</h1>
          <div className="flex flex-col mt-10 text-xl gap-3">
            <h1>Fundamentos de React - Codecademy (2024)</h1>
            <h1>Desenvolvimento Web Fullstack - FreeCodeCamp (2023)</h1>
            <h1>meutudo - Mobile Developer Dio.com (2025)</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
