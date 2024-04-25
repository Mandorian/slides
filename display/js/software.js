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
              value: 992,
              textStyle: {
                normal: {
                  color: 'rgb(76,130,35)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 723,
              textStyle: {
                normal: {
                  color: 'rgb(61,100,58)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 493,
              textStyle: {
                normal: {
                  color: 'rgb(121,92,31)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 472,
              textStyle: {
                normal: {
                  color: 'rgb(27,67,138)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 395,
              textStyle: {
                normal: {
                  color: 'rgb(78,9,28)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 382,
              textStyle: {
                normal: {
                  color: 'rgb(28,158,15)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 376,
              textStyle: {
                normal: {
                  color: 'rgb(13,152,80)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 370,
              textStyle: {
                normal: {
                  color: 'rgb(156,77,105)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 331,
              textStyle: {
                normal: {
                  color: 'rgb(35,44,160)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 330,
              textStyle: {
                normal: {
                  color: 'rgb(122,106,155)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 304,
              textStyle: {
                normal: {
                  color: 'rgb(121,67,136)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 279,
              textStyle: {
                normal: {
                  color: 'rgb(69,95,14)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 271,
              textStyle: {
                normal: {
                  color: 'rgb(57,80,0)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 267,
              textStyle: {
                normal: {
                  color: 'rgb(108,113,25)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 257,
              textStyle: {
                normal: {
                  color: 'rgb(112,73,100)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5',
              value: 227,
              textStyle: {
                normal: {
                  color: 'rgb(125,130,35)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 217,
              textStyle: {
                normal: {
                  color: 'rgb(15,39,32)',
                },
              },
            },
            {
              name: '\u7f16\u7a0b',
              value: 217,
              textStyle: {
                normal: {
                  color: 'rgb(144,41,95)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 213,
              textStyle: {
                normal: {
                  color: 'rgb(128,121,157)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 213,
              textStyle: {
                normal: {
                  color: 'rgb(122,156,132)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 204,
              textStyle: {
                normal: {
                  color: 'rgb(23,97,113)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 201,
              textStyle: {
                normal: {
                  color: 'rgb(10,141,31)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 170,
              textStyle: {
                normal: {
                  color: 'rgb(77,158,40)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 163,
              textStyle: {
                normal: {
                  color: 'rgb(137,94,30)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 157,
              textStyle: {
                normal: {
                  color: 'rgb(103,13,87)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(71,155,39)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u5f00\u53d1',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(90,111,74)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 155,
              textStyle: {
                normal: {
                  color: 'rgb(44,51,88)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 154,
              textStyle: {
                normal: {
                  color: 'rgb(130,38,88)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 154,
              textStyle: {
                normal: {
                  color: 'rgb(137,64,5)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u5de5\u7a0b',
              value: 150,
              textStyle: {
                normal: {
                  color: 'rgb(141,98,94)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 143,
              textStyle: {
                normal: {
                  color: 'rgb(157,113,47)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 143,
              textStyle: {
                normal: {
                  color: 'rgb(86,76,156)',
                },
              },
            },
            {
              name: '\u4ee3\u7801',
              value: 139,
              textStyle: {
                normal: {
                  color: 'rgb(11,64,91)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 134,
              textStyle: {
                normal: {
                  color: 'rgb(49,2,127)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 131,
              textStyle: {
                normal: {
                  color: 'rgb(96,123,136)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 130,
              textStyle: {
                normal: {
                  color: 'rgb(142,84,139)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 129,
              textStyle: {
                normal: {
                  color: 'rgb(51,31,25)',
                },
              },
            },
            {
              name: '\u6a21\u5757',
              value: 129,
              textStyle: {
                normal: {
                  color: 'rgb(93,17,107)',
                },
              },
            },
            {
              name: '\u8c03\u8bd5',
              value: 124,
              textStyle: {
                normal: {
                  color: 'rgb(92,147,50)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 122,
              textStyle: {
                normal: {
                  color: 'rgb(71,123,71)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 122,
              textStyle: {
                normal: {
                  color: 'rgb(52,31,2)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 121,
              textStyle: {
                normal: {
                  color: 'rgb(21,41,31)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 120,
              textStyle: {
                normal: {
                  color: 'rgb(151,120,23)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 116,
              textStyle: {
                normal: {
                  color: 'rgb(114,141,103)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 115,
              textStyle: {
                normal: {
                  color: 'rgb(29,146,123)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 111,
              textStyle: {
                normal: {
                  color: 'rgb(54,2,136)',
                },
              },
            },
            {
              name: '\u529f\u80fd',
              value: 111,
              textStyle: {
                normal: {
                  color: 'rgb(24,114,51)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 110,
              textStyle: {
                normal: {
                  color: 'rgb(90,6,37)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 107,
              textStyle: {
                normal: {
                  color: 'rgb(125,133,143)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 106,
              textStyle: {
                normal: {
                  color: 'rgb(94,143,122)',
                },
              },
            },
            {
              name: '\u67b6\u6784',
              value: 102,
              textStyle: {
                normal: {
                  color: 'rgb(25,107,144)',
                },
              },
            },
            {
              name: '\u5d4c\u5165',
              value: 102,
              textStyle: {
                normal: {
                  color: 'rgb(6,8,12)',
                },
              },
            },
            {
              name: '\u5d4c\u5165\u5f0f',
              value: 101,
              textStyle: {
                normal: {
                  color: 'rgb(151,78,98)',
                },
              },
            },
            {
              name: '\u7a0b\u5e8f',
              value: 100,
              textStyle: {
                normal: {
                  color: 'rgb(68,61,14)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 97,
              textStyle: {
                normal: {
                  color: 'rgb(59,53,80)',
                },
              },
            },
            {
              name: '\u7cbe\u901a',
              value: 97,
              textStyle: {
                normal: {
                  color: 'rgb(34,51,128)',
                },
              },
            },
            {
              name: '\u8bbe\u5907',
              value: 88,
              textStyle: {
                normal: {
                  color: 'rgb(81,106,82)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 87,
              textStyle: {
                normal: {
                  color: 'rgb(4,154,155)',
                },
              },
            },
            {
              name: '\u63a7\u5236',
              value: 82,
              textStyle: {
                normal: {
                  color: 'rgb(113,51,77)',
                },
              },
            },
            {
              name: '\u81ea\u52a8',
              value: 81,
              textStyle: {
                normal: {
                  color: 'rgb(47,61,41)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(87,153,16)',
                },
              },
            },
            {
              name: '\u719f\u7ec3\u638c\u63e1',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(147,120,11)',
                },
              },
            },
            {
              name: '\u81ea\u52a8\u5316',
              value: 76,
              textStyle: {
                normal: {
                  color: 'rgb(147,117,25)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 73,
              textStyle: {
                normal: {
                  color: 'rgb(59,91,20)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 73,
              textStyle: {
                normal: {
                  color: 'rgb(132,46,27)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(48,26,2)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 70,
              textStyle: {
                normal: {
                  color: 'rgb(21,79,44)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 69,
              textStyle: {
                normal: {
                  color: 'rgb(94,107,101)',
                },
              },
            },
            {
              name: '\u901a\u4fe1',
              value: 67,
              textStyle: {
                normal: {
                  color: 'rgb(111,100,13)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(52,153,26)',
                },
              },
            },
            {
              name: '\u6846\u67b6',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(58,155,77)',
                },
              },
            },
            {
              name: '\u786c\u4ef6',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(86,80,44)',
                },
              },
            },
            {
              name: '\u89c4\u8303',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(20,130,138)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(28,60,71)',
                },
              },
            },
            {
              name: '\u8fc7\u7a0b',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(15,16,159)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(35,3,59)',
                },
              },
            },
            {
              name: '\u534f\u8bae',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(81,69,63)',
                },
              },
            },
            {
              name: '\u64cd\u4f5c',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(100,98,109)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(5,155,110)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(107,63,141)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(54,125,21)',
                },
              },
            },
            {
              name: '\u7f16\u7801',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(91,155,70)',
                },
              },
            },
            {
              name: '\u7535\u5b50',
              value: 55,
              textStyle: {
                normal: {
                  color: 'rgb(62,23,25)',
                },
              },
            },
            {
              name: '\u7b97\u6cd5',
              value: 54,
              textStyle: {
                normal: {
                  color: 'rgb(101,117,109)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 54,
              textStyle: {
                normal: {
                  color: 'rgb(73,45,159)',
                },
              },
            },
            {
              name: '\u7ed3\u6784',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(5,138,81)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(93,100,33)',
                },
              },
            },
            {
              name: '\u5d4c\u5165\u5f0f\u8f6f\u4ef6',
              value: 53,
              textStyle: {
                normal: {
                  color: 'rgb(44,76,82)',
                },
              },
            },
            {
              name: '\u5355\u7247',
              value: 49,
              textStyle: {
                normal: {
                  color: 'rgb(155,79,141)',
                },
              },
            },
            {
              name: '\u5355\u7247\u673a',
              value: 49,
              textStyle: {
                normal: {
                  color: 'rgb(135,67,40)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 49,
              textStyle: {
                normal: {
                  color: 'rgb(155,78,39)',
                },
              },
            },
            {
              name: '\u884c\u4e1a',
              value: 48,
              textStyle: {
                normal: {
                  color: 'rgb(68,8,105)',
                },
              },
            },
            {
              name: '\u8d23\u4efb\u5fc3',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(145,10,36)',
                },
              },
            },
            {
              name: '\u73af\u5883',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(12,27,130)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(78,84,72)',
                },
              },
            },
            {
              name: '\u8d28\u91cf',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(35,50,146)',
                },
              },
            },
            {
              name: '\u914d\u5408',
              value: 47,
              textStyle: {
                normal: {
                  color: 'rgb(109,151,127)',
                },
              },
            },
            {
              name: '\u76ee\u7684',
              value: 46,
              textStyle: {
                normal: {
                  color: 'rgb(0,142,147)',
                },
              },
            },
            {
              name: '\u9ad8\u7ea7',
              value: 45,
              textStyle: {
                normal: {
                  color: 'rgb(103,66,40)',
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