import React, { useState } from "react";
import "./nav.css";
import { FiHome, FiUser } from "react-icons/fi";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoInformation } from "react-icons/io5";

const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setIsActiveNav("#");
        }}
        className={isActiveNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setIsActiveNav("#about");
        }}
        className={isActiveNav === "#about" ? "active" : ""}
      >
        <FiUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setIsActiveNav("#experience");
        }}
        className={isActiveNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => {
          setIsActiveNav("#services");
        }}
        className={isActiveNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setIsActiveNav("#portfolio");
        }}
        className={isActiveNav === "#portfolio" ? "active" : ""}
      >
        <IoCodeSlashSharp />
      </a>
      <a
        href="#Cv"
        onClick={() => {
          setIsActiveNav("#Cv");
        }}
        className={isActiveNav === "#Cv" ? "active" : ""}
      >
        <IoInformation />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setIsActiveNav("#contact");
        }}
        className={isActiveNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Nav;
