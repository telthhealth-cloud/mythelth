import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover-lift card-tilt h-full">
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
        </div>
        <CardTitle className="text-card-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-body-standard leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
