const mapData1 = [
    {
        "name": "United States of America",
        "value": 1081,
        "continent": "North America"
    },
    {
        "name": "Canada",
        "value": 77,
        "continent": "North America"
    },
    {
        "name": "United Kingdom",
        "value": 112,
        "continent": "Europe"
    },
    {
        "name": "Spain",
        "value": 21,
        "continent": "Europe"
    },
    {
        "name": "Germany",
        "value": 83,
        "continent": "Europe"
    },
    {
        "name": "Australia",
        "value": 51,
        "continent": "Oceania"
    },
    {
        "name": "China",
        "value": 194,
        "continent": "Asia"
    },
    {
        "name": "France",
        "value": 28,
        "continent": "Europe"
    },
    {
        "name": "Switzerland",
        "value": 50,
        "continent": "Europe"
    },
    {
        "name": "United Arab Emirates",
        "value": 3,
        "continent": "Asia"
    },
    {
        "name": "Singapore",
        "value": 31,
        "continent": "Asia"
    },
    {
        "name": "Sweden",
        "value": 9,
        "continent": "Europe"
    },
    {
        "name": "Poland",
        "value": 4,
        "continent": "Europe"
    },
    {
        "name": "Israel",
        "value": 39,
        "continent": "Asia"
    },
    {
        "name": "Belgium",
        "value": 23,
        "continent": "Europe"
    },
    {
        "name": "Netherlands",
        "value": 20,
        "continent": "Europe"
    },
    {
        "name": "Austria",
        "value": 13,
        "continent": "Europe"
    },
    {
        "name": "Taiwan",
        "value": 11,
        "continent": "Asia"
    },
    {
        "name": "Japan",
        "value": 19,
        "continent": "Asia"
    },
    {
        "name": "Hungary",
        "value": 2,
        "continent": "Europe"
    },
    {
        "name": "Italy",
        "value": 34,
        "continent": "Europe"
    },
    {
        "name": "India",
        "value": 12,
        "continent": "Asia"
    },
    {
        "name": "Iceland",
        "value": 1,
        "continent": "Europe"
    },
    {
        "name": "Denmark",
        "value": 9,
        "continent": "Europe"
    },
    {
        "name": "Mexico",
        "value": 3,
        "continent": "North America"
    },
    {
        "name": "Finland",
        "value": 16,
        "continent": "Europe"
    },
    {
        "name": "Brazil",
        "value": 2,
        "continent": "South America"
    },
    {
        "name": "Czech Republic",
        "value": 2,
        "continent": "Europe"
    },
    {
        "name": "Saudi Arabia",
        "value": 5,
        "continent": "Asia"
    },
    {
        "name": "Greece",
        "value": 7,
        "continent": "Europe"
    },
    {
        "name": "Qatar",
        "value": 4,
        "continent": "Asia"
    },
    {
        "name": "Ireland",
        "value": 6,
        "continent": "Europe"
    },
    {
        "name": "New Zealand",
        "value": 3,
        "continent": "Oceania"
    },
    {
        "name": "Estonia",
        "value": 1,
        "continent": "Europe"
    },
    {
        "name": "Chile",
        "value": 1,
        "continent": "South America"
    },
    {
        "name": "Republic of Korea",
        "value": 5,
        "continent": "Asia"
    },
    {
        "name": "Egypt",
        "value": 2,
        "continent": "Africa"
    },
    {
        "name": "Portugal",
        "value": 3,
        "continent": "Europe"
    },
    {
        "name": "Norway",
        "value": 1,
        "continent": "Europe"
    },
    {
        "name": "Pakistan",
        "value": 1,
        "continent": "Asia"
    },
    {
        "name": "Romania",
        "value": 1,
        "continent": "Europe"
    },
    {
        "name": "Luxembourg",
        "value": 1,
        "continent": "Europe"
    },
    {
        "name": "Malaysia",
        "value": 2,
        "continent": "Asia"
    },
    {
        "name": "South Africa",
        "value": 2,
        "continent": "Africa"
    },
    {
        "name": "Turkey",
        "value": 1,
        "continent": "Asia"
    },
    {
        "name": "Jordan",
        "value": 1,
        "continent": "Asia"
    },
    {
        "name": "Cyprus",
        "value": 1,
        "continent": "Asia"
    }
];

let barChart1;
let pieChart;

function showCountries() {
    const continent = document.getElementById("continentSelect").value;
    if (continent) {
        const countries1 = mapData1.filter(data => data.continent === continent);
        countries1.sort((a, b) => b.value - a.value);
        displayCountries(countries1);

        createBarChart(countries1);
        createPieChart(mapData1, continent);
    }
}

function displayCountries(countries) {
    const countryList = document.getElementById("countryList");
    countryList.innerHTML = "";
    countries.forEach(country => {
        const listItem = document.createElement("li");
        listItem.className = "list-country";
        listItem.textContent = `${country.name}: ${country.value}`;
        countryList.appendChild(listItem);
    });
}

function createBarChart(data) {
    const continent = document.getElementById("continentSelect").value;
    const countryNames = data.map(country => country.name);
    const countryValues = data.map(country => country.value);
    
    barChart1 = echarts.init(document.getElementById('barChart'));
    const option = {
        grid: {
            left: '5%',
            right: '10%',
            bottom: '10%',
            top: '20%',
            containLabel: true
        },
        title: {
            text: `Country Values of ${continent}`,
            left: 'center',
            textStyle: {
                fontSize: 12
            }  
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: countryNames,
            axisLabel: { 
                interval: 0, 
                rotate: continent === "Asia" ? -30 : (continent === "Europe" ? -40 : (continent === "North America" ? -10 : 0)),
                textStyle: {
                    fontSize: continent === "Asia" ? 7 : (continent === "Europe" ? 6 : 12)
                } 
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'bar',
            data: countryValues,
            itemStyle: {
                color: function(params) {
                    return getCustomColor(params.dataIndex);
                }
            }
        }]
    };
    barChart1.setOption(option);
    barChart1.on('mouseover', function(params) {
        if (pieChart) {
            const name = params.name;
            const targetData = mapData1.find(item => item.name === name); // Find the data point by name
            if (targetData) {
                pieChart.dispatchAction({
                    type: 'highlight',
                    name: name
                });
                pieChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    name: name
                });
            }
        }
    });

    barChart1.on('mouseout', function(params) {
        if (pieChart) {
            const name = params.name;
            const targetData = mapData1.find(item => item.name === name); // Find the data point by name
            if (targetData) {
                pieChart.dispatchAction({
                    type: 'downplay',
                    name: name
                });
                pieChart.dispatchAction({
                    type: 'hideTip'
                });
            }
        }
    });
}

function createPieChart(data, selectedContinent) {
    const continentValues = data.filter(item => item.continent === selectedContinent);
    const totalValue = continentValues.reduce((total, item) => total + item.value, 0);
    const othersValue = data.filter(item => item.continent !== selectedContinent)
                            .reduce((total, item) => total + item.value, 0);

    pieChart = echarts.init(document.getElementById('pieChart'));
    const option = {
        title: {
            text: `Continent Distribution: ${(totalValue / (totalValue + othersValue) * 100).toFixed(2)}%`,
            left: 'center',
            textStyle: {
                fontSize: 12
            },
            top: 20
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
        },
        series: [
            {
                name: 'Value',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '14',
                        fontWeight: 'bold',
                        color: '#0a1f5d'
                    }
                },
                labelLine: {
                    show: false
                },
                data: continentValues.map(item => ({
                    value: item.value, 
                    name: item.name
                })),
                itemStyle: {
                    color: function(params) {
                        return getCustomColor(params.dataIndex);
                    }
                }
            }
        ]
    };
    pieChart.setOption(option);
}

function getCustomColor(index) {
    const colors = [
        '#1e80b8', '#63b2ee', '#3eb3c3', '#92d4b9', '#99DDE8', '#b0cbe3', '#619ac3',
        '#66a9c9', '#8abcd1', '#5698c3', '#93b5cf', '#93b5cf', '#4e7ca1', '#1677b3',
        '#346c9c', '#7785B9', '#BCBDD0', '#8D657A', '#bB829F', '#CDD4B7', '#A38A63',
        '#bb91BD', '#8AA689', '#C98E61'
    ];
    return colors[index % colors.length];
}
window.onload = function() {
    showCountries();
}