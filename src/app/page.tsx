import Image from "next/image";
import React from "react";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import ContactPage from "./components/contactpage";
import Downbar from "./components/Downbar";
import Progress from "./components/ProgressBar";

export default function Home() {
  return (
    <>
    <Topbar />
    <Header />
    
    <Progress />
    <Downbar />
    </>
  );
}

