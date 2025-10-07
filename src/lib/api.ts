import type { Patient } from "@/types/";

const username = "coalition";
const password = "skills-test";
const encoded = btoa(`${username}:${password}`);

let cachedPatients: Patient[] | null = null; //for memory caching so i dont call the api twice

export const fetchAllPatientData = async (): Promise<Patient[]> => {
  if (cachedPatients) return cachedPatients;

  const res = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch patient data");

  const data: Patient[] = await res.json();
  cachedPatients = data;
  return data;
};

export const fetchPatientData = async (
  name = "Jessica Taylor"
): Promise<Patient | null> => {
  const patients = await fetchAllPatientData();
  return patients.find((p) => p.name === name) ?? null;
};
