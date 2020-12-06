import MODULES from "../modules";

export const getRadarChartUrl = (dataSet) => {
  if (!Array.isArray(dataSet)) {
    throw Error("The variable dataSet should be of type Array!");
  }

  const chartObject = {
    type: "radar",
    options: {
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
    },
    data: {
      labels: MODULES,
      datasets: [
        {
          label: "",
          data: dataSet,
        },
      ],
    },
  };

  return `https://quickchart.io/chart?c=${JSON.stringify(chartObject)}`;
};

export const getBarChartUrl = (dataSet) => {
  if (!Array.isArray(dataSet)) {
    throw Error("The variable dataSet should be of type Array!");
  }

  const chartObject = {
    type: "bar",
    data: {
      labels: MODULES,
      datasets: [
        {
          label: "",
          data: dataSet,
        },
      ],
    },
  };

  return `https://quickchart.io/chart?c=${JSON.stringify(chartObject)}`;
};
