import { useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import AdvancedSettings from "@/components/settings/advanced-settings";
import GeneralSettings from "@/components/settings/general-settings";
import SecuritySettings from "@/components/settings/security-settings";
import { capitalizeWord } from "@/lib/utils";

type Section = "general" | "security" | "advanced";

const sections: Section[] = ["general", "security", "advanced"];

export const description =
  "Settings page for the ICMR MeDiKiT-DAT app. Allows users to configure settings for the app.";

const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sectionParam = searchParams.get("section");
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionParam) navigate("");
  }, [sectionParam, navigate]);

  const renderSection = (section: Section) => {
    switch (section) {
      case "general":
        return <GeneralSettings />;
      case "security":
        return <SecuritySettings />;
      case "advanced":
        return <AdvancedSettings />;
      default:
        return null;
    }
  };

  const updateSection = (section: Section) => {
    setSearchParams(section === "general" ? {} : { section });
  };

  const isActive = (section: Section) =>
    sectionParam === section || (!sectionParam && section === "general");

  return (
    <div className="grid flex-1 auto-rows-max gap-6">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav className="grid gap-4 text-sm text-muted-foreground">
          {sections.map(section => (
            <Link
              key={section}
              to={`?section=${section}`}
              className={isActive(section) ? "text-primary font-semibold" : ""}
              onClick={() => updateSection(section)}
            >
              {capitalizeWord(section)}
            </Link>
          ))}
        </nav>

        <div className="grid gap-6">
          {renderSection((sectionParam as Section) || "general")}
        </div>
      </div>
    </div>
  );
};

export default Settings;
