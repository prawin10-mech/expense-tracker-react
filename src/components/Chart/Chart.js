import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((datapoint) => {
    datapoint.value;
  });

  const totalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMax}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
