import React from "react";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      $$$$ SalesLayout
    </div>
  );
}
