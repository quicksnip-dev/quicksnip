import { FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiReact } from "react-icons/si";

export const languageIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  js: FaJs,
  ts: SiTypescript,
  py: FaPython,
  java: FaJava,
  nextjs: SiNextdotjs,
  react: SiReact,
};
