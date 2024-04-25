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
              value: 1808,
              textStyle: {
                normal: {
                  color: 'rgb(72,64,128)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 1256,
              textStyle: {
                normal: {
                  color: 'rgb(115,157,31)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 576,
              textStyle: {
                normal: {
                  color: 'rgb(52,78,95)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5206\u6790',
              value: 505,
              textStyle: {
                normal: {
                  color: 'rgb(87,48,134)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 453,
              textStyle: {
                normal: {
                  color: 'rgb(53,28,140)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 448,
              textStyle: {
                normal: {
                  color: 'rgb(153,52,147)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 413,
              textStyle: {
                normal: {
                  color: 'rgb(121,136,140)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 351,
              textStyle: {
                normal: {
                  color: 'rgb(160,85,29)',
                },
              },
            },
            {
              name: '\u7edf\u8ba1',
              value: 290,
              textStyle: {
                normal: {
                  color: 'rgb(95,6,16)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 283,
              textStyle: {
                normal: {
                  color: 'rgb(20,50,99)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 232,
              textStyle: {
                normal: {
                  color: 'rgb(89,40,30)',
                },
              },
            },
            {
              name: '\u8fd0\u8425',
              value: 222,
              textStyle: {
                normal: {
                  color: 'rgb(1,72,132)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 219,
              textStyle: {
                normal: {
                  color: 'rgb(25,91,61)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 210,
              textStyle: {
                normal: {
                  color: 'rgb(4,146,101)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 209,
              textStyle: {
                normal: {
                  color: 'rgb(2,108,58)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 206,
              textStyle: {
                normal: {
                  color: 'rgb(150,60,32)',
                },
              },
            },
            {
              name: '\u90e8\u95e8',
              value: 202,
              textStyle: {
                normal: {
                  color: 'rgb(140,5,26)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 201,
              textStyle: {
                normal: {
                  color: 'rgb(105,17,59)',
                },
              },
            },
            {
              name: '\u62a5\u8868',
              value: 181,
              textStyle: {
                normal: {
                  color: 'rgb(114,28,10)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 176,
              textStyle: {
                normal: {
                  color: 'rgb(78,89,0)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 169,
              textStyle: {
                normal: {
                  color: 'rgb(63,78,46)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 160,
              textStyle: {
                normal: {
                  color: 'rgb(60,124,52)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 159,
              textStyle: {
                normal: {
                  color: 'rgb(64,94,118)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 158,
              textStyle: {
                normal: {
                  color: 'rgb(118,23,8)',
                },
              },
            },
            {
              name: '\u62a5\u544a',
              value: 158,
              textStyle: {
                normal: {
                  color: 'rgb(20,147,57)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 157,
              textStyle: {
                normal: {
                  color: 'rgb(15,98,43)',
                },
              },
            },
            {
              name: '\u884c\u4e1a',
              value: 156,
              textStyle: {
                normal: {
                  color: 'rgb(90,8,21)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 151,
              textStyle: {
                normal: {
                  color: 'rgb(106,56,74)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 143,
              textStyle: {
                normal: {
                  color: 'rgb(72,19,139)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 142,
              textStyle: {
                normal: {
                  color: 'rgb(49,152,82)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 138,
              textStyle: {
                normal: {
                  color: 'rgb(151,3,2)',
                },
              },
            },
            {
              name: '\u9500\u552e',
              value: 137,
              textStyle: {
                normal: {
                  color: 'rgb(46,9,97)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 128,
              textStyle: {
                normal: {
                  color: 'rgb(85,78,69)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 125,
              textStyle: {
                normal: {
                  color: 'rgb(127,135,47)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 123,
              textStyle: {
                normal: {
                  color: 'rgb(57,154,10)',
                },
              },
            },
            {
              name: '\u6574\u7406',
              value: 122,
              textStyle: {
                normal: {
                  color: 'rgb(53,3,154)',
                },
              },
            },
            {
              name: '\u6316\u6398',
              value: 117,
              textStyle: {
                normal: {
                  color: 'rgb(31,127,138)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 114,
              textStyle: {
                normal: {
                  color: 'rgb(98,123,152)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 105,
              textStyle: {
                normal: {
                  color: 'rgb(22,29,131)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 102,
              textStyle: {
                normal: {
                  color: 'rgb(137,145,111)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 100,
              textStyle: {
                normal: {
                  color: 'rgb(111,102,53)',
                },
              },
            },
            {
              name: '\u6a21\u578b',
              value: 99,
              textStyle: {
                normal: {
                  color: 'rgb(72,144,123)',
                },
              },
            },
            {
              name: '\u4fe1\u606f',
              value: 98,
              textStyle: {
                normal: {
                  color: 'rgb(99,74,66)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 97,
              textStyle: {
                normal: {
                  color: 'rgb(8,132,149)',
                },
              },
            },
            {
              name: '\u534f\u52a9',
              value: 97,
              textStyle: {
                normal: {
                  color: 'rgb(120,4,80)',
                },
              },
            },
            {
              name: '\u5e02\u573a',
              value: 96,
              textStyle: {
                normal: {
                  color: 'rgb(142,31,71)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 95,
              textStyle: {
                normal: {
                  color: 'rgb(139,122,60)',
                },
              },
            },
            {
              name: '\u5206\u6790\u62a5\u544a',
              value: 94,
              textStyle: {
                normal: {
                  color: 'rgb(26,81,138)',
                },
              },
            },
            {
              name: '\u5206\u6790\u5e08',
              value: 93,
              textStyle: {
                normal: {
                  color: 'rgb(15,126,111)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 92,
              textStyle: {
                normal: {
                  color: 'rgb(84,71,86)',
                },
              },
            },
            {
              name: '\u903b\u8f91',
              value: 92,
              textStyle: {
                normal: {
                  color: 'rgb(68,0,93)',
                },
              },
            },
            {
              name: '\u6536\u96c6',
              value: 91,
              textStyle: {
                normal: {
                  color: 'rgb(105,1,62)',
                },
              },
            },
            {
              name: '\u5efa\u8bae',
              value: 91,
              textStyle: {
                normal: {
                  color: 'rgb(19,144,72)',
                },
              },
            },
            {
              name: '\u652f\u6301',
              value: 90,
              textStyle: {
                normal: {
                  color: 'rgb(54,89,159)',
                },
              },
            },
            {
              name: '\u4f53\u7cfb',
              value: 84,
              textStyle: {
                normal: {
                  color: 'rgb(112,61,125)',
                },
              },
            },
            {
              name: '\u5b9a\u671f',
              value: 84,
              textStyle: {
                normal: {
                  color: 'rgb(26,25,106)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 84,
              textStyle: {
                normal: {
                  color: 'rgb(8,39,47)',
                },
              },
            },
            {
              name: '\u5f00\u53d1',
              value: 83,
              textStyle: {
                normal: {
                  color: 'rgb(30,121,81)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 82,
              textStyle: {
                normal: {
                  color: 'rgb(113,10,68)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 82,
              textStyle: {
                normal: {
                  color: 'rgb(59,52,127)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(86,111,141)',
                },
              },
            },
            {
              name: '\u6307\u6807',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(17,142,96)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 80,
              textStyle: {
                normal: {
                  color: 'rgb(16,124,56)',
                },
              },
            },
            {
              name: '\u5bf9\u6570',
              value: 78,
              textStyle: {
                normal: {
                  color: 'rgb(121,38,62)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(104,67,133)',
                },
              },
            },
            {
              name: '\u9886\u5bfc',
              value: 77,
              textStyle: {
                normal: {
                  color: 'rgb(20,7,4)',
                },
              },
            },
            {
              name: '\u5efa\u7acb',
              value: 75,
              textStyle: {
                normal: {
                  color: 'rgb(13,99,149)',
                },
              },
            },
            {
              name: '\u76d1\u63a7',
              value: 75,
              textStyle: {
                normal: {
                  color: 'rgb(65,143,97)',
                },
              },
            },
            {
              name: '\u63d0\u51fa',
              value: 74,
              textStyle: {
                normal: {
                  color: 'rgb(19,64,40)',
                },
              },
            },
            {
              name: '\u65e5\u5e38',
              value: 74,
              textStyle: {
                normal: {
                  color: 'rgb(82,60,140)',
                },
              },
            },
            {
              name: '\u798f\u5229',
              value: 73,
              textStyle: {
                normal: {
                  color: 'rgb(44,130,109)',
                },
              },
            },
            {
              name: '\u57f9\u8bad',
              value: 72,
              textStyle: {
                normal: {
                  color: 'rgb(128,60,43)',
                },
              },
            },
            {
              name: '\u529e\u516c',
              value: 71,
              textStyle: {
                normal: {
                  color: 'rgb(150,75,27)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 70,
              textStyle: {
                normal: {
                  color: 'rgb(132,25,59)',
                },
              },
            },
            {
              name: '\u654f\u611f',
              value: 69,
              textStyle: {
                normal: {
                  color: 'rgb(104,92,63)',
                },
              },
            },
            {
              name: '\u5404\u7c7b',
              value: 69,
              textStyle: {
                normal: {
                  color: 'rgb(78,28,111)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 68,
              textStyle: {
                normal: {
                  color: 'rgb(32,18,126)',
                },
              },
            },
            {
              name: '\u534f\u8c03',
              value: 68,
              textStyle: {
                normal: {
                  color: 'rgb(51,146,107)',
                },
              },
            },
            {
              name: '\u53d1\u5c55',
              value: 66,
              textStyle: {
                normal: {
                  color: 'rgb(146,51,48)',
                },
              },
            },
            {
              name: '\u8d23\u4efb\u5fc3',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(37,119,78)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(2,21,34)',
                },
              },
            },
            {
              name: '\u5927\u4e13',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(129,149,63)',
                },
              },
            },
            {
              name: '\u7b56\u7565',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(92,66,156)',
                },
              },
            },
            {
              name: '\u6570\u636e\u6316\u6398',
              value: 65,
              textStyle: {
                normal: {
                  color: 'rgb(150,159,57)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(109,59,135)',
                },
              },
            },
            {
              name: '\u7ecf\u7406',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(4,22,125)',
                },
              },
            },
            {
              name: '\u7528\u6237',
              value: 64,
              textStyle: {
                normal: {
                  color: 'rgb(111,153,53)',
                },
              },
            },
            {
              name: '\u60c5\u51b5',
              value: 62,
              textStyle: {
                normal: {
                  color: 'rgb(58,141,4)',
                },
              },
            },
            {
              name: '\u8425\u9500',
              value: 61,
              textStyle: {
                normal: {
                  color: 'rgb(29,53,142)',
                },
              },
            },
            {
              name: '\u6267\u884c',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(97,101,65)',
                },
              },
            },
            {
              name: '\u601d\u7ef4',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(26,103,79)',
                },
              },
            },
            {
              name: '\u7814\u7a76',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(10,64,134)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(151,25,101)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 60,
              textStyle: {
                normal: {
                  color: 'rgb(39,16,50)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(133,24,102)',
                },
              },
            },
            {
              name: '\u5236\u5b9a',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(53,106,103)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b\u6570\u636e',
              value: 59,
              textStyle: {
                normal: {
                  color: 'rgb(9,24,58)',
                },
              },
            },
            {
              name: '\u4f18\u79c0',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(11,61,155)',
                },
              },
            },
            {
              name: '\u5927\u6570',
              value: 58,
              textStyle: {
                normal: {
                  color: 'rgb(134,71,141)',
                },
              },
            },
            {
              name: '\u5458\u5de5',
              value: 57,
              textStyle: {
                normal: {
                  color: 'rgb(12,132,71)',
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