import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-3 ">
      <Button>Default</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
    </div>
  );
};

export default page;
