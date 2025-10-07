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
import Navbar from "./components/navbar";
import PatientCard from "./components/patient-card";
import Patients from "./components/patients";
import { usePatient } from "./hook/usePatient";

function App() {
  const { patient, loading, error } = usePatient();

  if (loading) return <div>Loading...</div>;
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
    <div className="flex w-full flex-col gap-3 px-4.5 xl:px-6 2xl:px-9 py-2 bg-background">
      <Navbar />
      <div className="flex flex-1 w-full gap-4">
        <Patients />
        <div className="flex gap-4 flex-col">
          <DiagnoseHistory patient={patient} />
          <DiagnosticList diagnosticDataList={patient?.diagnostic_list ?? []} />
        </div>
        <div className="flex flex-col flex-1">
          <PatientCard
            name={patient?.name ?? "Jessica Taylor"}
            avatar={patient?.profile_picture ?? JessicaTaylor}
            info={patientInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
