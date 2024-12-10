import HelpStep from "@/components/help/help-step";
import HelpWrapper from "@/components/help/help-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  {
    value: "add-doctor",
    title: "Add Doctor",
    steps: [
      {
        title: "Select the Hospital",
        description:
          "Use the 'Hospital Name' dropdown to select the hospital where the doctor will work."
      },
      {
        title: "Select the Department",
        description:
          "After selecting a hospital, use the 'Department Name' dropdown to choose the relevant department."
      },
      {
        title: "Enter the Doctor's Name",
        description:
          "Fill in the 'Doctor Name' field with the full name of the doctor."
      },
      {
        title: "Submit the Form",
        description: "Click the 'Submit' button to save the doctor's details."
      }
    ]
  },
  {
    value: "add-department",
    title: "Add Department",
    steps: [
      {
        title: "Select the Hospital",
        description:
          "Use the 'Hospital Name' dropdown to select the hospital where the department will be added."
      },
      {
        title: "Enter the Department Name",
        description:
          "Fill in the 'Department Name' field with the name of the new department."
      },
      {
        title: "Submit the Form",
        description: "Click the 'Submit' button to save the department details."
      }
    ]
  },
  {
    value: "add-hospital",
    title: "Add Hospital",
    steps: [
      {
        title: "Enter the Hospital Name",
        description:
          "Fill in the 'Hospital Name' field with the name of the new hospital."
      },
      {
        title: "Enter the State",
        description:
          "Fill in the 'State' field with the location of the hospital."
      },
      {
        title: "Enter the District",
        description:
          "Fill in the 'District' field to specify the district the hospital belongs to."
      },
      {
        title: "Enter the Pin",
        description:
          "Fill in the 'Pin' field with the postal code for the hospital's location."
      },
      {
        title: "Submit the Form",
        description: "Click the 'Submit' button to save the hospital details."
      }
    ]
  },
  {
    value: "add-disease",
    title: "Add Disease",
    steps: [
      {
        title: "Enter the Disease Name",
        description:
          "Fill in the 'Disease Name' field with the name of the disease."
      },
      {
        title: "Enter the Description",
        description: "Provide a description of the disease."
      },
      {
        title: "Select the Category",
        description:
          "Choose the category of the disease from the available options."
      },
      {
        title: "Submit the Form",
        description: "Click the 'Submit' button to save the disease details."
      }
    ]
  },
  {
    value: "add-medicine",
    title: "Add Medicine",
    steps: [
      {
        title: "Enter the Medicine Name",
        description:
          "Fill in the 'Medicine Name' field with the name of the medicine."
      },
      {
        title: "Select the Hospital",
        description: "Choose the hospital where the medicine will be used."
      },
      {
        title: "Select the Department",
        description: "Choose the department where the medicine is administered."
      },
      {
        title: "Enter the Description",
        description: "Provide a description of the medicine."
      },
      {
        title: "Submit the Form",
        description: "Click the 'Submit' button to save the medicine details."
      }
    ]
  }
];

const AdminHelp = () => {
  return (
    <Tabs defaultValue="add-doctor" className="w-full">
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
            title={`Admin Help: How To ${tab.title}`}
            description={`This guide explains the steps to add a new ${tab.title.toLowerCase()} to the system.`}
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

export default AdminHelp;