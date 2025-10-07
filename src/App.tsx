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

const patientInfo = [
  {
    icon: BirthIcon,
    title: "Date of Birth",
    value: "12 May, 1999",
  },
  {
    icon: FemaleIcon,
    title: "Gender",
    value: "Female",
  },
  {
    icon: Phone,
    title: "Contact Info",
    value: "(415) 555-1234",
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    value: "(415) 555-5678",
  },
  {
    icon: InsuranceIcon,
    title: "Insurance Provider",
    value: "Sunrise Health Assurance",
  },
];

function App() {
  return (
    <div className="flex w-full flex-col gap-3 px-4.5 xl:px-6 2xl:px-9 py-2 bg-background">
      <Navbar />
      <div className="flex flex-1 w-full gap-4">
        <Patients />
        <div className="flex gap-4 flex-col">
          <DiagnoseHistory />
          <DiagnosticList />
        </div>
        <div className="flex flex-col flex-1">
          <PatientCard
            name="Jessica Taylor"
            avatar={JessicaTaylor}
            info={patientInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
