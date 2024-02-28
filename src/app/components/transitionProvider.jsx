"use client";
import NavBar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen bg-black fixed rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="w-fit h-fit fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring() === "/" ? "home" : pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen bg-black fixed rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 1, ease: "easeOut" } }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        {/* USE THE TOP DOWN ANIMATION HERE, SO THAT IT WILL BE INHERITED EVERYWHERE */}
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}
        >
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
