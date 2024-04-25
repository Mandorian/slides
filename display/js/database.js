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
          data: [
            {
              name: '\u6570\u636e',
              value: 370,
              textStyle: {
                normal: {
                  color: 'rgb(50,63,80)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 274,
              textStyle: {
                normal: {
                  color: 'rgb(75,107,26)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 274,
              textStyle: {
                normal: {
                  color: 'rgb(33,134,81)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 107,
              textStyle: {
                normal: {
                  color: 'rgb(141,154,104)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 98,
              textStyle: {
                normal: {
                  color: 'rgb(19,82,16)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 91,
              textStyle: {
                normal: {
                  color: 'rgb(58,16,154)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(86,120,108)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(93,158,97)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 79,
              textStyle: {
                normal: {
                  color: 'rgb(21,156,159)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 75,
              textStyle: {
                normal: {
                  color: 'rgb(108,18,36)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(57,29,109)',
                },
              },
            },
            {
              name: '\u5f00\u53d1',
              value: 63,
              textStyle: {
                normal: {
                  color: 'rgb(9,85,103)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(158,119,124)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 52,
              textStyle: {
                normal: {
                  color: 'rgb(78,157,2)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 52,
              textStyle: {
                normal: {
                  color: 'rgb(36,8,39)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 50,
              textStyle: {
                normal: {
                  color: 'rgb(32,118,63)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 46,
              textStyle: {
                normal: {
                  color: 'rgb(40,106,38)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 44,
              textStyle: {
                normal: {
                  color: 'rgb(44,151,134)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 40,
              textStyle: {
                normal: {
                  color: 'rgb(79,147,98)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 40,
              textStyle: {
                normal: {
                  color: 'rgb(16,97,38)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(6,125,132)',
                },
              },
            },
            {
              name: '\u6027\u80fd',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(124,19,8)',
                },
              },
            },
            {
              name: '\u67b6\u6784',
              value: 38,
              textStyle: {
                normal: {
                  color: 'rgb(0,125,85)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 37,
              textStyle: {
                normal: {
                  color: 'rgb(43,56,144)',
                },
              },
            },
            {
              name: '\u7cbe\u901a',
              value: 36,
              textStyle: {
                normal: {
                  color: 'rgb(69,136,67)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c',
              value: 34,
              textStyle: {
                normal: {
                  color: 'rgb(114,69,31)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 34,
              textStyle: {
                normal: {
                  color: 'rgb(108,159,15)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 33,
              textStyle: {
                normal: {
                  color: 'rgb(114,120,64)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 32,
              textStyle: {
                normal: {
                  color: 'rgb(36,43,22)',
                },
              },
            },
            {
              name: '\u5907\u4efd',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(135,14,17)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(144,138,115)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(26,57,160)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 30,
              textStyle: {
                normal: {
                  color: 'rgb(143,11,0)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 30,
              textStyle: {
                normal: {
                  color: 'rgb(130,122,32)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 30,
              textStyle: {
                normal: {
                  color: 'rgb(79,90,0)',
                },
              },
            },
            {
              name: '\u5b58\u50a8',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(10,96,1)',
                },
              },
            },
            {
              name: '\u6545\u969c',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(3,75,62)',
                },
              },
            },
            {
              name: '\u5b9e\u65bd',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(5,93,88)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(51,1,122)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(143,54,129)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(30,9,143)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(139,83,31)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(16,3,63)',
                },
              },
            },
            {
              name: '\u6062\u590d',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(88,23,125)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(70,147,122)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 26,
              textStyle: {
                normal: {
                  color: 'rgb(29,22,58)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(123,126,94)',
                },
              },
            },
            {
              name: '\u8fd0\u884c',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(71,158,139)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(101,124,33)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(101,121,131)',
                },
              },
            },
            {
              name: '\u652f\u6301',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(79,110,58)',
                },
              },
            },
            {
              name: '\u670d\u52a1',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(134,58,83)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 22,
              textStyle: {
                normal: {
                  color: 'rgb(35,145,64)',
                },
              },
            },
            {
              name: '\u8fc7\u7a0b',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(91,0,94)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(77,23,56)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(50,57,148)',
                },
              },
            },
            {
              name: '\u811a\u672c',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(59,131,30)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(81,19,142)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(110,47,57)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(19,137,65)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(21,153,9)',
                },
              },
            },
            {
              name: '\u76d1\u63a7',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(28,15,141)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(41,39,34)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(146,160,114)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(17,112,45)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(126,122,143)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c\u7cfb\u7edf',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(27,152,37)',
                },
              },
            },
            {
              name: '\u57f9\u8bad',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(143,15,125)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(104,54,37)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 16,
              textStyle: {
                normal: {
                  color: 'rgb(61,2,70)',
                },
              },
            },
            {
              name: '\u4eba\u5458',
              value: 16,
              textStyle: {
                normal: {
                  color: 'rgb(112,103,43)',
                },
              },
            },
            {
              name: '\u5b89\u88c5',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(142,50,155)',
                },
              },
            },
            {
              name: '\u6280\u672f\u652f\u6301',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(135,36,156)',
                },
              },
            },
            {
              name: '\u89c4\u5212',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(16,157,107)',
                },
              },
            },
            {
              name: '\u96c6\u7fa4',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(76,54,89)',
                },
              },
            },
            {
              name: '\u539f\u7406',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(38,94,155)',
                },
              },
            },
            {
              name: '\u65e5\u5e38',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(68,89,61)',
                },
              },
            },
            {
              name: '\u914d\u7f6e',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(82,9,38)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(15,129,0)',
                },
              },
            },
            {
              name: '\u53ef\u7528',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(31,126,111)',
                },
              },
            },
            {
              name: '\u90e8\u7f72',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(156,9,59)',
                },
              },
            },
            {
              name: '\u4f53\u7cfb',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(2,31,38)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(21,56,56)',
                },
              },
            },
            {
              name: '\u534f\u52a9',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(0,112,21)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(21,75,57)',
                },
              },
            },
            {
              name: '\u6089\u6570',
              value: 12,
              textStyle: {
                normal: {
                  color: 'rgb(153,93,100)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93\u7cfb\u7edf',
              value: 12,
              textStyle: {
                normal: {
                  color: 'rgb(122,125,93)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 12,
              textStyle: {
                normal: {
                  color: 'rgb(73,43,85)',
                },
              },
            },
            {
              name: '\u8bed\u53e5',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(51,133,139)',
                },
              },
            },
            {
              name: '\u7f51\u7edc',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(93,60,47)',
                },
              },
            },
            {
              name: '\u81f3\u5c11',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(109,138,139)',
                },
              },
            },
            {
              name: '\u76ee\u7684',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(156,128,121)',
                },
              },
            },
            {
              name: '\u5bf9\u6570',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(84,147,151)',
                },
              },
            },
            {
              name: '\u79d1\u4ee5',
              value: 11,
              textStyle: {
                normal: {
                  color: 'rgb(1,110,125)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(11,49,122)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(105,150,69)',
                },
              },
            },
            {
              name: '\u4e00\u79cd',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(57,127,14)',
                },
              },
            },
            {
              name: '\u5584\u4e8e',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(114,159,94)',
                },
              },
            },
            {
              name: '\u5927\u6570',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(54,52,128)',
                },
              },
            },
            {
              name: '\u5efa\u8bbe',
              value: 10,
              textStyle: {
                normal: {
                  color: 'rgb(146,89,16)',
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