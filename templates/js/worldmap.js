$.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95368/world.json', function (chinaJson) {
    echarts.registerMap('world', chinaJson);
    var chart = echarts.init(document.getElementById('map'));
    
    var mapInstance = echarts.getMap('world');
    var countries = mapInstance.geoJson.features.map(function(feature) {
        return feature.properties.name;
    });

    let mapData = [
        {
            "name": "United States of America",
            "value": 1081
        },
        {
            "name": "Canada",
            "value": 77
        },
        {
            "name": "United Kingdom",
            "value": 112
        },
        {
            "name": "Spain",
            "value": 21
        },
        {
            "name": "Germany",
            "value": 83
        },
        {
            "name": "Australia",
            "value": 51
        },
        {
            "name": "China",
            "value": 194
        },
        {
            "name": "France",
            "value": 28
        },
        {
            "name": "Switzerland",
            "value": 50
        },
        {
            "name": "United Arab Emirates",
            "value": 3
        },
        {
            "name": "Singapore",
            "value": 31
        },
        {
            "name": "Sweden",
            "value": 9
        },
        {
            "name": "Poland",
            "value": 4
        },
        {
            "name": "Israel",
            "value": 39
        },
        {
            "name": "Belgium",
            "value": 23
        },
        {
            "name": "Netherlands",
            "value": 20
        },
        {
            "name": "Austria",
            "value": 13
        },
        {
            "name": "Taiwan",
            "value": 11
        },
        {
            "name": "Japan",
            "value": 19
        },
        {
            "name": "Hungary",
            "value": 2
        },
        {
            "name": "Italy",
            "value": 34
        },
        {
            "name": "India",
            "value": 12
        },
        {
            "name": "Iceland",
            "value": 1
        },
        {
            "name": "Denmark",
            "value": 9
        },
        {
            "name": "Mexico",
            "value": 3
        },
        {
            "name": "Finland",
            "value": 16
        },
        {
            "name": "Brazil",
            "value": 2
        },
        {
            "name": "Czech Republic",
            "value": 2
        },
        {
            "name": "Saudi Arabia",
            "value": 5
        },
        {
            "name": "Greece",
            "value": 7
        },
        {
            "name": "Qatar",
            "value": 4
        },
        {
            "name": "Ireland",
            "value": 6
        },
        {
            "name": "New Zealand",
            "value": 3
        },
        {
            "name": "Estonia",
            "value": 1
        },
        {
            "name": "Chile",
            "value": 1
        },
        {
            "name": "Republic of Korea",
            "value": 5
        },
        {
            "name": "Egypt",
            "value": 2
        },
        {
            "name": "Portugal",
            "value": 3
        },
        {
            "name": "Norway",
            "value": 1
        },
        {
            "name": "Pakistan",
            "value": 1
        },
        {
            "name": "Romania",
            "value": 1
        },
        {
            "name": "Luxembourg",
            "value": 1
        },
        {
            "name": "Malaysia",
            "value": 2
        },
        {
            "name": "South Africa",
            "value": 2
        },
        {
            "name": "Turkey",
            "value": 1
        },
        {
            "name": "Jordan",
            "value": 1
        },
        {
            "name": "Cyprus",
            "value": 1
        }
    ]

    countries.forEach(function(country) {
        var countryExists = mapData.some(function(data) {
            return data.name === country;
        });
        if (!countryExists) {
            mapData.push({ name: country, value: 0 });
        }
    });
    
    var colorSeries = mapData.map(function(item) {
        return item.value;
    });

    var min = Math.min.apply(null, colorSeries);
    var max = Math.max.apply(null, colorSeries);
    var colorArray = ['#fcfdd3', '#daf0b2', '#92d4b9', '#3eb3c3', '#1e80b8', '#24419a', '#0a1f5d']; 
    chart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                var html = '<span>' + params.name + '：</span><br/>';
                html += '<span>值：' + params.value + '</span><br/>';
                return html;
            },
            backgroundColor: 'rgba(29, 38, 71)',
            extraCssText: 'box-shadow:0 0 4px rgba(11, 19, 43,0.8)',
        },    
        visualMap: {
            min: min,
            max: max,
            realtime: false,
            calculable: true,
            inRange: {
                color: colorArray,  // 将颜色梯度映射为离散区间
            },
            left: 10,
            bottom: 0,
            type: 'piecewise',
            pieces: [
                { min: 500, label: '500+（人数）', color: colorArray[6] },
                { min: 100, max: 500, label: '100-500', color: colorArray[5] },
                { min: 80, max: 100, label: '80-100', color: colorArray[4] },
                { min: 60, max: 80, label: '60-80', color: colorArray[3] },
                { min: 30, max: 60, label: '30-60', color: colorArray[2] },
                { min: 1, max: 30, label: '10-30', color: colorArray[1] },
                { min: 0, max: 1, label: '0', color: colorArray[0] },
            ]
        },
        series: [
            {
                type: 'map',
                map: 'world',
                data: mapData,
                itemStyle: {
                    emphasis: { areaColor: '#B93721' } 
                },
                left: 8,
                top: 100
            }
        ]
    });

});

