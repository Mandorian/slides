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
          textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          },
          },

          color: function() {
            return 'rgb(' +
                Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) +
                ', ' + Math.round(Math.random() * 255) + ')'
          },
          data: [
            {
              name: '\u8fd0\u8425',
              value: 10578,
              textStyle: {
                normal: {
                  color: 'rgb(34,110,53)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 6960,
              textStyle: {
                normal: {
                  color: 'rgb(51,156,86)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 6254,
              textStyle: {
                normal: {
                  color: 'rgb(34,35,154)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 6228,
              textStyle: {
                normal: {
                  color: 'rgb(96,45,70)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 6111,
              textStyle: {
                normal: {
                  color: 'rgb(130,37,26)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 5949,
              textStyle: {
                normal: {
                  color: 'rgb(143,127,30)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 5780,
              textStyle: {
                normal: {
                  color: 'rgb(111,21,94)',
                },
              },
            },
            {
              name: '\u63a8\u5e7f',
              value: 5235,
              textStyle: {
                normal: {
                  color: 'rgb(93,42,67)',
                },
              },
            },
            {
              name: '\u5e97\u94fa',
              value: 4924,
              textStyle: {
                normal: {
                  color: 'rgb(82,20,44)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 4355,
              textStyle: {
                normal: {
                  color: 'rgb(87,116,81)',
                },
              },
            },
            {
              name: '\u9500\u552e',
              value: 4200,
              textStyle: {
                normal: {
                  color: 'rgb(56,145,88)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 4086,
              textStyle: {
                normal: {
                  color: 'rgb(152,139,63)',
                },
              },
            },
            {
              name: '\u6d3b\u52a8',
              value: 4063,
              textStyle: {
                normal: {
                  color: 'rgb(47,142,152)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 3977,
              textStyle: {
                normal: {
                  color: 'rgb(79,124,38)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 3749,
              textStyle: {
                normal: {
                  color: 'rgb(32,119,90)',
                },
              },
            },
            {
              name: '\u8425\u9500',
              value: 3290,
              textStyle: {
                normal: {
                  color: 'rgb(127,73,87)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 2968,
              textStyle: {
                normal: {
                  color: 'rgb(71,115,5)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 2602,
              textStyle: {
                normal: {
                  color: 'rgb(82,155,104)',
                },
              },
            },
            {
              name: '\u7b56\u5212',
              value: 2543,
              textStyle: {
                normal: {
                  color: 'rgb(26,139,157)',
                },
              },
            },
            {
              name: '\u5236\u5b9a',
              value: 2517,
              textStyle: {
                normal: {
                  color: 'rgb(14,84,16)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 2435,
              textStyle: {
                normal: {
                  color: 'rgb(24,118,123)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 2408,
              textStyle: {
                normal: {
                  color: 'rgb(118,36,121)',
                },
              },
            },
            {
              name: '\u7535\u5546',
              value: 2391,
              textStyle: {
                normal: {
                  color: 'rgb(85,74,37)',
                },
              },
            },
            {
              name: '\u5e02\u573a',
              value: 2246,
              textStyle: {
                normal: {
                  color: 'rgb(146,86,147)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 2193,
              textStyle: {
                normal: {
                  color: 'rgb(25,121,110)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 2070,
              textStyle: {
                normal: {
                  color: 'rgb(25,78,20)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 2066,
              textStyle: {
                normal: {
                  color: 'rgb(58,125,87)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 2059,
              textStyle: {
                normal: {
                  color: 'rgb(81,66,77)',
                },
              },
            },
            {
              name: '\u7528\u6237',
              value: 2030,
              textStyle: {
                normal: {
                  color: 'rgb(34,36,138)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 2013,
              textStyle: {
                normal: {
                  color: 'rgb(121,46,69)',
                },
              },
            },
            {
              name: '\u6267\u884c',
              value: 1930,
              textStyle: {
                normal: {
                  color: 'rgb(58,43,0)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 1926,
              textStyle: {
                normal: {
                  color: 'rgb(64,102,125)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 1886,
              textStyle: {
                normal: {
                  color: 'rgb(160,124,146)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 1880,
              textStyle: {
                normal: {
                  color: 'rgb(95,11,154)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 1777,
              textStyle: {
                normal: {
                  color: 'rgb(80,106,67)',
                },
              },
            },
            {
              name: '\u7b56\u7565',
              value: 1768,
              textStyle: {
                normal: {
                  color: 'rgb(16,136,87)',
                },
              },
            },
            {
              name: '\u65e5\u5e38',
              value: 1744,
              textStyle: {
                normal: {
                  color: 'rgb(91,27,22)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5206\u6790',
              value: 1675,
              textStyle: {
                normal: {
                  color: 'rgb(159,139,31)',
                },
              },
            },
            {
              name: '\u8ba1\u5212',
              value: 1649,
              textStyle: {
                normal: {
                  color: 'rgb(78,63,72)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 1586,
              textStyle: {
                normal: {
                  color: 'rgb(92,100,67)',
                },
              },
            },
            {
              name: '\u63d0\u5347',
              value: 1579,
              textStyle: {
                normal: {
                  color: 'rgb(33,13,101)',
                },
              },
            },
            {
              name: '\u76ee\u6807',
              value: 1577,
              textStyle: {
                normal: {
                  color: 'rgb(53,107,64)',
                },
              },
            },
            {
              name: '\u5185\u5bb9',
              value: 1536,
              textStyle: {
                normal: {
                  color: 'rgb(133,55,156)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 1463,
              textStyle: {
                normal: {
                  color: 'rgb(64,50,65)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 1456,
              textStyle: {
                normal: {
                  color: 'rgb(3,66,55)',
                },
              },
            },
            {
              name: '\u884c\u4e1a',
              value: 1410,
              textStyle: {
                normal: {
                  color: 'rgb(87,50,107)',
                },
              },
            },
            {
              name: '\u5a92\u4f53',
              value: 1384,
              textStyle: {
                normal: {
                  color: 'rgb(54,152,106)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 1340,
              textStyle: {
                normal: {
                  color: 'rgb(123,117,104)',
                },
              },
            },
            {
              name: '\u63d0\u9ad8',
              value: 1315,
              textStyle: {
                normal: {
                  color: 'rgb(8,31,66)',
                },
              },
            },
            {
              name: '\u5b9a\u671f',
              value: 1301,
              textStyle: {
                normal: {
                  color: 'rgb(40,91,50)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c',
              value: 1295,
              textStyle: {
                normal: {
                  color: 'rgb(136,114,107)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 1183,
              textStyle: {
                normal: {
                  color: 'rgb(123,39,106)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 1177,
              textStyle: {
                normal: {
                  color: 'rgb(19,88,122)',
                },
              },
            },
            {
              name: '\u8f6c\u5316',
              value: 1173,
              textStyle: {
                normal: {
                  color: 'rgb(133,43,111)',
                },
              },
            },
            {
              name: '\u54c1\u724c',
              value: 1143,
              textStyle: {
                normal: {
                  color: 'rgb(63,98,8)',
                },
              },
            },
            {
              name: '\u8d44\u6e90',
              value: 1131,
              textStyle: {
                normal: {
                  color: 'rgb(66,118,153)',
                },
              },
            },
            {
              name: '\u6548\u679c',
              value: 1096,
              textStyle: {
                normal: {
                  color: 'rgb(45,80,57)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 1061,
              textStyle: {
                normal: {
                  color: 'rgb(128,130,84)',
                },
              },
            },
            {
              name: '\u6e20\u9053',
              value: 1058,
              textStyle: {
                normal: {
                  color: 'rgb(84,58,79)',
                },
              },
            },
            {
              name: '\u89c4\u5219',
              value: 1057,
              textStyle: {
                normal: {
                  color: 'rgb(17,23,114)',
                },
              },
            },
            {
              name: '\u8c03\u6574',
              value: 1040,
              textStyle: {
                normal: {
                  color: 'rgb(7,104,116)',
                },
              },
            },
            {
              name: '\u4fe1\u606f',
              value: 1034,
              textStyle: {
                normal: {
                  color: 'rgb(117,129,139)',
                },
              },
            },
            {
              name: '\u6dd8\u5b9d',
              value: 1029,
              textStyle: {
                normal: {
                  color: 'rgb(81,57,130)',
                },
              },
            },
            {
              name: '\u5927\u4e13',
              value: 1018,
              textStyle: {
                normal: {
                  color: 'rgb(151,89,73)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 1018,
              textStyle: {
                normal: {
                  color: 'rgb(2,56,153)',
                },
              },
            },
            {
              name: '\u89c4\u5212',
              value: 1000,
              textStyle: {
                normal: {
                  color: 'rgb(24,115,159)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 993,
              textStyle: {
                normal: {
                  color: 'rgb(57,12,75)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 982,
              textStyle: {
                normal: {
                  color: 'rgb(83,39,157)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 971,
              textStyle: {
                normal: {
                  color: 'rgb(47,108,48)',
                },
              },
            },
            {
              name: '\u5546\u54c1',
              value: 967,
              textStyle: {
                normal: {
                  color: 'rgb(105,40,37)',
                },
              },
            },
            {
              name: '\u534f\u8c03',
              value: 960,
              textStyle: {
                normal: {
                  color: 'rgb(112,153,131)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 953,
              textStyle: {
                normal: {
                  color: 'rgb(35,142,71)',
                },
              },
            },
            {
              name: '\u90e8\u95e8',
              value: 952,
              textStyle: {
                normal: {
                  color: 'rgb(64,69,59)',
                },
              },
            },
            {
              name: '\u7f51\u7ad9',
              value: 952,
              textStyle: {
                normal: {
                  color: 'rgb(12,124,142)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 945,
              textStyle: {
                normal: {
                  color: 'rgb(4,65,34)',
                },
              },
            },
            {
              name: '\u963f\u91cc',
              value: 938,
              textStyle: {
                normal: {
                  color: 'rgb(89,156,142)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 931,
              textStyle: {
                normal: {
                  color: 'rgb(44,114,74)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 925,
              textStyle: {
                normal: {
                  color: 'rgb(111,135,156)',
                },
              },
            },
            {
              name: '\u4e9a\u9a6c',
              value: 925,
              textStyle: {
                normal: {
                  color: 'rgb(2,10,77)',
                },
              },
            },
            {
              name: '\u4e9a\u9a6c\u900a',
              value: 925,
              textStyle: {
                normal: {
                  color: 'rgb(128,100,153)',
                },
              },
            },
            {
              name: '\u534f\u52a9',
              value: 924,
              textStyle: {
                normal: {
                  color: 'rgb(130,97,14)',
                },
              },
            },
            {
              name: '\u7edf\u8ba1',
              value: 921,
              textStyle: {
                normal: {
                  color: 'rgb(2,22,122)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 917,
              textStyle: {
                normal: {
                  color: 'rgb(41,48,4)',
                },
              },
            },
            {
              name: '\u60c5\u51b5',
              value: 916,
              textStyle: {
                normal: {
                  color: 'rgb(146,67,70)',
                },
              },
            },
            {
              name: '\u8d26\u53f7',
              value: 912,
              textStyle: {
                normal: {
                  color: 'rgb(45,46,15)',
                },
              },
            },
            {
              name: '\u798f\u5229',
              value: 868,
              textStyle: {
                normal: {
                  color: 'rgb(29,143,83)',
                },
              },
            },
            {
              name: '\u6536\u96c6',
              value: 867,
              textStyle: {
                normal: {
                  color: 'rgb(92,71,156)',
                },
              },
            },
            {
              name: '\u63d0\u51fa',
              value: 864,
              textStyle: {
                normal: {
                  color: 'rgb(111,121,114)',
                },
              },
            },
            {
              name: '\u53d1\u5c55',
              value: 857,
              textStyle: {
                normal: {
                  color: 'rgb(99,38,124)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 846,
              textStyle: {
                normal: {
                  color: 'rgb(94,88,16)',
                },
              },
            },
            {
              name: '\u5e7f\u544a',
              value: 844,
              textStyle: {
                normal: {
                  color: 'rgb(138,77,24)',
                },
              },
            },
            {
              name: '\u6d41\u91cf',
              value: 843,
              textStyle: {
                normal: {
                  color: 'rgb(6,91,144)',
                },
              },
            },
            {
              name: '\u76f4\u64ad',
              value: 836,
              textStyle: {
                normal: {
                  color: 'rgb(21,121,71)',
                },
              },
            },
            {
              name: '\u89c6\u9891',
              value: 827,
              textStyle: {
                normal: {
                  color: 'rgb(91,78,121)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 823,
              textStyle: {
                normal: {
                  color: 'rgb(156,1,154)',
                },
              },
            },
            {
              name: '\u5546\u52a1',
              value: 819,
              textStyle: {
                normal: {
                  color: 'rgb(143,25,155)',
                },
              },
            },
            {
              name: '\u7ade\u4e89',
              value: 811,
              textStyle: {
                normal: {
                  color: 'rgb(15,73,85)',
                },
              },
            },
            {
              name: '\u5305\u62ec',
              value: 810,
              textStyle: {
                normal: {
                  color: 'rgb(111,135,108)',
                },
              },
            },
            {
              name: '\u601d\u7ef4',
              value: 793,
              textStyle: {
                normal: {
                  color: 'rgb(138,105,1)',
                },
              },
            },
            {
              name: '\u5458\u5de5',
              value: 781,
              textStyle: {
                normal: {
                  color: 'rgb(7,88,147)',
                },
              },
            },
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