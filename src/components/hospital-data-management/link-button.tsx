import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type LinkButtonProps = {
  to: string;
  label: string;
};

const LinkButton = ({ to, label }: LinkButtonProps) => {
  return (
    <Button className="px-6 py-3 bg-primary text-background hover:bg-primary/90 w-full">
      <Link to={to}>{label}</Link>
    </Button>
  );
};

export default LinkButton;
