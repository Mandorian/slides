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
              value: 5934,
              textStyle: {
                normal: {
                  color: 'rgb(67,149,44)',
                },
              },
            },
            {
              name: '\u719f\u6089',
              value: 2903,
              textStyle: {
                normal: {
                  color: 'rgb(81,70,96)',
                },
              },
            },
            {
              name: '\u8bbe\u8ba1',
              value: 2725,
              textStyle: {
                normal: {
                  color: 'rgb(88,95,19)',
                },
              },
            },
            {
              name: '\u6280\u672f',
              value: 2424,
              textStyle: {
                normal: {
                  color: 'rgb(79,29,0)',
                },
              },
            },
            {
              name: '\u7ecf\u9a8c',
              value: 2184,
              textStyle: {
                normal: {
                  color: 'rgb(124,6,36)',
                },
              },
            },
            {
              name: '\u5de5\u4f5c',
              value: 2016,
              textStyle: {
                normal: {
                  color: 'rgb(5,45,132)',
                },
              },
            },
            {
              name: '\u7cfb\u7edf',
              value: 1950,
              textStyle: {
                normal: {
                  color: 'rgb(25,85,69)',
                },
              },
            },
            {
              name: '\u6570\u636e',
              value: 1922,
              textStyle: {
                normal: {
                  color: 'rgb(72,91,50)',
                },
              },
            },
            {
              name: '\u8d1f\u8d23',
              value: 1855,
              textStyle: {
                normal: {
                  color: 'rgb(115,16,147)',
                },
              },
            },
            {
              name: '\u80fd\u529b',
              value: 1780,
              textStyle: {
                normal: {
                  color: 'rgb(114,1,142)',
                },
              },
            },
            {
              name: '\u9879\u76ee',
              value: 1725,
              textStyle: {
                normal: {
                  color: 'rgb(108,124,17)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6',
              value: 1671,
              textStyle: {
                normal: {
                  color: 'rgb(61,128,132)',
                },
              },
            },
            {
              name: '\u76f8\u5173',
              value: 1660,
              textStyle: {
                normal: {
                  color: 'rgb(84,74,150)',
                },
              },
            },
            {
              name: '\u4ea7\u54c1',
              value: 1428,
              textStyle: {
                normal: {
                  color: 'rgb(40,25,4)',
                },
              },
            },
            {
              name: '\u719f\u7ec3',
              value: 1309,
              textStyle: {
                normal: {
                  color: 'rgb(141,135,20)',
                },
              },
            },
            {
              name: '\u4f18\u5148',
              value: 1091,
              textStyle: {
                normal: {
                  color: 'rgb(154,144,112)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b',
              value: 1090,
              textStyle: {
                normal: {
                  color: 'rgb(44,140,127)',
                },
              },
            },
            {
              name: '\u6570\u636e\u5e93',
              value: 1069,
              textStyle: {
                normal: {
                  color: 'rgb(130,141,84)',
                },
              },
            },
            {
              name: '\u636e\u5e93',
              value: 1069,
              textStyle: {
                normal: {
                  color: 'rgb(152,148,134)',
                },
              },
            },
            {
              name: '\u524d\u7aef',
              value: 1059,
              textStyle: {
                normal: {
                  color: 'rgb(122,1,150)',
                },
              },
            },
            {
              name: '\u9700\u6c42',
              value: 1053,
              textStyle: {
                normal: {
                  color: 'rgb(83,5,36)',
                },
              },
            },
            {
              name: '\u6846\u67b6',
              value: 951,
              textStyle: {
                normal: {
                  color: 'rgb(100,84,76)',
                },
              },
            },
            {
              name: '\u5de5\u7a0b\u5e08',
              value: 918,
              textStyle: {
                normal: {
                  color: 'rgb(14,12,151)',
                },
              },
            },
            {
              name: '\u7f16\u5199',
              value: 914,
              textStyle: {
                normal: {
                  color: 'rgb(39,76,110)',
                },
              },
            },
            {
              name: '\u4ee3\u7801',
              value: 890,
              textStyle: {
                normal: {
                  color: 'rgb(25,32,116)',
                },
              },
            },
            {
              name: '\u5206\u6790',
              value: 874,
              textStyle: {
                normal: {
                  color: 'rgb(146,106,5)',
                },
              },
            },
            {
              name: '\u6587\u6863',
              value: 867,
              textStyle: {
                normal: {
                  color: 'rgb(65,112,30)',
                },
              },
            },
            {
              name: '\u804c\u80fd',
              value: 865,
              textStyle: {
                normal: {
                  color: 'rgb(89,104,156)',
                },
              },
            },
            {
              name: '\u7c7b\u522b',
              value: 860,
              textStyle: {
                normal: {
                  color: 'rgb(80,144,65)',
                },
              },
            },
            {
              name: '\u53c2\u4e0e',
              value: 854,
              textStyle: {
                normal: {
                  color: 'rgb(68,77,66)',
                },
              },
            },
            {
              name: '\u4efb\u804c',
              value: 810,
              textStyle: {
                normal: {
                  color: 'rgb(47,113,100)',
                },
              },
            },
            {
              name: '\u4f18\u5316',
              value: 805,
              textStyle: {
                normal: {
                  color: 'rgb(79,13,18)',
                },
              },
            },
            {
              name: '\u516c\u53f8',
              value: 803,
              textStyle: {
                normal: {
                  color: 'rgb(155,57,53)',
                },
              },
            },
            {
              name: '\u56e2\u961f',
              value: 794,
              textStyle: {
                normal: {
                  color: 'rgb(107,19,2)',
                },
              },
            },
            {
              name: '\u6d4b\u8bd5',
              value: 762,
              textStyle: {
                normal: {
                  color: 'rgb(5,97,102)',
                },
              },
            },
            {
              name: '\u67b6\u6784',
              value: 736,
              textStyle: {
                normal: {
                  color: 'rgb(147,90,155)',
                },
              },
            },
            {
              name: '\u89e3\u51b3',
              value: 726,
              textStyle: {
                normal: {
                  color: 'rgb(4,11,30)',
                },
              },
            },
            {
              name: '\u529f\u80fd',
              value: 660,
              textStyle: {
                normal: {
                  color: 'rgb(120,90,74)',
                },
              },
            },
            {
              name: '\u7cbe\u901a',
              value: 658,
              textStyle: {
                normal: {
                  color: 'rgb(100,140,19)',
                },
              },
            },
            {
              name: '\u7f16\u7a0b',
              value: 657,
              textStyle: {
                normal: {
                  color: 'rgb(113,113,122)',
                },
              },
            },
            {
              name: '\u6a21\u5757',
              value: 656,
              textStyle: {
                normal: {
                  color: 'rgb(41,118,118)',
                },
              },
            },
            {
              name: '\u6c9f\u901a',
              value: 637,
              textStyle: {
                normal: {
                  color: 'rgb(22,75,94)',
                },
              },
            },
            {
              name: '\u4e13\u4e1a',
              value: 603,
              textStyle: {
                normal: {
                  color: 'rgb(98,39,136)',
                },
              },
            },
            {
              name: '\u7ef4\u62a4',
              value: 599,
              textStyle: {
                normal: {
                  color: 'rgb(130,73,108)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97',
              value: 588,
              textStyle: {
                normal: {
                  color: 'rgb(6,2,60)',
                },
              },
            },
            {
              name: '\u4e1a\u52a1',
              value: 584,
              textStyle: {
                normal: {
                  color: 'rgb(0,30,139)',
                },
              },
            },
            {
              name: '\u5b66\u5386',
              value: 583,
              textStyle: {
                normal: {
                  color: 'rgb(90,73,133)',
                },
              },
            },
            {
              name: '\u5173\u952e',
              value: 583,
              textStyle: {
                normal: {
                  color: 'rgb(68,49,98)',
                },
              },
            },
            {
              name: '\u670d\u52a1',
              value: 575,
              textStyle: {
                normal: {
                  color: 'rgb(118,109,22)',
                },
              },
            },
            {
              name: '\u8ba1\u7b97\u673a',
              value: 571,
              textStyle: {
                normal: {
                  color: 'rgb(2,122,31)',
                },
              },
            },
            {
              name: '\u7b97\u673a',
              value: 571,
              textStyle: {
                normal: {
                  color: 'rgb(121,93,134)',
                },
              },
            },
            {
              name: '\u72ec\u7acb',
              value: 570,
              textStyle: {
                normal: {
                  color: 'rgb(62,16,29)',
                },
              },
            },
            {
              name: '\u5177\u5907',
              value: 564,
              textStyle: {
                normal: {
                  color: 'rgb(105,51,96)',
                },
              },
            },
            {
              name: '\u5e73\u53f0',
              value: 557,
              textStyle: {
                normal: {
                  color: 'rgb(98,49,145)',
                },
              },
            },
            {
              name: '\u7ba1\u7406',
              value: 546,
              textStyle: {
                normal: {
                  color: 'rgb(5,77,110)',
                },
              },
            },
            {
              name: '\u6027\u80fd',
              value: 538,
              textStyle: {
                normal: {
                  color: 'rgb(109,0,138)',
                },
              },
            },
            {
              name: '\u5173\u952e\u5b57',
              value: 521,
              textStyle: {
                normal: {
                  color: 'rgb(158,108,42)',
                },
              },
            },
            {
              name: '\u719f\u7ec3\u638c\u63e1',
              value: 517,
              textStyle: {
                normal: {
                  color: 'rgb(150,88,80)',
                },
              },
            },
            {
              name: '\u4e0a\u5b66',
              value: 512,
              textStyle: {
                normal: {
                  color: 'rgb(126,1,87)',
                },
              },
            },
            {
              name: '\u4ee5\u4e0a\u5b66\u5386',
              value: 511,
              textStyle: {
                normal: {
                  color: 'rgb(53,119,154)',
                },
              },
            },
            {
              name: '\u8bed\u8a00',
              value: 473,
              textStyle: {
                normal: {
                  color: 'rgb(10,96,135)',
                },
              },
            },
            {
              name: '\u7a0b\u5e8f',
              value: 459,
              textStyle: {
                normal: {
                  color: 'rgb(54,67,27)',
                },
              },
            },
            {
              name: '\u672c\u79d1',
              value: 458,
              textStyle: {
                normal: {
                  color: 'rgb(55,73,113)',
                },
              },
            },
            {
              name: '\u5c97\u4f4d',
              value: 433,
              textStyle: {
                normal: {
                  color: 'rgb(89,21,7)',
                },
              },
            },
            {
              name: '\u5de5\u5177',
              value: 413,
              textStyle: {
                normal: {
                  color: 'rgb(16,159,87)',
                },
              },
            },
            {
              name: '\u65b9\u6848',
              value: 398,
              textStyle: {
                normal: {
                  color: 'rgb(135,8,121)',
                },
              },
            },
            {
              name: '\u5e38\u7528',
              value: 391,
              textStyle: {
                normal: {
                  color: 'rgb(118,152,151)',
                },
              },
            },
            {
              name: '\u5b66\u4e60',
              value: 390,
              textStyle: {
                normal: {
                  color: 'rgb(80,94,53)',
                },
              },
            },
            {
              name: '\u7814\u53d1',
              value: 387,
              textStyle: {
                normal: {
                  color: 'rgb(88,156,26)',
                },
              },
            },
            {
              name: '\u7406\u89e3',
              value: 387,
              textStyle: {
                normal: {
                  color: 'rgb(110,21,101)',
                },
              },
            },
            {
              name: '\u57fa\u7840',
              value: 374,
              textStyle: {
                normal: {
                  color: 'rgb(33,33,87)',
                },
              },
            },
            {
              name: '\u7f16\u7801',
              value: 372,
              textStyle: {
                normal: {
                  color: 'rgb(146,138,157)',
                },
              },
            },
            {
              name: '\u7cbe\u795e',
              value: 367,
              textStyle: {
                normal: {
                  color: 'rgb(95,14,126)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u5de5\u7a0b',
              value: 349,
              textStyle: {
                normal: {
                  color: 'rgb(127,122,117)',
                },
              },
            },
            {
              name: '\u89c4\u8303',
              value: 346,
              textStyle: {
                normal: {
                  color: 'rgb(80,132,128)',
                },
              },
            },
            {
              name: '\u5206\u4eab',
              value: 342,
              textStyle: {
                normal: {
                  color: 'rgb(77,154,92)',
                },
              },
            },
            {
              name: '\u8f6f\u4ef6\u5f00\u53d1',
              value: 341,
              textStyle: {
                normal: {
                  color: 'rgb(68,49,30)',
                },
              },
            },
            {
              name: '\u8d28\u91cf',
              value: 341,
              textStyle: {
                normal: {
                  color: 'rgb(76,151,76)',
                },
              },
            },
            {
              name: '\u524d\u7aef\u5f00\u53d1',
              value: 341,
              textStyle: {
                normal: {
                  color: 'rgb(147,56,16)',
                },
              },
            },
            {
              name: '\u5408\u4f5c',
              value: 334,
              textStyle: {
                normal: {
                  color: 'rgb(80,25,148)',
                },
              },
            },
            {
              name: '\u8d23\u4efb',
              value: 315,
              textStyle: {
                normal: {
                  color: 'rgb(125,32,69)',
                },
              },
            },
            {
              name: '\u4e3b\u6d41',
              value: 307,
              textStyle: {
                normal: {
                  color: 'rgb(128,41,76)',
                },
              },
            },
            {
              name: '\u540e\u7aef',
              value: 301,
              textStyle: {
                normal: {
                  color: 'rgb(153,93,41)',
                },
              },
            },
            {
              name: '\u8fc7\u7a0b',
              value: 297,
              textStyle: {
                normal: {
                  color: 'rgb(102,114,47)',
                },
              },
            },
            {
              name: '\u76ee\u7684',
              value: 291,
              textStyle: {
                normal: {
                  color: 'rgb(57,4,73)',
                },
              },
            },
            {
              name: '\u5ba2\u6237',
              value: 285,
              textStyle: {
                normal: {
                  color: 'rgb(152,56,121)',
                },
              },
            },
            {
              name: '\u6784\u8bbe',
              value: 273,
              textStyle: {
                normal: {
                  color: 'rgb(18,159,41)',
                },
              },
            },
            {
              name: '\u6838\u5fc3',
              value: 271,
              textStyle: {
                normal: {
                  color: 'rgb(117,94,145)',
                },
              },
            },
            {
              name: '\u6d41\u7a0b',
              value: 267,
              textStyle: {
                normal: {
                  color: 'rgb(19,4,109)',
                },
              },
            },
            {
              name: '\u8d23\u4efb\u5fc3',
              value: 266,
              textStyle: {
                normal: {
                  color: 'rgb(50,156,145)',
                },
              },
            },
            {
              name: '\u7ed3\u6784',
              value: 262,
              textStyle: {
                normal: {
                  color: 'rgb(155,140,2)',
                },
              },
            },
            {
              name: '\u6a21\u5f0f',
              value: 254,
              textStyle: {
                normal: {
                  color: 'rgb(155,86,51)',
                },
              },
            },
            {
              name: '\u8c03\u8bd5',
              value: 252,
              textStyle: {
                normal: {
                  color: 'rgb(128,102,151)',
                },
              },
            },
            {
              name: '\u67b6\u6784\u8bbe\u8ba1',
              value: 249,
              textStyle: {
                normal: {
                  color: 'rgb(46,25,46)',
                },
              },
            },
            {
              name: '\u7f51\u7edc',
              value: 246,
              textStyle: {
                normal: {
                  color: 'rgb(124,96,111)',
                },
              },
            },
            {
              name: '\u63d0\u4f9b',
              value: 237,
              textStyle: {
                normal: {
                  color: 'rgb(88,34,133)',
                },
              },
            },
            {
              name: '\u534f\u4f5c',
              value: 237,
              textStyle: {
                normal: {
                  color: 'rgb(27,23,134)',
                },
              },
            },
            {
              name: '\u7ebf\u7a0b',
              value: 233,
              textStyle: {
                normal: {
                  color: 'rgb(6,37,149)',
                },
              },
            },
            {
              name: '\u81f3\u5c11',
              value: 231,
              textStyle: {
                normal: {
                  color: 'rgb(23,6,0)',
                },
              },
            },
            {
              name: '\u914d\u5408',
              value: 230,
              textStyle: {
                normal: {
                  color: 'rgb(25,94,99)',
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