import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommunityTab } from "@/components/tabs/CommunityTab";
import { GlobalHeadquarters } from "@/components/sections/GlobalHeadquarters";
import { PartnerEcosystem } from "@/components/sections/PartnerEcosystem";
import { TechnologyInnovation } from "@/components/sections/TechnologyInnovation";
import { ImpactTrust } from "@/components/sections/ImpactTrust";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <CommunityTab />
        <GlobalHeadquarters />
        <PartnerEcosystem />
        <TechnologyInnovation />
        <ImpactTrust />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
