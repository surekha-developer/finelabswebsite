import React from "react";
import { notFound } from "next/navigation";
import Cloud from "@/components/Services/Cloud";
import CyberSecurity from "@/components/Services/CyberSecurity";
import ExperiencePlatforms from "@/components/Services/ExperiencePlatforms";
import SupplyChain from "@/components/Services/SupplyChain";
import SAP from "@/components/Services/SAP";
import Salesforce from "@/components/Services/Salesforce";
import ProductEngineering from "@/components/Services/ProductEngineering";
import IoTAndEdge from "@/components/Services/IoTAndEdge";
import AIAndAutomation from "@/components/Services/AIAndAutomation";
import DataAndAnalytics from "@/components/Services/DataAndAnalytics";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  switch (slug) {
    case "cloud":
      return <Cloud />;
    case "cyber-security":
      return <CyberSecurity />;
    case "experience-platforms":
      return <ExperiencePlatforms />;
    case "supply-chain":
      return <SupplyChain />;
    case "sap":
      return <SAP />;
    case "salesforce":
      return <Salesforce />;
    case "product-engineering":
      return <ProductEngineering />;
    case "iot-and-edge":
      return <IoTAndEdge />;
    case "ai-and-automation":
      return <AIAndAutomation />;
    case "data-and-analytics":
      return <DataAndAnalytics />;
    default:
      return notFound();
  }
}
