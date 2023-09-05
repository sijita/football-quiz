import Game from "./components/Game";
import Header from "./components/ui/Header";
import ThemeSwitcher from "./components/ui/ThemeSwitcher";

export default function Page() {
  return (
    <main className="flex flex-col gap-10 h-screen justify-center items-center p-10">
      <ThemeSwitcher />
      <Header />
      <Game />
    </main>
  );
}
