import { useRef } from "react";
import { Bar } from "react-chartjs-2";
import useScreenSize from "@/Hooks/Common/useScreenSize";
import useDownloadGraph from "@/Hooks/Analytics/useDownloadGraph";
import useDownloadCsv from "@/Hooks/Analytics/useDownloadCsv";
import { numbFormater } from "@/Functions/PublicFunction";
import { Tooltip } from "react-tooltip";
import { useMemo } from "react";

export default function ChartBarStack({
    graphTitle,
    entryData = {},
    dashType = {},
    chartSize,
    isFullScreen = false,
    isDashboard = false,
    selectedPeriod,
    enableDown,
    setEnableDown,
    downloadParameters,
    divId,
    fullscreened = false,
    getCsvFile,
    isCsvEnabled = false,
    unit = "",
}) {
    const barStackRef = useRef(null);

    const { isMobile } = useScreenSize();

    useDownloadCsv({
        graphRef: barStackRef,
        graphTitle: graphTitle,
        isCsvEnabled: isCsvEnabled,
        getCsvFile: getCsvFile,
    });

    useDownloadGraph({
        downloadParameters: downloadParameters,
        enableDown: enableDown,
        setEnableDown: setEnableDown,
        graphRef: barStackRef,
        divId: divId,
        isFullScreen: isFullScreen,
        graphTitle: graphTitle,
    });

    const data = useMemo(() => {
        return {
            datasets: Object.entries(entryData).map((item, i) => {
                if (Object.entries(entryData).length > dashType.length) return;

                let xLength = new Set();
                item[1].forEach((e) => xLength.add(e.x));

                return {
                    label: dashType[i].labels[0], // item[0] || "",
                    data: item[1],
                    backgroundColor: dashType[i].colors[0] || "#fff",
                    barThickness: xLength.size < 2 ? 15 : "flex",
                    barPercentage: 1,
                    categoryPercentage: 0.5,
                };
            }),
        };
    }, [entryData, dashType]);

    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector("ul");

        if (!listContainer) {
            listContainer = document.createElement("ul");
        }
        listContainer.style.display = "flex";
        listContainer.style.alignItems = isDashboard ? "center" : null;
        listContainer.style.alignContent = isDashboard ? "center" : null;
        listContainer.style.flexDirection = "row";
        listContainer.style.flexWrap = "wrap";
        listContainer.style.flexShrink = 1;
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;
        listContainer.style.paddingLeft = isFullScreen ? "20px" : 0;
        listContainer.style.paddingRight = isFullScreen ? "20px" : 0;
        listContainer.style.minHeight = isDashboard ? "100px" : "48px";
        listContainer.style.maxWidth = isFullScreen ? "full" : "500px";
        listContainer.style.width = "100%";

        legendContainer.appendChild(listContainer);

        return listContainer;
    };

    const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            // Remove old legend items
            while (ul.firstChild) {
                ul.firstChild.remove();
            }

            // Reuse the built-in legendItems generator
            const items =
                chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item) => {
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
                if (item.text.length > 5) {
                    li.setAttribute("data-tooltip-id", dashType.toString());
                    li.setAttribute("data-tooltip-content", item.text);
                }

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
                boxSpan.style.flexShrink = 1;
                boxSpan.style.height = "15px";
                boxSpan.style.width = "15px";
                boxSpan.style.marginRight = "10px";
                boxSpan.style.marginTop = "1px";
                boxSpan.style.borderRadius = "999px";

                // Text
                const textContainer = document.createElement("p");
                textContainer.style.color = item.fontColor;
                textContainer.style.margin = 0;
                textContainer.style.padding = 0;
                textContainer.style.textDecoration = item.hidden
                    ? "line-through"
                    : "";
                textContainer.style.whiteSpace = "nowrap";

                const labelText = document.createElement("span");
                labelText.textContent =
                    item.text.length > 5
                        ? `${item.text.substring(0, 4)}...`
                        : `${item.text}`;

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

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        onHover(e, elements, chart) {
            if (isMobile) return;
            if (elements && elements.length) {
                for (const e of elements) {
                    const dsCount = chart.data.datasets.length;
                    for (let i = 0; i < dsCount; i++) {
                        let color = chart.data.datasets[i].backgroundColor;
                        if (color.length === 7) {
                            if (i !== e.datasetIndex) {
                                chart.data.datasets[i].backgroundColor =
                                    color + "4D";
                            }
                        } else if (color.length === 9) {
                            if (i === e.datasetIndex) {
                                chart.data.datasets[i].backgroundColor =
                                    color.slice(0, -2);
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
                        chart.data.datasets[i].backgroundColor = color.slice(
                            0,
                            -2,
                        );
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
                    color: "#1f2329",
                },
                grid: { display: false },
            },
            y: {
                stacked: true,

                ticks: {
                    color: "#1f2329",

                    callback: function (value) {
                        if (unit === "time") {
                            if (isNaN(value)) return `${value}`;
                            const days = Math.floor(value / 86400); // 86400 seconds in a day
                            const hours = Math.floor((value % 86400) / 3600);
                            const minutes = Math.floor((value % 3600) / 60);
                            const seconds = value % 60;

                            const formatedTime =
                                days > 3
                                    ? `${days}일`
                                    : days > 0
                                      ? `${days}일 ${hours}시간 `
                                      : hours > 0
                                        ? `${hours}시간 `
                                        : minutes === 0 && seconds === 0
                                          ? "0"
                                          : `${minutes}분 ${seconds}초`;
                            return `${formatedTime}`;
                        } else {
                            if (value >= 1000000) {
                                return (
                                    numbFormater.format(value / 1000000) + "M"
                                );
                            } else if (value >= 10000) {
                                return numbFormater.format(value / 1000) + "k";
                            } else {
                                return "";
                            }
                        }
                    },
                },
                grid: {
                    color: ({ tick }) =>
                        tick.label === ""
                            ? "rgba(0, 0, 0, 0)"
                            : "rgba(0, 0, 0, 0.1)",
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
                formatter: function (context) {
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
                    generateLabels: (chart) => {
                        const datasets = chart.data.datasets;
                        return datasets.map((data, i) => {
                            return {
                                text: data.label,
                                fillStyle: data.backgroundColor,
                                index: i,
                                datasetIndex: i,
                                lineWidth: 0,
                                fontColor: "#1f2329",
                                hidden: !chart.getDatasetMeta(i).visible,
                            };
                        });
                    },
                },
            },
            tooltip: {
                callbacks: {
                    title: (context) => [
                        `${context?.[0].label}${selectedPeriod ?? ""}`,
                    ],
                    label: function (context) {
                        if (unit === "time") {
                            const value = Number(context.raw.y);
                            if (isNaN(value)) return `${context.raw.y}`;
                            const days = Math.floor(value / 86400); // 86400 seconds in a day
                            const hours = Math.floor((value % 86400) / 3600);
                            const minutes = Math.floor((value % 3600) / 60);
                            const seconds = value % 60;

                            const formatedTime =
                                days > 0
                                    ? `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`
                                    : hours > 0
                                      ? `${hours}시간 ${minutes}분 ${seconds}초`
                                      : `${minutes}분 ${seconds}초`;
                            return `${context.dataset.label}: ${formatedTime}`;
                        } else {
                            return `${context.dataset.label}: ${context.formattedValue}`;
                        }
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
            afterEvent(chart, args, opts) {
                if (args.event.type === "mouseout") {
                    const dsCount = chart.data.datasets.length;
                    for (let i = 0; i < dsCount; i++) {
                        let color = chart.data.datasets[i].backgroundColor;
                        if (color.length === 9) {
                            chart.data.datasets[i].backgroundColor =
                                color.slice(0, -2);
                        }
                    }
                    chart.update();
                }
            },
        },
    ];

    if (Object.entries(entryData).length !== dashType.length) {
        return (
            <div
                style={{
                    width: "99%",
                    height: isFullScreen ? `calc(99% - 10vh)` : chartSize,
                }}
                className={`${isFullScreen ? `${chartSize}` : ``} w-full items-center justify-center sm:w-full`}
            >
                <p>데이터 없음</p>
            </div>
        );
    }

    return (
        <div
            id={divId}
            style={{
                width: fullscreened ? "99%" : "99%",
                height: fullscreened
                    ? "99%"
                    : isFullScreen
                      ? `calc(99% - 10vh)`
                      : chartSize,
                margin: fullscreened ? "50px" : "",
            }}
            className={`${isFullScreen ? `${chartSize}` : ``} w-full items-center justify-center sm:h-[100px] sm:w-full`}
        >
            <Bar
                className="h-full w-full sm:h-fit"
                data={data}
                options={options}
                ref={barStackRef}
                plugins={plugins}
            />
            <Tooltip id={dashType.toString()} style={{ borderRadius: 8 }} />
        </div>
    );
}
