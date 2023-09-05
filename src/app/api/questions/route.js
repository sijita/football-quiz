import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export const GET = async (req) => {
  const filePath = path.join(process.cwd(), "/src/app/utils", "questions.json");
  const questions = JSON.parse(await fs.readFile(filePath, "utf-8"));

  return NextResponse.json(questions);
};
