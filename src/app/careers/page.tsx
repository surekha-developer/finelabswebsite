import JoinTheTeam from "@/components/Careers/JoinTheTeam";
import WhyFineLabs from "@/components/Careers/WhyFineLabs";
import OpenOpportunities from "@/components/Careers/OpenOpportunities";

export const metadata = {
  title: "Careers | FineLabs",
  description:
    "Join the FineLabs team and help build the next generation of enterprise digital solutions.",
};

export default function CareersPage() {
  return (
    <main>
      <JoinTheTeam />
      <WhyFineLabs />
      <OpenOpportunities />
    </main>
  );
}
