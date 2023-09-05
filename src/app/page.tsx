import Game from "./components/Game";
import Header from "./components/ui/Header";

export default function Page() {
  return (
    <main className="flex flex-col gap-10 h-screen justify-center items-center">
      <Header />
      <Game />
    </main>
  );
}
