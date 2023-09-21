import React from "react";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="text-primary">
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default PageTitle;
