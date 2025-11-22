import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PersonalizedTab } from "@/components/tabs/PersonalizedTab";
import { GlobalHeadquarters } from "@/components/sections/GlobalHeadquarters";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";
import { ImpactTrust } from "@/components/sections/ImpactTrust";

const PersonalizedCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PersonalizedTab />
        <GlobalHeadquarters />
        <PartnerEcosystem />
        <TechnologyInnovation />
        <ImpactTrust />
      </main>

      <Footer />
    </div>
  );
};

export default PersonalizedCare;
