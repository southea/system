let publicUrl = 'https://geo.datav.aliyun.com/areas_v2/bound/';
    async function initChart() {
        let chart = echarts.init(document.getElementById('china-map'));
        let alladcode = await getGeoJson('all.json')
        let chinaGeoJson = await getGeoJson('100000_full.json')
        initEcharts(chinaGeoJson, '中国热门研究地区分布', chart, alladcode)
    }
    initChart();

    // 每个地区的数据
    let mapData = [
        {
            name: "北京市",
            value: 279
        },
        {
            name: "上海市",
            value: 41
        },
        {
            name: "天津省",
            value: 11
        },
        {
            name: "重庆市",
            value: 7
        },
        {
            name: "河南省",
            value: 2
        },
        {
            name: "云南省",
            value: 2
        },
        {
            name: "辽宁省",
            value: 12
        },
        {
            name: "黑龙江省",
            value: 17
        },
        {
            name: "湖南省",
            value: 21
        },
        {
            name: "安徽省",
            value: 31
        },
        {
            name: "山东省",
            value: 50
        },
        {
            name: "江苏省",
            value: 45
        },
        {
            name: "浙江省",
            value: 58
        },
        {
            name: "江西省",
            value: 4
        },
        {
            name: "湖北省",
            value: 48
        },
        {
            name: "甘肃省",
            value: 1
        },
        {
            name: "山西省",
            value: 3
        },
        {
            name: "陕西省",
            value: 46
        },
        {
            name: "吉林省",
            value: 4
        },
        {
            name: "福建省",
            value: 9
        },
        {
            name: "广东省",
            value: 82
        },
        {
            name: "四川省",
            value: 38
        },
        {
            name: "台湾省",
            value: 2
        },
        {
            name: "香港特别行政区",
            value: 188
        },
        {
            name: "澳门特别行政区",
            value: 10
        },
    ]

    //echarts绘图
    function initEcharts(geoJson, name, chart, alladcode) {
        //获取当前显示地图下方地市的坐标点数据； 用于气泡显示
        let geoCoordMap = {};
        // 获取地区详细信息
        let mapFeatures = geoJson.features;
        // 遍历获取每个地区的经纬度
        mapFeatures.forEach(function (v, i) {
            // 获取当前地区名
            let name = v.properties.name;
            if (name) {
                // 获取当前地区的经纬度
                geoCoordMap[name] = v.properties.center;
            }
        });
        //将data数据进入方法，取需要的参数； 用于气泡显示
        let convertData = function (data) {
            var res = [];
            data.forEach(item => {
                // 获取当前省份的经纬度坐标
                let geoCoord = geoCoordMap[item.name];
                if (geoCoord) {
                    res.push({
                        // name 表示地区名称
                        name: item.name,
                        // value数据格式为：[113.665412, 34.757975, '200']
                        value: geoCoord.concat(item.value)
                    });
                }
            })
            return res;
        };

        echarts.registerMap(name, geoJson);
        var option = {
            title: {
                text: name,
                left: 'center',
                top: '15%',
            },
            //鼠标经过展示数据方法
            tooltip: {
                triggerOn: "mousemove",
                formatter: function (params) {
                    if (isNaN(params.value)) {
                        params.value = 0
                    }
                    if (params.seriesName === '散点') {
                        params.value = params.data.value[2]
                    }
                    var html = '<span>' + params.name + '：</span><br/>'
                    html += '<span>值：' + params.value + '</span><br/>'
                    return html
                },
                backgroundColor: 'rgba(29, 38, 71)',
                // 额外附加的阴影
                extraCssText: 'box-shadow:0 0 4px rgba(11, 19, 43,0.8)',
            },
            geo: {
                show: true,
                top: '15%',
                map: name,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        color: "#fff",
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#ebeee8',
                        borderColor: '#b3bda9',
                    },
                    emphasis: {
                        areaColor: '#4068b2',
                    }
                }
            },
            //进行气泡标点
            series: [
                {
                    type: 'map',
                    map: mapData,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    animation: true,
                    data: mapData
                },
                {
                    name: '散点', // 自定义名称
                    type: 'effectScatter', // scatter  effectScatter  
                    coordinateSystem: 'geo', // 设置坐标系类型
                    data: convertData(mapData), // 设置散点位置和数据
                    symbolSize: function (val) { // 设置散点大小
                        let value = val[2];
                        if (value < 10) {
                            return 10;
                        } else if (value < 40) {
                            return 12;
                        } else if (value < 70) {
                            return 14;
                        } else if (value < 100) {
                            return 16;
                        } else {
                            return 18;
                        }
                    },
                    
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true, // 是否显示鼠标悬浮动画
                    label: {
                        // 静态显示时的样式
                        normal: {
                            show: false, 
                            formatter: function (data) { // 显示模板
                                return data.value[2]
                            },
                            position: 'bottom', // 显示位置

                        },
                        // // 鼠标悬浮上去的样式
                        // emphasis: {
                        //     color: "#108B96",
                        // },
                    },
                    
                    itemStyle: {
                        normal: {
                            color: function (res) {
                                let value = res.value[2];
                                // 根据数值大小调整散点的颜色
                                if (value < 10) {
                                    return "#f3807b";
                                } else if (value < 40) {
                                    return "#e6534c";
                                } else if (value < 70) {
                                    return "#c23c31";
                                } else if (value < 100) {
                                    return "c32b28";
                                } else {
                                    return "#a81410";
                                }
                            },
                        },
                        // // 鼠标悬浮上去的样式
                        // emphasis: {
                        //     color: "#108B96",
                        // },
                    },
                    zlevel: 3
                }
            ]
        };

        chart.setOption(option);
        // 解绑click事件
        chart.off("click");
        //给地图添加监听事件
        chart.on('click', async params => {
            // 获取当前点击的地图code
            let clickRegion = alladcode.find(areaJson => areaJson.name === params.name);
            // 获取要获取地图的json名称
            let regionJsonName = clickRegion.adcode + '_full.json'
            // 获取点击的区域名称
            let cityName = params.name
            // 判断当前点击的地图等级,如果是区级，则再次点击时重新回到全国的数据
            if (clickRegion.level === 'district') {
                regionJsonName = '100000_full.json'
                cityName = '中国热门研究地区分布'
            }
            // 根据地图code获取
            getGeoJson(regionJsonName).then((result) => {
                initEcharts(result, cityName, chart, alladcode)
            })
        })
    }
    
    //获取地图json数据
    async function getGeoJson(jsonName) {
        return await $.get(publicUrl + jsonName)
    }