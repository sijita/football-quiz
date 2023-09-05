"use client";
import { Divider } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Football Quiz</h1>
      {/* <ThemeSwitcher /> */}
    </header>
  );
}
