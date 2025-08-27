"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/logo";
import DarkModeSwitch from "../ui/dark-mode-switch";
import Image from "next/image";
import { DISCORD_URL, GITHUB_URL } from "@/data/meta";

const NAV_ITEMS = [
  { name: "Snippets", url: "/snippets" },
  { name: "Guide", url: "/guide" },
  { name: "Extensions", url: "/extensions" },
  { name: "Community", url: "/community" },
  { name: "Contribute", url: "/contributing" },
];

const SOCIAL_ITEMS = [
  {
    icon: "/icons/github.svg",
    name: "GitHub",
    url: GITHUB_URL,
  },
  {
    icon: "/icons/discord.svg",
    name: "Discord",
    url: DISCORD_URL,
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="h-16 w-screen" />
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all border-b border-border/50 duration-500 ${
          isScrolled
            ? "bg-background/80 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="wrapper-lg">
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <div className="flex gap-4 items-center justify-between">
              <nav className="hidden items-center gap-8 space-x-1 lg:flex">
                {NAV_ITEMS.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    className="relative"
                  >
                    <Link
                      href={item.url}
                      className="text-foreground/80 hover:text-accent font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <hr className="border-0 w-0.5 h-8 bg-secondary" />

              <DarkModeSwitch />

              <hr className="border-0 w-0.5 h-8 bg-secondary" />

              <motion.div
                className="hidden items-center space-x-3 lg:flex"
                variants={itemVariants}
              >
                {SOCIAL_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    title={item.name}
                    className=""
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </motion.div>

              <motion.button
                className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        href={item.url}
                        className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="border-border space-y-3 border-t pt-6"
                  variants={mobileItemVariants}
                >
                  <Link
                    href="/login"
                    className="text-foreground hover:bg-muted block w-full rounded-lg py-3 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-foreground text-background hover:bg-foreground/90 block w-full rounded-lg py-3 text-center font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
