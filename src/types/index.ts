export interface BloodPressure {
  systolic: { value: number; levels: string };
  diastolic: { value: number; levels: string };
}

export interface DiagnosticItem {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnoseHistoryItem[];
  diagnostic_list: DiagnosticItem[];
  lab_results: string[];
}

type HealthLevel = "Normal" | "Higher than Average" | "Lower than Average";

export interface DiagnoseHistoryItem {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: HealthLevel;
    };
    diastolic: {
      value: number;
      levels: HealthLevel;
    };
  };
  heart_rate: {
    value: number;
    levels: HealthLevel;
  };
  respiratory_rate: {
    value: number;
    levels: HealthLevel;
  };
  temperature: {
    value: number;
    levels: HealthLevel;
  };
}
