import { Button } from "@nextui-org/react";
import useStartGame from "../hooks/useStartGame";

export default function StartButon() {
  const { handleClick } = useStartGame();
  return <Button onClick={handleClick}>Empezar!</Button>;
}
