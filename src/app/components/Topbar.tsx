import React from "react";

const Topbar = () => {
    return (
        <>
        <div className="fixed top-0 mt-15 w-[800px] left-1/2 transform -translate-x-1/2 bg-amber-50/80
         p-6 z-50 flex flex-row items-center justify-between rounded-4xl 
         shadow-lg backdrop-blur-lg max-md:w-[86%] max-md:-ml-3 max-md:mt-10
         overflow-x-hidden">
  <h1 className="max-md:text-xs">Espírito Santo, Brasil</h1>
  <div className="flex flex-row items-center gap-2 max-md:gap-1">
    <div className="h-6 w-6 bg-green-500 rounded-full border-2 border-white max-md:h-4 max-md:w-4"></div>
    <h1 className="max-md:text-xs">Disponível para trabalho</h1>
  </div>
</div>
        </>
    )


}

export default Topbar;