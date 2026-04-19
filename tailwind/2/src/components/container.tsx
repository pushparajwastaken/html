import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  //mx-auto to horizontally centre the container
  return (
    <div className={cn("z-10 max-w-7xl mx-auto px-4 md:py-8", className)}>
      {children}
    </div>
  );
};
