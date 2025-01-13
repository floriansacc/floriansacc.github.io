import { useMemo, useRef } from "react";
import { Plugin } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

export default function ChartPie({
  isDoughnut = false,
  graphTitle,
  entryData = [],
  divId,
  ...props
}: ChartPieProps) {
  const chartRef = useRef(null);

  const data = useMemo(() => {
    return {
      labels: ["Data 1", "Data 2", "Data 3"],
      datasets: [
        {
          label: graphTitle || "그래프",
          data: entryData,
          backgroundColor: ["#4A90E2", "#50E3C2", "#F5A623"],
          hoverOffset: 1,
          offset: 2,
        },
      ],
    };
  }, [entryData]);

  const getOrCreateLegendList = (_: any, id: any) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer?.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.style.display = "flex";
      listContainer.style.flexDirection = "column";
      listContainer.style.flexWrap = "nowrap";
      listContainer.style.margin = "0";
      listContainer.style.padding = "0";

      legendContainer?.appendChild(listContainer);
    }

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

      const customlabel = (chart: any) => {
        const datasets = chart.data.datasets;
        let sum = 0;
        datasets[0].data.map((data: any, i: number) => {
          if (!chart.getDataVisibility(i)) return;
          sum += parseFloat(data);
        });

        return datasets[0].data.map((data: any, i: number) => {
          let percentage = ((data * 100) / sum || 0).toFixed(1);
          return {
            text: chart.data.labels[i],
            percentage: !chart.getDataVisibility(i) ? "0.0%" : `${percentage}%`,
            fillStyle: datasets[0].backgroundColor[i],
            index: i,
            lineWidth: 0,
          };
        });
      };

      // Reuse the built-in legendItems generator
      const items = customlabel(chart);

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
        li.style.zIndex = "30";
        li.style.userSelect = "none";

        li.onclick = (event) => handleClick(event, item, chart);

        // Color box
        const boxSpan = document.createElement("span");
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.display = "flex";
        boxSpan.style.flexShrink = "0";
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
        labelText.textContent = item.text;
        labelText.style.display = "block";

        const percentageText = document.createElement("span");
        percentageText.textContent =
          item.percentage === "100.0%" ? "100 %" : item.percentage;
        percentageText.style.display = "block";
        percentageText.style.fontSize = "10px";
        percentageText.style.whiteSpace = "pre";

        textContainer.appendChild(labelText);
        textContainer.appendChild(percentageText);

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    },
  };

  function handleClick(_: any, item: any, chart: any) {
    const dataset = chart.data.datasets[0];
    const colors = dataset.backgroundColor;

    chart.toggleDataVisibility(item.index);

    colors.forEach((color: string, index: number) => {
      if (index === item.index) {
        if (color.length === 9) {
          colors[index] = color.slice(0, -2);
        } else {
          colors[index] = color + "4D";
        }
      }
    });
    chart.update();
  }

  const options: any = {
    responsive: true,
    hoverBorderWidth: 1,
    hoverBorderColor: "#1f2329",
    animation: {
      animateRotate: true,
      animateScale: false,
    },
    layout: {
      padding: {
        top: 20,
        left: 0,
        right: 0,
        bottom: 15,
      },
    },
    borderWidth: "",
    plugins: {
      htmlLegend: {
        containerID: graphTitle,
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data: any) => {
            sum += parseFloat(data);
          });
          return value;
        },
        display: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          let sum = 0;
          context.dataset.data.forEach((data: any) => {
            sum += parseFloat(data);
          });
          let percentage = (value * 100) / sum;
          return percentage < 5 ? false : true;
        },
        align: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          let sum = 0;
          context.dataset.data.forEach((data: any) => {
            sum += parseFloat(data);
          });
          let percentage = (value * 100) / sum;
          return percentage < 5 ? "end" : "start";
        },
        color: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          let sum = 0;
          context.dataset.data.forEach((data: any) => {
            sum += parseFloat(data);
          });
          let percentage = (value * 100) / sum;
          return percentage < 5 ? "black" : "white";
        },
        anchor: "end",
        clamp: "true",
        font: {
          size: 16,
        },
      },
      title: {
        display: false,
        align: "start",
        text: graphTitle || "",
        color: "#1f2329",
        font: { size: 18 },
        padding: { bottom: 20 },
      },
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          padding: 15,
          pointStyle: "circle",
          usePointStyle: true,
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets;
            let sum = 0;
            datasets[0].data.map((data: any) => {
              sum += parseFloat(data);
            });
            return datasets[0].data.map((data: any, i: any) => {
              let percentage = ((data * 100) / sum).toFixed(1) + "%";
              return {
                text: `${chart.data.labels[i]}: ${percentage}`,
                fillStyle: datasets[0].backgroundColor[i],
                index: i,
                lineWidth: 0,
              };
            });
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${context.formattedValue}`,
        },
      },
    },
  };

  const getSuitableY = (y: any, yArray: any[] = [], direction: any) => {
    let result = y;
    yArray.forEach((existedY) => {
      if (existedY - 14 < result && existedY + 14 > result) {
        if (direction === "right") {
          result = existedY + 5;
        } else {
          result = existedY - 5;
        }
      }
    });
    return result;
  };

  const getOriginPoints = (source: any, center: any, l: any) => {
    let a = { x: 0, y: 0 };
    const dx = (center.x - source.x) / l;
    const dy = (center.y - source.y) / l;
    a.x = center.x + l * (-dx * 0.1);
    a.y = center.y + l * (-dy * 0.05);
    return a;
  };

  const legendOutside: Plugin = {
    id: "legendOutside",
    afterDraw: (chart: any) => {
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = "10px 'Averta Std CY'";
      const leftLabelCoordinates: any[] = [];
      const rightLabelCoordinates: any[] = [];
      const chartCenterPoint = {
        x:
          (chart.chartArea.right - chart.chartArea.left) / 2 +
          chart.chartArea.left,
        y:
          (chart.chartArea.bottom - chart.chartArea.top) / 2 +
          chart.chartArea.top,
      };
      chart.config.data.labels.forEach((_: any, i: number) => {
        const meta = chart.getDatasetMeta(0);
        const arc = meta.data[i];
        const dataset = chart.config.data.datasets[0];

        const centerPoint = arc.getCenterPoint();
        let color = chart.config._config.data.datasets[0].backgroundColor[i];

        const angle = Math.atan2(
          centerPoint.y - chartCenterPoint.y,
          centerPoint.x - chartCenterPoint.x,
        );

        let originPoint = getOriginPoints(
          chartCenterPoint,
          centerPoint,
          arc.outerRadius,
        );
        const point2X =
          chartCenterPoint.x +
          Math.cos(angle) *
            (centerPoint.x < chartCenterPoint.x
              ? arc.outerRadius + 10
              : arc.outerRadius + 10);
        let point2Y =
          chartCenterPoint.y +
          Math.sin(angle) *
            (centerPoint.y < chartCenterPoint.y
              ? arc.outerRadius + 7
              : arc.outerRadius + 7);

        let suitableY;
        if (point2X < chartCenterPoint.x) {
          suitableY = getSuitableY(point2Y, leftLabelCoordinates, "left");
        } else {
          suitableY = getSuitableY(point2Y, rightLabelCoordinates, "right");
        }

        point2Y = suitableY;

        const formatter = (value: any, ctx: any) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.forEach((data: any) => {
            sum += parseFloat(data);
          });

          return value;
        };

        let value = dataset.data[i];
        let sum = 0;
        dataset.data.forEach((data: any) => {
          sum += parseFloat(data);
        });
        let percentage: string = ((value * 100) / sum).toFixed(2);

        let displayValue = formatter(dataset.data[i], {
          chart,
          dataset,
          dataIndex: i,
        });

        let edgePointX =
          point2X < chartCenterPoint.x
            ? chartCenterPoint.x - arc.outerRadius / 2
            : chartCenterPoint.x + arc.outerRadius / 2;

        if (point2X < chartCenterPoint.x) {
          leftLabelCoordinates.push(point2Y);
        } else {
          rightLabelCoordinates.push(point2Y);
        }
        if (parseFloat(percentage) < 5 && parseFloat(percentage) != 0) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = color;
          ctx.beginPath();
          ctx.moveTo(originPoint.x, originPoint.y);
          ctx.lineTo(point2X, point2Y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(point2X, point2Y);
          ctx.lineTo(edgePointX / 2 + i * 15, point2Y);
          ctx.stroke();
          const labelAlignStyle =
            edgePointX < chartCenterPoint.x ? "right" : "left";
          const labelX = edgePointX / 2 + i * 15 - 2;
          const labelY = point2Y + 7;
          ctx.textAlign = labelAlignStyle;
          ctx.textBaseline = "bottom";
          ctx.font = chart.getDataVisibility(i)
            ? "bold 12px Lato"
            : "bold 0px Lato";

          ctx.fillText(displayValue, labelX, labelY);
        }
      });
      ctx.restore();
    },
  };

  const plugins: Plugin[] = [htmlLegendPlugin, legendOutside];

  return (
    <div
      className="flex h-[70%] w-[70%] items-center justify-start md:h-fit md:w-fit"
      {...props}
    >
      {isDoughnut ? (
        <Doughnut
          id={divId}
          style={{ width: "99%", height: "99%" }}
          data={data}
          options={options}
          ref={chartRef}
          plugins={plugins}
        />
      ) : (
        <Pie
          id={divId}
          style={{ width: "99%", height: "99%" }}
          data={data}
          options={options}
          ref={chartRef}
          plugins={[htmlLegendPlugin]}
        />
      )}
      <div id={graphTitle}></div>
    </div>
  );
}

interface ChartPieProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  isDoughnut?: boolean;
  graphTitle: string;
  entryData: any[];
  divId: string;
}
