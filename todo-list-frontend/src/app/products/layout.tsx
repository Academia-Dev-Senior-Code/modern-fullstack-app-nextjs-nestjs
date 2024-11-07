import React from "react";

type ProductLayoutProps = {
  children: React.ReactNode;
};

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div>
      <h1>Product Filters</h1>
      <ul>
        <li>Filter 1</li>
        <li>Filter 2</li>
        <li>Filter 3</li>
      </ul>
      {children}
    </div>
  );
}
