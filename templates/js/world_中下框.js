var barDom = document.getElementById('midbarChart');
var barChart = echarts.init(barDom, null, { renderer: 'canvas', useDirtyRect: false });

// Data for both bar and pie chart
var data = [
    { name: 'North America', value: 1161, color: '#24419a' },
    { name: 'Europe', value: 447, color: '#1e80b8' },
    { name: 'Asia', value: 329, color: '#3eb3c3' },
    { name: 'Oceania', value: 54, color: '#92d4b9' },
    { name: 'Africa', value: 4, color: '#99DDE8' },
    { name: 'South America', value: 3, color: '#b0cbe3' },
    { name: 'Antarctica', value: 0, color: '#cf977e' }
];

// Bar chart option
var barOption = {
    title: { 
        text: 'Top 2000 scientists by continent', 
        left: 'center',
        top: 20,
        textStyle: {
            fontSize: 12
        }   
    },
    xAxis: { type: 'category', data: data.map(d => d.name), axisLabel: { interval: 0, rotate: -30 } },
    yAxis: { type: 'value' },
    series: [{
        data: data.map(d => ({ value: d.value, itemStyle: { color: d.color } })),
        type: 'bar',
        label: { show: true, position: 'top' }
    }],
    // Add legend
    legend: {
        data: ['Number of scientists']
    }
};

barChart.setOption(barOption);
window.addEventListener('resize', function() {
    barChart.resize();
});