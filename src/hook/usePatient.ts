import { useEffect, useState } from "react";
import { fetchPatientData, fetchAllPatientData } from "@/lib/api";
import type { Patient } from "@/types";

export function usePatient(name?: string) {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [patients, setPatients] = useState<Patient[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        if (name) {
          const data = await fetchPatientData(name);
          setPatient(data);
        } else {
          const data = await fetchAllPatientData();
          setPatients(data);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [name]);

  return { patient, patients, loading, error };
}
