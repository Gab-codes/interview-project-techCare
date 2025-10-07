import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  type ChartConfiguration,
  Chart,
} from "chart.js";
import { ArrowDown, ArrowUp, ExpandArrowDown } from "@/assets";
import type { DiagnoseHistoryItem } from "@/types";

export interface BloodPressureChartProps {
  data: DiagnoseHistoryItem[];
}

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function BloodPressureChart({ data }: BloodPressureChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<ChartJS | null>(null);

  const labels = data.map(
    (entry) => `${entry.month.slice(0, 3)}, ${entry.year}`
  );

  const systolic = data.map((entry) => entry.blood_pressure.systolic.value);
  const diastolic = data.map((entry) => entry.blood_pressure.diastolic.value);

  const tickFontSize = window.innerWidth >= 1536 ? 12 : 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const config: ChartConfiguration<"line"> = {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Systolic",
            data: systolic,
            borderColor: "#E66FD2",
            backgroundColor: "rgba(240,98,192,0.06)",
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "#E66FD2",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            borderWidth: 3,
            fill: false,
          },
          {
            label: "Diastolic",
            data: diastolic,
            borderColor: "#8C6FE6",
            backgroundColor: "rgba(124,102,255,0.06)",
            tension: 0.4,
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBackgroundColor: "#8C6FE6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            borderWidth: 3,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            padding: 10,
            titleFont: { size: 12 },
            bodyFont: { size: 13 },
            boxPadding: 6,
            backgroundColor: "#111827",
            titleColor: "#fff",
            bodyColor: "#fff",
            usePointStyle: true,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#475569", font: { size: tickFontSize } },
          },
          y: {
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
              color: "#94a3b8",
              font: { size: 12 },
            },
            grid: { color: "rgba(15, 23, 42, 0.06)" },
          },
        },
        layout: {
          padding: { left: 8, right: 8, top: 8, bottom: 8 },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [labels, systolic, diastolic, tickFontSize]);

  const latestSystolic = systolic.at(-1) ?? 0;
  const latestDiastolic = diastolic.at(-1) ?? 0;

  return (
    <div className="bg-[#F4F0FE] 2xl:w-[45.375rem] rounded-2xl p-1 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
      <div className="col-span-1 lg:col-span-2 p-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-dark-sm">Blood Pressure</h3>
          <div className="body-regular-14 flex items-center gap-2">
            <span>Last 6 months</span>
            <img src={ExpandArrowDown} alt="expand more" />
          </div>
        </div>

        <div className="h-50 md:h-58 lg:h-60  2xl:h-74.5">
          <canvas ref={canvasRef} aria-label="Blood pressure chart" />
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-start gap-4 p-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#E66FD2] border border-white inline-block" />
            <div className="text-sm font-bold text-dark-sm">Systolic</div>
          </div>
          <div className="text-[1.375rem] font-bold text-dark-sm">
            {latestSystolic}
          </div>
          <div className="body-regular-14 flex items-center gap-2">
            <img src={ArrowUp} alt="arrow up" />
            <span>Higher than Average</span>
          </div>
        </div>

        <div className="border border-[#CBC8D4] my-1" />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#8C6FE6] border border-white inline-block" />
            <div className="text-sm font-medium text-dark-sm">Diastolic</div>
          </div>
          <div className="text-[1.375rem] font-bold text-dark-sm">
            {latestDiastolic}
          </div>
          <div className="body-regular-14 flex items-center gap-2">
            <img src={ArrowDown} alt="arrow down" />
            <span>Lower than Average</span>
          </div>
        </div>
      </div>
    </div>
  );
}
