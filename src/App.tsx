import { Loader } from "lucide-react";
import "./App.css";
import {
  BirthIcon,
  FemaleIcon,
  InsuranceIcon,
  JessicaTaylor,
  Phone,
} from "./assets";
import DiagnoseHistory from "./components/diagnose-history";
import DiagnosticList from "./components/diagnostic-list";
import LabResult from "./components/lab-result";
import Navbar from "./components/navbar";
import PatientCard from "./components/patient-card";
import Patients from "./components/patients";
import { usePatient } from "./hook/usePatient";

function App() {
  const { patient, loading, error } = usePatient("Jessica Taylor");

  if (loading)
    return (
      <div className="flex items-center h-screen justify-center">
        <Loader className="animate-spin size-8 text-active-1" />
      </div>
    );
  if (error) return <div>{error}</div>;
  if (!patient) return <div>No patient found</div>;

  const patientInfo = [
    {
      icon: BirthIcon,
      title: "Date of Birth",
      value: patient?.date_of_birth
        ? new Date(patient.date_of_birth).toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })
        : "August 23, 1996",
    },
    {
      icon: FemaleIcon,
      title: "Gender",
      value: patient?.gender ?? "Female",
    },
    {
      icon: Phone,
      title: "Contact Info",
      value: patient?.phone_number ?? "(414) 555-1234",
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      value: patient?.emergency_contact ?? "(414) 555-5678",
    },
    {
      icon: InsuranceIcon,
      title: "Insurance Provider",
      value: patient?.insurance_type ?? "Sunrise Healthcare Assurance",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-3 px-3 sm:px-4.5 xl:px-6 2xl:px-9 pt-2 pb-5 bg-background [--patient-width:13rem] lg:[--patient-width:13.75rem] xl:[--patient-width:18.75rem] 2xl:[--patient-width:22.9375rem]">
      <Navbar />
      <div className="flex flex-1 max-lg:flex-col size-full gap-4 2xl:gap-5 2xl:mt-2">
        <div className="flex">
          <Patients />
        </div>
        <div className="flex gap-4 2xl:gap-5 flex-1 max-lg:flex-col ">
          <div className="flex gap-4 2xl:gap-5 flex-col">
            <DiagnoseHistory patient={patient} />
            <DiagnosticList
              diagnosticDataList={patient?.diagnostic_list ?? []}
            />
          </div>
          <div className="flex flex-col flex-1 gap-4 2xl:gap-5">
            <PatientCard
              name={patient?.name ?? "Jessica Taylor"}
              avatar={patient?.profile_picture ?? JessicaTaylor}
              info={patientInfo}
            />
            <LabResult labResultData={patient.lab_results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
