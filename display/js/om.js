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
              name: '\u7cfb\u7edf',
              value: 932,
              textStyle: {
                normal: {
                  color: 'rgb(112,159,89)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 746,
              textStyle: {
                normal: {
                  color: 'rgb(77,140,12)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 673,
              textStyle: {
                normal: {
                  color: 'rgb(146,99,69)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 495,
              textStyle: {
                normal: {
                  color: 'rgb(41,107,36)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 434,
              textStyle: {
                normal: {
                  color: 'rgb(93,94,39)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 397,
              textStyle: {
                normal: {
                  color: 'rgb(76,35,148)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 376,
              textStyle: {
                normal: {
                  color: 'rgb(145,66,114)',
                },
              },
            },
            {
              name: '\u670d\u52a1',
              value: 365,
              textStyle: {
                normal: {
                  color: 'rgb(91,146,3)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 357,
              textStyle: {
                normal: {
                  color: 'rgb(144,149,9)',
                },
              },
            },
            {
              name: '\u7f51\u7edc',
              value: 328,
              textStyle: {
                normal: {
                  color: 'rgb(28,4,133)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 313,
              textStyle: {
                normal: {
                  color: 'rgb(129,147,86)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 284,
              textStyle: {
                normal: {
                  color: 'rgb(46,95,89)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 282,
              textStyle: {
                normal: {
                  color: 'rgb(2,95,45)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 268,
              textStyle: {
                normal: {
                  color: 'rgb(159,68,142)',
                },
              },
            },
            {
              name: '\u8bbe\u5907',
              value: 254,
              textStyle: {
                normal: {
                  color: 'rgb(38,27,119)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 245,
              textStyle: {
                normal: {
                  color: 'rgb(40,83,32)',
                },
              },
            },
            {
              name: '\u6545\u969c',
              value: 245,
              textStyle: {
                normal: {
                  color: 'rgb(45,13,18)',
                },
              },
            },
            {
              name: '\u65e5\u5e38',
              value: 233,
              textStyle: {
                normal: {
                  color: 'rgb(90,85,104)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c',
              value: 215,
              textStyle: {
                normal: {
                  color: 'rgb(55,65,118)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 201,
              textStyle: {
                normal: {
                  color: 'rgb(53,111,97)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 200,
              textStyle: {
                normal: {
                  color: 'rgb(2,113,25)',
                },
              },
            },
            {
              name: '\u8fd0\u884c',
              value: 193,
              textStyle: {
                normal: {
                  color: 'rgb(16,5,4)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 188,
              textStyle: {
                normal: {
                  color: 'rgb(0,150,24)',
                },
              },
            },
            {
              name: '\u76d1\u63a7',
              value: 185,
              textStyle: {
                normal: {
                  color: 'rgb(126,131,98)',
                },
              },
            },
            {
              name: '\u670d\u52a1\u5668',
              value: 185,
              textStyle: {
                normal: {
                  color: 'rgb(97,110,66)',
                },
              },
            },
            {
              name: '\u52a1\u5668',
              value: 185,
              textStyle: {
                normal: {
                  color: 'rgb(17,33,82)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 180,
              textStyle: {
                normal: {
                  color: 'rgb(64,62,101)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 176,
              textStyle: {
                normal: {
                  color: 'rgb(147,110,4)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 176,
              textStyle: {
                normal: {
                  color: 'rgb(71,98,99)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 169,
              textStyle: {
                normal: {
                  color: 'rgb(42,13,13)',
                },
              },
            },
            {
              name: '\u914d\u7f6e',
              value: 164,
              textStyle: {
                normal: {
                  color: 'rgb(144,80,156)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 163,
              textStyle: {
                normal: {
                  color: 'rgb(71,158,90)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 163,
              textStyle: {
                normal: {
                  color: 'rgb(1,74,148)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 162,
              textStyle: {
                normal: {
                  color: 'rgb(114,73,134)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 161,
              textStyle: {
                normal: {
                  color: 'rgb(80,109,90)',
                },
              },
            },
            {
              name: '\u5b9e\u65bd',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(131,78,13)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 153,
              textStyle: {
                normal: {
                  color: 'rgb(98,94,157)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 149,
              textStyle: {
                normal: {
                  color: 'rgb(114,125,144)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 148,
              textStyle: {
                normal: {
                  color: 'rgb(10,115,147)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 148,
              textStyle: {
                normal: {
                  color: 'rgb(121,26,6)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 148,
              textStyle: {
                normal: {
                  color: 'rgb(24,4,53)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 148,
              textStyle: {
                normal: {
                  color: 'rgb(152,37,0)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 147,
              textStyle: {
                normal: {
                  color: 'rgb(102,142,139)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 143,
              textStyle: {
                normal: {
                  color: 'rgb(8,75,151)',
                },
              },
            },
            {
              name: '\u5f00\u53d1',
              value: 139,
              textStyle: {
                normal: {
                  color: 'rgb(74,53,26)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 139,
              textStyle: {
                normal: {
                  color: 'rgb(91,125,131)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 138,
              textStyle: {
                normal: {
                  color: 'rgb(29,59,91)',
                },
              },
            },
            {
              name: '\u5b89\u88c5',
              value: 135,
              textStyle: {
                normal: {
                  color: 'rgb(1,64,129)',
                },
              },
            },
            {
              name: '\u90e8\u7f72',
              value: 133,
              textStyle: {
                normal: {
                  color: 'rgb(53,71,53)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 132,
              textStyle: {
                normal: {
                  color: 'rgb(30,34,51)',
                },
              },
            },
            {
              name: '\u652f\u6301',
              value: 131,
              textStyle: {
                normal: {
                  color: 'rgb(24,92,35)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 121,
              textStyle: {
                normal: {
                  color: 'rgb(133,116,45)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 120,
              textStyle: {
                normal: {
                  color: 'rgb(42,39,157)',
                },
              },
            },
            {
              name: '\u786c\u4ef6',
              value: 120,
              textStyle: {
                normal: {
                  color: 'rgb(92,145,58)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 114,
              textStyle: {
                normal: {
                  color: 'rgb(38,93,91)',
                },
              },
            },
            {
              name: '\u4fe1\u606f',
              value: 110,
              textStyle: {
                normal: {
                  color: 'rgb(65,137,142)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 103,
              textStyle: {
                normal: {
                  color: 'rgb(9,121,12)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 103,
              textStyle: {
                normal: {
                  color: 'rgb(85,134,59)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c\u7cfb\u7edf',
              value: 103,
              textStyle: {
                normal: {
                  color: 'rgb(4,77,106)',
                },
              },
            },
            {
              name: '\u6280\u672f\u652f\u6301',
              value: 94,
              textStyle: {
                normal: {
                  color: 'rgb(112,131,136)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 94,
              textStyle: {
                normal: {
                  color: 'rgb(106,144,156)',
                },
              },
            },
            {
              name: '\u73af\u5883',
              value: 93,
              textStyle: {
                normal: {
                  color: 'rgb(156,70,61)',
                },
              },
            },
            {
              name: '\u77e5\u8bc6',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(55,71,119)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 89,
              textStyle: {
                normal: {
                  color: 'rgb(144,82,33)',
                },
              },
            },
            {
              name: '\u57fa\u7840',
              value: 87,
              textStyle: {
                normal: {
                  color: 'rgb(63,35,29)',
                },
              },
            },
            {
              name: '\u62a4\u5de5',
              value: 86,
              textStyle: {
                normal: {
                  color: 'rgb(122,147,95)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 85,
              textStyle: {
                normal: {
                  color: 'rgb(126,54,82)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 85,
              textStyle: {
                normal: {
                  color: 'rgb(32,104,95)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 84,
              textStyle: {
                normal: {
                  color: 'rgb(120,9,129)',
                },
              },
            },
            {
              name: '\u7528\u6237',
              value: 78,
              textStyle: {
                normal: {
                  color: 'rgb(56,61,14)',
                },
              },
            },
            {
              name: '\u4fdd\u969c',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(157,133,158)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(60,2,159)',
                },
              },
            },
            {
              name: '\u5de1\u68c0',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(68,87,81)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(88,97,51)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(159,131,11)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 74,
              textStyle: {
                normal: {
                  color: 'rgb(72,73,8)',
                },
              },
            },
            {
              name: '\u81ea\u52a8',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(46,156,153)',
                },
              },
            },
            {
              name: '\u6027\u80fd',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(24,53,85)',
                },
              },
            },
            {
              name: '\u673a\u623f',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(18,109,37)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 70,
              textStyle: {
                normal: {
                  color: 'rgb(55,149,84)',
                },
              },
            },
            {
              name: '\u5907\u4efd',
              value: 69,
              textStyle: {
                normal: {
                  color: 'rgb(76,128,127)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 69,
              textStyle: {
                normal: {
                  color: 'rgb(18,21,152)',
                },
              },
            },
            {
              name: '\u81ea\u52a8\u5316',
              value: 68,
              textStyle: {
                normal: {
                  color: 'rgb(79,141,87)',
                },
              },
            },
            {
              name: '\u5b9a\u671f',
              value: 68,
              textStyle: {
                normal: {
                  color: 'rgb(50,118,70)',
                },
              },
            },
            {
              name: '\u90e8\u95e8',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(99,8,82)',
                },
              },
            },
            {
              name: '\u8d23\u4efb\u5fc3',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(24,125,144)',
                },
              },
            },
            {
              name: '\u7a33\u5b9a',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(22,130,140)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(38,22,34)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 63,
              textStyle: {
                normal: {
                  color: 'rgb(27,75,106)',
                },
              },
            },
            {
              name: '\u529e\u516c',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(30,17,13)',
                },
              },
            },
            {
              name: '\u67b6\u6784',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(31,144,57)',
                },
              },
            },
            {
              name: '\u534f\u8c03',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(150,12,24)',
                },
              },
            },
            {
              name: '\u5305\u62ec',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(126,138,122)',
                },
              },
            },
            {
              name: '\u4e2d\u5fc3',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(14,78,111)',
                },
              },
            },
            {
              name: '\u534f\u52a9',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(80,108,39)',
                },
              },
            },
            {
              name: '\u57f9\u8bad',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(23,35,93)',
                },
              },
            },
            {
              name: '\u914d\u5408',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(39,46,91)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(24,147,96)',
                },
              },
            },
            {
              name: '\u8fd0\u8425',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(56,32,110)',
                },
              },
            },
            {
              name: '\u89c4\u5212',
              value: 56,
              textStyle: {
                normal: {
                  color: 'rgb(27,8,50)',
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