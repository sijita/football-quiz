"use client";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { type Question as QuestionType } from "../types";
import ListBox from "./ui/ListBox";

export default function Question({ info }: { info: QuestionType }) {
  return (
    <Card className="sm:max-w-[400px] w-full">
      <CardHeader className="p-5">
        <h5 className="font-semibold">{info.question}</h5>
      </CardHeader>
      <Divider />
      <CardBody>
        <ListBox info={info} />
      </CardBody>
    </Card>
  );
}
