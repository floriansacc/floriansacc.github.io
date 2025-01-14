import { useMemo, useRef } from "react";
import { ChartData, Plugin } from "chart.js";
import { Bar } from "react-chartjs-2";
import useScreenSize from "../../hooks/useScreenSize";
import { DataBarStackModel } from "../../models/global-models";

export default function ChartBarStack({
  graphTitle,
  entryData = [],
  divId,
  isFullScreen,
  ...props
}: ChartBarProps) {
  const barStackRef = useRef(null);

  const { isMobile } = useScreenSize();

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

  const getOrCreateLegendList = (_: any, id: string) => {
    const legendContainer: HTMLElement | null = document.getElementById(id);
    let listContainer = legendContainer?.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
    }
    listContainer.style.display = "flex";
    listContainer.style.alignItems = "center";
    listContainer.style.justifyContent = "center";
    listContainer.style.alignContent = "center";
    listContainer.style.flexDirection = "row";
    listContainer.style.flexWrap = "wrap";
    listContainer.style.flexShrink = "1";
    listContainer.style.margin = "0";
    listContainer.style.padding = "0";
    listContainer.style.paddingLeft = "0";
    listContainer.style.paddingRight = "0";
    listContainer.style.minHeight = "40px";
    listContainer.style.width = "100%";

    legendContainer?.appendChild(listContainer);

    return listContainer;
  };

  const htmlLegendPlugin: Plugin = {
    id: "htmlLegend",
    afterUpdate(chart: any, _: any, options: any) {
      const ul = getOrCreateLegendList(chart, options.containerID);

      // Remove old legend items
      while (ul.firstChild) {
        ul.firstChild.remove();
      }

      // Reuse the built-in legendItems generator
      const items = chart.options.plugins.legend.labels.generateLabels(chart);

      items.forEach((item: any) => {
        const li = document.createElement("li");
        li.style.alignItems = "center";
        li.style.cursor = "pointer";
        li.style.display = "flex";
        li.style.flexDirection = "row";
        li.style.alignItems = "start";
        li.style.alignContent = "start";
        li.style.marginLeft = "10px";
        li.style.marginBottom = "4px";
        li.style.fontSize = "12px";
        li.style.fontWeight = "500";

        li.onclick = () => {
          const { type } = chart.config;
          if (type === "pie" || type === "doughnut") {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(
              item.datasetIndex,
              !chart.isDatasetVisible(item.datasetIndex),
            );
          }
          chart.update();
        };

        // Color box
        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.display = "flex";
        boxSpan.style.flexShrink = "1";
        boxSpan.style.height = "15px";
        boxSpan.style.width = "15px";
        boxSpan.style.marginRight = "10px";
        boxSpan.style.marginTop = "1px";
        boxSpan.style.borderRadius = "999px";

        // Text
        const textContainer = document.createElement("p");
        textContainer.style.color = item.fontColor;
        textContainer.style.margin = "0";
        textContainer.style.padding = "0";
        textContainer.style.textDecoration = item.hidden ? "line-through" : "";
        textContainer.style.whiteSpace = "nowrap";

        const labelText = document.createElement("span");
        labelText.textContent = `${item.text}`;

        labelText.style.display = "block";

        // Percentage text
        const percentageText = document.createElement("span");
        percentageText.textContent = item.percentage;
        percentageText.style.display = "block";
        percentageText.style.fontSize = "10px";

        textContainer.appendChild(labelText);
        textContainer.appendChild(percentageText);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    onHover(_: any, elements: any, chart: any) {
      if (isMobile) return;
      if (elements && elements.length) {
        for (const e of elements) {
          const dsCount = chart.data.datasets.length;
          for (let i = 0; i < dsCount; i++) {
            let color = chart.data.datasets[i].backgroundColor;
            if (color.length === 7) {
              if (i !== e.datasetIndex) {
                chart.data.datasets[i].backgroundColor = color + "4D";
              }
            } else if (color.length === 9) {
              if (i === e.datasetIndex) {
                chart.data.datasets[i].backgroundColor = color.slice(0, -2);
              }
            }
          }
        }
        chart.update();
      } else {
        const dsCount = chart.data.datasets.length;
        for (let i = 0; i < dsCount; i++) {
          let color = chart.data.datasets[i].backgroundColor;
          if (color.length === 9) {
            chart.data.datasets[i].backgroundColor = color.slice(0, -2);
          }
        }
        chart.update();
      }
    },
    hover: {
      mode: "point",
      intersect: true,
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#fff",
        },
        grid: { display: false },
      },
      y: {
        stacked: true,

        ticks: {
          color: "#fff",
        },
        grid: {
          color: ({ tick }: any) =>
            tick.label === ""
              ? "rgba(255, 255, 255, 1)"
              : "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    plugins: {
      htmlLegend: {
        // ID of the container to put the legend in
        containerID: graphTitle,
      },
      datalabels: {
        display: false,
        formatter: function (context: any) {
          return context / 1000 + "k";
        },
      },
      title: {
        display: false,
        font: { size: 18 },
      },
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          pointStyleWidth: 15,
          font: { size: 12 },
          boxHeight: 10,
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets;
            return datasets.map((data: any, i: number) => {
              return {
                text: data.label,
                fillStyle: data.backgroundColor,
                index: i,
                datasetIndex: i,
                lineWidth: 0,
                fontColor: "#fff",
                hidden: !chart.getDatasetMeta(i).visible,
              };
            });
          },
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

  const plugins = [
    htmlLegendPlugin,
    // mouse event 이벤트로 색깔 재설정
    {
      id: "eventPlugin",
      afterEvent(chart: any, args: any, _: any) {
        if (args.event.type === "mouseout") {
          const dsCount = chart.data.datasets.length;
          for (let i = 0; i < dsCount; i++) {
            let color = chart.data.datasets[i].backgroundColor;
            if (color.length === 9) {
              chart.data.datasets[i].backgroundColor = color.slice(0, -2);
            }
          }
          chart.update();
        }
      },
    },
  ];

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
        ref={barStackRef}
        plugins={plugins}
      />
    </div>
  );
}

interface ChartBarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  graphTitle: string;
  divId: string;
  isFullScreen: boolean;
  entryData: DataBarStackModel[];
}
