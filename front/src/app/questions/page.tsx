"use client";
import React from "react";

import Card from "@/components/Card";
import Button from "@/components/Button";

const Page = () => {
  return (
    <div className=" h-96 flex items-center justify-center">
      <Card
        body={"teste"}
        firstButton={<Button variant="primary">teste</Button>}
        lastButton={<Button variant="secondary">teste</Button>}
      ></Card>
    </div>
  );
};

export default Page;
