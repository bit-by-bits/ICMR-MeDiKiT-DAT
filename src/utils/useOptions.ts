import { useMemo } from "react";
import hospitals from "@/data/hospitals.json";
import departments from "@/data/departments.json";
import labs from "@/data/labs.json";
import states from "@/data/states.json";
import districts from "@/data/districts.json";
import doctors from "@/data/doctors.json";

const mapToOptions = <T>(data: T[], labelTemplate: (item: T) => string) =>
  data.map(item => ({
    value: labelTemplate(item),
    label: labelTemplate(item)
  }));

export const useHospitalOptions = () =>
  hospitals.map(hospital => ({
    value: hospital.hospitalName,
    label: `${hospital.hospitalName} - ${hospital.state}, ${hospital.district}`
  }));

export const useDepartmentOptions = (selectedHospital: string) =>
  useMemo(
    () =>
      selectedHospital
        ? mapToOptions(
            departments.filter(
              department => department.hospitalName === selectedHospital
            ),
            department => department.departmentName
          )
        : [],
    [selectedHospital]
  );

export const useLabOptions = (selectedHospital: string) =>
  useMemo(
    () =>
      selectedHospital
        ? mapToOptions(
            labs.filter(lab => lab.hospitalName === selectedHospital),
            lab => lab.laboratoryName
          )
        : [],
    [selectedHospital]
  );

export const useStateOptions = () => mapToOptions(states, state => state);

export const useDistrictOptions = (selectedState: string) =>
  useMemo(
    () =>
      selectedState
        ? districts[selectedState as keyof typeof districts] || []
        : [],
    [selectedState]
  );

export const useGenderOptions = () =>
  mapToOptions(["Male", "Female", "Other"], gender => gender);

export const useDoctorOptions = (
  selectedHospital: string,
  selectedDepartment: string
) =>
  useMemo(
    () =>
      selectedHospital && selectedDepartment
        ? doctors
            .filter(
              doctor =>
                doctor.hospitalName === selectedHospital &&
                doctor.departmentName === selectedDepartment
            )
            .map(doctor => ({
              value: doctor.doctorName,
              label: doctor.doctorName
            }))
        : [],
    [selectedHospital, selectedDepartment]
  );
