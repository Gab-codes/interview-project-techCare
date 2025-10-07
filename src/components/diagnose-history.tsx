import type { Patient } from "@/types";
import BloodPressureChart from "./BloodPressureChart";
import DiagnoseReport from "./diagnose-report";

const DiagnoseHistory = ({ patient }: { patient: Patient }) => {
  const recentDiagnosisHistory = [...(patient?.diagnosis_history ?? [])]
    .slice(0, 6)
    .reverse();
  const lastestDiagnosisHistory = recentDiagnosisHistory[5];

  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl p-4">
      <h2 className="card-title-24pt mb-4">Diagnose History</h2>
      <BloodPressureChart data={recentDiagnosisHistory} />
      <DiagnoseReport data={lastestDiagnosisHistory} />
    </div>
  );
};

export default DiagnoseHistory;
