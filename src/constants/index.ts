import { DoctorAvatar, HeartBPM, RespitoryRate, Temperature } from "@/assets";

export const patients = [
  {
    name: "Emily Williams",
    avatar: DoctorAvatar,
    gender: "Female",
    age: 18,
  },
  {
    name: "Ryan Johnson",
    avatar: DoctorAvatar,
    gender: "Male",
    age: 45,
  },
  {
    name: "Brandon Mitchell",
    avatar: DoctorAvatar,
    gender: "Male",
    age: 36,
  },
  {
    name: "Jessica Taylor",
    avatar: DoctorAvatar,
    gender: "Female",
    age: 28,
    isActive: true,
  },
  {
    name: "Samantha Johnson",
    avatar: DoctorAvatar,
    gender: "Female",
    age: 56,
  },
  {
    name: "Ashley Martinez",
    avatar: DoctorAvatar,
    gender: "Female",
    age: 54,
  },
  {
    name: "Olivia Brown",
    avatar: DoctorAvatar,
    gender: "Female",
    age: 32,
  },
  {
    name: "Tyler Davis",
    avatar: DoctorAvatar,
    gender: "Male",
    age: 19,
  },
  {
    name: "Kevin Anderson",
    avatar: DoctorAvatar,
    gender: "Male",
    age: 30,
  },
  {
    name: "Dylan Thompson",
    avatar: DoctorAvatar,
    gender: "Male",
    age: 36,
  },
];

export const diagnoseReports = [
  {
    title: "Respiratory Rate",
    value: "20 bpm",
    color: "#E0F3FA",
    image: RespitoryRate,
    output: "Normal",
  },
  {
    title: "Temperature",
    value: "98.6°F",
    color: "#FFE6E9",
    image: Temperature,
    output: "Normal",
  },
  {
    title: "Heart Rate",
    value: "78 bpm",
    color: "#FFE6F1",
    image: HeartBPM,
    output: "Lower than Average",
  },
];
