import { ReactNode, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
