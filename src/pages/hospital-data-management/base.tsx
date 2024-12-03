import LinkButton from "@/components/hospital-data-management/link-button";
import { URLs } from "@/routes";

export const description =
  "Hospital Data Management (HDM) page of the ICMR MeDiKiT-DAT app. It provides options for managing hospitals, departments, doctors, diseases, and medicines.";

const HospitalDataManagement = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 bg-background min-h-[calc(100vh_-_theme(spacing.64))]">
      <h1 className="text-4xl font-extrabold text-primary">
        Hospital Data Management
      </h1>
      <p className="text-lg text-muted-foreground">
        Manage hospital-related data efficiently and effectively.
      </p>

      <div className="flex space-x-4">
        <LinkButton
          to={URLs.app.hospitalDataManagement.addHospital}
          label="Add Hospital"
        />
        <LinkButton
          to={URLs.app.hospitalDataManagement.addDepartment}
          label="Add Department"
        />
        <LinkButton
          to={URLs.app.hospitalDataManagement.addDoctor}
          label="Add Doctor"
        />
        <LinkButton
          to={URLs.app.hospitalDataManagement.addDisease}
          label="Add Disease"
        />
        <LinkButton
          to={URLs.app.hospitalDataManagement.addMedicine}
          label="Add Medicine"
        />
      </div>

      <footer className="mt-6">
        <p className="text-muted-foreground">
          Powered by ICMR MeDiKiT-DAT Team
        </p>
      </footer>
    </div>
  );
};

export default HospitalDataManagement;
