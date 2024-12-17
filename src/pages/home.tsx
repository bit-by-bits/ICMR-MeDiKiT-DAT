import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { URLs } from "@/routes";

export const description =
  "Home page for the ICMR MeDiKiT-DAT app. Displaying a friendly greeting and options for users.";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 bg-background min-h-[calc(100vh_-_theme(spacing.64))] px-4">
      <h1 className="text-4xl font-extrabold text-primary">
        Welcome to ICMR MeDiKiT-DAT
      </h1>
      <p className="text-lg text-muted-foreground">
        A platform to manage your medical data with ease and accuracy.
      </p>

      <div className="flex space-x-4">
        <Button className="px-6 py-3 bg-primary text-background hover:bg-primary/90">
          <Link to={URLs.app.hospitalDataManagement.base}>Go to Hospitals</Link>
        </Button>

        <Button
          variant="outline"
          className="px-6 py-3 border-primary text-primary hover:bg-primary/10"
        >
          <Link to={URLs.app.registerPatient}>Register Patient</Link>
        </Button>
      </div>

      <footer className="mt-6">
        <p className="text-muted-foreground">
          Powered by ICMR MeDiKiT-DAT Team
        </p>
      </footer>
    </div>
  );
};

export default Home;
