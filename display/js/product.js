(function() {


    
    var myChart = echarts.init(document.querySelector(".wordCloud .photo"));
    var options = {
      series: [
        {
          type: 'wordCloud',
          name: '',
          shape: 'circle',
          rotationRange: [-90, 90],
          rotationStep: 30,
          girdSize: 15,
          sizeRange: [10, 70],
          color: function() {
            return 'rgb(' +
                Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) + ')'
          },
          "data": [
            {
                "name": "\u4ea7\u54c1",
                "value": 1119,
                "textStyle": {
                    "normal": {
                        "color": "rgb(152,92,73)"
                    }
                }
            },
            {
                "name": "\u9700\u6c42",
                "value": 311,
                "textStyle": {
                    "normal": {
                        "color": "rgb(89,53,38)"
                    }
                }
            },
            {
                "name": "\u5206\u6790",
                "value": 247,
                "textStyle": {
                    "normal": {
                        "color": "rgb(6,30,63)"
                    }
                }
            },
            {
                "name": "\u8bbe\u8ba1",
                "value": 239,
                "textStyle": {
                    "normal": {
                        "color": "rgb(75,48,111)"
                    }
                }
            },
            {
                "name": "\u8d1f\u8d23",
                "value": 220,
                "textStyle": {
                    "normal": {
                        "color": "rgb(28,52,99)"
                    }
                }
            },
            {
                "name": "\u80fd\u529b",
                "value": 190,
                "textStyle": {
                    "normal": {
                        "color": "rgb(12,85,158)"
                    }
                }
            },
            {
                "name": "\u5de5\u4f5c",
                "value": 182,
                "textStyle": {
                    "normal": {
                        "color": "rgb(139,92,134)"
                    }
                }
            },
            {
                "name": "\u7528\u6237",
                "value": 176,
                "textStyle": {
                    "normal": {
                        "color": "rgb(129,79,154)"
                    }
                }
            },
            {
                "name": "\u5e02\u573a",
                "value": 164,
                "textStyle": {
                    "normal": {
                        "color": "rgb(100,68,128)"
                    }
                }
            },
            {
                "name": "\u5f00\u53d1",
                "value": 156,
                "textStyle": {
                    "normal": {
                        "color": "rgb(100,148,123)"
                    }
                }
            },
            {
                "name": "\u9879\u76ee",
                "value": 155,
                "textStyle": {
                    "normal": {
                        "color": "rgb(44,36,15)"
                    }
                }
            },
            {
                "name": "\u76f8\u5173",
                "value": 143,
                "textStyle": {
                    "normal": {
                        "color": "rgb(91,43,32)"
                    }
                }
            },
            {
                "name": "\u7ecf\u9a8c",
                "value": 121,
                "textStyle": {
                    "normal": {
                        "color": "rgb(7,84,64)"
                    }
                }
            },
            {
                "name": "\u6570\u636e",
                "value": 117,
                "textStyle": {
                    "normal": {
                        "color": "rgb(157,160,26)"
                    }
                }
            },
            {
                "name": "\u7ba1\u7406",
                "value": 109,
                "textStyle": {
                    "normal": {
                        "color": "rgb(139,50,125)"
                    }
                }
            },
            {
                "name": "\u6587\u6863",
                "value": 104,
                "textStyle": {
                    "normal": {
                        "color": "rgb(157,97,72)"
                    }
                }
            },
            {
                "name": "\u89c4\u5212",
                "value": 97,
                "textStyle": {
                    "normal": {
                        "color": "rgb(157,101,100)"
                    }
                }
            },
            {
                "name": "\u6c9f\u901a",
                "value": 92,
                "textStyle": {
                    "normal": {
                        "color": "rgb(12,57,146)"
                    }
                }
            },
            {
                "name": "\u4e1a\u52a1",
                "value": 91,
                "textStyle": {
                    "normal": {
                        "color": "rgb(116,148,95)"
                    }
                }
            },
            {
                "name": "\u516c\u53f8",
                "value": 90,
                "textStyle": {
                    "normal": {
                        "color": "rgb(52,2,58)"
                    }
                }
            },
            {
                "name": "\u529f\u80fd",
                "value": 88,
                "textStyle": {
                    "normal": {
                        "color": "rgb(108,143,49)"
                    }
                }
            },
            {
                "name": "\u65b9\u6848",
                "value": 86,
                "textStyle": {
                    "normal": {
                        "color": "rgb(101,113,5)"
                    }
                }
            },
            {
                "name": "\u4efb\u804c",
                "value": 85,
                "textStyle": {
                    "normal": {
                        "color": "rgb(96,8,67)"
                    }
                }
            },
            {
                "name": "\u8c03\u7814",
                "value": 85,
                "textStyle": {
                    "normal": {
                        "color": "rgb(121,152,157)"
                    }
                }
            },
            {
                "name": "\u8fd0\u8425",
                "value": 84,
                "textStyle": {
                    "normal": {
                        "color": "rgb(95,1,130)"
                    }
                }
            },
            {
                "name": "\u884c\u4e1a",
                "value": 84,
                "textStyle": {
                    "normal": {
                        "color": "rgb(112,143,136)"
                    }
                }
            },
            {
                "name": "\u534f\u8c03",
                "value": 82,
                "textStyle": {
                    "normal": {
                        "color": "rgb(109,78,56)"
                    }
                }
            },
            {
                "name": "\u5ba2\u6237",
                "value": 81,
                "textStyle": {
                    "normal": {
                        "color": "rgb(5,135,108)"
                    }
                }
            },
            {
                "name": "\u56e2\u961f",
                "value": 79,
                "textStyle": {
                    "normal": {
                        "color": "rgb(149,25,48)"
                    }
                }
            },
            {
                "name": "\u6280\u672f",
                "value": 68,
                "textStyle": {
                    "normal": {
                        "color": "rgb(159,139,38)"
                    }
                }
            },
            {
                "name": "\u7814\u53d1",
                "value": 67,
                "textStyle": {
                    "normal": {
                        "color": "rgb(11,141,126)"
                    }
                }
            },
            {
                "name": "\u5236\u5b9a",
                "value": 67,
                "textStyle": {
                    "normal": {
                        "color": "rgb(136,78,44)"
                    }
                }
            },
            {
                "name": "\u4f18\u5316",
                "value": 67,
                "textStyle": {
                    "normal": {
                        "color": "rgb(155,38,71)"
                    }
                }
            },
            {
                "name": "\u4f18\u5148",
                "value": 66,
                "textStyle": {
                    "normal": {
                        "color": "rgb(96,105,137)"
                    }
                }
            },
            {
                "name": "\u7ecf\u7406",
                "value": 66,
                "textStyle": {
                    "normal": {
                        "color": "rgb(27,63,86)"
                    }
                }
            },
            {
                "name": "\u6d4b\u8bd5",
                "value": 63,
                "textStyle": {
                    "normal": {
                        "color": "rgb(142,57,49)"
                    }
                }
            },
            {
                "name": "\u6d41\u7a0b",
                "value": 63,
                "textStyle": {
                    "normal": {
                        "color": "rgb(102,59,9)"
                    }
                }
            },
            {
                "name": "\u90e8\u95e8",
                "value": 62,
                "textStyle": {
                    "normal": {
                        "color": "rgb(44,103,57)"
                    }
                }
            },
            {
                "name": "\u804c\u80fd",
                "value": 61,
                "textStyle": {
                    "normal": {
                        "color": "rgb(106,120,85)"
                    }
                }
            },
            {
                "name": "\u7c7b\u522b",
                "value": 57,
                "textStyle": {
                    "normal": {
                        "color": "rgb(35,46,92)"
                    }
                }
            },
            {
                "name": "\u539f\u578b",
                "value": 57,
                "textStyle": {
                    "normal": {
                        "color": "rgb(82,115,156)"
                    }
                }
            },
            {
                "name": "\u4ea7\u54c1\u8bbe\u8ba1",
                "value": 53,
                "textStyle": {
                    "normal": {
                        "color": "rgb(9,157,53)"
                    }
                }
            },
            {
                "name": "\u5177\u5907",
                "value": 51,
                "textStyle": {
                    "normal": {
                        "color": "rgb(34,133,84)"
                    }
                }
            },
            {
                "name": "\u4f53\u9a8c",
                "value": 50,
                "textStyle": {
                    "normal": {
                        "color": "rgb(128,70,9)"
                    }
                }
            },
            {
                "name": "\u63a8\u5e7f",
                "value": 50,
                "textStyle": {
                    "normal": {
                        "color": "rgb(18,64,156)"
                    }
                }
            },
            {
                "name": "\u53d1\u5c55",
                "value": 49,
                "textStyle": {
                    "normal": {
                        "color": "rgb(50,77,21)"
                    }
                }
            },
            {
                "name": "\u719f\u6089",
                "value": 48,
                "textStyle": {
                    "normal": {
                        "color": "rgb(109,4,95)"
                    }
                }
            },
            {
                "name": "\u9500\u552e",
                "value": 46,
                "textStyle": {
                    "normal": {
                        "color": "rgb(16,49,159)"
                    }
                }
            },
            {
                "name": "\u4e0a\u7ebf",
                "value": 44,
                "textStyle": {
                    "normal": {
                        "color": "rgb(41,150,13)"
                    }
                }
            },
            {
                "name": "\u8d28\u91cf",
                "value": 44,
                "textStyle": {
                    "normal": {
                        "color": "rgb(49,37,140)"
                    }
                }
            },
            {
                "name": "\u5b66\u5386",
                "value": 42,
                "textStyle": {
                    "normal": {
                        "color": "rgb(39,78,21)"
                    }
                }
            },
            {
                "name": "\u8fdb\u5ea6",
                "value": 42,
                "textStyle": {
                    "normal": {
                        "color": "rgb(121,93,49)"
                    }
                }
            },
            {
                "name": "\u5468\u671f",
                "value": 42,
                "textStyle": {
                    "normal": {
                        "color": "rgb(67,77,73)"
                    }
                }
            },
            {
                "name": "\u5408\u4f5c",
                "value": 41,
                "textStyle": {
                    "normal": {
                        "color": "rgb(25,141,95)"
                    }
                }
            },
            {
                "name": "\u672c\u79d1",
                "value": 41,
                "textStyle": {
                    "normal": {
                        "color": "rgb(0,30,124)"
                    }
                }
            },
            {
                "name": "\u4ee5\u4e0a\u5b66\u5386",
                "value": 41,
                "textStyle": {
                    "normal": {
                        "color": "rgb(25,149,144)"
                    }
                }
            },
            {
                "name": "\u4e0a\u5b66",
                "value": 41,
                "textStyle": {
                    "normal": {
                        "color": "rgb(93,62,76)"
                    }
                }
            },
            {
                "name": "\u5e73\u53f0",
                "value": 40,
                "textStyle": {
                    "normal": {
                        "color": "rgb(21,19,127)"
                    }
                }
            },
            {
                "name": "\u7f16\u5199",
                "value": 40,
                "textStyle": {
                    "normal": {
                        "color": "rgb(52,74,100)"
                    }
                }
            },
            {
                "name": "\u6539\u8fdb",
                "value": 40,
                "textStyle": {
                    "normal": {
                        "color": "rgb(44,141,154)"
                    }
                }
            },
            {
                "name": "\u8ba1\u5212",
                "value": 39,
                "textStyle": {
                    "normal": {
                        "color": "rgb(143,71,11)"
                    }
                }
            },
            {
                "name": "\u6536\u96c6",
                "value": 39,
                "textStyle": {
                    "normal": {
                        "color": "rgb(49,124,40)"
                    }
                }
            },
            {
                "name": "\u8fed\u4ee3",
                "value": 38,
                "textStyle": {
                    "normal": {
                        "color": "rgb(88,78,120)"
                    }
                }
            },
            {
                "name": "\u786e\u4fdd",
                "value": 38,
                "textStyle": {
                    "normal": {
                        "color": "rgb(77,160,14)"
                    }
                }
            },
            {
                "name": "\u64b0\u5199",
                "value": 38,
                "textStyle": {
                    "normal": {
                        "color": "rgb(23,15,79)"
                    }
                }
            },
            {
                "name": "\u5305\u62ec",
                "value": 38,
                "textStyle": {
                    "normal": {
                        "color": "rgb(119,50,136)"
                    }
                }
            },
            {
                "name": "\u89e3\u51b3",
                "value": 37,
                "textStyle": {
                    "normal": {
                        "color": "rgb(144,127,108)"
                    }
                }
            },
            {
                "name": "\u7b56\u5212",
                "value": 37,
                "textStyle": {
                    "normal": {
                        "color": "rgb(85,74,135)"
                    }
                }
            },
            {
                "name": "\u4ea7\u54c1\u5f00\u53d1",
                "value": 36,
                "textStyle": {
                    "normal": {
                        "color": "rgb(31,86,40)"
                    }
                }
            },
            {
                "name": "\u53cd\u9988",
                "value": 36,
                "textStyle": {
                    "normal": {
                        "color": "rgb(118,85,97)"
                    }
                }
            },
            {
                "name": "\u8f6f\u4ef6",
                "value": 36,
                "textStyle": {
                    "normal": {
                        "color": "rgb(30,36,21)"
                    }
                }
            },
            {
                "name": "\u8ddf\u8e2a",
                "value": 36,
                "textStyle": {
                    "normal": {
                        "color": "rgb(104,157,131)"
                    }
                }
            },
            {
                "name": "\u63d0\u4f9b",
                "value": 35,
                "textStyle": {
                    "normal": {
                        "color": "rgb(131,97,33)"
                    }
                }
            },
            {
                "name": "\u72ec\u7acb",
                "value": 35,
                "textStyle": {
                    "normal": {
                        "color": "rgb(13,68,150)"
                    }
                }
            },
            {
                "name": "\u903b\u8f91",
                "value": 35,
                "textStyle": {
                    "normal": {
                        "color": "rgb(24,2,15)"
                    }
                }
            },
            {
                "name": "\u63d0\u51fa",
                "value": 35,
                "textStyle": {
                    "normal": {
                        "color": "rgb(13,98,60)"
                    }
                }
            },
            {
                "name": "\u8054\u7f51",
                "value": 35,
                "textStyle": {
                    "normal": {
                        "color": "rgb(146,146,11)"
                    }
                }
            },
            {
                "name": "\u914d\u5408",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(133,45,85)"
                    }
                }
            },
            {
                "name": "\u63a8\u52a8",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(46,100,19)"
                    }
                }
            },
            {
                "name": "\u6301\u7eed",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(9,69,37)"
                    }
                }
            },
            {
                "name": "\u4e3b\u7ba1",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(139,79,79)"
                    }
                }
            },
            {
                "name": "\u5b9a\u4ea7",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(149,87,41)"
                    }
                }
            },
            {
                "name": "\u7b56\u7565",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(93,93,60)"
                    }
                }
            },
            {
                "name": "\u8d44\u6e90",
                "value": 34,
                "textStyle": {
                    "normal": {
                        "color": "rgb(6,39,9)"
                    }
                }
            },
            {
                "name": "\u4ea4\u4e92",
                "value": 33,
                "textStyle": {
                    "normal": {
                        "color": "rgb(17,35,46)"
                    }
                }
            },
            {
                "name": "\u8fc7\u7a0b",
                "value": 32,
                "textStyle": {
                    "normal": {
                        "color": "rgb(88,99,76)"
                    }
                }
            },
            {
                "name": "\u7814\u7a76",
                "value": 32,
                "textStyle": {
                    "normal": {
                        "color": "rgb(38,68,99)"
                    }
                }
            },
            {
                "name": "\u7ade\u4e89",
                "value": 32,
                "textStyle": {
                    "normal": {
                        "color": "rgb(48,55,1)"
                    }
                }
            },
            {
                "name": "\u53c2\u4e0e",
                "value": 31,
                "textStyle": {
                    "normal": {
                        "color": "rgb(99,146,118)"
                    }
                }
            },
            {
                "name": "\u5173\u952e",
                "value": 30,
                "textStyle": {
                    "normal": {
                        "color": "rgb(6,99,48)"
                    }
                }
            },
            {
                "name": "\u5b9e\u65bd",
                "value": 30,
                "textStyle": {
                    "normal": {
                        "color": "rgb(14,23,71)"
                    }
                }
            },
            {
                "name": "\u7cfb\u7edf",
                "value": 30,
                "textStyle": {
                    "normal": {
                        "color": "rgb(39,13,67)"
                    }
                }
            },
            {
                "name": "\u521b\u65b0",
                "value": 29,
                "textStyle": {
                    "normal": {
                        "color": "rgb(126,19,160)"
                    }
                }
            },
            {
                "name": "\u5c97\u4f4d",
                "value": 29,
                "textStyle": {
                    "normal": {
                        "color": "rgb(29,111,100)"
                    }
                }
            },
            {
                "name": "\u601d\u7ef4",
                "value": 29,
                "textStyle": {
                    "normal": {
                        "color": "rgb(98,78,68)"
                    }
                }
            },
            {
                "name": "\u4e92\u8054",
                "value": 29,
                "textStyle": {
                    "normal": {
                        "color": "rgb(75,127,9)"
                    }
                }
            },
            {
                "name": "\u4e92\u8054\u7f51",
                "value": 29,
                "textStyle": {
                    "normal": {
                        "color": "rgb(111,122,19)"
                    }
                }
            },
            {
                "name": "\u6570\u636e\u5206\u6790",
                "value": 28,
                "textStyle": {
                    "normal": {
                        "color": "rgb(7,157,154)"
                    }
                }
            },
            {
                "name": "\u4fe1\u606f",
                "value": 28,
                "textStyle": {
                    "normal": {
                        "color": "rgb(53,51,49)"
                    }
                }
            },
            {
                "name": "\u76ee\u7684",
                "value": 27,
                "textStyle": {
                    "normal": {
                        "color": "rgb(108,68,133)"
                    }
                }
            }
        ],
        },
      ],
      legend: [
        {
          data: [],
        },
      ],
    };
  
    myChart.setOption(options);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
    myChart.resize();
    });
  })();