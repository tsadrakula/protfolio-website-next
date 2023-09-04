import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return <p className="text-3xl font-medium capitalize mb-8 text-center">{children}</p>;
};

export default SectionHeading;
