"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.css";
interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <Link
      key={path}
      href={path}
      className={`${styles.link} ${
        pathName === path ? styles["active-link"] : ""
      }`}
    >
      {text}
    </Link>
  );
};
