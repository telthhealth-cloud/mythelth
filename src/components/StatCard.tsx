interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-8 rounded-lg glass-card hover-lift">
      <div className="text-5xl md:text-6xl font-bold text-white mb-3">
        {value}
      </div>
      <div className="text-base md:text-lg text-white/90">
        {label}
      </div>
    </div>
  );
};
