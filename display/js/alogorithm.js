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
              name: '\u7b97\u6cd5',
              value: 293,
              textStyle: {
                normal: {
                  color: 'rgb(68,44,120)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 131,
              textStyle: {
                normal: {
                  color: 'rgb(64,124,141)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 126,
              textStyle: {
                normal: {
                  color: 'rgb(127,87,89)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 126,
              textStyle: {
                normal: {
                  color: 'rgb(8,99,137)',
                },
              },
            },
            {
              name: '\u5f00\u53d1',
              value: 115,
              textStyle: {
                normal: {
                  color: 'rgb(145,117,16)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 114,
              textStyle: {
                normal: {
                  color: 'rgb(83,151,85)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 92,
              textStyle: {
                normal: {
                  color: 'rgb(111,52,107)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(20,152,1)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 82,
              textStyle: {
                normal: {
                  color: 'rgb(97,1,101)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 82,
              textStyle: {
                normal: {
                  color: 'rgb(42,152,130)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 81,
              textStyle: {
                normal: {
                  color: 'rgb(132,117,79)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 79,
              textStyle: {
                normal: {
                  color: 'rgb(126,55,57)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 79,
              textStyle: {
                normal: {
                  color: 'rgb(49,111,59)',
                },
              },
            },
            {
              name: '\u673a\u5668',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(18,135,102)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 75,
              textStyle: {
                normal: {
                  color: 'rgb(40,142,58)',
                },
              },
            },
            {
              name: '\u56fe\u50cf',
              value: 66,
              textStyle: {
                normal: {
                  color: 'rgb(90,77,81)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(3,74,63)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 63,
              textStyle: {
                normal: {
                  color: 'rgb(157,152,31)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(116,127,128)',
                },
              },
            },
            {
              name: '\u6a21\u578b',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(125,33,98)',
                },
              },
            },
            {
              name: '\u7814\u7a76',
              value: 56,
              textStyle: {
                normal: {
                  color: 'rgb(74,71,75)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 54,
              textStyle: {
                normal: {
                  color: 'rgb(77,63,108)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 51,
              textStyle: {
                normal: {
                  color: 'rgb(32,81,135)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 51,
              textStyle: {
                normal: {
                  color: 'rgb(6,22,136)',
                },
              },
            },
            {
              name: '\u6df1\u5ea6',
              value: 50,
              textStyle: {
                normal: {
                  color: 'rgb(123,81,21)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 49,
              textStyle: {
                normal: {
                  color: 'rgb(160,18,17)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(159,86,22)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 45,
              textStyle: {
                normal: {
                  color: 'rgb(19,46,70)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 44,
              textStyle: {
                normal: {
                  color: 'rgb(50,47,65)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 44,
              textStyle: {
                normal: {
                  color: 'rgb(45,12,60)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 44,
              textStyle: {
                normal: {
                  color: 'rgb(151,110,95)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 42,
              textStyle: {
                normal: {
                  color: 'rgb(158,41,115)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 42,
              textStyle: {
                normal: {
                  color: 'rgb(43,91,34)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 41,
              textStyle: {
                normal: {
                  color: 'rgb(100,98,112)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 41,
              textStyle: {
                normal: {
                  color: 'rgb(14,27,147)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 40,
              textStyle: {
                normal: {
                  color: 'rgb(28,4,31)',
                },
              },
            },
            {
              name: '\u6570\u5b66',
              value: 39,
              textStyle: {
                normal: {
                  color: 'rgb(81,76,158)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 37,
              textStyle: {
                normal: {
                  color: 'rgb(35,57,58)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 37,
              textStyle: {
                normal: {
                  color: 'rgb(130,71,82)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 36,
              textStyle: {
                normal: {
                  color: 'rgb(79,147,34)',
                },
              },
            },
            {
              name: '\u7814\u53d1',
              value: 34,
              textStyle: {
                normal: {
                  color: 'rgb(159,70,67)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 34,
              textStyle: {
                normal: {
                  color: 'rgb(64,8,23)',
                },
              },
            },
            {
              name: '\u9886\u57df',
              value: 33,
              textStyle: {
                normal: {
                  color: 'rgb(71,78,158)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 33,
              textStyle: {
                normal: {
                  color: 'rgb(33,73,59)',
                },
              },
            },
            {
              name: '\u8bc6\u522b',
              value: 32,
              textStyle: {
                normal: {
                  color: 'rgb(132,82,85)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 32,
              textStyle: {
                normal: {
                  color: 'rgb(100,135,85)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 32,
              textStyle: {
                normal: {
                  color: 'rgb(140,84,114)',
                },
              },
            },
            {
              name: '\u667a\u80fd',
              value: 31,
              textStyle: {
                normal: {
                  color: 'rgb(87,37,147)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 30,
              textStyle: {
                normal: {
                  color: 'rgb(38,99,103)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(34,2,7)',
                },
              },
            },
            {
              name: '\u68c0\u6d4b',
              value: 29,
              textStyle: {
                normal: {
                  color: 'rgb(139,3,85)',
                },
              },
            },
            {
              name: '\u5efa\u6a21',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(33,16,128)',
                },
              },
            },
            {
              name: '\u89c6\u89c9',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(50,26,141)',
                },
              },
            },
            {
              name: '\u6846\u67b6',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(63,33,149)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 28,
              textStyle: {
                normal: {
                  color: 'rgb(1,110,154)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(133,29,18)',
                },
              },
            },
            {
              name: '\u7f16\u7a0b',
              value: 27,
              textStyle: {
                normal: {
                  color: 'rgb(4,112,70)',
                },
              },
            },
            {
              name: '\u573a\u666f',
              value: 26,
              textStyle: {
                normal: {
                  color: 'rgb(71,148,28)',
                },
              },
            },
            {
              name: '\u56fe\u50cf\u5904\u7406',
              value: 26,
              textStyle: {
                normal: {
                  color: 'rgb(38,152,93)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(122,123,110)',
                },
              },
            },
            {
              name: '\u89c4\u5212',
              value: 25,
              textStyle: {
                normal: {
                  color: 'rgb(64,44,160)',
                },
              },
            },
            {
              name: '\u7cbe\u901a',
              value: 24,
              textStyle: {
                normal: {
                  color: 'rgb(43,80,18)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 24,
              textStyle: {
                normal: {
                  color: 'rgb(77,11,76)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 23,
              textStyle: {
                normal: {
                  color: 'rgb(92,25,94)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 22,
              textStyle: {
                normal: {
                  color: 'rgb(40,119,77)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 22,
              textStyle: {
                normal: {
                  color: 'rgb(64,4,1)',
                },
              },
            },
            {
              name: '\u57fa\u7840',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(158,127,43)',
                },
              },
            },
            {
              name: '\u5305\u62ec',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(120,33,149)',
                },
              },
            },
            {
              name: '\u719f\u7ec3\u638c\u63e1',
              value: 21,
              textStyle: {
                normal: {
                  color: 'rgb(133,136,144)',
                },
              },
            },
            {
              name: '\u6316\u6398',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(159,46,22)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 20,
              textStyle: {
                normal: {
                  color: 'rgb(134,53,93)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(19,121,39)',
                },
              },
            },
            {
              name: '\u4eba\u5de5',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(41,86,38)',
                },
              },
            },
            {
              name: '\u4eba\u5de5\u667a\u80fd',
              value: 19,
              textStyle: {
                normal: {
                  color: 'rgb(36,138,152)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5206\u6790',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(53,73,12)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(23,20,94)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(99,14,157)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(123,60,88)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 18,
              textStyle: {
                normal: {
                  color: 'rgb(64,34,69)',
                },
              },
            },
            {
              name: '\u8bad\u7ec3',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(153,20,56)',
                },
              },
            },
            {
              name: '\u76ee\u6807',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(41,6,144)',
                },
              },
            },
            {
              name: '\u8bba\u6587',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(1,75,107)',
                },
              },
            },
            {
              name: '\u81ea\u52a8',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(155,135,28)',
                },
              },
            },
            {
              name: '\u673a\u5668\u4eba',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(54,156,70)',
                },
              },
            },
            {
              name: '\u4fe1\u53f7',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(118,153,92)',
                },
              },
            },
            {
              name: '\u7528\u6237',
              value: 17,
              textStyle: {
                normal: {
                  color: 'rgb(8,159,140)',
                },
              },
            },
            {
              name: '\u7406\u89e3',
              value: 16,
              textStyle: {
                normal: {
                  color: 'rgb(70,107,154)',
                },
              },
            },
            {
              name: '\u77e5\u8bc6',
              value: 16,
              textStyle: {
                normal: {
                  color: 'rgb(48,116,31)',
                },
              },
            },
            {
              name: '\u5206\u5272',
              value: 16,
              textStyle: {
                normal: {
                  color: 'rgb(118,121,77)',
                },
              },
            },
            {
              name: '\u524d\u6cbf',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(9,76,75)',
                },
              },
            },
            {
              name: '\u7855\u58eb',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(82,108,143)',
                },
              },
            },
            {
              name: '\u7ed3\u6784',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(144,77,29)',
                },
              },
            },
            {
              name: '\u7edf\u8ba1',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(86,118,86)',
                },
              },
            },
            {
              name: '\u89e3\u51b3\u65b9\u6848',
              value: 15,
              textStyle: {
                normal: {
                  color: 'rgb(82,157,35)',
                },
              },
            },
            {
              name: '\u6570\u636e\u6316\u6398',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(145,149,27)',
                },
              },
            },
            {
              name: '\u5206\u7c7b',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(112,152,75)',
                },
              },
            },
            {
              name: '\u5b9a\u4f4d',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(159,74,101)',
                },
              },
            },
            {
              name: '\u533b\u7597',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(85,71,47)',
                },
              },
            },
            {
              name: '\u4e34\u5e8a',
              value: 14,
              textStyle: {
                normal: {
                  color: 'rgb(4,145,69)',
                },
              },
            },
            {
              name: '\u63d0\u5347',
              value: 13,
              textStyle: {
                normal: {
                  color: 'rgb(144,145,13)',
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