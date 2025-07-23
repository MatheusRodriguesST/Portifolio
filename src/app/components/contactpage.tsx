"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  // Animação simples
  const fadeInUp = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen text-black">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Link href="/">
          <Image
            src="/left-arrow-svgrepo-com.svg"
            alt="Voltar"
            className="w-15 h-10 ml-100 mt-30 max-md:mx-auto max-md:ml-0"
            width={40}
            height={40}
          />
        </Link>
      </motion.div>

      <motion.div
        className="w-[700px] h-fit rounded-4xl flex flex-col mx-auto my-20 mt-0 p-10 bg-amber-50/20 shadow-lg backdrop-blur-3xl max-md:w-[90%]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
      >
        <motion.h1
          className="text-6xl font-bold"
          variants={fadeInUp}
          custom={2}
        >
          Contato
        </motion.h1>

        <motion.h2
          className="text-2xl mt-10"
          variants={fadeInUp}
          custom={3}
        >
          Olá! Estou animado para ajudar a transformar suas ideias em soluções
          digitais. Como desenvolvedor web fullstack com 2 anos de experiência,
          estou à disposição para discutir projetos, responder dúvidas ou
          oferecer suporte. Entre em contato comigo por e-mail ou redes sociais
          — ficarei feliz em colaborar com você!
        </motion.h2>

        <div className="mt-10 text-3xl flex flex-col gap-5">
          <motion.h2
            className="text-sm"
            variants={fadeInUp}
            custom={4}
          >
            E-mail: matheussrodrigues@gmail.com
          </motion.h2>

          <motion.div
            className="flex flex-row justify-center w-fit h-fit mx-auto gap-7 mt-10 rounded-4xl"
            variants={fadeInUp}
            custom={5}
          >
            <Link href="https://github.com/MatheusRodriguesST">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src="/github-142-svgrepo-com.svg"
                  alt="GitHub"
                  className="w-10 h-10"
                  width={160}
                  height={40}
                />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/matheus-rodrigues-959115373/">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src="/linkedin-linked-in-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-10 h-10"
                  width={160}
                  height={40}
                />
              </motion.div>
            </Link>
            <Link href="https://www.instagram.com/matheussr_w/">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Image
                  src="/instagram-svgrepo-com.svg"
                  alt="Instagram"
                  className="w-10 h-10"
                  width={160}
                  height={40}
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
