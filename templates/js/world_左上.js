var chart_bar = echarts.init(document.getElementsByClassName('hot')[0]) 
chart_bar.setOption(
    {
        //固定框架的option写这
        baseOption: {
            timeline: {     
                axisType: 'category',
                show: true,
                autoPlay: true,
                playInterval: 4000,
                data: ['North America', 'Europe', 'Asia', 'Oceania', 'South America', 'Africa'],
                width: '90%',
                left: 0,
                checkpointStyle:{
                    color:'#1e80b8',
                    borderColor : 'rgb(64,57,144,0.4)'
                },
                label: {
                    show:true ,
                    interval: 0,
                    rotate: -15, 
                    formatter: null,
                    textStyle: {
                        color: '#333',
                        fontSize: 8
                    }
                }
            },    
            grid: {
                left: '0%',
                right: '9%',
                bottom: '25%',
                top: '15%',
                containLabel: true
            },           
            xAxis: [{
                type: 'value',
                name: '%',
                max: 35
            }],
            yAxis: [{
                type: 'category',
                inverse: true,
                axisLabel: { 
                    interval: 0, 
                    textStyle: {
                        fontSize: 10
                    } 
                }
            }],
            series: [
                {
                    type: 'bar'
                }
            ]
        },
        
        
        //变化数据写这
        options: [
            // North America
            {
                yAxis: [{
                    data: ['Artificial intelligence', 'Operating system', 'Statistics', 'Computer network', 'The Internet', 'Machine learning', 'Programming language', 'Algorithm', 'Computer vision', 'Database']
                }],
                title: {
                    text: 'Hot Research Fields in North America',
                    left: 'center',
                    top: 0,
                    textStyle: {
                        fontSize: 12
                    } 
                },
                series: [
                    {
                        data: [29.38, 15.94, 11.06, 10.26, 10.08, 9.74, 9.72, 7.08, 6.67, 1.84],
                        itemStyle: {
                            color: '#1e80b8'
                        }
                    },

                ]
            },
            // Europe
            {
                yAxis: [{
                    data: ['Artificial intelligence', 'Statistics', 'Machine learning', 'Operating system', 'Computer vision', 'Programming language', 'The Internet', 'Computer network', 'Algorithm', 'Software']
                }],
                title: {
                    text: 'Hot Research Fields in Europe'
                },
                series: [
                    {
                        data: [30.68, 12.47, 12.29, 10.07, 7.98, 7.98, 6.27, 5.29, 4.81, 1.70]
                    }
                ]
            },
            // Asia
            {
                yAxis: [{
                    data: ['Artificial intelligence', 'Machine learning', 'Statistics', 'Computer vision', 'Computer network', 'Operating system', 'The Internet', 'Algorithm', 'Mathematical optimization']
                }],
                title: {
                    text: 'Hot Research Fields in Asia'
                },
                series: [
                    {
                        data: [32.16, 17.34, 11.82, 8.66, 7.91, 7.27, 5.71, 3.25, 1.42]
                    }
                ]
            },
            // Oceania
            {
                yAxis: [{
                    data: ['Artificial intelligence', 'Machine learning', 'Statistics', 'The Internet', 'Operating system', 'Computer vision', 'Algorithm', 'Computer network', 'Programming language', 'Software']
                }],
                title: {
                    text: 'Hot Research Fields in Oceania'
                },
                series: [
                    {
                        data: [38.46, 20.19, 15.38, 11.54, 10.26, 9.62, 7.69, 7.69, 6.41, 3.21]
                    }
                ]
            },
            // South America
            {
                yAxis: [{
                    data: ['Algorithm', 'Artificial intelligence', 'Programming language']
                }],
                title: {
                    text: 'Hot Research Fields in South America'
                },
                series: [
                    {
                        data: [33.33, 33.33, 33.33]
                    }
                ]
            },
            // Africa
            {
                yAxis: [{
                    data: ['Artificial intelligence', 'Machine learning', 'Computer network', 'Statistics', 'The Internet', 'Mathematical optimization', 'Operating system']
                }],
                title: {
                    text: 'Hot Research Fields in Africa'
                },
                series: [
                    {
                        data: [28.57, 14.29, 14.29, 7.14, 7.14, 7.14, 7.14]
                    }
                ]
            }
        ]
    }
);