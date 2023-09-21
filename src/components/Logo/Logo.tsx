import React from "react";

type LogoProps = {
  title: string;
  className?: string;
};

const Logo = ({ title, className }: LogoProps) => {
  return (
    <div>
      <h2 className={`text-2xl font-semibold ${className}`}>{title}</h2>
    </div>
  );
};

export default Logo;
