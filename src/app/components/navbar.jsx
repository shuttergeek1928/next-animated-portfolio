"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const listVariant = {
    closed: { x: "100vw" },
    opened: {
      x: "0",
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };
  const listitemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48 text-xl">
      {/* HYPERLINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          //   <Link href={link.url} key={link.title}>
          //     {link.title}
          //   </Link>
          <NavLink link={link} key={link.title}>
            {link.title}
          </NavLink>
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Atishay</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}> */}
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVariants}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {/* MENU LIST */}
      {open && (
        <motion.div
          initial="closed"
          animate="opened"
          variants={listVariant}
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div
              variants={listitemVariants}
              className=""
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
