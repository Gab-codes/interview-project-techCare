import "./App.css";
import Navbar from "./components/navbar";
import Patients from "./components/patients";

function App() {
  return (
    <div className="flex flex-col gap-3 px-4.5 xl:px-9 py-2 bg-background">
      <Navbar />
      <Patients />
    </div>
  );
}

export default App;
