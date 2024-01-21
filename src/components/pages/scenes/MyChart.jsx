import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { carPriceData as data } from "../../data/mockData";

const MyChart = () => {
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		// Verileri uygun formata dönüştür
		const formattedData = data.map(({ name, price }) => [
			name,
			parseFloat(price.slice(1)),
		]);
		// Başlık ve verileri içeren dizi
		const chartArray = [["Car", "Price"], ...formattedData];
		setChartData(chartArray);
	}, []);

	return (
		<div className="container overflow-hidden flex justify-center flex-wrap space-x-10">
			<div className="chart-container sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Chart
					width={"380px"}
					height={"280px"}
					chartType="ColumnChart"
					loader={<div>Loading Chart</div>}
					key={data.id}
					data={chartData}
					options={{
						title: "Araba Fiyat Grafiği",
						backgroundColor: "transparent",
					}}
					rootProps={{ "data-testid": "1" }}
				/>
			</div>
			<div className="chart-container sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Chart
					width={"380px"}
					height={"280px"}
					chartType="PieChart"
					loader={<div>Loading Chart</div>}
					key={data.id}
					data={chartData}
					options={{
						title: "Araba Fiyat Grafiği",
						backgroundColor: "transparent",
						is3D: true,
					}}
					rootProps={{ "data-testid": "1" }}
				/>
			</div>
			<div className="chart-container sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
				<Chart
					width={"380px"}
					height={"280px"}
					chartType="LineChart"
					loader={<div>Loading Chart</div>}
					key={data.id}
					data={chartData}
					options={{
						title: "Araba Fiyat Grafiği",
						backgroundColor: "transparent",
					}}
					rootProps={{ "data-testid": "1" }}
				/>
			</div>
		</div>
	);
};

export default MyChart;
