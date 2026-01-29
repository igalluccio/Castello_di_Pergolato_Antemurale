var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-elevation-view",
      "name": "Front elevation view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.08948779073863022,
        "pitch": -0.296092400908023,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.5651313502823143,
          "pitch": 0.14294989018432958,
          "rotation": 0,
          "target": "4-p01"
        },
        {
          "yaw": -0.9396485095106328,
          "pitch": 0.13545572872969203,
          "rotation": 0,
          "target": "1-left-side-elevation-view"
        },
        {
          "yaw": -0.177758935597641,
          "pitch": 0.12368694826961502,
          "rotation": 0,
          "target": "7-p04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-left-side-elevation-view",
      "name": "Left side elevation view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7244787957462684,
        "pitch": 0.06075852534528181,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.1083728215851707,
          "pitch": 0.17857370108474413,
          "rotation": 0,
          "target": "0-front-elevation-view"
        },
        {
          "yaw": -1.3091845674225127,
          "pitch": 0.1629104416669236,
          "rotation": 0,
          "target": "2-courtyard-elevation-view"
        },
        {
          "yaw": -1.1679967271386538,
          "pitch": 0.2228721555938158,
          "rotation": 0.7853981633974483,
          "target": "12-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-courtyard-elevation-view",
      "name": "Courtyard elevation view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3260428348018998,
          "pitch": 0.28925312480228804,
          "rotation": 5.497787143782138,
          "target": "12-staircase"
        },
        {
          "yaw": 1.4846093615468483,
          "pitch": 0.2705407339792565,
          "rotation": 0,
          "target": "1-left-side-elevation-view"
        },
        {
          "yaw": -1.1796100129213194,
          "pitch": 0.2516290750940513,
          "rotation": 0,
          "target": "3-back-side-elevation-view"
        },
        {
          "yaw": 0.4078407916684377,
          "pitch": -0.3989221467863455,
          "rotation": 0,
          "target": "13-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-back-side-elevation-view",
      "name": "Back side elevation view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.16088762377474808,
        "pitch": -0.23920128457636025,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.0931141521269971,
          "pitch": 0.1652360648562876,
          "rotation": 0,
          "target": "2-courtyard-elevation-view"
        },
        {
          "yaw": 0.9979163871311023,
          "pitch": 0.0029429699847387525,
          "rotation": 5.497787143782138,
          "target": "12-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-p01",
      "name": "P0.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.535348571252179,
        "pitch": 0.008016641268987712,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.7824516501663403,
          "pitch": 0.3531853275458552,
          "rotation": 0.7853981633974483,
          "target": "7-p04"
        },
        {
          "yaw": 2.3569184637823657,
          "pitch": 0.3549913095401891,
          "rotation": 0,
          "target": "5-p02"
        },
        {
          "yaw": 0.9769960419881123,
          "pitch": 0.3578197137593335,
          "rotation": 0,
          "target": "6-p03"
        },
        {
          "yaw": -3.089888778177041,
          "pitch": 0.3409289730542042,
          "rotation": 0,
          "target": "0-front-elevation-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-p02",
      "name": "P0.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.1202869758390364,
        "pitch": 0.3276285191951338,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.6300100606356018,
          "pitch": 0.3988812621757276,
          "rotation": 0,
          "target": "4-p01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-p03",
      "name": "P0.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2393276450043622,
        "pitch": 0.19509126895323092,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.890165964893825,
          "pitch": 0.34784202503961836,
          "rotation": 0,
          "target": "4-p01"
        },
        {
          "yaw": -0.40146348453639824,
          "pitch": 0.3094040084760472,
          "rotation": 0.7853981633974483,
          "target": "8-p05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-p04",
      "name": "P0.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.0394721480778664,
        "pitch": 0.000611963613277311,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.7753869623769774,
          "pitch": 0.3068196157022136,
          "rotation": 0,
          "target": "4-p01"
        },
        {
          "yaw": 0.417726981613205,
          "pitch": 0.20004502511409328,
          "rotation": 0,
          "target": "8-p05"
        },
        {
          "yaw": 2.8162983790071046,
          "pitch": 0.24923872138217718,
          "rotation": 0,
          "target": "0-front-elevation-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-p05",
      "name": "P0.5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.31711706733186595,
        "pitch": 0.01904637554463129,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -0.5413833193503592,
          "pitch": 0.13063034306888,
          "rotation": 0,
          "target": "9-p06"
        },
        {
          "yaw": -0.6689083130020759,
          "pitch": 0.2083807218744962,
          "rotation": 4.71238898038469,
          "target": "7-p04"
        },
        {
          "yaw": 1.036502718003419,
          "pitch": 0.23766213993144802,
          "rotation": 0,
          "target": "11-p08"
        },
        {
          "yaw": 2.611823234754959,
          "pitch": 0.4005839964618403,
          "rotation": 0,
          "target": "10-p07"
        },
        {
          "yaw": -2.817689609331751,
          "pitch": 0.3978980731933426,
          "rotation": 0,
          "target": "6-p03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-p06",
      "name": "P0.6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8682257702722698,
        "pitch": 0.18877248691916293,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.3428176373512635,
          "pitch": 0.23115387520296693,
          "rotation": 0,
          "target": "8-p05"
        },
        {
          "yaw": -1.0225469086681969,
          "pitch": 0.2539289055248428,
          "rotation": 1.5707963267948966,
          "target": "7-p04"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-p07",
      "name": "P0.7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7700110427440059,
        "pitch": 0.2678221418251816,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.3053938312206768,
          "pitch": 0.3137771403412657,
          "rotation": 0,
          "target": "8-p05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-p08",
      "name": "P0.8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.9630650710649302,
        "pitch": 0.16177460486291473,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -2.4974807630951155,
          "pitch": 0.342378768055827,
          "rotation": 0,
          "target": "8-p05"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-staircase",
      "name": "Staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2715498206178317,
          "pitch": 0.38126113882528045,
          "rotation": 0,
          "target": "2-courtyard-elevation-view"
        },
        {
          "yaw": 2.1328625495455107,
          "pitch": 0.32552348206117543,
          "rotation": 0,
          "target": "1-left-side-elevation-view"
        },
        {
          "yaw": 0.07723466925432732,
          "pitch": -0.3594204816059303,
          "rotation": 0,
          "target": "13-p11"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-p11",
      "name": "P1.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.08146874633686,
        "pitch": 0.21721964170078856,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.026008091229416,
          "pitch": 0.6469730461971555,
          "rotation": 0,
          "target": "12-staircase"
        },
        {
          "yaw": 0.14601252523586616,
          "pitch": 0.17499243919518648,
          "rotation": 0,
          "target": "14-p121"
        },
        {
          "yaw": 0.7706913798238428,
          "pitch": 0.14814908369578994,
          "rotation": 7.0685834705770345,
          "target": "18-p15"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-p121",
      "name": "P1.2.1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5490830801997859,
          "pitch": 0.17332236314061866,
          "rotation": 0,
          "target": "18-p15"
        },
        {
          "yaw": 0.8891571060482484,
          "pitch": 0.22446944662882728,
          "rotation": 0.7853981633974483,
          "target": "13-p11"
        },
        {
          "yaw": -0.4357901891532059,
          "pitch": 0.2088509110082768,
          "rotation": 0,
          "target": "17-p14"
        },
        {
          "yaw": -0.7311527028933007,
          "pitch": 0.26846063360888195,
          "rotation": 5.497787143782138,
          "target": "16-p13"
        },
        {
          "yaw": -1.9289679760548708,
          "pitch": 0.28817403742246483,
          "rotation": 5.497787143782138,
          "target": "15-p122"
        },
        {
          "yaw": 1.587089021004699,
          "pitch": 0.2820258430391611,
          "rotation": 0,
          "target": "19-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-p122",
      "name": "P1.2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.251564890161184,
          "pitch": 0.34836063283716,
          "rotation": 0,
          "target": "14-p121"
        },
        {
          "yaw": 0.38622098648086833,
          "pitch": 0.19200861875580344,
          "rotation": 0.7853981633974483,
          "target": "19-p16"
        },
        {
          "yaw": -0.22442721480121008,
          "pitch": 0.10420606748413697,
          "rotation": 0,
          "target": "18-p15"
        },
        {
          "yaw": -0.030122732541705943,
          "pitch": 0.11912119993190373,
          "rotation": 0.7853981633974483,
          "target": "13-p11"
        },
        {
          "yaw": -0.8629677415252424,
          "pitch": 0.1736255434253806,
          "rotation": 0,
          "target": "17-p14"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-p13",
      "name": "P1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7587422257306322,
        "pitch": 0.0784574327428178,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": -1.1496879728474703,
          "pitch": 0.297923911586766,
          "rotation": 0,
          "target": "14-p121"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-p14",
      "name": "P1.4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8690495884018432,
          "pitch": 0.21273834002310466,
          "rotation": 0,
          "target": "14-p121"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-p15",
      "name": "P1.5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7762828095470624,
        "pitch": 0.053985294707088016,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.5177872414129254,
          "pitch": 0.28040085463306497,
          "rotation": 0.7853981633974483,
          "target": "14-p121"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-p16",
      "name": "P1.6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.47790288245517587,
        "pitch": 0.038514788849413506,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.18969353061750382,
          "pitch": 0.30456545332105023,
          "rotation": 0,
          "target": "20-p17"
        },
        {
          "yaw": -0.7875630655760322,
          "pitch": 0.15813461527699424,
          "rotation": 5.497787143782138,
          "target": "14-p121"
        },
        {
          "yaw": 2.1720536896914977,
          "pitch": 0.26916465016080515,
          "rotation": 0,
          "target": "21-p18"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-p17",
      "name": "P1.7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8585853356674846,
        "pitch": 0.028825846376610897,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.5940978621242978,
          "pitch": 0.3137554346448681,
          "rotation": 0,
          "target": "19-p16"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-p18",
      "name": "P1.8",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3728021009015876,
        "pitch": 0.09350349922916834,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.8815640552855424,
          "pitch": 0.2857422037907664,
          "rotation": 0,
          "target": "19-p16"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Castello di Pergolato - Antemurale",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
