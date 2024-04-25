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
            data: [
              {
                name: '\u6570\u636e',
                value: 766,
                textStyle: {
                  normal: {
                    color: 'rgb(53,53,5)',
                  },
                },
              },
              {
                name: '\u8d1f\u8d23',
                value: 275,
                textStyle: {
                  normal: {
                    color: 'rgb(5,79,45)',
                  },
                },
              },
              {
                name: '\u5927\u6570',
                value: 271,
                textStyle: {
                  normal: {
                    color: 'rgb(63,35,37)',
                  },
                },
              },
              {
                name: '\u5f00\u53d1',
                value: 258,
                textStyle: {
                  normal: {
                    color: 'rgb(35,95,0)',
                  },
                },
              },
              {
                name: '\u9879\u76ee',
                value: 213,
                textStyle: {
                  normal: {
                    color: 'rgb(84,42,67)',
                  },
                },
              },
              {
                name: '\u5de5\u4f5c',
                value: 195,
                textStyle: {
                  normal: {
                    color: 'rgb(122,75,160)',
                  },
                },
              },
              {
                name: '\u6280\u672f',
                value: 171,
                textStyle: {
                  normal: {
                    color: 'rgb(91,62,113)',
                  },
                },
              },
              {
                name: '\u7ecf\u9a8c',
                value: 162,
                textStyle: {
                  normal: {
                    color: 'rgb(132,114,129)',
                  },
                },
              },
              {
                name: '\u8bbe\u8ba1',
                value: 161,
                textStyle: {
                  normal: {
                    color: 'rgb(96,14,51)',
                  },
                },
              },
              {
                name: '\u76f8\u5173',
                value: 150,
                textStyle: {
                  normal: {
                    color: 'rgb(46,92,20)',
                  },
                },
              },
              {
                name: '\u4ea7\u54c1',
                value: 149,
                textStyle: {
                  normal: {
                    color: 'rgb(112,81,70)',
                  },
                },
              },
              {
                name: '\u5206\u6790',
                value: 148,
                textStyle: {
                  normal: {
                    color: 'rgb(1,76,156)',
                  },
                },
              },
              {
                name: '\u80fd\u529b',
                value: 131,
                textStyle: {
                  normal: {
                    color: 'rgb(83,99,142)',
                  },
                },
              },
              {
                name: '\u5e73\u53f0',
                value: 127,
                textStyle: {
                  normal: {
                    color: 'rgb(82,34,121)',
                  },
                },
              },
              {
                name: '\u719f\u6089',
                value: 116,
                textStyle: {
                  normal: {
                    color: 'rgb(43,30,100)',
                  },
                },
              },
              {
                name: '\u4e1a\u52a1',
                value: 113,
                textStyle: {
                  normal: {
                    color: 'rgb(54,30,122)',
                  },
                },
              },
              {
                name: '\u9700\u6c42',
                value: 106,
                textStyle: {
                  normal: {
                    color: 'rgb(119,115,155)',
                  },
                },
              },
              {
                name: '\u7cfb\u7edf',
                value: 100,
                textStyle: {
                  normal: {
                    color: 'rgb(25,116,156)',
                  },
                },
              },
              {
                name: '\u53c2\u4e0e',
                value: 82,
                textStyle: {
                  normal: {
                    color: 'rgb(146,106,120)',
                  },
                },
              },
              {
                name: '\u8ba1\u7b97',
                value: 82,
                textStyle: {
                  normal: {
                    color: 'rgb(138,66,65)',
                  },
                },
              },
              {
                name: '\u67b6\u6784',
                value: 81,
                textStyle: {
                  normal: {
                    color: 'rgb(139,141,160)',
                  },
                },
              },
              {
                name: '\u4f18\u5148',
                value: 81,
                textStyle: {
                  normal: {
                    color: 'rgb(117,137,132)',
                  },
                },
              },
              {
                name: '\u7ba1\u7406',
                value: 79,
                textStyle: {
                  normal: {
                    color: 'rgb(27,8,41)',
                  },
                },
              },
              {
                name: '\u4efb\u804c',
                value: 76,
                textStyle: {
                  normal: {
                    color: 'rgb(144,94,137)',
                  },
                },
              },
              {
                name: '\u516c\u53f8',
                value: 75,
                textStyle: {
                  normal: {
                    color: 'rgb(130,48,32)',
                  },
                },
              },
              {
                name: '\u56e2\u961f',
                value: 73,
                textStyle: {
                  normal: {
                    color: 'rgb(100,119,8)',
                  },
                },
              },
              {
                name: '\u89e3\u51b3',
                value: 73,
                textStyle: {
                  normal: {
                    color: 'rgb(27,64,4)',
                  },
                },
              },
              {
                name: '\u65b9\u6848',
                value: 68,
                textStyle: {
                  normal: {
                    color: 'rgb(85,135,26)',
                  },
                },
              },
              {
                name: '\u4f18\u5316',
                value: 65,
                textStyle: {
                  normal: {
                    color: 'rgb(63,153,110)',
                  },
                },
              },
              {
                name: '\u5b66\u5386',
                value: 62,
                textStyle: {
                  normal: {
                    color: 'rgb(73,156,114)',
                  },
                },
              },
              {
                name: '\u5ba2\u6237',
                value: 61,
                textStyle: {
                  normal: {
                    color: 'rgb(145,140,23)',
                  },
                },
              },
              {
                name: '\u5de5\u7a0b',
                value: 60,
                textStyle: {
                  normal: {
                    color: 'rgb(20,80,77)',
                  },
                },
              },
              {
                name: '\u6c9f\u901a',
                value: 60,
                textStyle: {
                  normal: {
                    color: 'rgb(29,131,28)',
                  },
                },
              },
              {
                name: '\u5de5\u7a0b\u5e08',
                value: 58,
                textStyle: {
                  normal: {
                    color: 'rgb(36,24,98)',
                  },
                },
              },
              {
                name: '\u6570\u636e\u5e93',
                value: 57,
                textStyle: {
                  normal: {
                    color: 'rgb(147,10,75)',
                  },
                },
              },
              {
                name: '\u636e\u5e93',
                value: 57,
                textStyle: {
                  normal: {
                    color: 'rgb(138,92,28)',
                  },
                },
              },
              {
                name: '\u4e13\u4e1a',
                value: 54,
                textStyle: {
                  normal: {
                    color: 'rgb(86,17,11)',
                  },
                },
              },
              {
                name: '\u804c\u80fd',
                value: 52,
                textStyle: {
                  normal: {
                    color: 'rgb(41,54,32)',
                  },
                },
              },
              {
                name: '\u7c7b\u522b',
                value: 51,
                textStyle: {
                  normal: {
                    color: 'rgb(155,94,93)',
                  },
                },
              },
              {
                name: '\u6570\u636e\u5206\u6790',
                value: 50,
                textStyle: {
                  normal: {
                    color: 'rgb(60,45,62)',
                  },
                },
              },
              {
                name: '\u6d4b\u8bd5',
                value: 50,
                textStyle: {
                  normal: {
                    color: 'rgb(14,75,39)',
                  },
                },
              },
              {
                name: '\u4ee5\u4e0a\u5b66\u5386',
                value: 49,
                textStyle: {
                  normal: {
                    color: 'rgb(105,61,112)',
                  },
                },
              },
              {
                name: '\u4e0a\u5b66',
                value: 49,
                textStyle: {
                  normal: {
                    color: 'rgb(112,58,17)',
                  },
                },
              },
              {
                name: '\u719f\u7ec3',
                value: 49,
                textStyle: {
                  normal: {
                    color: 'rgb(16,18,144)',
                  },
                },
              },
              {
                name: '\u7f16\u5199',
                value: 47,
                textStyle: {
                  normal: {
                    color: 'rgb(41,30,127)',
                  },
                },
              },
              {
                name: '\u672c\u79d1',
                value: 46,
                textStyle: {
                  normal: {
                    color: 'rgb(30,120,20)',
                  },
                },
              },
              {
                name: '\u5177\u5907',
                value: 46,
                textStyle: {
                  normal: {
                    color: 'rgb(141,147,90)',
                  },
                },
              },
              {
                name: '\u5206\u4eab',
                value: 43,
                textStyle: {
                  normal: {
                    color: 'rgb(58,159,76)',
                  },
                },
              },
              {
                name: '\u670d\u52a1',
                value: 42,
                textStyle: {
                  normal: {
                    color: 'rgb(126,128,32)',
                  },
                },
              },
              {
                name: '\u5c97\u4f4d',
                value: 42,
                textStyle: {
                  normal: {
                    color: 'rgb(89,91,114)',
                  },
                },
              },
              {
                name: '\u4ed3\u5e93',
                value: 40,
                textStyle: {
                  normal: {
                    color: 'rgb(60,99,152)',
                  },
                },
              },
              {
                name: '\u89c4\u5212',
                value: 40,
                textStyle: {
                  normal: {
                    color: 'rgb(18,63,118)',
                  },
                },
              },
              {
                name: '\u6316\u6398',
                value: 40,
                textStyle: {
                  normal: {
                    color: 'rgb(61,145,34)',
                  },
                },
              },
              {
                name: '\u8bed\u8a00',
                value: 39,
                textStyle: {
                  normal: {
                    color: 'rgb(37,110,101)',
                  },
                },
              },
              {
                name: '\u8ba1\u7b97\u673a',
                value: 39,
                textStyle: {
                  normal: {
                    color: 'rgb(51,133,81)',
                  },
                },
              },
              {
                name: '\u7b97\u673a',
                value: 39,
                textStyle: {
                  normal: {
                    color: 'rgb(131,19,85)',
                  },
                },
              },
              {
                name: '\u6570\u636e\u4ed3\u5e93',
                value: 38,
                textStyle: {
                  normal: {
                    color: 'rgb(49,7,142)',
                  },
                },
              },
              {
                name: '\u8d28\u91cf',
                value: 38,
                textStyle: {
                  normal: {
                    color: 'rgb(2,22,6)',
                  },
                },
              },
              {
                name: '\u63d0\u4f9b',
                value: 37,
                textStyle: {
                  normal: {
                    color: 'rgb(11,43,70)',
                  },
                },
              },
              {
                name: '\u6587\u6863',
                value: 37,
                textStyle: {
                  normal: {
                    color: 'rgb(85,104,0)',
                  },
                },
              },
              {
                name: '\u5173\u952e',
                value: 36,
                textStyle: {
                  normal: {
                    color: 'rgb(54,114,11)',
                  },
                },
              },
              {
                name: '\u6846\u67b6',
                value: 36,
                textStyle: {
                  normal: {
                    color: 'rgb(25,67,157)',
                  },
                },
              },
              {
                name: '\u7ef4\u62a4',
                value: 36,
                textStyle: {
                  normal: {
                    color: 'rgb(4,83,8)',
                  },
                },
              },
              {
                name: '\u7814\u53d1',
                value: 35,
                textStyle: {
                  normal: {
                    color: 'rgb(17,38,149)',
                  },
                },
              },
              {
                name: '\u884c\u4e1a',
                value: 34,
                textStyle: {
                  normal: {
                    color: 'rgb(63,7,52)',
                  },
                },
              },
              {
                name: '\u76ee\u7684',
                value: 33,
                textStyle: {
                  normal: {
                    color: 'rgb(37,129,41)',
                  },
                },
              },
              {
                name: '\u5b9e\u65bd',
                value: 32,
                textStyle: {
                  normal: {
                    color: 'rgb(80,79,14)',
                  },
                },
              },
              {
                name: '\u5b58\u50a8',
                value: 32,
                textStyle: {
                  normal: {
                    color: 'rgb(130,57,56)',
                  },
                },
              },
              {
                name: '\u8f6f\u4ef6',
                value: 32,
                textStyle: {
                  normal: {
                    color: 'rgb(87,59,150)',
                  },
                },
              },
              {
                name: '\u5305\u62ec',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(94,51,20)',
                  },
                },
              },
              {
                name: '\u5b9e\u65f6',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(32,132,72)',
                  },
                },
              },
              {
                name: '\u5236\u5b9a',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(36,94,9)',
                  },
                },
              },
              {
                name: '\u6570\u636e\u5904\u7406',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(138,135,81)',
                  },
                },
              },
              {
                name: '\u6d41\u7a0b',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(119,125,33)',
                  },
                },
              },
              {
                name: '\u7ec4\u4ef6',
                value: 31,
                textStyle: {
                  normal: {
                    color: 'rgb(25,48,91)',
                  },
                },
              },
              {
                name: '\u5efa\u8bbe',
                value: 29,
                textStyle: {
                  normal: {
                    color: 'rgb(20,67,85)',
                  },
                },
              },
              {
                name: '\u6a21\u578b',
                value: 29,
                textStyle: {
                  normal: {
                    color: 'rgb(41,17,72)',
                  },
                },
              },
              {
                name: '\u6027\u80fd',
                value: 29,
                textStyle: {
                  normal: {
                    color: 'rgb(20,5,121)',
                  },
                },
              },
              {
                name: '\u5de5\u5177',
                value: 29,
                textStyle: {
                  normal: {
                    color: 'rgb(136,35,136)',
                  },
                },
              },
              {
                name: '\u652f\u6301',
                value: 28,
                textStyle: {
                  normal: {
                    color: 'rgb(75,25,65)',
                  },
                },
              },
              {
                name: '\u6784\u8bbe',
                value: 27,
                textStyle: {
                  normal: {
                    color: 'rgb(84,20,139)',
                  },
                },
              },
              {
                name: '\u5173\u952e\u5b57',
                value: 27,
                textStyle: {
                  normal: {
                    color: 'rgb(96,148,143)',
                  },
                },
              },
              {
                name: '\u7814\u7a76',
                value: 26,
                textStyle: {
                  normal: {
                    color: 'rgb(51,146,116)',
                  },
                },
              },
              {
                name: '\u67b6\u6784\u8bbe\u8ba1',
                value: 25,
                textStyle: {
                  normal: {
                    color: 'rgb(130,61,50)',
                  },
                },
              },
              {
                name: '\u8c03\u7814',
                value: 25,
                textStyle: {
                  normal: {
                    color: 'rgb(94,48,121)',
                  },
                },
              },
              {
                name: '\u8fc7\u7a0b',
                value: 25,
                textStyle: {
                  normal: {
                    color: 'rgb(83,102,99)',
                  },
                },
              },
              {
                name: '\u5b66\u4e60',
                value: 24,
                textStyle: {
                  normal: {
                    color: 'rgb(86,72,132)',
                  },
                },
              },
              {
                name: '\u5efa\u6a21',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(89,33,90)',
                  },
                },
              },
              {
                name: '\u7cbe\u795e',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(63,58,131)',
                  },
                },
              },
              {
                name: '\u8d23\u4efb',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(58,128,6)',
                  },
                },
              },
              {
                name: '\u89e3\u51b3\u65b9\u6848',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(76,144,2)',
                  },
                },
              },
              {
                name: '\u7b97\u6cd5',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(91,57,127)',
                  },
                },
              },
              {
                name: '\u5408\u4f5c',
                value: 23,
                textStyle: {
                  normal: {
                    color: 'rgb(75,8,147)',
                  },
                },
              },
              {
                name: '\u7406\u89e3',
                value: 22,
                textStyle: {
                  normal: {
                    color: 'rgb(69,108,31)',
                  },
                },
              },
              {
                name: '\u8d23\u4efb\u5fc3',
                value: 22,
                textStyle: {
                  normal: {
                    color: 'rgb(74,87,109)',
                  },
                },
              },
              {
                name: '\u5e02\u573a',
                value: 22,
                textStyle: {
                  normal: {
                    color: 'rgb(152,85,148)',
                  },
                },
              },
              {
                name: '\u7528\u6237',
                value: 22,
                textStyle: {
                  normal: {
                    color: 'rgb(86,126,64)',
                  },
                },
              },
              {
                name: '\u4eba\u5458',
                value: 21,
                textStyle: {
                  normal: {
                    color: 'rgb(86,98,121)',
                  },
                },
              },
              {
                name: '\u642d\u5efa',
                value: 21,
                textStyle: {
                  normal: {
                    color: 'rgb(33,92,124)',
                  },
                },
              },
              {
                name: '\u4ee3\u7801',
                value: 21,
                textStyle: {
                  normal: {
                    color: 'rgb(130,122,20)',
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