import JoinTheTeam from "@/components/Careers/JoinTheTeam";
import CardAnimation from "@/components/Careers/CardAnimation";
import ContactForm from "@/components/Careers/ContactForm";

export const metadata = {
  title: "Careers | FineLabs",
  description:
    "Join the FineLabs team and help build the next generation of enterprise digital solutions.",
};

export default function CareersPage() {
  return (
    <main>
      <JoinTheTeam />
      <CardAnimation />
      <ContactForm />
    </main>
  );
}
