interface HelpStepProps {
  stepTitle: string;
  stepDescription: string;
}

const HelpStep = ({ stepTitle, stepDescription }: HelpStepProps) => (
  <div className="border-l-4 border-primary pl-4">
    <h3 className="font-bold text-primary">{stepTitle}</h3>
    <p className="text-sm text-muted-foreground">{stepDescription}</p>
  </div>
);

export default HelpStep;
