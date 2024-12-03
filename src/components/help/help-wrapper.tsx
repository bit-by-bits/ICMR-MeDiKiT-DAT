import { ReactNode } from "react";

interface HelpWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

const HelpWrapper = ({ title, description, children }: HelpWrapperProps) => (
  <div className="space-y-6 bg-background p-6">
    <h1 className="text-3xl font-extrabold text-primary">{title}</h1>
    <p className="text-muted-foreground">{description}</p>
    <div className="space-y-4">{children}</div>
  </div>
);

export default HelpWrapper;
