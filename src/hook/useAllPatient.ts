// import { useEffect, useState } from "react";
// import type { Patient } from "@/types";
// import { fetchAllPatientData } from "@/lib/api";

// export function usePatient() {
//   const [patients, setPatients] = useState<Patient[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const data = await fetchAllPatientData();
//         setPatients(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getData();
//   }, []);

//   return { patients, loading, error };
// }
