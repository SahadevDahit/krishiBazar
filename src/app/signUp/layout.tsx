import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: { title: string; description: string } = {
  title: "Sign Up",
  description: "Generated by create next app",
};

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
