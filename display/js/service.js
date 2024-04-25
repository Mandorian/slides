(function() {

    
    var myChart = echarts.init(document.querySelector(".wordCloud .photo"));
    var options = {
      "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "right",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true
            }
        }
      },
      "_index_flag": 4371102,
      "tooltip": {},
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
                "name": "\u5ba2\u6237",
                "value": 2509,
                "textStyle": {
                    "normal": {
                        "color": "rgb(1,28,72)"
                    }
                }
            },
            {
                "name": "\u5de5\u4f5c",
                "value": 1606,
                "textStyle": {
                    "normal": {
                        "color": "rgb(44,123,62)"
                    }
                }
            },
            {
                "name": "\u5ba2\u670d",
                "value": 1042,
                "textStyle": {
                    "normal": {
                        "color": "rgb(143,114,95)"
                    }
                }
            },
            {
                "name": "\u80fd\u529b",
                "value": 1040,
                "textStyle": {
                    "normal": {
                        "color": "rgb(84,46,48)"
                    }
                }
            },
            {
                "name": "\u670d\u52a1",
                "value": 903,
                "textStyle": {
                    "normal": {
                        "color": "rgb(10,94,7)"
                    }
                }
            },
            {
                "name": "\u8d1f\u8d23",
                "value": 831,
                "textStyle": {
                    "normal": {
                        "color": "rgb(7,128,49)"
                    }
                }
            },
            {
                "name": "\u6570\u636e",
                "value": 753,
                "textStyle": {
                    "normal": {
                        "color": "rgb(43,135,46)"
                    }
                }
            },
            {
                "name": "\u6c9f\u901a",
                "value": 675,
                "textStyle": {
                    "normal": {
                        "color": "rgb(87,159,6)"
                    }
                }
            },
            {
                "name": "\u516c\u53f8",
                "value": 610,
                "textStyle": {
                    "normal": {
                        "color": "rgb(36,25,18)"
                    }
                }
            },
            {
                "name": "\u76f8\u5173",
                "value": 576,
                "textStyle": {
                    "normal": {
                        "color": "rgb(84,54,38)"
                    }
                }
            },
            {
                "name": "\u4e1a\u52a1",
                "value": 563,
                "textStyle": {
                    "normal": {
                        "color": "rgb(125,89,47)"
                    }
                }
            },
            {
                "name": "\u7ba1\u7406",
                "value": 547,
                "textStyle": {
                    "normal": {
                        "color": "rgb(34,6,121)"
                    }
                }
            },
            {
                "name": "\u7ecf\u9a8c",
                "value": 540,
                "textStyle": {
                    "normal": {
                        "color": "rgb(150,80,128)"
                    }
                }
            },
            {
                "name": "\u9500\u552e",
                "value": 539,
                "textStyle": {
                    "normal": {
                        "color": "rgb(101,64,34)"
                    }
                }
            },
            {
                "name": "\u4efb\u804c",
                "value": 457,
                "textStyle": {
                    "normal": {
                        "color": "rgb(89,73,133)"
                    }
                }
            },
            {
                "name": "\u5206\u6790",
                "value": 449,
                "textStyle": {
                    "normal": {
                        "color": "rgb(65,84,137)"
                    }
                }
            },
            {
                "name": "\u56e2\u961f",
                "value": 425,
                "textStyle": {
                    "normal": {
                        "color": "rgb(95,153,101)"
                    }
                }
            },
            {
                "name": "\u57f9\u8bad",
                "value": 406,
                "textStyle": {
                    "normal": {
                        "color": "rgb(8,64,32)"
                    }
                }
            },
            {
                "name": "\u804c\u80fd",
                "value": 395,
                "textStyle": {
                    "normal": {
                        "color": "rgb(132,84,68)"
                    }
                }
            },
            {
                "name": "\u7c7b\u522b",
                "value": 389,
                "textStyle": {
                    "normal": {
                        "color": "rgb(66,61,48)"
                    }
                }
            },
            {
                "name": "\u63d0\u4f9b",
                "value": 383,
                "textStyle": {
                    "normal": {
                        "color": "rgb(93,102,158)"
                    }
                }
            },
            {
                "name": "\u5b66\u5386",
                "value": 379,
                "textStyle": {
                    "normal": {
                        "color": "rgb(3,53,62)"
                    }
                }
            },
            {
                "name": "\u5c97\u4f4d",
                "value": 347,
                "textStyle": {
                    "normal": {
                        "color": "rgb(9,159,136)"
                    }
                }
            },
            {
                "name": "\u552e\u540e",
                "value": 339,
                "textStyle": {
                    "normal": {
                        "color": "rgb(138,132,80)"
                    }
                }
            },
            {
                "name": "\u7535\u8bdd",
                "value": 338,
                "textStyle": {
                    "normal": {
                        "color": "rgb(110,52,92)"
                    }
                }
            },
            {
                "name": "\u4f18\u5148",
                "value": 324,
                "textStyle": {
                    "normal": {
                        "color": "rgb(154,95,11)"
                    }
                }
            },
            {
                "name": "\u4e13\u4e1a",
                "value": 306,
                "textStyle": {
                    "normal": {
                        "color": "rgb(59,112,34)"
                    }
                }
            },
            {
                "name": "\u54a8\u8be2",
                "value": 306,
                "textStyle": {
                    "normal": {
                        "color": "rgb(80,57,34)"
                    }
                }
            },
            {
                "name": "\u4ea7\u54c1",
                "value": 302,
                "textStyle": {
                    "normal": {
                        "color": "rgb(126,93,40)"
                    }
                }
            },
            {
                "name": "\u7ef4\u62a4",
                "value": 292,
                "textStyle": {
                    "normal": {
                        "color": "rgb(92,118,18)"
                    }
                }
            },
            {
                "name": "\u4ee5\u4e0a\u5b66\u5386",
                "value": 288,
                "textStyle": {
                    "normal": {
                        "color": "rgb(48,16,23)"
                    }
                }
            },
            {
                "name": "\u4e0a\u5b66",
                "value": 288,
                "textStyle": {
                    "normal": {
                        "color": "rgb(37,128,96)"
                    }
                }
            },
            {
                "name": "\u90e8\u95e8",
                "value": 281,
                "textStyle": {
                    "normal": {
                        "color": "rgb(20,7,87)"
                    }
                }
            },
            {
                "name": "\u6d41\u7a0b",
                "value": 281,
                "textStyle": {
                    "normal": {
                        "color": "rgb(77,70,69)"
                    }
                }
            },
            {
                "name": "\u5173\u952e",
                "value": 276,
                "textStyle": {
                    "normal": {
                        "color": "rgb(132,3,53)"
                    }
                }
            },
            {
                "name": "\u529e\u516c",
                "value": 274,
                "textStyle": {
                    "normal": {
                        "color": "rgb(99,49,129)"
                    }
                }
            },
            {
                "name": "\u798f\u5229",
                "value": 274,
                "textStyle": {
                    "normal": {
                        "color": "rgb(115,145,50)"
                    }
                }
            },
            {
                "name": "\u4fe1\u606f",
                "value": 273,
                "textStyle": {
                    "normal": {
                        "color": "rgb(121,95,91)"
                    }
                }
            },
            {
                "name": "\u64cd\u4f5c",
                "value": 268,
                "textStyle": {
                    "normal": {
                        "color": "rgb(100,27,123)"
                    }
                }
            },
            {
                "name": "\u4e13\u5458",
                "value": 265,
                "textStyle": {
                    "normal": {
                        "color": "rgb(106,91,140)"
                    }
                }
            },
            {
                "name": "\u5173\u952e\u5b57",
                "value": 264,
                "textStyle": {
                    "normal": {
                        "color": "rgb(57,49,84)"
                    }
                }
            },
            {
                "name": "\u8ba2\u5355",
                "value": 258,
                "textStyle": {
                    "normal": {
                        "color": "rgb(116,54,121)"
                    }
                }
            },
            {
                "name": "\u719f\u7ec3",
                "value": 254,
                "textStyle": {
                    "normal": {
                        "color": "rgb(57,101,135)"
                    }
                }
            },
            {
                "name": "\u53cd\u9988",
                "value": 254,
                "textStyle": {
                    "normal": {
                        "color": "rgb(160,119,2)"
                    }
                }
            },
            {
                "name": "\u89e3\u51b3",
                "value": 252,
                "textStyle": {
                    "normal": {
                        "color": "rgb(34,145,32)"
                    }
                }
            },
            {
                "name": "\u63d0\u5347",
                "value": 245,
                "textStyle": {
                    "normal": {
                        "color": "rgb(138,74,132)"
                    }
                }
            },
            {
                "name": "\u610f\u8bc6",
                "value": 244,
                "textStyle": {
                    "normal": {
                        "color": "rgb(75,109,54)"
                    }
                }
            },
            {
                "name": "\u5458\u5de5",
                "value": 241,
                "textStyle": {
                    "normal": {
                        "color": "rgb(116,136,156)"
                    }
                }
            },
            {
                "name": "\u8f6f\u4ef6",
                "value": 237,
                "textStyle": {
                    "normal": {
                        "color": "rgb(106,123,18)"
                    }
                }
            },
            {
                "name": "\u5177\u5907",
                "value": 236,
                "textStyle": {
                    "normal": {
                        "color": "rgb(50,6,12)"
                    }
                }
            },
            {
                "name": "\u5b89\u6392",
                "value": 229,
                "textStyle": {
                    "normal": {
                        "color": "rgb(151,46,139)"
                    }
                }
            },
            {
                "name": "\u719f\u6089",
                "value": 226,
                "textStyle": {
                    "normal": {
                        "color": "rgb(28,16,80)"
                    }
                }
            },
            {
                "name": "\u7edf\u8ba1",
                "value": 226,
                "textStyle": {
                    "normal": {
                        "color": "rgb(73,149,132)"
                    }
                }
            },
            {
                "name": "\u4fe1\u7528",
                "value": 225,
                "textStyle": {
                    "normal": {
                        "color": "rgb(14,131,76)"
                    }
                }
            },
            {
                "name": "\u9879\u76ee",
                "value": 224,
                "textStyle": {
                    "normal": {
                        "color": "rgb(0,115,37)"
                    }
                }
            },
            {
                "name": "\u65e5\u5e38",
                "value": 221,
                "textStyle": {
                    "normal": {
                        "color": "rgb(139,95,37)"
                    }
                }
            },
            {
                "name": "\u8d23\u4efb",
                "value": 216,
                "textStyle": {
                    "normal": {
                        "color": "rgb(107,0,47)"
                    }
                }
            },
            {
                "name": "\u534f\u8c03",
                "value": 215,
                "textStyle": {
                    "normal": {
                        "color": "rgb(147,109,123)"
                    }
                }
            },
            {
                "name": "\u901a\u8bdd",
                "value": 210,
                "textStyle": {
                    "normal": {
                        "color": "rgb(78,138,133)"
                    }
                }
            },
            {
                "name": "\u6295\u8bc9",
                "value": 210,
                "textStyle": {
                    "normal": {
                        "color": "rgb(47,125,133)"
                    }
                }
            },
            {
                "name": "\u6574\u7406",
                "value": 207,
                "textStyle": {
                    "normal": {
                        "color": "rgb(157,83,39)"
                    }
                }
            },
            {
                "name": "\u52a9\u7406",
                "value": 207,
                "textStyle": {
                    "normal": {
                        "color": "rgb(123,84,149)"
                    }
                }
            },
            {
                "name": "\u6ee1\u610f",
                "value": 206,
                "textStyle": {
                    "normal": {
                        "color": "rgb(60,143,146)"
                    }
                }
            },
            {
                "name": "\u5927\u4e13",
                "value": 206,
                "textStyle": {
                    "normal": {
                        "color": "rgb(124,154,40)"
                    }
                }
            },
            {
                "name": "\u8bb0\u5f55",
                "value": 205,
                "textStyle": {
                    "normal": {
                        "color": "rgb(68,1,47)"
                    }
                }
            },
            {
                "name": "\u4fe1\u7528\u5361",
                "value": 203,
                "textStyle": {
                    "normal": {
                        "color": "rgb(134,130,59)"
                    }
                }
            },
            {
                "name": "\u5728\u7ebf",
                "value": 203,
                "textStyle": {
                    "normal": {
                        "color": "rgb(76,5,55)"
                    }
                }
            },
            {
                "name": "\u6d3b\u52a8",
                "value": 202,
                "textStyle": {
                    "normal": {
                        "color": "rgb(11,33,2)"
                    }
                }
            },
            {
                "name": "\u6807\u51c6",
                "value": 199,
                "textStyle": {
                    "normal": {
                        "color": "rgb(93,14,134)"
                    }
                }
            },
            {
                "name": "\u534f\u52a9",
                "value": 199,
                "textStyle": {
                    "normal": {
                        "color": "rgb(57,68,54)"
                    }
                }
            },
            {
                "name": "\u8ddf\u8fdb",
                "value": 195,
                "textStyle": {
                    "normal": {
                        "color": "rgb(2,64,120)"
                    }
                }
            },
            {
                "name": "\u7cfb\u7edf",
                "value": 188,
                "textStyle": {
                    "normal": {
                        "color": "rgb(7,14,113)"
                    }
                }
            },
            {
                "name": "\u60c5\u51b5",
                "value": 188,
                "textStyle": {
                    "normal": {
                        "color": "rgb(123,14,102)"
                    }
                }
            },
            {
                "name": "\u65f6\u95f4",
                "value": 187,
                "textStyle": {
                    "normal": {
                        "color": "rgb(82,75,74)"
                    }
                }
            },
            {
                "name": "\u6267\u884c",
                "value": 184,
                "textStyle": {
                    "normal": {
                        "color": "rgb(100,144,48)"
                    }
                }
            },
            {
                "name": "\u5e73\u53f0",
                "value": 182,
                "textStyle": {
                    "normal": {
                        "color": "rgb(54,91,153)"
                    }
                }
            },
            {
                "name": "\u505a\u597d",
                "value": 181,
                "textStyle": {
                    "normal": {
                        "color": "rgb(28,139,135)"
                    }
                }
            },
            {
                "name": "\u9700\u6c42",
                "value": 180,
                "textStyle": {
                    "normal": {
                        "color": "rgb(99,121,120)"
                    }
                }
            },
            {
                "name": "\u5ba2\u6237\u670d\u52a1",
                "value": 179,
                "textStyle": {
                    "normal": {
                        "color": "rgb(147,146,22)"
                    }
                }
            },
            {
                "name": "\u7528\u6237",
                "value": 177,
                "textStyle": {
                    "normal": {
                        "color": "rgb(65,76,134)"
                    }
                }
            },
            {
                "name": "\u89e3\u7b54",
                "value": 176,
                "textStyle": {
                    "normal": {
                        "color": "rgb(12,160,58)"
                    }
                }
            },
            {
                "name": "\u5404\u9879",
                "value": 176,
                "textStyle": {
                    "normal": {
                        "color": "rgb(94,43,60)"
                    }
                }
            },
            {
                "name": "\u8d23\u4efb\u5fc3",
                "value": 176,
                "textStyle": {
                    "normal": {
                        "color": "rgb(110,91,148)"
                    }
                }
            },
            {
                "name": "\u6ee1\u610f\u5ea6",
                "value": 174,
                "textStyle": {
                    "normal": {
                        "color": "rgb(104,63,107)"
                    }
                }
            },
            {
                "name": "\u5b9a\u671f",
                "value": 174,
                "textStyle": {
                    "normal": {
                        "color": "rgb(39,64,155)"
                    }
                }
            },
            {
                "name": "\u8868\u8fbe",
                "value": 172,
                "textStyle": {
                    "normal": {
                        "color": "rgb(16,120,22)"
                    }
                }
            },
            {
                "name": "\u51c6\u786e",
                "value": 171,
                "textStyle": {
                    "normal": {
                        "color": "rgb(97,19,76)"
                    }
                }
            },
            {
                "name": "\u8fd0\u8425",
                "value": 168,
                "textStyle": {
                    "normal": {
                        "color": "rgb(139,51,19)"
                    }
                }
            },
            {
                "name": "\u77e5\u8bc6",
                "value": 166,
                "textStyle": {
                    "normal": {
                        "color": "rgb(57,119,142)"
                    }
                }
            },
            {
                "name": "\u4eba\u5458",
                "value": 155,
                "textStyle": {
                    "normal": {
                        "color": "rgb(48,132,101)"
                    }
                }
            },
            {
                "name": "\u65b9\u5f0f",
                "value": 142,
                "textStyle": {
                    "normal": {
                        "color": "rgb(67,50,87)"
                    }
                }
            },
            {
                "name": "\u6307\u6807",
                "value": 141,
                "textStyle": {
                    "normal": {
                        "color": "rgb(10,144,113)"
                    }
                }
            },
            {
                "name": "\u56de\u8bbf",
                "value": 141,
                "textStyle": {
                    "normal": {
                        "color": "rgb(103,27,13)"
                    }
                }
            },
            {
                "name": "\u4e3b\u7ba1",
                "value": 139,
                "textStyle": {
                    "normal": {
                        "color": "rgb(140,142,94)"
                    }
                }
            },
            {
                "name": "\u85aa\u8d44",
                "value": 138,
                "textStyle": {
                    "normal": {
                        "color": "rgb(56,138,98)"
                    }
                }
            },
            {
                "name": "\u5236\u5b9a",
                "value": 136,
                "textStyle": {
                    "normal": {
                        "color": "rgb(33,10,160)"
                    }
                }
            },
            {
                "name": "\u6536\u96c6",
                "value": 136,
                "textStyle": {
                    "normal": {
                        "color": "rgb(128,71,108)"
                    }
                }
            },
            {
                "name": "\u7f51\u7edc",
                "value": 136,
                "textStyle": {
                    "normal": {
                        "color": "rgb(81,91,116)"
                    }
                }
            },
            {
                "name": "\u53d1\u73b0",
                "value": 135,
                "textStyle": {
                    "normal": {
                        "color": "rgb(155,143,42)"
                    }
                }
            },
            {
                "name": "\u8868\u8fbe\u80fd\u529b",
                "value": 135,
                "textStyle": {
                    "normal": {
                        "color": "rgb(132,131,104)"
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