import { useMemo, useRef } from "react";
import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import { DataBarModel } from "../../models/global-models";

export default function ChartBar({
  graphTitle,
  entryData = [],
  divId,
  isFullScreen,
  ...props
}: ChartBarProps) {
  const chartRef = useRef(null);

  const data: ChartData<"bar", any[], string> = useMemo(() => {
    return {
      datasets: entryData.map((item) => {
        return {
          label: item.label,
          data: item.data,
          backgroundColor: item.bgColor,
          barThickness: "flex",
          barPercentage: 1,
          categoryPercentage: 0.7,
        };
      }),
    };
  }, [entryData]);

  const options: any = {
    style: {
      backgroundColor: "#000",
    },
    parsing: {
      xAxisKey: "x",
      yAxisKey: "y",
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#fff",
          minRotation: 0,
          maxRotation: 0,
        },
        grid: { drawOnChartArea: false },
      },
      y: {
        ticks: {
          color: "#fff",
        },
        grid: {
          color: ({ tick }: any) =>
            tick.label === ""
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.1)",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      title: {
        display: false,
        text: graphTitle || "",
        font: { size: 18 },
      },
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          pointStyleWidth: 15,
          font: { size: 12 },
          boxHeight: 10,
          color: "#fff",
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div
      id={divId}
      className={`${isFullScreen ? "lg:h-[99%]" : "lg:max-h-[16vw]"} w-[99%] items-center justify-center sm:h-[70vw] sm:w-[99%] md:w-full`}
      {...props}
    >
      <Bar
        style={{ width: "99%", height: "99%" }}
        data={data}
        options={options}
        ref={chartRef}
      />
    </div>
  );
}

interface ChartBarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  graphTitle: string;
  divId: string;
  isFullScreen: boolean;
  entryData: DataBarModel[];
}
