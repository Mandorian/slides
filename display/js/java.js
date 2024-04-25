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
              name: '\u5f00\u53d1',
              value: 327,
              textStyle: {
                normal: {
                  color: 'rgb(79,160,145)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 238,
              textStyle: {
                normal: {
                  color: 'rgb(43,105,124)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 179,
              textStyle: {
                normal: {
                  color: 'rgb(121,145,84)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 178,
              textStyle: {
                normal: {
                  color: 'rgb(158,110,11)',
                },
              },
            },
            {
              
              name: '\u7ecf\u9a8c',
              value: 165,
              textStyle: {
                normal: {
                  color: 'rgb(92,95,103)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 158,
              textStyle: {
                normal: {
                  color: 'rgb(14,67,71)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 146,
              textStyle: {
                normal: {
                  color: 'rgb(119,80,123)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 135,
              textStyle: {
                normal: {
                  color: 'rgb(86,73,103)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 125,
              textStyle: {
                normal: {
                  color: 'rgb(48,105,116)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 109,
              textStyle: {
                normal: {
                  color: 'rgb(1,0,31)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 105,
              textStyle: {
                normal: {
                  color: 'rgb(75,75,101)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 98,
              textStyle: {
                normal: {
                  color: 'rgb(100,103,145)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 98,
              textStyle: {
                normal: {
                  color: 'rgb(140,70,131)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 95,
              textStyle: {
                normal: {
                  color: 'rgb(50,106,102)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 92,
              textStyle: {
                normal: {
                  color: 'rgb(134,138,104)',
                },
              },
            },
            {
              name: '\u6846\u67b6',
              value: 86,
              textStyle: {
                normal: {
                  color: 'rgb(157,89,122)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(33,76,0)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 79,
              textStyle: {
                normal: {
                  color: 'rgb(92,9,39)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(42,82,152)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(143,112,84)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(143,18,137)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(62,125,37)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(81,93,7)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(92,17,129)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(88,67,145)',
                },
              },
            },
            {
              name: '\u4ee3\u7801',
              value: 70,
              textStyle: {
                normal: {
                  color: 'rgb(37,72,148)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 70,
              textStyle: {
                normal: {
                  color: 'rgb(75,23,19)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(100,58,80)',
                },
              },
            },
            {
              name: '\u67b6\u6784',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(11,72,37)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(137,160,64)',
                },
              },
            },
            {
              name: '\u670d\u52a1',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(25,108,92)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(116,26,108)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(68,5,152)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(73,138,4)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 48,
              textStyle: {
                normal: {
                  color: 'rgb(29,123,31)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(115,114,60)',
                },
              },
            },
            {
              name: '\u529f\u80fd',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(40,139,31)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 46,
              textStyle: {
                normal: {
                  color: 'rgb(126,74,50)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 46,
              textStyle: {
                normal: {
                  color: 'rgb(33,146,125)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 46,
              textStyle: {
                normal: {
                  color: 'rgb(48,88,73)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 45,
              textStyle: {
                normal: {
                  color: 'rgb(112,152,29)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 44,
              textStyle: {
                normal: {
                  color: 'rgb(122,10,128)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 41,
              textStyle: {
                normal: {
                  color: 'rgb(43,87,2)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 41,
              textStyle: {
                normal: {
                  color: 'rgb(148,50,144)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 40,
              textStyle: {
                normal: {
                  color: 'rgb(136,23,63)',
                },
              },
            },
            {
              name: '\u6a21\u5757',
              value: 40,
              textStyle: {
                normal: {
                  color: 'rgb(155,74,85)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(37,75,33)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(66,24,148)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(143,77,133)',
                },
              },
            },
            {
              name: '\u7814\u53d1',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(126,125,160)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 38,
              textStyle: {
                normal: {
                  color: 'rgb(78,18,60)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5',
              value: 38,
              textStyle: {
                normal: {
                  color: 'rgb(5,107,13)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 37,
              textStyle: {
                normal: {
                  color: 'rgb(95,101,121)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 36,
              textStyle: {
                normal: {
                  color: 'rgb(145,104,18)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 36,
              textStyle: {
                normal: {
                  color: 'rgb(67,34,22)',
                },
              },
            },
            {
              name: '\u7f16\u7a0b',
              value: 35,
              textStyle: {
                normal: {
                  color: 'rgb(111,118,11)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u5de5\u7a0b',
              value: 35,
              textStyle: {
                normal: {
                  color: 'rgb(48,43,154)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 35,
              textStyle: {
                normal: {
                  color: 'rgb(94,12,12)',
                },
              },
            },
            {
              name: '\u57fa\u7840',
              value: 34,
              textStyle: {
                normal: {
                  color: 'rgb(41,95,88)',
                },
              },
            },
            {
              name: '\u884c\u4e1a',
              value: 33,
              textStyle: {
                normal: {
                  color: 'rgb(104,84,127)',
                },
              },
            },
            {
              name: '\u7406\u89e3',
              value: 33,
              textStyle: {
                normal: {
                  color: 'rgb(27,87,40)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 32,
              textStyle: {
                normal: {
                  color: 'rgb(8,148,63)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(52,101,53)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(41,40,75)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(72,34,60)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 30,
              textStyle: {
                normal: {
                  color: 'rgb(70,125,33)',
                },
              },
            },
            {
              name: '\u4e3b\u6d41',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(67,127,129)',
                },
              },
            },
            {
              name: '\u7cbe\u901a',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(116,110,46)',
                },
              },
            },
            {
              name: '\u4f9b\u5e94',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(147,42,96)',
                },
              },
            },
            {
              name: '\u4f9b\u5e94\u94fe',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(117,124,120)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(6,21,86)',
                },
              },
            },
            {
              name: '\u8d28\u91cf',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(107,85,128)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(155,127,107)',
                },
              },
            },
            {
              name: '\u719f\u7ec3\u638c\u63e1',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(67,67,62)',
                },
              },
            },
            {
              name: '\u548c\u89e3',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(83,154,75)',
                },
              },
            },
            {
              name: '\u89e3\u51b3\u65b9\u6848',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(90,153,10)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 24,
              textStyle: {
                normal: {
                  color: 'rgb(121,33,128)',
                },
              },
            },
            {
              name: '\u6838\u5fc3',
              value: 24,
              textStyle: {
                normal: {
                  color: 'rgb(70,60,109)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(135,150,99)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(92,90,19)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(7,132,137)',
                },
              },
            },
            {
              name: '\u91d1\u878d',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(103,66,88)',
                },
              },
            },
            {
              name: '\u4e92\u8054',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(14,59,84)',
                },
              },
            },
            {
              name: '\u89c4\u8303',
              value: 22,
              textStyle: {
                normal: {
                  color: 'rgb(63,137,15)',
                },
              },
            },
            {
              name: '\u591a\u7ebf',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(93,4,55)',
                },
              },
            },
            {
              name: '\u591a\u7ebf\u7a0b',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(147,127,103)',
                },
              },
            },
            {
              name: '\u7ebf\u7a0b',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(1,128,66)',
                },
              },
            },
            {
              name: '\u90e8\u7f72',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(96,136,134)',
                },
              },
            },
            {
              name: '\u7406\u5de5',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(48,41,85)',
                },
              },
            },
            {
              name: '\u6027\u80fd',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(101,132,127)',
                },
              },
            },
            {
              name: '\u7ecf\u7406',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(33,146,14)',
                },
              },
            },
            {
              name: '\u4f01\u4e1a',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(75,74,139)',
                },
              },
            },
            {
              name: '\u76ee\u7684',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(110,126,59)',
                },
              },
            },
            {
              name: '\u5f00\u6e90',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(116,81,72)',
                },
              },
            },
            {
              name: '\u524d\u7aef',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(152,44,30)',
                },
              },
            },
            {
              name: '\u5b9e\u65bd',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(116,106,38)',
                },
              },
            },
            {
              name: '\u67b6\u6784\u8bbe\u8ba1',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(78,52,57)',
                },
              },
            },
            {
              name: '\u6784\u8bbe',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(156,60,22)',
                },
              },
            },
            {
              name: '\u89e3\u51b3\u95ee\u9898',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(33,6,27)',
                },
              },
            },
            {
              name: '\u8054\u7f51',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(64,116,72)',
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