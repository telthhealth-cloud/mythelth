import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "community", label: "Community" },
  { id: "carehome", label: "Care@Home" },
  { id: "personalized", label: "Personalized" },
  { id: "carepay", label: "Care Pay" },
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="sticky top-16 md:top-20 z-40 shadow-2xl no-scrollbar">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 animate-gradient-x" />
      
      {/* Enhanced glassmorphism container */}
      <div className="relative border-b border-white/30 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-2xl backdrop-saturate-200 shadow-inner">
        <div className="container no-scrollbar">
          <div className="flex items-center gap-1 overflow-x-auto py-1 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-6 py-3 text-base font-semibold transition-all duration-300 whitespace-nowrap relative",
                  "rounded-t-lg mx-1 backdrop-blur-md border-b border-transparent",
                  "hover:scale-105 active:scale-95",
                  activeTab === tab.id
                    ? [
                        "text-white bg-gradient-to-b from-white/30 to-white/10",
                        "shadow-lg border-white/40",
                        "backdrop-saturate-150"
                      ]
                    : [
                        "text-white/80 hover:text-white",
                        "bg-white/5 hover:bg-white/10",
                        "backdrop-saturate-100"
                      ]
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white rounded-full shadow-glow" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};