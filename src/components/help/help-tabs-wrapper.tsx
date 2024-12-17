import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HelpStep from "@/components/help/help-step";
import HelpWrapper from "@/components/help/help-wrapper";

interface Tab {
  value: string;
  title: string;
  steps: { title: string; description: string }[];
}

interface HelpTabsWrapperProps {
  tabs: Tab[];
  defaultValue: string;
  wrapperTitle: string;
  wrapperDescription: string;
}

const HelpTabsWrapper = ({
  tabs,
  defaultValue,
  wrapperTitle,
  wrapperDescription
}: HelpTabsWrapperProps) => {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="flex space-x-4 bg-background p-4">
        {tabs.map(tab => (
          <TabsTrigger
            className="bg-secondary text-primary font-semibold px-4 py-2 rounded"
            value={tab.value}
            key={tab.value}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent value={tab.value} key={tab.value}>
          <HelpWrapper
            title={`${wrapperTitle}: How To ${tab.title}`}
            description={`${wrapperDescription} ${tab.title.toLowerCase()} in the system.`}
          >
            {tab.steps.map((step, index) => (
              <HelpStep
                key={index}
                stepTitle={step.title}
                stepDescription={step.description}
              />
            ))}
          </HelpWrapper>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HelpTabsWrapper;
