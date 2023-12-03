var myChart = echarts.init(document.getElementById("pie"));
var pieData = [
{
    name: "北京市",
    value: 279
},
{
    name: "香港特别行政区",
    value: 188
},
{
    name: "广东省",
    value: 82
},
{
    name: "浙江省",
    value: 58
},
{
    name: "山东省",
    value: 50
},
{
    name: "湖北省",
    value: 48
},
{
    name: "陕西省",
    value: 46
},
{
    name: "江苏省",
    value: 45
},
{
    name: "上海市",
    value: 41
},
{
    name: "四川省",
    value: 38
},
{
    name: "安徽省",
    value: 31
},
{
    name: "湖南省",
    value: 21
},
{
    name: "黑龙江省",
    value: 17
},
{
    name: "辽宁省",
    value: 12
},
{
    name: "天津省",
    value: 11
},
{
    name: "澳门特别行政区",
    value: 10
},
{
    name: "福建省",
    value: 9
},
{
    name: "重庆市",
    value: 7
},
{
    name: "江西省",
    value: 4
},
{
    name: "吉林省",
    value: 4
},
{
    name: "山西省",
    value: 3
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
    name: "台湾省",
    value: 2
},
{
    name: "甘肃省",
    value: 1
},
];
var currentIndex = 0;
var graphic = [{
    type: 'text',
    left: 'center',
    top: 'center',
    style: {
        text: getPieText(pieData, currentIndex),
        textAlign: 'center',
        fill: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    }
}];

var option = {
    backgroundColor: "transparent",
    tooltip: {
        trigger: "item",
    },
    graphic: graphic,
    series: [
    {
        type: "pie",
        data: pieData,
        radius: [60, 200],
        roseType: "area",
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 2000;
        },
        itemStyle: 
        {
            borderRadius: 5,
            color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {
                    offset: 0, color: '#e6534c'
                    },
                    {
                    offset: 1, color: '#fff'
                    },
                ],
                global: false
            },
        },
        label: {
            show: false,
        },
        selectedMode: "single",
        selectedOffset: 30,
        }
    ]
};

function getPieText(data, index) {
    var name = data[index].name.substring(0, 2);
    if(data[index].name == '黑龙江省')
    {
        name = data[index].name.substring(0, 3);
    }
    return name + ((data[index].value / getTotalValue(data) * 100).toFixed(2)) + '%';
}

function getTotalValue(data) {
    return data.reduce((total, current) => {
        return total + current.value;
    }, 0);
}

function updateGraphic() {
    currentIndex = (currentIndex + 1) % pieData.length;
    myChart.setOption({
        graphic: [{
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
            text: getPieText(pieData, currentIndex),
            textAlign: 'center',
            fill: '#000',
            fontSize: 18,
            fontWeight: 'bold',
        }
        }],
        series: [{
            selected: currentIndex,
            itemStyle: {
                color: function(params) {
                    return (params.dataIndex === currentIndex) ? '#AC2619' : {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: '#e6534c' },
                            { offset: 1, color: '#fff' }
                        ],
                        global: false
                    }
                }
            }
        }]
    });
}
setInterval(updateGraphic, 1200);
myChart.setOption(option);