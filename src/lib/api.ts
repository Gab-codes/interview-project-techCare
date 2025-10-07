import type { Patient } from "@/types/";

export const fetchPatientData = async (): Promise<Patient | null> => {
  const username = "coalition";
  const password = "skills-test";
  const encoded = btoa(`${username}:${password}`);

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
  return data.find((p) => p.name === "Jessica Taylor") ?? null;
};

export const fetchAllPatientData = async (): Promise<Patient[]> => {
  const username = "coalition";
  const password = "skills-test";
  const encoded = btoa(`${username}:${password}`);

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
  return data;
};
