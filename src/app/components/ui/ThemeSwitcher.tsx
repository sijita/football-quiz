"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      size="md"
      color="success"
      startContent={<BiSolidSun />}
      endContent={<BiSolidMoon />}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
