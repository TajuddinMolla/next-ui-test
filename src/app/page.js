import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Progress } from "@nextui-org/react";
export default function Home() {
  return (
    <main className="p-2">
      <Button>Click me</Button>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" />
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      <Progress aria-label="Loading..." value={60} className="max-w-md mt-10" />
    </main>
  );
}
