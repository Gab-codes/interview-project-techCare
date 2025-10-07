import "./App.css";
import DiagnoseHistory from "./components/diagnose-history";
import Navbar from "./components/navbar";
import Patients from "./components/patients";

function App() {
  return (
    <div className="flex flex-col gap-3 px-4.5 xl:px-9 py-2 bg-background">
      <Navbar />
      <div className="flex gap-4">
        <Patients />
        <DiagnoseHistory />
      </div>
    </div>
  );
}

export default App;
