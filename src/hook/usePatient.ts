import { useEffect, useState } from "react";
import { fetchPatientData } from "@/lib/api";
import type { Patient } from "@/types";

export function usePatient() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchPatientData();
        setPatient(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { patient, loading, error };
}
