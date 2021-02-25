const DUMMY_DATA = [
	{ id: "d1", value: 10, region: "china" },
	{ id: "d2", value: 45, region: "germany" },
	{ id: "d3", value: 76, region: "bhutan" },
	{ id: "d4", value: 46, region: "india" },
	{ id: "d5", value: 47, region: "bihar" },
	{ id: "d6", value: 74, region: "indore" },
];

// d3.select("div")
// 	.selectAll("p")
// 	.data(DUMMY_DATA)
// 	.enter()
// 	.append("p")
// 	.text((data) => data.region);
const xScale = d3
	.scaleBand()
	.domain(DUMMY_DATA.map((datapoint) => datapoint.region))
	.rangeRound([0, 500])
	.padding(0.1);

const yScale = d3.scaleLinear().domain([0, 90]).range([400, 0]);

const container = d3.select("svg").classed("container", true);
// .style("border", "2px solid blue");

const bars = container
	.selectAll(".bar")
	.data(DUMMY_DATA)
	.enter()
	.append("rect")
	.classed("bar", true)
	.attr("width", xScale.bandwidth())
	.attr("height", (data) => 400 - yScale(data.value))
	.attr("x", (data) => xScale(data.region))
	.attr("y", (data) => yScale(data.value));

setTimeout(() => {
	bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
}, 2000);
