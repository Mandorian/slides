// 岗位数量
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },

    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "\u5f00\u53d1\u5de5\u7a0b\u5e08",
          "\u8f6f\u4ef6\u5de5\u7a0b",
          "\u7b97\u6cd5",
          "\u6570\u636e\u5206\u6790",
          "java",
          "c++",
          "\u8fd0\u7ef4",
          "\u6d4b\u8bd5",
          "\u524d\u7aef\u5f00\u53d1",
          "\u5927\u6570\u636e"
      ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "岗位数量",
        type: "bar",
        barWidth: "35%",
        data:  [
          2117,
          1030,
          911,
          625,
          228,
          123,
          90,
          83,
          79,
          48
      ],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 薪资分布
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ['1万5以上/月','1万~1万5/月','8千~1万/月','5千~8千/月','低于5千/月'],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [3011,1908,575,544,85],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [50.05, 37.72, 9.56, 9.04, 1.41],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 公司规模
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab","#d9ead3","#fff2cc",'#6950a1'],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      right: "0%",
      orient: 'vertical',
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "公司规模",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["32%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          {
              "name": "50-150\u4eba",
              "value": 1893
          },
          {
              "name": "150-500\u4eba",
              "value": 1640
          },
          {
              "name": "\u5c11\u4e8e50\u4eba",
              "value": 975
          },
          {
              "name": "1000-5000\u4eba",
              "value": 937
          },
          {
              "name": "500-1000\u4eba",
              "value": 722
          },
          {
              "name": "10000\u4eba\u4ee5\u4e0a",
              "value": 439
          },
          {
              "value": 338
          },
          {
              "name": "5000-10000\u4eba",
              "value": 164
          }
      ],
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 学历要求
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
      '#b2d235',
      '#6d8346',
      '#ac6767',
      '#1d953f',
      '#6950a1',
      '#918597',
      '#f6f5ec',
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    series: [
      {
        name: "学历要求",
        type: "pie",
        radius: ["20%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data:  [
          {
              "name": "\u672c\u79d1",
              "value": 4290
          },
          {
              "name": "\u5927\u4e13",
              "value": 1234
          },
          {
              "name": "\u7855\u58eb",
              "value": 490
          },
          {
              "value": 82
          },
          {
              "name": "\u4e2d\u6280/\u4e2d\u4e13",
              "value": 11
          },
          {
              "name": "\u535a\u58eb",
              "value": 8
          },
          {
              "name": "\u9ad8\u4e2d",
              "value": 8
          }
        ],
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 公司类型
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab","#d9ead3","#fff2cc",'#1d953f','#6950a1','#918597','#f6f5ec'],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      right: "0%",
      orient: 'vertical',
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "公司类型",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["32%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data:[
          {
              "name": "\u6c11\u8425",
              "value": 4091
          },
          {
              "name": "\u5df2\u4e0a\u5e02",
              "value": 660
          },
          {
              "name": "\u5408\u8d44",
              "value": 351
          },
          {
              "name": "\u56fd\u4f01",
              "value": 345
          },
          {
              "name": "\u5916\u8d44\uff08\u975e\u6b27\u7f8e\uff09",
              "value": 310
          },
          {
              "name": "\u5916\u8d44\uff08\u6b27\u7f8e\uff09",
              "value": 239
          },
          {
              "name": "\u521b\u4e1a\u516c\u53f8",
              "value": 59
          },
          {
              "name": "\u4e8b\u4e1a\u5355\u4f4d",
              "value": 44
          },
          {
              "name": "\u975e\u8425\u5229\u7ec4\u7ec7",
              "value": 14
          },
          {
              "value": 8
          }
      ],
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 经验要求
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",

      "#1d9dff",
      '#b2d235',
      '#6d8346',
      '#ac6767',
      '#1d953f',
      '#6950a1',
      '#918597',
      '#f6f5ec',
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    
    series: [
      {
        name: "经验要求",
        type: "pie",
        radius: ["20%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
          {
              "name": "3-4\u5e74",
              "value": 2326
          },
          {
              "name": "2\u5e74",
              "value": 1353
          },
          {
              "name": "1\u5e74",
              "value": 986
          },
          {
              "name": "5-7\u5e74",
              "value": 936
          },
          {
              "name": "\u65e0\u9700\u7ecf\u9a8c",
              "value": 437
          },
          {
              "name": "8-9\u5e74",
              "value": 62
          },
          {
              "name": "10\u5e74\u4ee5\u4e0a",
              "value": 22
          } 
      ],
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var app = {};
  option = null;
  var geoCoordMap = {
      "海门":[121.15,31.89],
      "鄂尔多斯":[109.781327,39.608266],
      "招远":[120.38,37.35],
      "舟山":[122.207216,29.985295],
      "齐齐哈尔":[123.97,47.33],
      "盐城":[120.13,33.38],
      "赤峰":[118.87,42.28],
      "青岛":[120.33,36.07],
      "乳山":[121.52,36.89],
      "金昌":[102.18,38.520089],
      "泉州":[118.58,24.93],
      "莱西":[120.53,36.86],
      "日照":[119.46,35.42],
      "胶南":[119.97,35.88],
      "南通":[121.05,32.08],
      "拉萨":[91.11,29.97],
      "云浮":[112.02,22.93],
      "梅州":[116.1,24.55],
      "文登":[122.05,37.2],
      "上海":[121.48,31.22],
      "攀枝花":[101.718637,26.582347],
      "威海":[122.1,37.5],
      "承德":[117.93,40.97],
      "厦门":[118.1,24.46],
      "汕尾":[115.375279,22.786211],
      "潮州":[116.63,23.68],
      "丹东":[124.37,40.13],
      "太仓":[121.1,31.45],
      "曲靖":[103.79,25.51],
      "烟台":[121.39,37.52],
      "福州":[119.3,26.08],
      "瓦房店":[121.979603,39.627114],
      "即墨":[120.45,36.38],
      "抚顺":[123.97,41.97],
      "玉溪":[102.52,24.35],
      "张家口":[114.87,40.82],
      "阳泉":[113.57,37.85],
      "莱州":[119.942327,37.177017],
      "湖州":[120.1,30.86],
      "汕头":[116.69,23.39],
      "昆山":[120.95,31.39],
      "宁波":[121.56,29.86],
      "湛江":[110.359377,21.270708],
      "揭阳":[116.35,23.55],
      "荣成":[122.41,37.16],
      "连云港":[119.16,34.59],
      "葫芦岛":[120.836932,40.711052],
      "常熟":[120.74,31.64],
      "东莞":[113.75,23.04],
      "河源":[114.68,23.73],
      "淮安":[119.15,33.5],
      "泰州":[119.9,32.49],
      "南宁":[108.33,22.84],
      "营口":[122.18,40.65],
      "惠州":[114.4,23.09],
      "江阴":[120.26,31.91],
      "蓬莱":[120.75,37.8],
      "韶关":[113.62,24.84],
      "嘉峪关":[98.289152,39.77313],
      "广州":[113.23,23.16],
      "延安":[109.47,36.6],
      "太原":[112.53,37.87],
      "清远":[113.01,23.7],
      "中山":[113.38,22.52],
      "昆明":[102.73,25.04],
      "寿光":[118.73,36.86],
      "盘锦":[122.070714,41.119997],
      "长治":[113.08,36.18],
      "深圳":[114.07,22.62],
      "珠海":[113.52,22.3],
      "宿迁":[118.3,33.96],
      "咸阳":[108.72,34.36],
      "铜川":[109.11,35.09],
      "平度":[119.97,36.77],
      "佛山":[113.11,23.05],
      "海口":[110.35,20.02],
      "江门":[113.06,22.61],
      "章丘":[117.53,36.72],
      "肇庆":[112.44,23.05],
      "大连":[121.62,38.92],
      "临汾":[111.5,36.08],
      "吴江":[120.63,31.16],
      "石嘴山":[106.39,39.04],
      "沈阳":[123.38,41.8],
      "苏州":[120.62,31.32],
      "茂名":[110.88,21.68],
      "嘉兴":[120.76,30.77],
      "长春":[125.35,43.88],
      "胶州":[120.03336,36.264622],
      "银川":[106.27,38.47],
      "张家港":[120.555821,31.875428],
      "三门峡":[111.19,34.76],
      "锦州":[121.15,41.13],
      "南昌":[115.89,28.68],
      "柳州":[109.4,24.33],
      "三亚":[109.511909,18.252847],
      "自贡":[104.778442,29.33903],
      "吉林":[126.57,43.87],
      "阳江":[111.95,21.85],
      "泸州":[105.39,28.91],
      "西宁":[101.74,36.56],
      "宜宾":[104.56,29.77],
      "呼和浩特":[111.65,40.82],
      "成都":[104.06,30.67],
      "大同":[113.3,40.12],
      "镇江":[119.44,32.2],
      "桂林":[110.28,25.29],
      "张家界":[110.479191,29.117096],
      "宜兴":[119.82,31.36],
      "北海":[109.12,21.49],
      "西安":[108.95,34.27],
      "金坛":[119.56,31.74],
      "东营":[118.49,37.46],
      "牡丹江":[129.58,44.6],
      "遵义":[106.9,27.7],
      "绍兴":[120.58,30.01],
      "扬州":[119.42,32.39],
      "常州":[119.95,31.79],
      "潍坊":[119.1,36.62],
      "重庆":[106.54,29.59],
      "台州":[121.420757,28.656386],
      "南京":[118.78,32.04],
      "滨州":[118.03,37.36],
      "贵阳":[106.71,26.57],
      "无锡":[120.29,31.59],
      "本溪":[123.73,41.3],
      "克拉玛依":[84.77,45.59],
      "渭南":[109.5,34.52],
      "马鞍山":[118.48,31.56],
      "宝鸡":[107.15,34.38],
      "焦作":[113.21,35.24],
      "句容":[119.16,31.95],
      "北京":[116.46,39.92],
      "徐州":[117.2,34.26],
      "衡水":[115.72,37.72],
      "包头":[110,40.58],
      "绵阳":[104.73,31.48],
      "乌鲁木齐":[87.68,43.77],
      "枣庄":[117.57,34.86],
      "杭州":[120.19,30.26],
      "淄博":[118.05,36.78],
      "鞍山":[122.85,41.12],
      "溧阳":[119.48,31.43],
      "库尔勒":[86.06,41.68],
      "安阳":[114.35,36.1],
      "开封":[114.35,34.79],
      "济南":[117,36.65],
      "德阳":[104.37,31.13],
      "温州":[120.65,28.01],
      "九江":[115.97,29.71],
      "邯郸":[114.47,36.6],
      "临安":[119.72,30.23],
      "兰州":[103.73,36.03],
      "沧州":[116.83,38.33],
      "临沂":[118.35,35.05],
      "南充":[106.110698,30.837793],
      "天津":[117.2,39.13],
      "富阳":[119.95,30.07],
      "泰安":[117.13,36.18],
      "诸暨":[120.23,29.71],
      "郑州":[113.65,34.76],
      "哈尔滨":[126.63,45.75],
      "聊城":[115.97,36.45],
      "芜湖":[118.38,31.33],
      "唐山":[118.02,39.63],
      "平顶山":[113.29,33.75],
      "邢台":[114.48,37.05],
      "德州":[116.29,37.45],
      "济宁":[116.59,35.38],
      "荆州":[112.239741,30.335165],
      "宜昌":[111.3,30.7],
      "义乌":[120.06,29.32],
      "丽水":[119.92,28.45],
      "洛阳":[112.44,34.7],
      "秦皇岛":[119.57,39.95],
      "株洲":[113.16,27.83],
      "石家庄":[114.48,38.03],
      "莱芜":[117.67,36.19],
      "常德":[111.69,29.05],
      "保定":[115.48,38.85],
      "湘潭":[112.91,27.87],
      "金华":[119.64,29.12],
      "岳阳":[113.09,29.37],
      "长沙":[113,28.21],
      "衢州":[118.88,28.97],
      "廊坊":[116.7,39.53],
      "菏泽":[115.480656,35.23375],
      "合肥":[117.27,31.86],
      "武汉":[114.31,30.52],
      "大庆":[125.03,46.58]
  };
  
  var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
        res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
              });
          }
      }
      return res;
  };
  
  option = {
    title: {
        text: '各地区岗位数量分布',
        textStyle: {
            color: '#fff',
            // 添加href属性，指定点击后跳转的URL
            href: 'https://www.baidu.com' // 替换为你希望跳转的URL
        },
        // 使用点击事件监听
        events: {
            // 点击事件处理函数
            click: function () {
                // 获取标题中的href属性值
                var href = this.getOption().title.href;
                // 判断是否有有效的URL
                if (href) {
                    // 执行跳转
                    window.location.href = href;
                }
            }
        }
    },
      tooltip: {
        trigger: 'item',
     formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    visualMap: {
      pieces: [
        {gt: 3000}, 
        {gt: 1000, lte: 3000},      
        {gt: 300, lte: 1000},
        {gt: 100, lte: 300},
        {lt: 100}// (-Infinity, 5)
      ],
          color: ['#d94e5d','#eac736','#50a3ba'],
          left: 'right',
          top: 'top',
          orient: 'vertical',
          textStyle: {
              color: '#fff'
          }
      },
      geo: {
        map: "china",
        label: {
          emphasis: {
            show: true,
            color: "#fff"
          }
        },
        // 把中国地图放大了1.2倍
        zoom: 1.1,
        center: [107.7539, 30.1904],
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "rgba(20, 41, 87,0.6)",
            borderColor: "#195BB9",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        }
      },
      series: [
          {
              name: '岗位数量',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: convertData([
              {'name': '齐齐哈尔', 'value': 1}, {'name': '广安', 'value': 1}, {'name': '平凉', 'value': 1},
               {'name': '常德', 'value': 1}, {'name': '萍乡', 'value': 1}, {'name': '宿迁', 'value': 1}, 
               {'name': '营口', 'value': 1}, {'name': '眉山', 'value': 1}, {'name': '许昌', 'value': 1}, 
               {'name': '运城', 'value': 1}, {'name': '天水', 'value': 1}, {'name': '通化', 'value': 1}, 
               {'name': '大庆', 'value': 1}, {'name': '大兴安岭', 'value': 1}, {'name': '四川省', 'value': 1}, 
               {'name': '梅州', 'value': 1}, {'name': '延边', 'value': 1}, {'name': '百色', 'value': 1}, 
               {'name': '白银', 'value': 1}, {'name': '永州', 'value': 1}, {'name': '汉中', 'value': 1}, 
               {'name': '江西省', 'value': 1}, {'name': '朔州', 'value': 1}, {'name': '晋城', 'value': 1}, 
               {'name': '浙江省', 'value': 1}, {'name': '淄博', 'value': 1}, {'name': '新余', 'value': 1}, 
               {'name': '淮安', 'value': 1}, {'name': '文山', 'value': 1}, {'name': '清远', 'value': 1}, 
               {'name': '承德', 'value': 1}, {'name': '湖南省', 'value': 1}, {'name': '玉溪', 'value': 1}, 
               {'name': '忻州', 'value': 1}, {'name': '通辽', 'value': 1}, {'name': '喀什地区', 'value': 1}, 
               {'name': '赤峰', 'value': 1}, {'name': '邢台', 'value': 1}, {'name': '十堰', 'value': 1}, 
               {'name': '包头', 'value': 1}, {'name': '唐山', 'value': 1}, {'name': '韶关', 'value': 1}, 
               {'name': '佳木斯', 'value': 1}, {'name': '马鞍山', 'value': 1}, {'name': '伊春', 'value': 1}, 
               {'name': '阳泉', 'value': 1}, {'name': '九江', 'value': 1}, {'name': '乌兰察布', 'value': 1}, 
               {'name': '黄冈', 'value': 1}, {'name': '丹东', 'value': 1}, {'name': '临沂', 'value': 1}, 
               {'name': '临夏', 'value': 1}, {'name': '东营', 'value': 1}, {'name': '黑河', 'value': 1}, 
               {'name': '鹤岗', 'value': 1}, {'name': '阳江', 'value': 1}, {'name': '雄安新区', 'value': 1}, 
               {'name': '武威', 'value': 1}, {'name': '鄂尔多斯', 'value': 1}, {'name': '防城港', 'value': 1}, 
               {'name': '咸阳', 'value': 1}, {'name': '吐鲁番', 'value': 1}, {'name': '咸宁', 'value': 1}, 
               {'name': '长治', 'value': 1}, {'name': '邯郸', 'value': 2}, {'name': '临汾', 'value': 2}, 
               {'name': '晋中', 'value': 2}, {'name': '景德镇', 'value': 2}, {'name': '鄂州', 'value': 2}, 
               {'name': '黄石', 'value': 2}, {'name': '黔西南', 'value': 2}, {'name': '上饶', 'value': 2}, 
               {'name': '大同', 'value': 2}, {'name': '台州', 'value': 2}, {'name': '岳阳', 'value': 2}, {'name': '威海', 'value': 2},
                {'name': '荆州', 'value': 2}, {'name': '舟山', 'value': 2}, 
                {'name': '秦皇岛', 'value': 2}, {'name': '宿州', 'value': 2}, {'name': '开封', 'value': 2}, 
                {'name': '崇左', 'value': 2}, {'name': '张家口', 'value': 2}, {'name': '安阳', 'value': 2}, 
                {'name': '德阳', 'value': 2}, {'name': '衢州', 'value': 2}, {'name': '烟台', 'value': 2},
                 {'name': '克拉玛依', 'value': 2}, {'name': '济宁', 'value': 3}, {'name': '衡阳', 'value': 3},
                  {'name': '陕西省', 'value': 3}, {'name': '银川', 'value': 3}, {'name': '柳州', 'value': 3},
                   {'name': '太仓', 'value': 3}, {'name': '广东省', 'value': 3}, {'name': '吉林', 'value': 4},
                    {'name': '江苏省', 'value': 4}, {'name': '拉萨', 'value': 4}, {'name': '鞍山', 'value': 4}, 
                    {'name': '丽水', 'value': 4}, {'name': '海宁', 'value': 4}, {'name': '绍兴', 'value': 4},
                     {'name': '张家港', 'value': 4}, {'name': '绵阳', 'value': 5},
              {'name': '新乡', 'value': 5}, {'name': '廊坊', 'value': 5}, {'name': '保定', 'value': 6}, 
              {'name': '湖州', 'value': 6}, {'name': '宁德', 'value': 6}, {'name': '连云港', 'value': 6}, 
              {'name': '湘潭', 'value': 6}, {'name': '洛阳', 'value': 7}, {'name': '肇庆', 'value': 7}, 
              {'name': '宜昌', 'value': 8}, {'name': '桂林', 'value': 8}, {'name': '金华', 'value': 8}, 
              {'name': '泉州', 'value': 8}, {'name': '海口', 'value': 9}, {'name': '盐城', 'value': 9}, 
              {'name': '泰州', 'value': 9}, {'name': '镇江', 'value': 10}, {'name': '徐州', 'value': 10}, 
              {'name': '西宁', 'value': 11}, {'name': '乌鲁木齐', 'value': 11}, {'name': '株洲', 'value': 11},
               {'name': '呼和浩特', 'value': 11}, {'name': '常熟', 'value': 11}, {'name': '兰州', 'value': 11}, 
               {'name': '湛江', 'value': 12}, {'name': '郴州', 'value': 12}, {'name': '襄阳', 'value': 13}, 
               {'name': '芜湖', 'value': 13}, {'name': '江门', 'value': 14}, {'name': '汕头', 'value': 15}, 
               {'name': '哈尔滨', 'value': 15}, {'name': '温州', 'value': 18}, {'name': '太原', 'value': 18}, 
               {'name': '石家庄', 'value': 19}, {'name': '南通', 'value': 20}, {'name': '扬州', 'value': 21}, 
               {'name': '厦门', 'value': 23}, {'name': '中山', 'value': 23}, {'name': '南宁', 'value': 24}, 
               {'name': '长春', 'value': 25}, {'name': '贵阳', 'value': 31}, {'name': '济南', 'value': 32}, 
               {'name': '惠州', 'value': 32}, {'name': '嘉兴', 'value': 33}, {'name': '福州', 'value': 36}, 
               {'name': '南昌', 'value': 37}, {'name': '青岛', 'value': 39}, {'name': '沈阳', 'value': 40}, 
               {'name': '昆明', 'value': 55}, {'name': '天津', 'value': 60}, {'name': '昆山', 'value': 72}, 
               {'name': ' 郑州', 'value': 79}, {'name': '常州', 'value': 80}, {'name': '大连', 'value': 98}, 
               {'name': '佛山', 'value': 106}, {'name': '宁波', 'value': 128}, {'name': '重庆', 'value': 130}, 
               {'name': '合肥', 'value': 134}, {'name': '珠海', 'value': 143}, {'name': '西安', 'value': 155}, 
               {'name': '长沙', 'value': 156}, {'name': '无锡', 'value': 161}, {'name': '东莞', 'value': 189}, 
               {'name': '杭州', 'value': 336}, {'name': '南京', 'value': 359}, {'name': '成都', 'value': 376}, 
               {'name': '苏州', 'value': 400}, {'name': '武汉', 'value': 523}, {'name': '北京', 'value': 654}, 
                {'name': '广州', 'value': 774}, {'name': '深圳', 'value': 1185}, {'name': '上海', 'value': 1436}
              ]),
              symbolSize: 12,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                  emphasis: {
                      borderColor: '#fff',
                      borderWidth: 1
                  }
              }
          }
      ]
  };
  
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


/* 
// 模拟飞行路线模块地图模块
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "西安" }, { name: "拉萨", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 把中国地图放大了1.2倍
      zoom: 1.1,
      center: [107.7539, 30.1904],
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

*/



