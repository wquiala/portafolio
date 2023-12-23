import { Layout } from "@/common/Layout";
import React from "react";

interface IContactProps {
  children?: React.ReactNode;
}

export const Contact: React.FC<IContactProps> = () => {
  return <Layout title="Contact"></Layout>;
};
