import React, { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-4/5 bg-gray-300 shadow-lg shadow-neutral-800">
      <div className="flex items-center justify-center p-6">{children}</div>
    </div>
  );
};

export default Card;
