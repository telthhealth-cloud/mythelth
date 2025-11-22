import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CareHomeTab } from "@/components/tabs/CareHomeTab";
import { GlobalHeadquarters } from "@/components/sections/GlobalHeadquarters";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";
import { ImpactTrust } from "@/components/sections/ImpactTrust";

const CareHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <CareHomeTab />
        <GlobalHeadquarters />
        <PartnerEcosystem />
        <TechnologyInnovation />
        <ImpactTrust />
      </main>

      <Footer />
    </div>
  );
};

export default CareHome;
