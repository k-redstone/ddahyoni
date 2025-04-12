import { IMatch } from '@/types'

const playoffMatchData: IMatch[] = [
  {
    id: 'm11',
    matchNumber: 11,
    blueTeam: '남성',
    redTeam: '상체파괴자',
    blueTeamScore: 2,
    redTeamScore: 0,
    date: '2025-04-12',
    completed: true,
    progress: false,
    stage: '플레이오프',
    sets: [
      {
        id: 's31',
        setNumber: 1,
        winner: '남성',
        blueTeamBans: ['Ambessa', 'Lucian', 'Gwen', 'Ashe', 'Nautilus'],
        redTeamBans: ['Hwei', 'Tristana', 'Vi', 'Rakan', 'Blitzcrank'],
        blueTeamPicks: ['Yone', 'Zyra', 'Sion', 'Jhin', 'Alistar'],
        redTeamPicks: ['Jayce', 'Lissandra', 'Nocturne', 'Varus', 'Leona'],
        blueTeamKills: 25,
        redTeamKills: 15,
        blueTeamDeath: 15,
        redTeamDeath: 25,
        blueTeamAsist: 60,
        redTeamAsist: 36,
        blueTeamGold: 60597,
        redTeamGold: 55047,
        duration: '31:12',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Sion',
            role: 'TOP',
            kill: 3,
            death: 0,
            assist: 16,
            damage: 16952,
            gold: 11119,
          },
          {
            name: '앰비션',
            champion: 'Zyra',
            role: 'JG',
            kill: 6,
            death: 3,
            assist: 14,
            damage: 33664,
            gold: 14156,
          },
          {
            name: '실프',
            champion: 'Yone',
            role: 'MID',
            kill: 8,
            death: 4,
            assist: 7,
            damage: 20346,
            gold: 13775,
          },
          {
            name: '따효니',
            champion: 'Jhin',
            role: 'ADC',
            kill: 5,
            death: 6,
            assist: 7,
            damage: 15834,
            gold: 12656,
          },
          {
            name: '라콩',
            champion: 'Alistar',
            role: 'SUP',
            kill: 3,
            death: 2,
            assist: 16,
            damage: 7863,
            gold: 8891,
          },
        ],
        redTeam: [
          {
            name: '플레임',
            champion: 'Jayce',
            role: 'TOP',
            kill: 1,
            death: 5,
            assist: 5,
            damage: 20250,
            gold: 11441,
          },
          {
            name: '소우릎',
            champion: 'Nocturne',
            role: 'JG',
            kill: 6,
            death: 5,
            assist: 7,
            damage: 17248,
            gold: 12392,
          },
          {
            name: '헤징',
            champion: 'Lissandra',
            role: 'MID',
            kill: 4,
            death: 4,
            assist: 5,
            damage: 23674,
            gold: 11850,
          },
          {
            name: '러너',
            champion: 'Varus',
            role: 'ADC',
            kill: 4,
            death: 6,
            assist: 7,
            damage: 15918,
            gold: 12017,
          },
          {
            name: '눈꽃',
            champion: 'Leona',
            role: 'SUP',
            kill: 0,
            death: 5,
            assist: 12,
            damage: 6798,
            gold: 7347,
          },
        ],
      },
      {
        id: 's32',
        setNumber: 2,
        winner: '남성',
        blueTeamBans: ['Ambessa', 'Gwen', 'Vi', 'Naafiri', 'MonkeyKing'],
        redTeamBans: ['Hwei', 'Tristana', 'Sylas', 'Garen', 'Caitlyn'],
        blueTeamPicks: [
          'XinZhao',
          'Nautilus',
          'Orianna',
          'MissFortune',
          'Mordekaiser',
        ],
        redTeamPicks: ['Viktor', 'Lucian', 'Braum', 'Poppy', 'DrMundo'],
        blueTeamKills: 23,
        redTeamKills: 5,
        blueTeamDeath: 5,
        redTeamDeath: 23,
        blueTeamAsist: 48,
        redTeamAsist: 9,
        blueTeamGold: 61045,
        redTeamGold: 47021,
        duration: '30:48',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Mordekaiser',
            role: 'TOP',
            kill: 3,
            death: 0,
            assist: 4,
            damage: 18418,
            gold: 11547,
          },
          {
            name: '앰비션',
            champion: 'XinZhao',
            role: 'JG',
            kill: 4,
            death: 1,
            assist: 11,
            damage: 25167,
            gold: 12326,
          },
          {
            name: '실프',
            champion: 'Orianna',
            role: 'MID',
            kill: 5,
            death: 1,
            assist: 10,
            damage: 22567,
            gold: 13098,
          },
          {
            name: '따효니',
            champion: 'MissFortune',
            role: 'ADC',
            kill: 9,
            death: 1,
            assist: 10,
            damage: 31466,
            gold: 15187,
          },
          {
            name: '라콩',
            champion: 'Nautilus',
            role: 'SUP',
            kill: 2,
            death: 2,
            assist: 13,
            damage: 7677,
            gold: 8887,
          },
        ],
        redTeam: [
          {
            name: '플레임',
            champion: 'DrMundo',
            role: 'TOP',
            kill: 1,
            death: 3,
            assist: 0,
            damage: 19995,
            gold: 11347,
          },
          {
            name: '소우릎',
            champion: 'Poppy',
            role: 'JG',
            kill: 0,
            death: 5,
            assist: 2,
            damage: 8559,
            gold: 8622,
          },
          {
            name: '헤징',
            champion: 'Viktor',
            role: 'MID',
            kill: 0,
            death: 3,
            assist: 2,
            damage: 19642,
            gold: 0,
          },
          {
            name: '러너',
            champion: 'Lucian',
            role: 'ADC',
            kill: 3,
            death: 7,
            assist: 2,
            damage: 12350,
            gold: 10930,
          },
          {
            name: '눈꽃',
            champion: 'Braum',
            role: 'SUP',
            kill: 1,
            death: 5,
            assist: 3,
            damage: 7259,
            gold: 7172,
          },
        ],
      },
    ],
  },
  {
    id: 'm12',
    matchNumber: 12,
    blueTeam: '노코멘트',
    redTeam: '돼굴단',
    blueTeamScore: 1,
    redTeamScore: 2,
    date: '2025-04-12',
    completed: true,
    progress: false,
    stage: '플레이오프',
    sets: [
      {
        id: 's33',
        setNumber: 1,
        winner: '노코멘트',
        blueTeamBans: ['Draven', 'Lulu', 'Vi', 'Seraphine', 'Milio'],
        redTeamBans: ['Varus', 'Gwen', 'Xayah', 'Zeri', 'Lucian'],
        blueTeamPicks: ['Yone', 'Sejuani', 'Yuumi', 'Ezreal', 'Ryze'],
        redTeamPicks: ['Ahri', 'Nocturne', 'Malphite', 'Caitlyn', 'Soraka'],
        blueTeamKills: 17,
        redTeamKills: 9,
        blueTeamDeath: 9,
        redTeamDeath: 17,
        blueTeamAsist: 45,
        redTeamAsist: 23,
        blueTeamGold: 65371,
        redTeamGold: 55707,
        duration: '34:27',
        blueTeam: [
          {
            name: '인섹',
            champion: 'Yone',
            role: 'TOP',
            kill: 3,
            death: 3,
            assist: 6,
            damage: 24578,
            gold: 14096,
          },
          {
            name: '고수달',
            champion: 'Sejuani',
            role: 'JG',
            kill: 4,
            death: 2,
            assist: 7,
            damage: 12636,
            gold: 12545,
          },
          {
            name: '인간젤리',
            champion: 'Ryze',
            role: 'MID',
            kill: 5,
            death: 3,
            assist: 6,
            damage: 23982,
            gold: 15599,
          },
          {
            name: '뱅',
            champion: 'Ezreal',
            role: 'ADC',
            kill: 4,
            death: 1,
            assist: 11,
            damage: 39684,
            gold: 14164,
          },
          {
            name: '던',
            champion: 'Yuumi',
            role: 'SUP',
            kill: 1,
            death: 0,
            assist: 15,
            damage: 9064,
            gold: 8967,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: 'Malphite',
            role: 'TOP',
            kill: 3,
            death: 3,
            assist: 3,
            damage: 15760,
            gold: 11363,
          },
          {
            name: '네클릿',
            champion: 'Nocturne',
            role: 'JG',
            kill: 2,
            death: 2,
            assist: 4,
            damage: 10175,
            gold: 12105,
          },
          {
            name: '큐베',
            champion: 'Ahri',
            role: 'MID',
            kill: 2,
            death: 2,
            assist: 4,
            damage: 23285,
            gold: 13004,
          },
          {
            name: '크캣',
            champion: 'Caitlyn',
            role: 'ADC',
            kill: 2,
            death: 5,
            assist: 5,
            damage: 18434,
            gold: 12199,
          },
          {
            name: '루루카',
            champion: 'Soraka',
            role: 'SUP',
            kill: 0,
            death: 5,
            assist: 7,
            damage: 3030,
            gold: 7036,
          },
        ],
      },
      {
        id: 's34',
        setNumber: 2,
        winner: '돼굴단',
        blueTeamBans: ['Draven', 'Lulu', 'Sion', 'Viktor', 'Orianna'],
        redTeamBans: ['Varus', 'Gwen', 'Ambessa', 'Nautilus', 'Maokai'],
        blueTeamPicks: ['XinZhao', 'Kalista', 'Olaf', 'Leona', 'Malzahar'],
        redTeamPicks: ['Vi', 'Ashe', 'Seraphine', 'Yorick', 'Vladimir'],
        blueTeamKills: 13,
        redTeamKills: 30,
        blueTeamDeath: 30,
        redTeamDeath: 13,
        blueTeamAsist: 22,
        redTeamAsist: 66,
        blueTeamGold: 55040,
        redTeamGold: 65356,
        duration: '32:02',
        blueTeam: [
          {
            name: '인섹',
            champion: 'Olaf',
            role: 'TOP',
            kill: 5,
            death: 6,
            assist: 2,
            damage: 22293,
            gold: 13215,
          },
          {
            name: '고수달',
            champion: 'XinZhao',
            role: 'JG',
            kill: 1,
            death: 7,
            assist: 7,
            damage: 7327,
            gold: 10789,
          },
          {
            name: '인간젤리',
            champion: 'Malzahar',
            role: 'MID',
            kill: 1,
            death: 6,
            assist: 4,
            damage: 25099,
            gold: 10779,
          },
          {
            name: '뱅',
            champion: 'Kalista',
            role: 'ADC',
            kill: 5,
            death: 5,
            assist: 2,
            damage: 15147,
            gold: 13201,
          },
          {
            name: '던',
            champion: 'Leona',
            role: 'SUP',
            kill: 1,
            death: 6,
            assist: 7,
            damage: 5439,
            gold: 7056,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: 'Yorick',
            role: 'TOP',
            kill: 4,
            death: 3,
            assist: 8,
            damage: 15721,
            gold: 12259,
          },
          {
            name: '네클릿',
            champion: 'Vi',
            role: 'JG',
            kill: 8,
            death: 3,
            assist: 11,
            damage: 21350,
            gold: 14071,
          },
          {
            name: '큐베',
            champion: 'Vladimir',
            role: 'MID',
            kill: 13,
            death: 4,
            assist: 10,
            damage: 41826,
            gold: 16234,
          },
          {
            name: '크캣',
            champion: 'Ashe',
            role: 'ADC',
            kill: 5,
            death: 3,
            assist: 12,
            damage: 21343,
            gold: 13254,
          },
          {
            name: '루루카',
            champion: 'Seraphine',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 25,
            damage: 5558,
            gold: 9538,
          },
        ],
      },
      {
        id: 's35',
        setNumber: 3,
        winner: '돼굴단',
        blueTeamBans: ['Draven', 'Lulu', 'Orianna', 'Mordekaiser', 'Nasus'],
        redTeamBans: ['Varus', 'Gwen', 'Ambessa', 'Darius', 'Aatrox'],
        blueTeamPicks: [
          'Viktor',
          'MonkeyKing',
          'Nautilus',
          'MissFortune',
          'AurelionSol',
        ],
        redTeamPicks: ['Milio', 'Tristana', 'Zyra', 'Sion', 'Jinx'],
        blueTeamKills: 4,
        redTeamKills: 17,
        blueTeamDeath: 17,
        redTeamDeath: 4,
        blueTeamAsist: 10,
        redTeamAsist: 35,
        blueTeamGold: 44212,
        redTeamGold: 54822,
        duration: '27:59',
        blueTeam: [
          {
            name: '인섹',
            champion: 'Viktor',
            role: 'TOP',
            kill: 1,
            death: 4,
            assist: 2,
            damage: 22172,
            gold: 9368,
          },
          {
            name: '고수달',
            champion: 'MonkeyKing',
            role: 'JG',
            kill: 1,
            death: 5,
            assist: 3,
            damage: 6030,
            gold: 8538,
          },
          {
            name: '인간젤리',
            champion: 'AurelionSol',
            role: 'MID',
            kill: 0,
            death: 2,
            assist: 1,
            damage: 10177,
            gold: 8294,
          },
          {
            name: '뱅',
            champion: 'MissFortune',
            role: 'ADC',
            kill: 2,
            death: 0,
            assist: 1,
            damage: 16321,
            gold: 12263,
          },
          {
            name: '던',
            champion: 'Nautilus',
            role: 'SUP',
            kill: 0,
            death: 6,
            assist: 3,
            damage: 3538,
            gold: 5749,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: 'Sion',
            role: 'TOP',
            kill: 1,
            death: 1,
            assist: 7,
            damage: 9253,
            gold: 9600,
          },
          {
            name: '네클릿',
            champion: 'Zyra',
            role: 'JG',
            kill: 2,
            death: 1,
            assist: 9,
            damage: 19942,
            gold: 11664,
          },
          {
            name: '큐베',
            champion: 'Tristana',
            role: 'MID',
            kill: 9,
            death: 1,
            assist: 3,
            damage: 37958,
            gold: 15053,
          },
          {
            name: '크캣',
            champion: 'Jinx',
            role: 'ADC',
            kill: 5,
            death: 1,
            assist: 5,
            damage: 15749,
            gold: 11505,
          },
          {
            name: '루루카',
            champion: 'Milio',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 11,
            damage: 2013,
            gold: 7000,
          },
        ],
      },
    ],
  },
  {
    id: 'm13',
    matchNumber: 13,
    blueTeam: '남성',
    redTeam: '돼굴단',
    blueTeamScore: 1,
    redTeamScore: 0,
    date: '2025-04-12',
    completed: false,
    progress: true,
    stage: '플레이오프',
    sets: [
      {
        id: 's36',
        setNumber: 1,
        winner: '남성',
        blueTeamBans: ['Draven', 'Caitlyn', 'Yuumi', 'Jinx', 'Illaoi'],
        redTeamBans: ['Gwen', 'Lillia', 'Zyra', 'Nautilus', 'Blitzcrank'],
        blueTeamPicks: ['Vi', 'Sion', 'Tristana', 'Hwei', 'Rakan'],
        redTeamPicks: ['Yone', 'Sejuani', 'Lulu', 'Corki', 'Ambessa'],
        blueTeamKills: 20,
        redTeamKills: 13,
        blueTeamDeath: 13,
        redTeamDeath: 20,
        blueTeamAsist: 36,
        redTeamAsist: 26,
        blueTeamGold: 53428,
        redTeamGold: 47324,
        duration: '28:01',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Sion',
            role: 'TOP',
            kill: 2,
            death: 0,
            assist: 10,
            damage: 15130,
            gold: 10722,
          },
          {
            name: '앰비션',
            champion: 'Vi',
            role: 'JG',
            kill: 9,
            death: 3,
            assist: 8,
            damage: 24354,
            gold: 12900,
          },
          {
            name: '실프',
            champion: 'Hwei',
            role: 'MID',
            kill: 3,
            death: 2,
            assist: 8,
            damage: 21472,
            gold: 10584,
          },
          {
            name: '따효니',
            champion: 'Tristana',
            role: 'ADC',
            kill: 5,
            death: 4,
            assist: 2,
            damage: 10155,
            gold: 12343,
          },
          {
            name: '라콩',
            champion: 'Rakan',
            role: 'SUP',
            kill: 1,
            death: 4,
            assist: 8,
            damage: 2833,
            gold: 6879,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: 'Ambessa',
            role: 'TOP',
            kill: 2,
            death: 4,
            assist: 3,
            damage: 15018,
            gold: 9496,
          },
          {
            name: '네클릿',
            champion: 'Sejuani',
            role: 'JG',
            kill: 3,
            death: 5,
            assist: 7,
            damage: 10767,
            gold: 9510,
          },
          {
            name: '큐베',
            champion: 'Yone',
            role: 'MID',
            kill: 5,
            death: 5,
            assist: 3,
            damage: 16957,
            gold: 11025,
          },
          {
            name: '크캣',
            champion: 'Corki',
            role: 'ADC',
            kill: 3,
            death: 2,
            assist: 3,
            damage: 17970,
            gold: 10870,
          },
          {
            name: '루루카',
            champion: 'Lulu',
            role: 'SUP',
            kill: 0,
            death: 4,
            assist: 10,
            damage: 5824,
            gold: 6423,
          },
        ],
      },
      {
        id: 's37',
        setNumber: 2,
        winner: '',
        blueTeamBans: ['Draven', 'Caitlyn', 'Yuumi', 'Orianna', 'Ahri'],
        redTeamBans: ['Gwen', 'Lillia', 'XinZhao', 'Garen', 'Viego'],
        blueTeamPicks: ['Viktor', 'Jhin', 'Blitzcrank', 'MonkeyKing', 'Singed'],
        redTeamPicks: ['Nocturne', 'Jinx', 'Milio', 'Vladimir', 'Olaf'],
        blueTeamKills: 0,
        redTeamKills: 0,
        blueTeamDeath: 0,
        redTeamDeath: 0,
        blueTeamAsist: 0,
        redTeamAsist: 0,
        blueTeamGold: 0,
        redTeamGold: 0,
        duration: '',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Singed',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '앰비션',
            champion: 'MonkeyKing',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '실프',
            champion: 'Viktor',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '따효니',
            champion: 'Jhin',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '라콩',
            champion: 'Blitzcrank',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: 'Olaf',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '네클릿',
            champion: 'Nocturne',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '큐베',
            champion: 'Vladimir',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '크캣',
            champion: 'Jinx',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '루루카',
            champion: 'Milio',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
      },
      {
        id: 's38',
        setNumber: 3,
        winner: '',
        blueTeamBans: [],
        redTeamBans: [],
        blueTeamPicks: [],
        redTeamPicks: [],
        blueTeamKills: 0,
        redTeamKills: 0,
        blueTeamDeath: 0,
        redTeamDeath: 0,
        blueTeamAsist: 0,
        redTeamAsist: 0,
        blueTeamGold: 0,
        redTeamGold: 0,
        duration: '',
        blueTeam: [
          {
            name: '룩삼',
            champion: '',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '앰비션',
            champion: '',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '실프',
            champion: '',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '따효니',
            champion: '',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '라콩',
            champion: '',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
        redTeam: [
          {
            name: '강소연',
            champion: '',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '네클릿',
            champion: '',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '큐베',
            champion: '',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '크캣',
            champion: '',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '루루카',
            champion: '',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'm14',
    matchNumber: 14,
    blueTeam: '상체파괴자',
    redTeam: '노코멘트',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-12',
    completed: false,
    progress: false,
    stage: '플레이오프',
    sets: [
      {
        id: 's28',
        setNumber: 1,
        winner: '',
        blueTeamBans: [],
        redTeamBans: [],
        blueTeamPicks: [],
        redTeamPicks: [],
        blueTeamKills: 0,
        redTeamKills: 0,
        blueTeamDeath: 0,
        redTeamDeath: 0,
        blueTeamAsist: 0,
        redTeamAsist: 0,
        blueTeamGold: 0,
        redTeamGold: 0,
        duration: '',
        blueTeam: [
          {
            name: '플레임',
            champion: '',
            role: 'TOP',
            kill: 1,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '소우릎',
            champion: '',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '헤징',
            champion: '',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '러너',
            champion: '',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '눈꽃',
            champion: '',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
        redTeam: [
          {
            name: '인섹',
            champion: '',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '고수달',
            champion: '',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '인간젤리',
            champion: '',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '뱅',
            champion: '',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '던',
            champion: '',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
        ],
      },
    ],
  },
  {
    id: 'm15',
    matchNumber: 15,
    blueTeam: '승자조 배패팀',
    redTeam: '패자조 승리팀',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-13',
    completed: false,
    progress: false,
    stage: '플레이오프',
    sets: [],
  },
  {
    id: 'm16',
    matchNumber: 16,
    blueTeam: '승자조 승리팀',
    redTeam: '최종 진출전 승리팀',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-13',
    completed: false,
    progress: false,
    stage: '결승전',
    sets: [],
  },
]

export default playoffMatchData
