import { useMemo } from "react";
import hospitals from "@/data/hospitals.json";
import departments from "@/data/departments.json";
import labs from "@/data/labs.json";
import states from "@/data/states.json";
import districts from "@/data/districts.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapToOptions = (data: any[], labelTemplate: (item: any) => string) => {
  return data.map(item => ({
    value: labelTemplate(item),
    label: labelTemplate(item)
  }));
};

export const useHospitalOptions = () => {
  return mapToOptions(
    hospitals,
    hospital =>
      `${hospital.hospitalName} - ${hospital.state}, ${hospital.district}`
  );
};

export const useDepartmentOptions = (selectedHospital: string) => {
  return useMemo(() => {
    return selectedHospital
      ? mapToOptions(
          departments.filter(
            department => department.hospitalName === selectedHospital
          ),
          department => department.departmentName
        )
      : [];
  }, [selectedHospital]);
};

export const useLabOptions = (selectedHospital: string) => {
  return useMemo(() => {
    return selectedHospital
      ? mapToOptions(
          labs.filter(lab => lab.hospitalName === selectedHospital),
          lab => lab.laboratoryName
        )
      : [];
  }, [selectedHospital]);
};

export const useStateOptions = () => {
  return mapToOptions(states, state => state);
};

export const useDistrictOptions = (selectedState: string) => {
  return useMemo(() => {
    return selectedState
      ? districts[selectedState as keyof typeof districts] || []
      : [];
  }, [selectedState]);
};
