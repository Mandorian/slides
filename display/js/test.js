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
              name: '\u6d4b\u8bd5',
              value: 2464,
              textStyle: {
                normal: {
                  color: 'rgb(56,29,51)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 472,
              textStyle: {
                normal: {
                  color: 'rgb(154,54,89)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 454,
              textStyle: {
                normal: {
                  color: 'rgb(43,56,20)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 377,
              textStyle: {
                normal: {
                  color: 'rgb(79,95,52)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 371,
              textStyle: {
                normal: {
                  color: 'rgb(128,60,54)',
                },
              },
            },
            {
              name: '\u8bd5\u5de5',
              value: 352,
              textStyle: {
                normal: {
                  color: 'rgb(26,64,44)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 335,
              textStyle: {
                normal: {
                  color: 'rgb(118,70,18)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 320,
              textStyle: {
                normal: {
                  color: 'rgb(11,98,6)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 318,
              textStyle: {
                normal: {
                  color: 'rgb(75,70,102)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 308,
              textStyle: {
                normal: {
                  color: 'rgb(51,17,56)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 274,
              textStyle: {
                normal: {
                  color: 'rgb(87,0,144)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 264,
              textStyle: {
                normal: {
                  color: 'rgb(85,63,150)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 257,
              textStyle: {
                normal: {
                  color: 'rgb(52,141,61)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 250,
              textStyle: {
                normal: {
                  color: 'rgb(116,133,140)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 217,
              textStyle: {
                normal: {
                  color: 'rgb(125,36,39)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 206,
              textStyle: {
                normal: {
                  color: 'rgb(132,84,156)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 206,
              textStyle: {
                normal: {
                  color: 'rgb(110,33,98)',
                },
              },
            },
            {
              name: '\u8bd5\u7528',
              value: 199,
              textStyle: {
                normal: {
                  color: 'rgb(78,107,81)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u7528\u4f8b',
              value: 198,
              textStyle: {
                normal: {
                  color: 'rgb(74,104,99)',
                },
              },
            },
            {
              name: '\u62a5\u544a',
              value: 193,
              textStyle: {
                normal: {
                  color: 'rgb(120,122,129)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 187,
              textStyle: {
                normal: {
                  color: 'rgb(136,145,63)',
                },
              },
            },
            {
              name: '\u6027\u80fd',
              value: 172,
              textStyle: {
                normal: {
                  color: 'rgb(10,64,160)',
                },
              },
            },
            {
              name: '\u5f00\u53d1',
              value: 171,
              textStyle: {
                normal: {
                  color: 'rgb(28,111,125)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 170,
              textStyle: {
                normal: {
                  color: 'rgb(91,59,34)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 169,
              textStyle: {
                normal: {
                  color: 'rgb(124,158,76)',
                },
              },
            },
            {
              name: '\u81ea\u52a8',
              value: 166,
              textStyle: {
                normal: {
                  color: 'rgb(58,147,144)',
                },
              },
            },
            {
              name: '\u8ba1\u5212',
              value: 162,
              textStyle: {
                normal: {
                  color: 'rgb(16,118,66)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u6d4b\u8bd5',
              value: 161,
              textStyle: {
                normal: {
                  color: 'rgb(28,115,11)',
                },
              },
            },
            {
              name: '\u8d28\u91cf',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(27,62,134)',
                },
              },
            },
            {
              name: '\u81ea\u52a8\u5316',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(94,159,63)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 153,
              textStyle: {
                normal: {
                  color: 'rgb(104,51,7)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 150,
              textStyle: {
                normal: {
                  color: 'rgb(87,67,114)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 141,
              textStyle: {
                normal: {
                  color: 'rgb(32,3,93)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 141,
              textStyle: {
                normal: {
                  color: 'rgb(111,83,35)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 139,
              textStyle: {
                normal: {
                  color: 'rgb(45,24,107)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 138,
              textStyle: {
                normal: {
                  color: 'rgb(60,39,66)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 137,
              textStyle: {
                normal: {
                  color: 'rgb(108,33,32)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 136,
              textStyle: {
                normal: {
                  color: 'rgb(43,126,153)',
                },
              },
            },
            {
              name: '\u529f\u80fd',
              value: 134,
              textStyle: {
                normal: {
                  color: 'rgb(48,27,12)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 132,
              textStyle: {
                normal: {
                  color: 'rgb(119,19,8)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 129,
              textStyle: {
                normal: {
                  color: 'rgb(35,6,34)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 128,
              textStyle: {
                normal: {
                  color: 'rgb(124,85,23)',
                },
              },
            },
            {
              name: '\u6267\u884c',
              value: 126,
              textStyle: {
                normal: {
                  color: 'rgb(5,29,74)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u8ba1\u5212',
              value: 124,
              textStyle: {
                normal: {
                  color: 'rgb(67,88,122)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u62a5\u544a',
              value: 122,
              textStyle: {
                normal: {
                  color: 'rgb(130,67,147)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 121,
              textStyle: {
                normal: {
                  color: 'rgb(57,116,124)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 116,
              textStyle: {
                normal: {
                  color: 'rgb(7,8,39)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 111,
              textStyle: {
                normal: {
                  color: 'rgb(30,60,137)',
                },
              },
            },
            {
              name: '\u65b9\u6cd5',
              value: 110,
              textStyle: {
                normal: {
                  color: 'rgb(131,158,49)',
                },
              },
            },
            {
              name: '\u8ddf\u8e2a',
              value: 108,
              textStyle: {
                normal: {
                  color: 'rgb(90,46,141)',
                },
              },
            },
            {
              name: '\u73af\u5883',
              value: 107,
              textStyle: {
                normal: {
                  color: 'rgb(45,106,14)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c',
              value: 105,
              textStyle: {
                normal: {
                  color: 'rgb(32,48,5)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 96,
              textStyle: {
                normal: {
                  color: 'rgb(104,125,17)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 95,
              textStyle: {
                normal: {
                  color: 'rgb(52,122,83)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 95,
              textStyle: {
                normal: {
                  color: 'rgb(141,46,37)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u5de5\u5177',
              value: 94,
              textStyle: {
                normal: {
                  color: 'rgb(21,88,134)',
                },
              },
            },
            {
              name: '\u5236\u5b9a',
              value: 93,
              textStyle: {
                normal: {
                  color: 'rgb(63,134,8)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(9,51,14)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(73,36,9)',
                },
              },
            },
            {
              name: '\u7f3a\u9677',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(146,21,78)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 89,
              textStyle: {
                normal: {
                  color: 'rgb(34,69,57)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 88,
              textStyle: {
                normal: {
                  color: 'rgb(16,54,84)',
                },
              },
            },
            {
              name: '\u8bbe\u5907',
              value: 87,
              textStyle: {
                normal: {
                  color: 'rgb(81,23,1)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 86,
              textStyle: {
                normal: {
                  color: 'rgb(28,21,135)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(72,66,4)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(147,79,77)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(50,86,24)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(134,63,89)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 81,
              textStyle: {
                normal: {
                  color: 'rgb(155,8,79)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(96,60,24)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 78,
              textStyle: {
                normal: {
                  color: 'rgb(69,65,158)',
                },
              },
            },
            {
              name: '\u8fc7\u7a0b',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(26,19,110)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 75,
              textStyle: {
                normal: {
                  color: 'rgb(95,32,70)',
                },
              },
            },
            {
              name: '\u811a\u672c',
              value: 74,
              textStyle: {
                normal: {
                  color: 'rgb(2,75,99)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 73,
              textStyle: {
                normal: {
                  color: 'rgb(9,37,19)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(106,160,94)',
                },
              },
            },
            {
              name: '\u642d\u5efa',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(138,147,21)',
                },
              },
            },
            {
              name: '\u7535\u5b50',
              value: 67,
              textStyle: {
                normal: {
                  color: 'rgb(34,7,138)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u73af\u5883',
              value: 67,
              textStyle: {
                normal: {
                  color: 'rgb(51,108,25)',
                },
              },
            },
            {
              name: '\u6807\u51c6',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(50,146,118)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(9,155,94)',
                },
              },
            },
            {
              name: '\u534f\u52a9',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(158,13,32)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(100,159,31)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(29,119,77)',
                },
              },
            },
            {
              name: '\u68c0\u6d4b',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(150,33,148)',
                },
              },
            },
            {
              name: '\u4eba\u5458',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(69,28,112)',
                },
              },
            },
            {
              name: '\u786c\u4ef6',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(3,12,47)',
                },
              },
            },
            {
              name: '\u5b9a\u4f4d',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(129,150,86)',
                },
              },
            },
            {
              name: '\u63a8\u52a8',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(62,144,121)',
                },
              },
            },
            {
              name: '\u89c4\u8303',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(155,92,17)',
                },
              },
            },
            {
              name: '\u529f\u80fd\u6d4b\u8bd5',
              value: 56,
              textStyle: {
                normal: {
                  color: 'rgb(28,50,128)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5\u65b9\u6cd5',
              value: 55,
              textStyle: {
                normal: {
                  color: 'rgb(21,146,8)',
                },
              },
            },
            {
              name: '\u5b9e\u65bd',
              value: 55,
              textStyle: {
                normal: {
                  color: 'rgb(5,118,125)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 55,
              textStyle: {
                normal: {
                  color: 'rgb(103,152,5)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 55,
              textStyle: {
                normal: {
                  color: 'rgb(129,155,156)',
                },
              },
            },
            {
              name: '\u53d1\u73b0',
              value: 54,
              textStyle: {
                normal: {
                  color: 'rgb(2,127,67)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(135,158,52)',
                },
              },
            },
            {
              name: '\u4fdd\u8bc1',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(142,8,93)',
                },
              },
            },
            {
              name: '\u8bd5\u9a8c',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(120,131,21)',
                },
              },
            },
            {
              name: '\u63a5\u53e3',
              value: 52,
              textStyle: {
                normal: {
                  color: 'rgb(123,19,121)',
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