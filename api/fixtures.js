const localFixtures = [
  {
    "match": 1,
    "group": "A",
    "date": {
      "zh": "6月12日 周五 03:00 北京时间",
      "en": "Jun 11 19:00 UTC"
    },
    "teams": {
      "zh": "墨西哥 vs 南非",
      "en": "Mexico vs South Africa"
    },
    "venue": {
      "zh": "墨西哥城体育场，墨西哥城",
      "en": "Mexico City Stadium, Mexico City"
    },
    "related": [
      "MEX",
      "RSA"
    ]
  },
  {
    "match": 2,
    "group": "A",
    "date": {
      "zh": "6月12日 周五 10:00 北京时间",
      "en": "Jun 12 02:00 UTC"
    },
    "teams": {
      "zh": "韩国 vs 捷克",
      "en": "Korea Republic vs Czechia"
    },
    "venue": {
      "zh": "瓜达拉哈拉体育场，瓜达拉哈拉",
      "en": "Guadalajara Stadium, Guadalajara"
    },
    "related": [
      "KOR",
      "CZE"
    ]
  },
  {
    "match": 3,
    "group": "B",
    "date": {
      "zh": "6月13日 周六 03:00 北京时间",
      "en": "Jun 12 19:00 UTC"
    },
    "teams": {
      "zh": "加拿大 vs 波黑",
      "en": "Canada vs Bosnia and Herzegovina"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "CAN",
      "BIH"
    ]
  },
  {
    "match": 4,
    "group": "D",
    "date": {
      "zh": "6月13日 周六 09:00 北京时间",
      "en": "Jun 13 01:00 UTC"
    },
    "teams": {
      "zh": "美国 vs 巴拉圭",
      "en": "USA vs Paraguay"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "USA",
      "PAR"
    ]
  },
  {
    "match": 8,
    "group": "B",
    "date": {
      "zh": "6月14日 周日 03:00 北京时间",
      "en": "Jun 13 19:00 UTC"
    },
    "teams": {
      "zh": "卡塔尔 vs 瑞士",
      "en": "Qatar vs Switzerland"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "QAT",
      "SUI"
    ]
  },
  {
    "match": 7,
    "group": "C",
    "date": {
      "zh": "6月14日 周日 06:00 北京时间",
      "en": "Jun 13 22:00 UTC"
    },
    "teams": {
      "zh": "巴西 vs 摩洛哥",
      "en": "Brazil vs Morocco"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "BRA",
      "MAR"
    ]
  },
  {
    "match": 5,
    "group": "C",
    "date": {
      "zh": "6月14日 周日 09:00 北京时间",
      "en": "Jun 14 01:00 UTC"
    },
    "teams": {
      "zh": "海地 vs 苏格兰",
      "en": "Haiti vs Scotland"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "HAI",
      "SCO"
    ]
  },
  {
    "match": 6,
    "group": "D",
    "date": {
      "zh": "6月14日 周日 12:00 北京时间",
      "en": "Jun 14 04:00 UTC"
    },
    "teams": {
      "zh": "澳大利亚 vs 土耳其",
      "en": "Australia vs Türkiye"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "AUS",
      "TUR"
    ]
  },
  {
    "match": 10,
    "group": "E",
    "date": {
      "zh": "6月15日 周一 01:00 北京时间",
      "en": "Jun 14 17:00 UTC"
    },
    "teams": {
      "zh": "德国 vs 库拉索",
      "en": "Germany vs Curaçao"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "GER",
      "CUW"
    ]
  },
  {
    "match": 11,
    "group": "F",
    "date": {
      "zh": "6月15日 周一 04:00 北京时间",
      "en": "Jun 14 20:00 UTC"
    },
    "teams": {
      "zh": "荷兰 vs 日本",
      "en": "Netherlands vs Japan"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "NED",
      "JPN"
    ]
  },
  {
    "match": 9,
    "group": "E",
    "date": {
      "zh": "6月15日 周一 07:00 北京时间",
      "en": "Jun 14 23:00 UTC"
    },
    "teams": {
      "zh": "科特迪瓦 vs 厄瓜多尔",
      "en": "Côte d'Ivoire vs Ecuador"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "CIV",
      "ECU"
    ]
  },
  {
    "match": 12,
    "group": "F",
    "date": {
      "zh": "6月15日 周一 10:00 北京时间",
      "en": "Jun 15 02:00 UTC"
    },
    "teams": {
      "zh": "瑞典 vs 突尼斯",
      "en": "Sweden vs Tunisia"
    },
    "venue": {
      "zh": "蒙特雷体育场，蒙特雷",
      "en": "Monterrey Stadium, Monterrey"
    },
    "related": [
      "SWE",
      "TUN"
    ]
  },
  {
    "match": 14,
    "group": "H",
    "date": {
      "zh": "6月16日 周二 00:00 北京时间",
      "en": "Jun 15 16:00 UTC"
    },
    "teams": {
      "zh": "西班牙 vs 佛得角",
      "en": "Spain vs Cabo Verde"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "ESP",
      "CPV"
    ]
  },
  {
    "match": 16,
    "group": "G",
    "date": {
      "zh": "6月16日 周二 03:00 北京时间",
      "en": "Jun 15 19:00 UTC"
    },
    "teams": {
      "zh": "比利时 vs 埃及",
      "en": "Belgium vs Egypt"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "BEL",
      "EGY"
    ]
  },
  {
    "match": 13,
    "group": "H",
    "date": {
      "zh": "6月16日 周二 06:00 北京时间",
      "en": "Jun 15 22:00 UTC"
    },
    "teams": {
      "zh": "沙特阿拉伯 vs 乌拉圭",
      "en": "Saudi Arabia vs Uruguay"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "KSA",
      "URU"
    ]
  },
  {
    "match": 15,
    "group": "G",
    "date": {
      "zh": "6月16日 周二 09:00 北京时间",
      "en": "Jun 16 01:00 UTC"
    },
    "teams": {
      "zh": "伊朗 vs 新西兰",
      "en": "IR Iran vs New Zealand"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "IRN",
      "NZL"
    ]
  },
  {
    "match": 17,
    "group": "I",
    "date": {
      "zh": "6月17日 周三 03:00 北京时间",
      "en": "Jun 16 19:00 UTC"
    },
    "teams": {
      "zh": "法国 vs 塞内加尔",
      "en": "France vs Senegal"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "FRA",
      "SEN"
    ]
  },
  {
    "match": 18,
    "group": "I",
    "date": {
      "zh": "6月17日 周三 06:00 北京时间",
      "en": "Jun 16 22:00 UTC"
    },
    "teams": {
      "zh": "伊拉克 vs 挪威",
      "en": "Iraq vs Norway"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "IRQ",
      "NOR"
    ]
  },
  {
    "match": 19,
    "group": "J",
    "date": {
      "zh": "6月17日 周三 09:00 北京时间",
      "en": "Jun 17 01:00 UTC"
    },
    "teams": {
      "zh": "阿根廷 vs 阿尔及利亚",
      "en": "Argentina vs Algeria"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "ARG",
      "ALG"
    ]
  },
  {
    "match": 20,
    "group": "J",
    "date": {
      "zh": "6月17日 周三 12:00 北京时间",
      "en": "Jun 17 04:00 UTC"
    },
    "teams": {
      "zh": "奥地利 vs 约旦",
      "en": "Austria vs Jordan"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "AUT",
      "JOR"
    ]
  },
  {
    "match": 23,
    "group": "K",
    "date": {
      "zh": "6月18日 周四 01:00 北京时间",
      "en": "Jun 17 17:00 UTC"
    },
    "teams": {
      "zh": "葡萄牙 vs 刚果民主共和国",
      "en": "Portugal vs Congo DR"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "POR",
      "COD"
    ]
  },
  {
    "match": 22,
    "group": "L",
    "date": {
      "zh": "6月18日 周四 04:00 北京时间",
      "en": "Jun 17 20:00 UTC"
    },
    "teams": {
      "zh": "英格兰 vs 克罗地亚",
      "en": "England vs Croatia"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "ENG",
      "CRO"
    ]
  },
  {
    "match": 21,
    "group": "L",
    "date": {
      "zh": "6月18日 周四 07:00 北京时间",
      "en": "Jun 17 23:00 UTC"
    },
    "teams": {
      "zh": "加纳 vs 巴拿马",
      "en": "Ghana vs Panama"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "GHA",
      "PAN"
    ]
  },
  {
    "match": 24,
    "group": "K",
    "date": {
      "zh": "6月18日 周四 10:00 北京时间",
      "en": "Jun 18 02:00 UTC"
    },
    "teams": {
      "zh": "乌兹别克斯坦 vs 哥伦比亚",
      "en": "Uzbekistan vs Colombia"
    },
    "venue": {
      "zh": "墨西哥城体育场，墨西哥城",
      "en": "Mexico City Stadium, Mexico City"
    },
    "related": [
      "UZB",
      "COL"
    ]
  },
  {
    "match": 25,
    "group": "A",
    "date": {
      "zh": "6月19日 周五 00:00 北京时间",
      "en": "Jun 18 16:00 UTC"
    },
    "teams": {
      "zh": "捷克 vs 南非",
      "en": "Czechia vs South Africa"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "CZE",
      "RSA"
    ]
  },
  {
    "match": 26,
    "group": "B",
    "date": {
      "zh": "6月19日 周五 03:00 北京时间",
      "en": "Jun 18 19:00 UTC"
    },
    "teams": {
      "zh": "瑞士 vs 波黑",
      "en": "Switzerland vs Bosnia and Herzegovina"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "SUI",
      "BIH"
    ]
  },
  {
    "match": 27,
    "group": "B",
    "date": {
      "zh": "6月19日 周五 06:00 北京时间",
      "en": "Jun 18 22:00 UTC"
    },
    "teams": {
      "zh": "加拿大 vs 卡塔尔",
      "en": "Canada vs Qatar"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "CAN",
      "QAT"
    ]
  },
  {
    "match": 28,
    "group": "A",
    "date": {
      "zh": "6月19日 周五 09:00 北京时间",
      "en": "Jun 19 01:00 UTC"
    },
    "teams": {
      "zh": "墨西哥 vs 韩国",
      "en": "Mexico vs Korea Republic"
    },
    "venue": {
      "zh": "瓜达拉哈拉体育场，瓜达拉哈拉",
      "en": "Guadalajara Stadium, Guadalajara"
    },
    "related": [
      "MEX",
      "KOR"
    ]
  },
  {
    "match": 32,
    "group": "D",
    "date": {
      "zh": "6月20日 周六 03:00 北京时间",
      "en": "Jun 19 19:00 UTC"
    },
    "teams": {
      "zh": "美国 vs 澳大利亚",
      "en": "USA vs Australia"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "USA",
      "AUS"
    ]
  },
  {
    "match": 30,
    "group": "C",
    "date": {
      "zh": "6月20日 周六 06:00 北京时间",
      "en": "Jun 19 22:00 UTC"
    },
    "teams": {
      "zh": "苏格兰 vs 摩洛哥",
      "en": "Scotland vs Morocco"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "SCO",
      "MAR"
    ]
  },
  {
    "match": 29,
    "group": "C",
    "date": {
      "zh": "6月20日 周六 08:30 北京时间",
      "en": "Jun 20 00:30 UTC"
    },
    "teams": {
      "zh": "巴西 vs 海地",
      "en": "Brazil vs Haiti"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "BRA",
      "HAI"
    ]
  },
  {
    "match": 31,
    "group": "D",
    "date": {
      "zh": "6月20日 周六 11:00 北京时间",
      "en": "Jun 20 03:00 UTC"
    },
    "teams": {
      "zh": "土耳其 vs 巴拉圭",
      "en": "Türkiye vs Paraguay"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "TUR",
      "PAR"
    ]
  },
  {
    "match": 35,
    "group": "F",
    "date": {
      "zh": "6月21日 周日 01:00 北京时间",
      "en": "Jun 20 17:00 UTC"
    },
    "teams": {
      "zh": "荷兰 vs 瑞典",
      "en": "Netherlands vs Sweden"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "NED",
      "SWE"
    ]
  },
  {
    "match": 33,
    "group": "E",
    "date": {
      "zh": "6月21日 周日 04:00 北京时间",
      "en": "Jun 20 20:00 UTC"
    },
    "teams": {
      "zh": "德国 vs 科特迪瓦",
      "en": "Germany vs Côte d'Ivoire"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "GER",
      "CIV"
    ]
  },
  {
    "match": 34,
    "group": "E",
    "date": {
      "zh": "6月21日 周日 08:00 北京时间",
      "en": "Jun 21 00:00 UTC"
    },
    "teams": {
      "zh": "厄瓜多尔 vs 库拉索",
      "en": "Ecuador vs Curaçao"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "ECU",
      "CUW"
    ]
  },
  {
    "match": 36,
    "group": "F",
    "date": {
      "zh": "6月21日 周日 12:00 北京时间",
      "en": "Jun 21 04:00 UTC"
    },
    "teams": {
      "zh": "突尼斯 vs 日本",
      "en": "Tunisia vs Japan"
    },
    "venue": {
      "zh": "蒙特雷体育场，蒙特雷",
      "en": "Monterrey Stadium, Monterrey"
    },
    "related": [
      "TUN",
      "JPN"
    ]
  },
  {
    "match": 38,
    "group": "H",
    "date": {
      "zh": "6月22日 周一 00:00 北京时间",
      "en": "Jun 21 16:00 UTC"
    },
    "teams": {
      "zh": "西班牙 vs 沙特阿拉伯",
      "en": "Spain vs Saudi Arabia"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "ESP",
      "KSA"
    ]
  },
  {
    "match": 39,
    "group": "G",
    "date": {
      "zh": "6月22日 周一 03:00 北京时间",
      "en": "Jun 21 19:00 UTC"
    },
    "teams": {
      "zh": "比利时 vs 伊朗",
      "en": "Belgium vs IR Iran"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "BEL",
      "IRN"
    ]
  },
  {
    "match": 37,
    "group": "H",
    "date": {
      "zh": "6月22日 周一 06:00 北京时间",
      "en": "Jun 21 22:00 UTC"
    },
    "teams": {
      "zh": "乌拉圭 vs 佛得角",
      "en": "Uruguay vs Cabo Verde"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "URU",
      "CPV"
    ]
  },
  {
    "match": 40,
    "group": "G",
    "date": {
      "zh": "6月22日 周一 09:00 北京时间",
      "en": "Jun 22 01:00 UTC"
    },
    "teams": {
      "zh": "新西兰 vs 埃及",
      "en": "New Zealand vs Egypt"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "NZL",
      "EGY"
    ]
  },
  {
    "match": 43,
    "group": "J",
    "date": {
      "zh": "6月23日 周二 01:00 北京时间",
      "en": "Jun 22 17:00 UTC"
    },
    "teams": {
      "zh": "阿根廷 vs 奥地利",
      "en": "Argentina vs Austria"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "ARG",
      "AUT"
    ]
  },
  {
    "match": 42,
    "group": "I",
    "date": {
      "zh": "6月23日 周二 05:00 北京时间",
      "en": "Jun 22 21:00 UTC"
    },
    "teams": {
      "zh": "法国 vs 伊拉克",
      "en": "France vs Iraq"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "FRA",
      "IRQ"
    ]
  },
  {
    "match": 41,
    "group": "I",
    "date": {
      "zh": "6月23日 周二 08:00 北京时间",
      "en": "Jun 23 00:00 UTC"
    },
    "teams": {
      "zh": "挪威 vs 塞内加尔",
      "en": "Norway vs Senegal"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "NOR",
      "SEN"
    ]
  },
  {
    "match": 44,
    "group": "J",
    "date": {
      "zh": "6月23日 周二 11:00 北京时间",
      "en": "Jun 23 03:00 UTC"
    },
    "teams": {
      "zh": "约旦 vs 阿尔及利亚",
      "en": "Jordan vs Algeria"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "JOR",
      "ALG"
    ]
  },
  {
    "match": 47,
    "group": "K",
    "date": {
      "zh": "6月24日 周三 01:00 北京时间",
      "en": "Jun 23 17:00 UTC"
    },
    "teams": {
      "zh": "葡萄牙 vs 乌兹别克斯坦",
      "en": "Portugal vs Uzbekistan"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "POR",
      "UZB"
    ]
  },
  {
    "match": 45,
    "group": "L",
    "date": {
      "zh": "6月24日 周三 04:00 北京时间",
      "en": "Jun 23 20:00 UTC"
    },
    "teams": {
      "zh": "英格兰 vs 加纳",
      "en": "England vs Ghana"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "ENG",
      "GHA"
    ]
  },
  {
    "match": 46,
    "group": "L",
    "date": {
      "zh": "6月24日 周三 07:00 北京时间",
      "en": "Jun 23 23:00 UTC"
    },
    "teams": {
      "zh": "巴拿马 vs 克罗地亚",
      "en": "Panama vs Croatia"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "PAN",
      "CRO"
    ]
  },
  {
    "match": 48,
    "group": "K",
    "date": {
      "zh": "6月24日 周三 10:00 北京时间",
      "en": "Jun 24 02:00 UTC"
    },
    "teams": {
      "zh": "哥伦比亚 vs 刚果民主共和国",
      "en": "Colombia vs Congo DR"
    },
    "venue": {
      "zh": "瓜达拉哈拉体育场，瓜达拉哈拉",
      "en": "Guadalajara Stadium, Guadalajara"
    },
    "related": [
      "COL",
      "COD"
    ]
  },
  {
    "match": 52,
    "group": "B",
    "date": {
      "zh": "6月25日 周四 03:00 北京时间",
      "en": "Jun 24 19:00 UTC"
    },
    "teams": {
      "zh": "波黑 vs 卡塔尔",
      "en": "Bosnia and Herzegovina vs Qatar"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "BIH",
      "QAT"
    ]
  },
  {
    "match": 51,
    "group": "B",
    "date": {
      "zh": "6月25日 周四 03:00 北京时间",
      "en": "Jun 24 19:00 UTC"
    },
    "teams": {
      "zh": "瑞士 vs 加拿大",
      "en": "Switzerland vs Canada"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "SUI",
      "CAN"
    ]
  },
  {
    "match": 50,
    "group": "C",
    "date": {
      "zh": "6月25日 周四 06:00 北京时间",
      "en": "Jun 24 22:00 UTC"
    },
    "teams": {
      "zh": "摩洛哥 vs 海地",
      "en": "Morocco vs Haiti"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "MAR",
      "HAI"
    ]
  },
  {
    "match": 49,
    "group": "C",
    "date": {
      "zh": "6月25日 周四 06:00 北京时间",
      "en": "Jun 24 22:00 UTC"
    },
    "teams": {
      "zh": "苏格兰 vs 巴西",
      "en": "Scotland vs Brazil"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "SCO",
      "BRA"
    ]
  },
  {
    "match": 54,
    "group": "A",
    "date": {
      "zh": "6月25日 周四 09:00 北京时间",
      "en": "Jun 25 01:00 UTC"
    },
    "teams": {
      "zh": "南非 vs 韩国",
      "en": "South Africa vs Korea Republic"
    },
    "venue": {
      "zh": "蒙特雷体育场，蒙特雷",
      "en": "Monterrey Stadium, Monterrey"
    },
    "related": [
      "RSA",
      "KOR"
    ]
  },
  {
    "match": 53,
    "group": "A",
    "date": {
      "zh": "6月25日 周四 09:00 北京时间",
      "en": "Jun 25 01:00 UTC"
    },
    "teams": {
      "zh": "捷克 vs 墨西哥",
      "en": "Czechia vs Mexico"
    },
    "venue": {
      "zh": "墨西哥城体育场，墨西哥城",
      "en": "Mexico City Stadium, Mexico City"
    },
    "related": [
      "CZE",
      "MEX"
    ]
  },
  {
    "match": 55,
    "group": "E",
    "date": {
      "zh": "6月26日 周五 04:00 北京时间",
      "en": "Jun 25 20:00 UTC"
    },
    "teams": {
      "zh": "库拉索 vs 科特迪瓦",
      "en": "Curaçao vs Côte d'Ivoire"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "CUW",
      "CIV"
    ]
  },
  {
    "match": 56,
    "group": "E",
    "date": {
      "zh": "6月26日 周五 04:00 北京时间",
      "en": "Jun 25 20:00 UTC"
    },
    "teams": {
      "zh": "厄瓜多尔 vs 德国",
      "en": "Ecuador vs Germany"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "ECU",
      "GER"
    ]
  },
  {
    "match": 58,
    "group": "F",
    "date": {
      "zh": "6月26日 周五 07:00 北京时间",
      "en": "Jun 25 23:00 UTC"
    },
    "teams": {
      "zh": "突尼斯 vs 荷兰",
      "en": "Tunisia vs Netherlands"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "TUN",
      "NED"
    ]
  },
  {
    "match": 57,
    "group": "F",
    "date": {
      "zh": "6月26日 周五 07:00 北京时间",
      "en": "Jun 25 23:00 UTC"
    },
    "teams": {
      "zh": "日本 vs 瑞典",
      "en": "Japan vs Sweden"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "JPN",
      "SWE"
    ]
  },
  {
    "match": 60,
    "group": "D",
    "date": {
      "zh": "6月26日 周五 10:00 北京时间",
      "en": "Jun 26 02:00 UTC"
    },
    "teams": {
      "zh": "巴拉圭 vs 澳大利亚",
      "en": "Paraguay vs Australia"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "PAR",
      "AUS"
    ]
  },
  {
    "match": 59,
    "group": "D",
    "date": {
      "zh": "6月26日 周五 10:00 北京时间",
      "en": "Jun 26 02:00 UTC"
    },
    "teams": {
      "zh": "土耳其 vs 美国",
      "en": "Türkiye vs USA"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "TUR",
      "USA"
    ]
  },
  {
    "match": 62,
    "group": "I",
    "date": {
      "zh": "6月27日 周六 03:00 北京时间",
      "en": "Jun 26 19:00 UTC"
    },
    "teams": {
      "zh": "塞内加尔 vs 伊拉克",
      "en": "Senegal vs Iraq"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "SEN",
      "IRQ"
    ]
  },
  {
    "match": 61,
    "group": "I",
    "date": {
      "zh": "6月27日 周六 03:00 北京时间",
      "en": "Jun 26 19:00 UTC"
    },
    "teams": {
      "zh": "挪威 vs 法国",
      "en": "Norway vs France"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "NOR",
      "FRA"
    ]
  },
  {
    "match": 66,
    "group": "H",
    "date": {
      "zh": "6月27日 周六 08:00 北京时间",
      "en": "Jun 27 00:00 UTC"
    },
    "teams": {
      "zh": "乌拉圭 vs 西班牙",
      "en": "Uruguay vs Spain"
    },
    "venue": {
      "zh": "瓜达拉哈拉体育场，瓜达拉哈拉",
      "en": "Guadalajara Stadium, Guadalajara"
    },
    "related": [
      "URU",
      "ESP"
    ]
  },
  {
    "match": 65,
    "group": "H",
    "date": {
      "zh": "6月27日 周六 08:00 北京时间",
      "en": "Jun 27 00:00 UTC"
    },
    "teams": {
      "zh": "佛得角 vs 沙特阿拉伯",
      "en": "Cabo Verde vs Saudi Arabia"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "CPV",
      "KSA"
    ]
  },
  {
    "match": 64,
    "group": "G",
    "date": {
      "zh": "6月27日 周六 11:00 北京时间",
      "en": "Jun 27 03:00 UTC"
    },
    "teams": {
      "zh": "新西兰 vs 比利时",
      "en": "New Zealand vs Belgium"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "NZL",
      "BEL"
    ]
  },
  {
    "match": 63,
    "group": "G",
    "date": {
      "zh": "6月27日 周六 11:00 北京时间",
      "en": "Jun 27 03:00 UTC"
    },
    "teams": {
      "zh": "埃及 vs 伊朗",
      "en": "Egypt vs IR Iran"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "EGY",
      "IRN"
    ]
  },
  {
    "match": 67,
    "group": "L",
    "date": {
      "zh": "6月28日 周日 05:00 北京时间",
      "en": "Jun 27 21:00 UTC"
    },
    "teams": {
      "zh": "巴拿马 vs 英格兰",
      "en": "Panama vs England"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "PAN",
      "ENG"
    ]
  },
  {
    "match": 68,
    "group": "L",
    "date": {
      "zh": "6月28日 周日 05:00 北京时间",
      "en": "Jun 27 21:00 UTC"
    },
    "teams": {
      "zh": "克罗地亚 vs 加纳",
      "en": "Croatia vs Ghana"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "CRO",
      "GHA"
    ]
  },
  {
    "match": 72,
    "group": "K",
    "date": {
      "zh": "6月28日 周日 07:30 北京时间",
      "en": "Jun 27 23:30 UTC"
    },
    "teams": {
      "zh": "刚果民主共和国 vs 乌兹别克斯坦",
      "en": "Congo DR vs Uzbekistan"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "COD",
      "UZB"
    ]
  },
  {
    "match": 71,
    "group": "K",
    "date": {
      "zh": "6月28日 周日 07:30 北京时间",
      "en": "Jun 27 23:30 UTC"
    },
    "teams": {
      "zh": "哥伦比亚 vs 葡萄牙",
      "en": "Colombia vs Portugal"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "COL",
      "POR"
    ]
  },
  {
    "match": 69,
    "group": "J",
    "date": {
      "zh": "6月28日 周日 10:00 北京时间",
      "en": "Jun 28 02:00 UTC"
    },
    "teams": {
      "zh": "阿尔及利亚 vs 奥地利",
      "en": "Algeria vs Austria"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "ALG",
      "AUT"
    ]
  },
  {
    "match": 70,
    "group": "J",
    "date": {
      "zh": "6月28日 周日 10:00 北京时间",
      "en": "Jun 28 02:00 UTC"
    },
    "teams": {
      "zh": "约旦 vs 阿根廷",
      "en": "Jordan vs Argentina"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "JOR",
      "ARG"
    ]
  },
  {
    "match": 73,
    "group": "R32",
    "date": {
      "zh": "6月29日 周一 03:00 北京时间",
      "en": "Jun 28 19:00 UTC"
    },
    "teams": {
      "zh": "A组第2 vs B组第2",
      "en": "Runner-up Group A vs Runner-up Group B"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "2A",
      "2B"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 76,
    "group": "R32",
    "date": {
      "zh": "6月30日 周二 01:00 北京时间",
      "en": "Jun 29 17:00 UTC"
    },
    "teams": {
      "zh": "C组第1 vs F组第2",
      "en": "Winner Group C vs Runner-up Group F"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "1C",
      "2F"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 74,
    "group": "R32",
    "date": {
      "zh": "6月30日 周二 04:30 北京时间",
      "en": "Jun 29 20:30 UTC"
    },
    "teams": {
      "zh": "E组第1 vs A/B/C/D/F组最佳第三",
      "en": "Winner Group E vs Best 3rd A/B/C/D/F"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "1E",
      "3ABCDF"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 75,
    "group": "R32",
    "date": {
      "zh": "6月30日 周二 09:00 北京时间",
      "en": "Jun 30 01:00 UTC"
    },
    "teams": {
      "zh": "F组第1 vs C组第2",
      "en": "Winner Group F vs Runner-up Group C"
    },
    "venue": {
      "zh": "蒙特雷体育场，蒙特雷",
      "en": "Monterrey Stadium, Monterrey"
    },
    "related": [
      "1F",
      "2C"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 78,
    "group": "R32",
    "date": {
      "zh": "7月1日 周三 01:00 北京时间",
      "en": "Jun 30 17:00 UTC"
    },
    "teams": {
      "zh": "E组第2 vs I组第2",
      "en": "Runner-up Group E vs Runner-up Group I"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "2E",
      "2I"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 77,
    "group": "R32",
    "date": {
      "zh": "7月1日 周三 05:00 北京时间",
      "en": "Jun 30 21:00 UTC"
    },
    "teams": {
      "zh": "I组第1 vs C/D/F/G/H组最佳第三",
      "en": "Winner Group I vs Best 3rd C/D/F/G/H"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "1I",
      "3CDFGH"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 79,
    "group": "R32",
    "date": {
      "zh": "7月1日 周三 09:00 北京时间",
      "en": "Jul 1 01:00 UTC"
    },
    "teams": {
      "zh": "A组第1 vs C/E/F/H/I组最佳第三",
      "en": "Winner Group A vs Best 3rd C/E/F/H/I"
    },
    "venue": {
      "zh": "墨西哥城体育场，墨西哥城",
      "en": "Mexico City Stadium, Mexico City"
    },
    "related": [
      "1A",
      "3CEFHI"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 80,
    "group": "R32",
    "date": {
      "zh": "7月2日 周四 00:00 北京时间",
      "en": "Jul 1 16:00 UTC"
    },
    "teams": {
      "zh": "L组第1 vs E/H/I/J/K组最佳第三",
      "en": "Winner Group L vs Best 3rd E/H/I/J/K"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "1L",
      "3EHIJK"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 82,
    "group": "R32",
    "date": {
      "zh": "7月2日 周四 04:00 北京时间",
      "en": "Jul 1 20:00 UTC"
    },
    "teams": {
      "zh": "G组第1 vs A/E/H/I/J组最佳第三",
      "en": "Winner Group G vs Best 3rd A/E/H/I/J"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "1G",
      "3AEHIJ"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 81,
    "group": "R32",
    "date": {
      "zh": "7月2日 周四 08:00 北京时间",
      "en": "Jul 2 00:00 UTC"
    },
    "teams": {
      "zh": "D组第1 vs B/E/F/I/J组最佳第三",
      "en": "Winner Group D vs Best 3rd B/E/F/I/J"
    },
    "venue": {
      "zh": "旧金山湾区体育场，旧金山湾区",
      "en": "San Francisco Bay Area Stadium, San Francisco Bay Area"
    },
    "related": [
      "1D",
      "3BEFIJ"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 84,
    "group": "R32",
    "date": {
      "zh": "7月3日 周五 03:00 北京时间",
      "en": "Jul 2 19:00 UTC"
    },
    "teams": {
      "zh": "H组第1 vs J组第2",
      "en": "Winner Group H vs Runner-up Group J"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "1H",
      "2J"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 83,
    "group": "R32",
    "date": {
      "zh": "7月3日 周五 07:00 北京时间",
      "en": "Jul 2 23:00 UTC"
    },
    "teams": {
      "zh": "K组第2 vs L组第2",
      "en": "Runner-up Group K vs Runner-up Group L"
    },
    "venue": {
      "zh": "多伦多体育场，多伦多",
      "en": "Toronto Stadium, Toronto"
    },
    "related": [
      "2K",
      "2L"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 85,
    "group": "R32",
    "date": {
      "zh": "7月3日 周五 11:00 北京时间",
      "en": "Jul 3 03:00 UTC"
    },
    "teams": {
      "zh": "B组第1 vs E/F/G/I/J组最佳第三",
      "en": "Winner Group B vs Best 3rd E/F/G/I/J"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "1B",
      "3EFGIJ"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 88,
    "group": "R32",
    "date": {
      "zh": "7月4日 周六 02:00 北京时间",
      "en": "Jul 3 18:00 UTC"
    },
    "teams": {
      "zh": "D组第2 vs G组第2",
      "en": "Runner-up Group D vs Runner-up Group G"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "2D",
      "2G"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 86,
    "group": "R32",
    "date": {
      "zh": "7月4日 周六 06:00 北京时间",
      "en": "Jul 3 22:00 UTC"
    },
    "teams": {
      "zh": "J组第1 vs H组第2",
      "en": "Winner Group J vs Runner-up Group H"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "1J",
      "2H"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 87,
    "group": "R32",
    "date": {
      "zh": "7月4日 周六 09:30 北京时间",
      "en": "Jul 4 01:30 UTC"
    },
    "teams": {
      "zh": "K组第1 vs D/E/I/J/L组最佳第三",
      "en": "Winner Group K vs Best 3rd D/E/I/J/L"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "1K",
      "3DEIJL"
    ],
    "stage": {
      "zh": "32强赛",
      "en": "Round of 32"
    }
  },
  {
    "match": 90,
    "group": "R16",
    "date": {
      "zh": "7月5日 周日 01:00 北京时间",
      "en": "Jul 4 17:00 UTC"
    },
    "teams": {
      "zh": "第73场胜者 vs 第75场胜者",
      "en": "Winner Match 73 vs Winner Match 75"
    },
    "venue": {
      "zh": "休斯敦体育场，休斯敦",
      "en": "Houston Stadium, Houston"
    },
    "related": [
      "W73",
      "W75"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 89,
    "group": "R16",
    "date": {
      "zh": "7月5日 周日 05:00 北京时间",
      "en": "Jul 4 21:00 UTC"
    },
    "teams": {
      "zh": "第74场胜者 vs 第77场胜者",
      "en": "Winner Match 74 vs Winner Match 77"
    },
    "venue": {
      "zh": "费城体育场，费城",
      "en": "Philadelphia Stadium, Philadelphia"
    },
    "related": [
      "W74",
      "W77"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 91,
    "group": "R16",
    "date": {
      "zh": "7月6日 周一 04:00 北京时间",
      "en": "Jul 5 20:00 UTC"
    },
    "teams": {
      "zh": "第76场胜者 vs 第78场胜者",
      "en": "Winner Match 76 vs Winner Match 78"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "W76",
      "W78"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 92,
    "group": "R16",
    "date": {
      "zh": "7月6日 周一 08:00 北京时间",
      "en": "Jul 6 00:00 UTC"
    },
    "teams": {
      "zh": "第79场胜者 vs 第80场胜者",
      "en": "Winner Match 79 vs Winner Match 80"
    },
    "venue": {
      "zh": "墨西哥城体育场，墨西哥城",
      "en": "Mexico City Stadium, Mexico City"
    },
    "related": [
      "W79",
      "W80"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 93,
    "group": "R16",
    "date": {
      "zh": "7月7日 周二 03:00 北京时间",
      "en": "Jul 6 19:00 UTC"
    },
    "teams": {
      "zh": "第83场胜者 vs 第84场胜者",
      "en": "Winner Match 83 vs Winner Match 84"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "W83",
      "W84"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 94,
    "group": "R16",
    "date": {
      "zh": "7月7日 周二 08:00 北京时间",
      "en": "Jul 7 00:00 UTC"
    },
    "teams": {
      "zh": "第81场胜者 vs 第82场胜者",
      "en": "Winner Match 81 vs Winner Match 82"
    },
    "venue": {
      "zh": "西雅图体育场，西雅图",
      "en": "Seattle Stadium, Seattle"
    },
    "related": [
      "W81",
      "W82"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 95,
    "group": "R16",
    "date": {
      "zh": "7月8日 周三 00:00 北京时间",
      "en": "Jul 7 16:00 UTC"
    },
    "teams": {
      "zh": "第86场胜者 vs 第88场胜者",
      "en": "Winner Match 86 vs Winner Match 88"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "W86",
      "W88"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 96,
    "group": "R16",
    "date": {
      "zh": "7月8日 周三 04:00 北京时间",
      "en": "Jul 7 20:00 UTC"
    },
    "teams": {
      "zh": "第85场胜者 vs 第87场胜者",
      "en": "Winner Match 85 vs Winner Match 87"
    },
    "venue": {
      "zh": "温哥华 BC Place，温哥华",
      "en": "BC Place Vancouver, Vancouver"
    },
    "related": [
      "W85",
      "W87"
    ],
    "stage": {
      "zh": "16强赛",
      "en": "Round of 16"
    }
  },
  {
    "match": 97,
    "group": "QF",
    "date": {
      "zh": "7月10日 周五 04:00 北京时间",
      "en": "Jul 9 20:00 UTC"
    },
    "teams": {
      "zh": "第89场胜者 vs 第90场胜者",
      "en": "Winner Match 89 vs Winner Match 90"
    },
    "venue": {
      "zh": "波士顿体育场，波士顿",
      "en": "Boston Stadium, Boston"
    },
    "related": [
      "W89",
      "W90"
    ],
    "stage": {
      "zh": "1/4决赛",
      "en": "Quarter-final"
    }
  },
  {
    "match": 98,
    "group": "QF",
    "date": {
      "zh": "7月11日 周六 03:00 北京时间",
      "en": "Jul 10 19:00 UTC"
    },
    "teams": {
      "zh": "第93场胜者 vs 第94场胜者",
      "en": "Winner Match 93 vs Winner Match 94"
    },
    "venue": {
      "zh": "洛杉矶体育场，洛杉矶",
      "en": "Los Angeles Stadium, Los Angeles"
    },
    "related": [
      "W93",
      "W94"
    ],
    "stage": {
      "zh": "1/4决赛",
      "en": "Quarter-final"
    }
  },
  {
    "match": 99,
    "group": "QF",
    "date": {
      "zh": "7月12日 周日 05:00 北京时间",
      "en": "Jul 11 21:00 UTC"
    },
    "teams": {
      "zh": "第91场胜者 vs 第92场胜者",
      "en": "Winner Match 91 vs Winner Match 92"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "W91",
      "W92"
    ],
    "stage": {
      "zh": "1/4决赛",
      "en": "Quarter-final"
    }
  },
  {
    "match": 100,
    "group": "QF",
    "date": {
      "zh": "7月12日 周日 09:00 北京时间",
      "en": "Jul 12 01:00 UTC"
    },
    "teams": {
      "zh": "第95场胜者 vs 第96场胜者",
      "en": "Winner Match 95 vs Winner Match 96"
    },
    "venue": {
      "zh": "堪萨斯城体育场，堪萨斯城",
      "en": "Kansas City Stadium, Kansas City"
    },
    "related": [
      "W95",
      "W96"
    ],
    "stage": {
      "zh": "1/4决赛",
      "en": "Quarter-final"
    }
  },
  {
    "match": 101,
    "group": "SF",
    "date": {
      "zh": "7月15日 周三 03:00 北京时间",
      "en": "Jul 14 19:00 UTC"
    },
    "teams": {
      "zh": "第97场胜者 vs 第98场胜者",
      "en": "Winner Match 97 vs Winner Match 98"
    },
    "venue": {
      "zh": "达拉斯体育场，达拉斯",
      "en": "Dallas Stadium, Dallas"
    },
    "related": [
      "W97",
      "W98"
    ],
    "stage": {
      "zh": "半决赛",
      "en": "Semi-final"
    }
  },
  {
    "match": 102,
    "group": "SF",
    "date": {
      "zh": "7月16日 周四 03:00 北京时间",
      "en": "Jul 15 19:00 UTC"
    },
    "teams": {
      "zh": "第99场胜者 vs 第100场胜者",
      "en": "Winner Match 99 vs Winner Match 100"
    },
    "venue": {
      "zh": "亚特兰大体育场，亚特兰大",
      "en": "Atlanta Stadium, Atlanta"
    },
    "related": [
      "W99",
      "W100"
    ],
    "stage": {
      "zh": "半决赛",
      "en": "Semi-final"
    }
  },
  {
    "match": 103,
    "group": "3P",
    "date": {
      "zh": "7月19日 周日 05:00 北京时间",
      "en": "Jul 18 21:00 UTC"
    },
    "teams": {
      "zh": "第101场负者 vs 第102场负者",
      "en": "Runner-up Match 101 vs Runner-up Match 102"
    },
    "venue": {
      "zh": "迈阿密体育场，迈阿密",
      "en": "Miami Stadium, Miami"
    },
    "related": [
      "RU101",
      "RU102"
    ],
    "stage": {
      "zh": "季军赛",
      "en": "Play-off for third place"
    }
  },
  {
    "match": 104,
    "group": "FINAL",
    "date": {
      "zh": "7月20日 周一 03:00 北京时间",
      "en": "Jul 19 19:00 UTC"
    },
    "teams": {
      "zh": "第101场胜者 vs 第102场胜者",
      "en": "Winner Match 101 vs Winner Match 102"
    },
    "venue": {
      "zh": "纽约/新泽西体育场，新泽西",
      "en": "New York/New Jersey Stadium, New Jersey"
    },
    "related": [
      "W101",
      "W102"
    ],
    "stage": {
      "zh": "决赛",
      "en": "Final"
    }
  }
];

const teamSymbols = {
  "mexico": "MEX",
  "south africa": "RSA",
  "korea republic": "KOR",
  "south korea": "KOR",
  "czechia": "CZE",
  "czech republic": "CZE",
  "canada": "CAN",
  "bosnia and herzegovina": "BIH",
  "qatar": "QAT",
  "switzerland": "SUI",
  "brazil": "BRA",
  "morocco": "MAR",
  "haiti": "HAI",
  "scotland": "SCO",
  "united states": "USA",
  "usa": "USA",
  "united states of america": "USA",
  "paraguay": "PAR",
  "australia": "AUS",
  "turkiye": "TUR",
  "t?rkiye": "TUR",
  "turkey": "TUR",
  "germany": "GER",
  "curacao": "CUW",
  "curaçao": "CUW",
  "ivory coast": "CIV",
  "cote d'ivoire": "CIV",
  "côte d'ivoire": "CIV",
  "cote d ivoire": "CIV",
  "ecuador": "ECU",
  "netherlands": "NED",
  "japan": "JPN",
  "sweden": "SWE",
  "tunisia": "TUN",
  "belgium": "BEL",
  "egypt": "EGY",
  "iran": "IRN",
  "new zealand": "NZL",
  "spain": "ESP",
  "cape verde": "CPV",
  "cabo verde": "CPV",
  "saudi arabia": "KSA",
  "uruguay": "URU",
  "france": "FRA",
  "senegal": "SEN",
  "iraq": "IRQ",
  "norway": "NOR",
  "argentina": "ARG",
  "algeria": "ALG",
  "austria": "AUT",
  "jordan": "JOR",
  "portugal": "POR",
  "dr congo": "COD",
  "congo dr": "COD",
  "democratic republic of the congo": "COD",
  "uzbekistan": "UZB",
  "colombia": "COL",
  "england": "ENG",
  "croatia": "CRO",
  "ghana": "GHA",
  "panama": "PAN"
};

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const zhWeekdays = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d'];

function cleanString(value) {
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

function normalizeKey(value) {
  return cleanString(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function pick() {
  for (const value of arguments) {
    if (value === undefined || value === null) continue;
    if (typeof value === 'object' && !Array.isArray(value)) {
      const nested = pick(value.name, value.displayName, value.shortName, value.country, value.code, value.title);
      if (nested) return nested;
      continue;
    }
    const text = cleanString(value);
    if (text) return text;
  }
  return '';
}

function getTeam(match, side) {
  const teams = match && match.teams ? match.teams : {};
  const competitors = Array.isArray(match && match.competitors) ? match.competitors : [];
  const index = side === 'home' ? 0 : 1;
  return pick(
    match && match[side],
    match && match[side + 'Team'],
    teams && teams[side] && teams[side].name,
    teams && teams[side],
    competitors[index] && competitors[index].name,
    competitors[index] && competitors[index].team && competitors[index].team.name
  );
}

function getVenue(match) {
  const fixtureVenue = match && match.fixture && match.fixture.venue ? match.fixture.venue : {};
  const directVenue = match && (match.venue || match.stadium) ? (match.venue || match.stadium) : {};
  const name = pick(fixtureVenue.name, directVenue.name, directVenue, match && match.venueName, match && match.stadiumName);
  const city = pick(fixtureVenue.city, directVenue.city, match && match.city);
  if (name && city && !name.toLowerCase().includes(city.toLowerCase())) return name + ', ' + city;
  return name || city || 'TBD';
}

function getDateValue(match) {
  return pick(
    match && match.fixture && match.fixture.date,
    match && match.date,
    match && match.utcDate,
    match && match.kickoff,
    match && match.startTime,
    match && match.time
  );
}

function formatDate(dateValue) {
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return null;
  const utcParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(parsed).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  const zhParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(parsed).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  const zhDate = new Date(parsed.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
  return {
    zh: Number(zhParts.month) + '\u6708' + Number(zhParts.day) + '\u65e5 \u5468' + zhWeekdays[zhDate.getDay()] + ' ' + zhParts.hour + ':' + zhParts.minute + ' \u5317\u4eac\u65f6\u95f4',
    en: monthNames[Number(utcParts.month) - 1] + ' ' + Number(utcParts.day) + ' ' + utcParts.hour + ':' + utcParts.minute + ' UTC'
  };
}

function getGroup(match) {
  const raw = pick(match && match.group, match && match.round, match && match.league && match.league.round, match && match.stage, match && match.phase);
  const text = cleanString(raw);
  const groupMatch = text.match(/group\s*([A-L])/i) || text.match(/\b([A-L])\b/);
  if (groupMatch) return groupMatch[1].toUpperCase();
  if (/round\s*of\s*32|last\s*32|r32/i.test(text)) return 'R32';
  if (/round\s*of\s*16|last\s*16|r16/i.test(text)) return 'R16';
  if (/quarter/i.test(text)) return 'QF';
  if (/semi/i.test(text)) return 'SF';
  if (/third|3rd/i.test(text)) return '3P';
  if (/final/i.test(text)) return 'FINAL';
  return text || 'A';
}

function relatedFor(home, away, existing) {
  if (Array.isArray(existing) && existing.length) return existing.map(cleanString).filter(Boolean).slice(0, 2);
  return [teamSymbols[normalizeKey(home)], teamSymbols[normalizeKey(away)]].filter(Boolean);
}

function unwrapFixtures(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== 'object') return [];
  for (const key of ['fixtures', 'matches', 'response', 'data', 'events']) {
    const value = payload[key];
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') {
      const nested = unwrapFixtures(value);
      if (nested.length) return nested;
    }
  }
  return [];
}

function normalizeFixtures(payload) {
  return unwrapFixtures(payload).map((match) => {
    const home = getTeam(match, 'home');
    const away = getTeam(match, 'away');
    const date = match && match.date && match.date.zh && match.date.en ? match.date : formatDate(getDateValue(match));
    const venueText = match && match.venue && match.venue.zh && match.venue.en ? null : getVenue(match);
    const related = relatedFor(home || (match && match.teams && match.teams.zh), away || (match && match.teams && match.teams.en), match && match.related);
    if (!date || !home || !away || related.length < 2) return null;
    return {
      group: getGroup(match),
      date: date,
      teams: match && match.teams && match.teams.zh && match.teams.en ? match.teams : { zh: home + ' vs ' + away, en: home + ' vs ' + away },
      venue: match && match.venue && match.venue.zh && match.venue.en ? match.venue : { zh: venueText, en: venueText },
      related: related
    };
  }).filter(Boolean);
}

async function loadExternalFixtures() {
  const url = process.env.FIXTURES_API_URL;
  if (!url) return [];
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const headers = { Accept: 'application/json' };
    if (process.env.FIXTURES_API_KEY) headers['X-API-Key'] = process.env.FIXTURES_API_KEY;
    const response = await fetch(url, { headers, signal: controller.signal });
    if (!response.ok) return [];
    const payload = await response.json();
    return normalizeFixtures(payload);
  } catch (error) {
    console.warn('fixtures_external_fallback', (error && error.name) || 'request_failed');
    return [];
  } finally {
    clearTimeout(timer);
  }
}

export default async function handler(req, res) {
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  try {
    const externalFixtures = await loadExternalFixtures();
    const fixtures = externalFixtures.length ? externalFixtures : localFixtures;
    return res.status(200).json({
      ok: true,
      source: externalFixtures.length ? 'third-party-fixtures' : 'local-real-fixtures',
      updatedAt: new Date().toISOString(),
      fixtures: fixtures
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'fixtures_failed' });
  }
}

export { localFixtures, normalizeFixtures, teamSymbols };
