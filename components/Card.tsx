import clsx from "clsx";
import React from "react";

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement;
}) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
