import BloodPressureChart from "./BloodPressureChart";
import DiagnoseReport from "./diagnose-report";

const DiagnoseHistory = () => {
  return (
    <div className="bg-white flex flex-col gap-4 rounded-2xl p-4">
      <h2 className="card-title-24pt mb-4">Diagnose History</h2>
      <BloodPressureChart />
      <DiagnoseReport />
    </div>
  );
};

export default DiagnoseHistory;
