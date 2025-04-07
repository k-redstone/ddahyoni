import { IMatch } from '@/types'

const totalMatchData: IMatch[] = [
  {
    id: 'm1',
    matchNumber: 1,
    blueTeam: '돼굴단',
    redTeam: '노코멘트',
    blueTeamScore: 1,
    redTeamScore: 2,
    date: '2025-04-06',
    completed: true,
    progress: false,
    stage: '리그전',
    sets: [
      {
        id: 's1',
        setNumber: 1,
        winner: '돼굴단',
        blueTeamBans: ['Varus', 'Ahri', 'Nautilus', 'Galio', 'Taliyah'],
        redTeamBans: ['Lulu', 'Draven', 'Sejuani', 'Orianna', 'Viktor'],
        blueTeamPicks: ['Vi', 'Caitlyn', 'Seraphine', 'Kassadin', 'Ambessa'],
        redTeamPicks: ['Naafiri', 'Ashe', 'Leona', 'Veigar', 'Darius'],
        blueTeamKills: 44,
        redTeamKills: 16,
        blueTeamDeath: 16,
        redTeamDeath: 44,
        blueTeamAsist: 114,
        redTeamAsist: 42,
        blueTeamGold: 56949,
        redTeamGold: 46357,
        duration: '26:40',
        blueTeam: [
          {
            name: '강소연',
            champion: 'Ambessa',
            role: 'TOP',
            kill: 5,
            death: 5,
            assist: 16,
            damage: 13334,
            gold: 9553,
          },
          {
            name: '네클릿',
            champion: 'Vi',
            role: 'JG',
            kill: 7,
            death: 5,
            assist: 32,
            damage: 24792,
            gold: 12228,
          },
          {
            name: '큐베',
            champion: 'Kassadin',
            role: 'MID',
            kill: 20,
            death: 1,
            assist: 19,
            damage: 43000,
            gold: 14851,
          },
          {
            name: '크캣',
            champion: 'Caitlyn',
            role: 'ADC',
            kill: 8,
            death: 2,
            assist: 19,
            damage: 28287,
            gold: 12231,
          },
          {
            name: '루루카',
            champion: 'Seraphine',
            role: 'SUP',
            kill: 4,
            death: 3,
            assist: 28,
            damage: 6486,
            gold: 8086,
          },
        ],
        redTeam: [
          {
            name: '인섹',
            champion: 'Darius',
            role: 'TOP',
            kill: 8,
            death: 7,
            assist: 6,
            damage: 33391,
            gold: 13640,
          },
          {
            name: '고수달',
            champion: 'Naafiri',
            role: 'JG',
            kill: 2,
            death: 9,
            assist: 10,
            damage: 12293,
            gold: 9197,
          },
          {
            name: '인간젤리',
            champion: 'Veigar',
            role: 'MID',
            kill: 2,
            death: 10,
            assist: 10,
            damage: 17478,
            gold: 8414,
          },
          {
            name: '뱅',
            champion: 'Ashe',
            role: 'ADC',
            kill: 3,
            death: 9,
            assist: 8,
            damage: 11741,
            gold: 9202,
          },
          {
            name: '던',
            champion: 'Leona',
            role: 'SUP',
            kill: 1,
            death: 9,
            assist: 8,
            damage: 5513,
            gold: 5904,
          },
        ],
      },
      {
        id: 's2',
        setNumber: 2,
        winner: '노코멘트',
        blueTeamBans: ['Varus', 'Ahri', 'Nautilus', 'Galio', 'Malzahar'],
        redTeamBans: ['Lulu', 'Draven', 'Nocturne', 'Sion', 'Viktor'],
        blueTeamPicks: ['MonkeyKing', 'Yuumi', 'Sivir', 'Rumble', 'Sylas'],
        redTeamPicks: ['Sejuani', 'Ezreal', 'Maokai', 'Yone', 'AurelionSol'],
        blueTeamKills: 23,
        redTeamKills: 5,
        blueTeamDeath: 5,
        redTeamDeath: 23,
        blueTeamAsist: 72,
        redTeamAsist: 18,
        blueTeamGold: 61748,
        redTeamGold: 49020,
        duration: '30:31',
        blueTeam: [
          {
            name: '강소연',
            champion: 'Rumble',
            role: 'TOP',
            kill: 0,
            death: 7,
            assist: 3,
            damage: 28108,
            gold: 14801,
          },
          {
            name: '네클릿',
            champion: 'MonkeyKing',
            role: 'JG',
            kill: 2,
            death: 5,
            assist: 3,
            damage: 12716,
            gold: 10834,
          },
          {
            name: '큐베',
            champion: 'Sylas',
            role: 'MID',
            kill: 1,
            death: 4,
            assist: 4,
            damage: 14204,
            gold: 10276,
          },
          {
            name: '크캣',
            champion: 'Sivir',
            role: 'ADC',
            kill: 2,
            death: 3,
            assist: 3,
            damage: 23996,
            gold: 12706,
          },
          {
            name: '루루카',
            champion: 'Yuumi',
            role: 'SUP',
            kill: 0,
            death: 4,
            assist: 5,
            damage: 4998,
            gold: 6408,
          },
        ],
        redTeam: [
          {
            name: '인섹',
            champion: 'Yone',
            role: 'TOP',
            kill: 5,
            death: 0,
            assist: 14,
            damage: 28108,
            gold: 14801,
          },
          {
            name: '고수달',
            champion: 'Sejuani',
            role: 'JG',
            kill: 2,
            death: 2,
            assist: 17,
            damage: 11334,
            gold: 11395,
          },
          {
            name: '인간젤리',
            champion: 'AurelionSol',
            role: 'MID',
            kill: 6,
            death: 0,
            assist: 14,
            damage: 18268,
            gold: 13448,
          },
          {
            name: '뱅',
            champion: 'Ezreal',
            role: 'ADC',
            kill: 8,
            death: 1,
            assist: 10,
            damage: 28613,
            gold: 13815,
          },
          {
            name: '던',
            champion: 'Maokai',
            role: 'SUP',
            kill: 2,
            death: 2,
            assist: 17,
            damage: 6254,
            gold: 8289,
          },
        ],
      },
      {
        id: 's3',
        setNumber: 3,
        winner: '노코멘트',
        blueTeamBans: ['Varus', 'Ahri', 'Nautilus', 'Jinx', 'Kaisa'],
        redTeamBans: ['Lulu', 'Draven', 'Nocturne', 'Viktor', 'Orianna'],
        blueTeamPicks: [
          'MissFortune',
          'Braum',
          'Poppy',
          'Tristana',
          'Mordekaiser',
        ],
        redTeamPicks: ['Viego', 'Rell', 'Malzahar', 'Corki', 'Olaf'],
        blueTeamKills: 31,
        redTeamKills: 9,
        blueTeamDeath: 9,
        redTeamDeath: 31,
        blueTeamAsist: 70,
        redTeamAsist: 23,
        blueTeamGold: 65573,
        redTeamGold: 52719,
        duration: '33:24',
        blueTeam: [
          {
            name: '강소연',
            champion: 'Mordekaiser',
            role: 'TOP',
            kill: 2,
            death: 7,
            assist: 2,
            damage: 15856,
            gold: 9603,
          },
          {
            name: '네클릿',
            champion: 'Poppy',
            role: 'JG',
            kill: 0,
            death: 7,
            assist: 8,
            damage: 10139,
            gold: 9213,
          },
          {
            name: '큐베',
            champion: 'Tristana',
            role: 'MID',
            kill: 4,
            death: 5,
            assist: 4,
            damage: 28908,
            gold: 13969,
          },
          {
            name: '크캣',
            champion: 'MissFortune',
            role: 'ADC',
            kill: 2,
            death: 4,
            assist: 3,
            damage: 20941,
            gold: 12806,
          },
          {
            name: '루루카',
            champion: 'Braum',
            role: 'SUP',
            kill: 1,
            death: 8,
            assist: 6,
            damage: 5818,
            gold: 7128,
          },
        ],
        redTeam: [
          {
            name: '인섹',
            champion: 'Olaf',
            role: 'TOP',
            kill: 13,
            death: 2,
            assist: 12,
            damage: 36004,
            gold: 16052,
          },
          {
            name: '고수달',
            champion: 'Viego',
            role: 'JG',
            kill: 7,
            death: 2,
            assist: 9,
            damage: 6425,
            gold: 13514,
          },
          {
            name: '인간젤리',
            champion: 'Malzahar',
            role: 'MID',
            kill: 5,
            death: 2,
            assist: 14,
            damage: 19360,
            gold: 13708,
          },
          {
            name: '뱅',
            champion: 'Corki',
            role: 'ADC',
            kill: 6,
            death: 0,
            assist: 14,
            damage: 27548,
            gold: 14065,
          },
          {
            name: '던',
            champion: 'Rell',
            role: 'SUP',
            kill: 0,
            death: 3,
            assist: 21,
            damage: 3670,
            gold: 8234,
          },
        ],
      },
    ],
  },
  {
    id: 'm2',
    matchNumber: 2,
    blueTeam: '남성',
    redTeam: '상체파괴자',
    blueTeamScore: 3,
    redTeamScore: 0,
    date: '2025-04-06',
    completed: true,
    progress: false,
    stage: '리그전',
    sets: [
      {
        id: 's4',
        setNumber: 1,
        winner: '남성',
        blueTeamBans: ['Ambessa', 'Lissandra', 'Vi', 'Orianna', 'Taliyah'],
        redTeamBans: ['Tristana', 'Yone', 'Nautilus', 'Alistar', 'Braum'],
        blueTeamPicks: ['Gwen', 'Jhin', 'Corki', 'Mordekaiser', 'Blitzcrank'],
        redTeamPicks: ['Varus', 'Sion', 'Leona', 'Viktor', 'Gnar'],
        blueTeamKills: 29,
        redTeamKills: 18,
        blueTeamDeath: 18,
        redTeamDeath: 29,
        blueTeamAsist: 64,
        redTeamAsist: 43,
        blueTeamGold: 67935,
        redTeamGold: 60805,
        duration: '36:07',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Mordekaiser',
            role: 'TOP',
            kill: 4,
            death: 5,
            assist: 8,
            damage: 22503,
            gold: 12847,
          },
          {
            name: '앰비션',
            champion: 'Gwen',
            role: 'JG',
            kill: 8,
            death: 3,
            assist: 9,
            damage: 39750,
            gold: 15879,
          },
          {
            name: '실프',
            champion: 'Corki',
            role: 'MID',
            kill: 8,
            death: 5,
            assist: 13,
            damage: 39464,
            gold: 14851,
          },
          {
            name: '따효니',
            champion: 'Jhin',
            role: 'ADC',
            kill: 8,
            death: 2,
            assist: 12,
            damage: 28503,
            gold: 15452,
          },
          {
            name: '라콩',
            champion: 'Blitzcrank',
            role: 'SUP',
            kill: 1,
            death: 3,
            assist: 22,
            damage: 9800,
            gold: 8906,
          },
        ],
        redTeam: [
          {
            name: '플레임',
            champion: 'Gnar',
            role: 'TOP',
            kill: 2,
            death: 6,
            assist: 8,
            damage: 19017,
            gold: 11944,
          },
          {
            name: '소우릎',
            champion: 'Sion',
            role: 'JG',
            kill: 4,
            death: 5,
            assist: 8,
            damage: 23870,
            gold: 12070,
          },
          {
            name: '헤징',
            champion: 'Viktor',
            role: 'MID',
            kill: 9,
            death: 6,
            assist: 5,
            damage: 36128,
            gold: 15588,
          },
          {
            name: '러너',
            champion: 'Varus',
            role: 'ADC',
            kill: 1,
            death: 3,
            assist: 12,
            damage: 21056,
            gold: 12428,
          },
          {
            name: '눈꽃',
            champion: 'Leona',
            role: 'SUP',
            kill: 2,
            death: 9,
            assist: 10,
            damage: 11207,
            gold: 8775,
          },
        ],
      },
      {
        id: 's5',
        setNumber: 2,
        winner: '남성',
        blueTeamBans: ['Ambessa', 'Vi', 'Ashe', 'Rumble', 'Kennen'],
        redTeamBans: ['Yone', 'Nautilus', '', 'Malphite', 'Braum'],
        blueTeamPicks: ['Hwei', 'XinZhao', 'MissFortune', 'Rakan', 'DrMundo'],
        redTeamPicks: ['Tristana', 'Naafiri', 'Ahri', 'Alistar', 'Jayce'],
        blueTeamKills: 21,
        redTeamKills: 5,
        blueTeamDeath: 5,
        redTeamDeath: 21,
        blueTeamAsist: 53,
        redTeamAsist: 12,
        blueTeamGold: 59835,
        redTeamGold: 53179,
        duration: '33:41',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'DrMundo',
            role: 'TOP',
            kill: 2,
            death: 2,
            assist: 12,
            damage: 13254,
            gold: 11313,
          },
          {
            name: '앰비션',
            champion: 'XinZhao',
            role: 'JG',
            kill: 2,
            death: 2,
            assist: 11,
            damage: 17469,
            gold: 12359,
          },
          {
            name: '실프',
            champion: 'Hwei',
            role: 'MID',
            kill: 8,
            death: 0,
            assist: 8,
            damage: 27699,
            gold: 13072,
          },
          {
            name: '따효니',
            champion: 'MissFortune',
            role: 'ADC',
            kill: 9,
            death: 1,
            assist: 6,
            damage: 23207,
            gold: 14934,
          },
          {
            name: '라콩',
            champion: 'Rakan',
            role: 'SUP',
            kill: 0,
            death: 0,
            assist: 16,
            damage: 4146,
            gold: 8157,
          },
        ],
        redTeam: [
          {
            name: '플레임',
            champion: 'Jayce',
            role: 'TOP',
            kill: 2,
            death: 4,
            assist: 1,
            damage: 28165,
            gold: 13631,
          },
          {
            name: '소우릎',
            champion: 'Naafiri',
            role: 'JG',
            kill: 2,
            death: 2,
            assist: 3,
            damage: 16249,
            gold: 10760,
          },
          {
            name: '헤징',
            champion: 'Ahri',
            role: 'MID',
            kill: 1,
            death: 4,
            assist: 2,
            damage: 15953,
            gold: 10746,
          },
          {
            name: '러너',
            champion: 'Tristana',
            role: 'ADC',
            kill: 0,
            death: 2,
            assist: 4,
            damage: 6599,
            gold: 11296,
          },
          {
            name: '눈꽃',
            champion: 'Alistar',
            role: 'SUP',
            kill: 0,
            death: 9,
            assist: 2,
            damage: 4620,
            gold: 6746,
          },
        ],
      },
      {
        id: 's6',
        setNumber: 3,
        winner: '남성',
        blueTeamBans: ['Ambessa', 'Ashe', 'Rumble', 'Nami', 'Braum'],
        redTeamBans: ['Yone', 'Nautilus', 'Zyra', 'Garen', 'Seraphine'],
        blueTeamPicks: ['Vi', 'Caitlyn', 'Orianna', 'Ornn', 'Galio'],
        redTeamPicks: ['MonkeyKing', 'Lucian', 'Neeko', 'Thresh', 'Camille'],
        blueTeamKills: 24,
        redTeamKills: 10,
        blueTeamDeath: 10,
        redTeamDeath: 24,
        blueTeamAsist: 62,
        redTeamAsist: 21,
        blueTeamGold: 57791,
        redTeamGold: 49199,
        duration: '30:03',
        blueTeam: [
          {
            name: '룩삼',
            champion: 'Ornn',
            role: 'TOP',
            kill: 2,
            death: 0,
            assist: 9,
            damage: 10686,
            gold: 10169,
          },
          {
            name: '앰비션',
            champion: 'Vi',
            role: 'JG',
            kill: 7,
            death: 2,
            assist: 10,
            damage: 18008,
            gold: 13392,
          },
          {
            name: '실프',
            champion: 'Orianna',
            role: 'MID',
            kill: 4,
            death: 2,
            assist: 14,
            damage: 18475,
            gold: 11870,
          },
          {
            name: '따효니',
            champion: 'Caitlyn',
            role: 'ADC',
            kill: 6,
            death: 4,
            assist: 11,
            damage: 21892,
            gold: 12839,
          },
          {
            name: '라콩',
            champion: 'Galio',
            role: 'SUP',
            kill: 5,
            death: 2,
            assist: 18,
            damage: 12009,
            gold: 9521,
          },
        ],
        redTeam: [
          {
            name: '플레임',
            champion: 'Camille',
            role: 'TOP',
            kill: 0,
            death: 1,
            assist: 2,
            damage: 20663,
            gold: 11323,
          },
          {
            name: '소우릎',
            champion: 'MonkeyKing',
            role: 'JG',
            kill: 1,
            death: 5,
            assist: 6,
            damage: 12196,
            gold: 10024,
          },
          {
            name: '헤징',
            champion: 'Neeko',
            role: 'MID',
            kill: 4,
            death: 4,
            assist: 4,
            damage: 13319,
            gold: 10113,
          },
          {
            name: '러너',
            champion: 'Lucian',
            role: 'ADC',
            kill: 5,
            death: 5,
            assist: 2,
            damage: 17213,
            gold: 11287,
          },
          {
            name: '눈꽃',
            champion: 'Thresh',
            role: 'SUP',
            kill: 0,
            death: 9,
            assist: 7,
            damage: 5614,
            gold: 6452,
          },
        ],
      },
    ],
  },
  {
    id: 'm3',
    matchNumber: 3,
    blueTeam: '상체파괴자',
    redTeam: '치지직 프로스트',
    blueTeamScore: 1,
    redTeamScore: 2,
    date: '2025-04-07',
    completed: true,
    progress: false,
    stage: '리그전',
    sets: [
      {
        id: 's7',
        setNumber: 1,
        winner: '치지직 프로스트',
        blueTeamBans: ['Xayah', 'Poppy', 'Braum', 'Azir', 'Viktor'],
        redTeamBans: ['Ambessa', 'Gwen', 'Naafiri', 'Blitzcrank', 'Leona'],
        blueTeamPicks: ['Vi', 'Ashe', 'Rumble', 'Ziggs', 'Rell'],
        redTeamPicks: ['Kalista', 'Renata', 'Sion', 'XinZhao', 'Ahri'],
        blueTeamKills: 20,
        redTeamKills: 36,
        blueTeamDeath: 36,
        redTeamDeath: 20,
        blueTeamAsist: 56,
        redTeamAsist: 89,
        blueTeamGold: 74717,
        redTeamGold: 81780,
        duration: '42:53',
        blueTeam: [
          {
            name: '플레임',
            champion: 'Rumble',
            role: 'TOP',
            kill: 5,
            death: 9,
            assist: 10,
            damage: 57752,
            gold: 16310,
          },
          {
            name: '소우릎',
            champion: 'Vi',
            role: 'JG',
            kill: 6,
            death: 9,
            assist: 8,
            damage: 24412,
            gold: 15828,
          },
          {
            name: '헤징',
            champion: 'Ziggs',
            role: 'MID',
            kill: 4,
            death: 4,
            assist: 10,
            damage: 70250,
            gold: 16473,
          },
          {
            name: '러너',
            champion: 'Ashe',
            role: 'ADC',
            kill: 3,
            death: 7,
            assist: 12,
            damage: 42734,
            gold: 15556,
          },
          {
            name: '눈꽃',
            champion: 'Rell',
            role: 'SUP',
            kill: 2,
            death: 7,
            assist: 16,
            damage: 10357,
            gold: 10550,
          },
        ],
        redTeam: [
          {
            name: '얍얍',
            champion: 'Sion',
            role: 'TOP',
            kill: 3,
            death: 8,
            assist: 16,
            damage: 23475,
            gold: 13542,
          },
          {
            name: '휘용',
            champion: 'XinZhao',
            role: 'JG',
            kill: 9,
            death: 3,
            assist: 17,
            damage: 35878,
            gold: 17440,
          },
          {
            name: '갱맘',
            champion: 'Ahri',
            role: 'MID',
            kill: 10,
            death: 1,
            assist: 18,
            damage: 49325,
            gold: 20116,
          },
          {
            name: '모카형',
            champion: 'Kalista',
            role: 'ADC',
            kill: 12,
            death: 2,
            assist: 14,
            damage: 29631,
            gold: 19614,
          },
          {
            name: '매드라이프',
            champion: 'Renata',
            role: 'SUP',
            kill: 2,
            death: 6,
            assist: 24,
            damage: 7294,
            gold: 11068,
          },
        ],
      },
      {
        id: 's8',
        setNumber: 2,
        winner: '상체파괴자',
        blueTeamBans: ['Poppy', 'Braum', 'Blitzcrank', 'Sejuani', 'Lillia'],
        redTeamBans: ['Gwen', 'Naafiri', 'Leona', 'Kayle', 'Gnar'],
        blueTeamPicks: ['Lissandra', 'LeeSin', 'Lucian', 'Alistar', 'Aatrox'],
        redTeamPicks: ['Ambessa', 'Varus', 'Nautilus', 'KSante', 'Maokai'],
        blueTeamKills: 25,
        redTeamKills: 10,
        blueTeamDeath: 10,
        redTeamDeath: 25,
        blueTeamAsist: 71,
        redTeamAsist: 19,
        blueTeamGold: 64321,
        redTeamGold: 54747,
        duration: '34:22',
        blueTeam: [
          {
            name: '플레임',
            champion: 'Aatrox',
            role: 'TOP',
            kill: 15,
            death: 2,
            assist: 7,
            damage: 47666,
            gold: 17192,
          },
          {
            name: '소우릎',
            champion: 'LeeSin',
            role: 'JG',
            kill: 3,
            death: 3,
            assist: 15,
            damage: 14853,
            gold: 12794,
          },
          {
            name: '헤징',
            champion: 'Lissandra',
            role: 'MID',
            kill: 1,
            death: 2,
            assist: 19,
            damage: 23120,
            gold: 11860,
          },
          {
            name: '러너',
            champion: 'Lucian',
            role: 'ADC',
            kill: 5,
            death: 1,
            assist: 10,
            damage: 19754,
            gold: 14113,
          },
          {
            name: '눈꽃',
            champion: 'Alistar',
            role: 'SUP',
            kill: 1,
            death: 2,
            assist: 20,
            damage: 7479,
            gold: 8362,
          },
        ],
        redTeam: [
          {
            name: '얍얍',
            champion: 'KSante',
            role: 'TOP',
            kill: 2,
            death: 5,
            assist: 3,
            damage: 23437,
            gold: 10452,
          },
          {
            name: '휘용',
            champion: 'Maokai',
            role: 'JG',
            kill: 0,
            death: 4,
            assist: 7,
            damage: 16186,
            gold: 9815,
          },
          {
            name: '갱맘',
            champion: 'Ambessa',
            role: 'MID',
            kill: 7,
            death: 6,
            assist: 3,
            damage: 25873,
            gold: 16050,
          },
          {
            name: '모카형',
            champion: 'Varus',
            role: 'ADC',
            kill: 0,
            death: 4,
            assist: 4,
            damage: 21497,
            gold: 11294,
          },
          {
            name: '매드라이프',
            champion: 'Nautilus',
            role: 'SUP',
            kill: 1,
            death: 6,
            assist: 2,
            damage: 8182,
            gold: 7136,
          },
        ],
      },
      {
        id: 's9',
        setNumber: 3,
        winner: '치지직 프로스트',
        blueTeamBans: ['Poppy', 'Braum', 'Azir', 'Viktor', 'Malphite'],
        redTeamBans: ['Gwen', 'Naafiri', 'Neeko', 'DrMundo', 'Aurora'],
        blueTeamPicks: ['Leona', 'MonkeyKing', 'Sivir', 'Taliyah', 'Olaf'],
        redTeamPicks: ['Jinx', 'Thresh', 'Viego', 'Xerath', 'Gnar'],
        blueTeamKills: 12,
        redTeamKills: 20,
        blueTeamDeath: 20,
        redTeamDeath: 12,
        blueTeamAsist: 26,
        redTeamAsist: 48,
        blueTeamGold: 49810,
        redTeamGold: 58389,
        duration: '30:52',
        blueTeam: [
          {
            name: '플레임',
            champion: 'Olaf',
            role: 'TOP',
            kill: 5,
            death: 4,
            assist: 5,
            damage: 18708,
            gold: 12277,
          },
          {
            name: '소우릎',
            champion: 'MonkeyKing',
            role: 'JG',
            kill: 0,
            death: 3,
            assist: 10,
            damage: 9144,
            gold: 9759,
          },
          {
            name: '헤징',
            champion: 'Taliyah',
            role: 'MID',
            kill: 1,
            death: 4,
            assist: 4,
            damage: 9299,
            gold: 10049,
          },
          {
            name: '러너',
            champion: 'Sivir',
            role: 'ADC',
            kill: 4,
            death: 3,
            assist: 2,
            damage: 8787,
            gold: 10798,
          },
          {
            name: '눈꽃',
            champion: 'Leona',
            role: 'SUP',
            kill: 2,
            death: 6,
            assist: 5,
            damage: 5354,
            gold: 6927,
          },
        ],
        redTeam: [
          {
            name: '얍얍',
            champion: 'Gnar',
            role: 'TOP',
            kill: 1,
            death: 6,
            assist: 6,
            damage: 13076,
            gold: 9455,
          },
          {
            name: '휘용',
            champion: 'Viego',
            role: 'JG',
            kill: 3,
            death: 1,
            assist: 8,
            damage: 10217,
            gold: 11195,
          },
          {
            name: '갱맘',
            champion: 'Xerath',
            role: 'MID',
            kill: 12,
            death: 0,
            assist: 6,
            damage: 34401,
            gold: 15776,
          },
          {
            name: '모카형',
            champion: 'Jinx',
            role: 'ADC',
            kill: 1,
            death: 2,
            assist: 14,
            damage: 16095,
            gold: 12820,
          },
          {
            name: '매드라이프',
            champion: 'Thresh',
            role: 'SUP',
            kill: 3,
            death: 3,
            assist: 14,
            damage: 7154,
            gold: 9143,
          },
        ],
      },
    ],
  },
  {
    id: 'm4',
    matchNumber: 4,
    blueTeam: '노코멘트',
    redTeam: '남성',
    blueTeamScore: 0,
    redTeamScore: 1,
    date: '2025-04-07',
    completed: false,
    progress: true,
    stage: '리그전',
    sets: [
      {
        id: 's10',
        setNumber: 1,
        winner: '남성',
        blueTeamBans: ['Viktor', 'Hwei', 'Zyra', 'Galio', 'Rell'],
        redTeamBans: ['Ambessa', 'Ezreal', 'Lucian', 'Kalista', 'Leona'],
        blueTeamPicks: ['Yone', 'Vi', 'Ahri', 'Kaisa', 'Nautilus'],
        redTeamPicks: ['Gwen', 'Corki', 'Sion', 'Tristana', 'Rakan'],
        blueTeamKills: 21,
        redTeamKills: 26,
        blueTeamDeath: 26,
        redTeamDeath: 21,
        blueTeamAsist: 54,
        redTeamAsist: 61,
        blueTeamGold: 60844,
        redTeamGold: 65439,
        duration: '34:16',
        blueTeam: [
          {
            name: '인섹',
            champion: 'Yone',
            role: 'TOP',
            kill: 10,
            death: 5,
            assist: 9,
            damage: 36285,
            gold: 16523,
          },
          {
            name: '고수달',
            champion: 'Vi',
            role: 'JG',
            kill: 0,
            death: 7,
            assist: 9,
            damage: 10055,
            gold: 10048,
          },
          {
            name: '인간젤리',
            champion: 'Ahri',
            role: 'MID',
            kill: 4,
            death: 4,
            assist: 13,
            damage: 24977,
            gold: 12158,
          },
          {
            name: '뱅',
            champion: 'Kaisa',
            role: 'ADC',
            kill: 4,
            death: 4,
            assist: 9,
            damage: 30445,
            gold: 13356,
          },
          {
            name: '던',
            champion: 'Nautilus',
            role: 'SUP',
            kill: 3,
            death: 6,
            assist: 14,
            damage: 6922,
            gold: 8759,
          },
        ],
        redTeam: [
          {
            name: '룩삼',
            champion: 'Sion',
            role: 'TOP',
            kill: 3,
            death: 3,
            assist: 12,
            damage: 19934,
            gold: 11817,
          },
          {
            name: '앰비션',
            champion: 'Gwen',
            role: 'JG',
            kill: 4,
            death: 6,
            assist: 12,
            damage: 22081,
            gold: 14213,
          },
          {
            name: '실프',
            champion: 'Corki',
            role: 'MID',
            kill: 9,
            death: 3,
            assist: 9,
            damage: 23916,
            gold: 14552,
          },
          {
            name: '따효니',
            champion: 'Tristana',
            role: 'ADC',
            kill: 9,
            death: 5,
            assist: 6,
            damage: 36215,
            gold: 15387,
          },
          {
            name: '라콩',
            champion: 'Rakan',
            role: 'SUP',
            kill: 1,
            death: 4,
            assist: 22,
            damage: 6180,
            gold: 9470,
          },
        ],
      },
      {
        id: 's11',
        setNumber: 2,
        winner: '',
        blueTeamBans: ['Viktor', 'Hwei', 'Orianna', 'Dr. Mundo', 'Mordekaiser'],
        redTeamBans: ['Ambessa', 'Ezreal', 'Lucian', 'Veigar', 'Galio'],
        blueTeamPicks: ['Braum', 'Nocturne', 'Xayah', 'AurelionSol', 'Gnar'],
        redTeamPicks: ['Leona', 'Jhin', 'MonkeyKing', 'Azir', 'Garen'],
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
            name: '인섹',
            champion: 'Gnar',
            role: 'TOP',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '고수달',
            champion: 'Nocturne',
            role: 'JG',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '인간젤리',
            champion: 'AurelionSol',
            role: 'MID',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '뱅',
            champion: 'Xayah',
            role: 'ADC',
            kill: 0,
            death: 0,
            assist: 0,
            damage: 0,
            gold: 0,
          },
          {
            name: '던',
            champion: 'Braum',
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
            name: '룩삼',
            champion: 'Garen',
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
            champion: 'Azir',
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
            champion: 'Leona',
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
    id: 'm5',
    matchNumber: 5,
    blueTeam: '치지직 프로스트',
    redTeam: '남성',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-08',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm6',
    matchNumber: 6,
    blueTeam: '상체파괴자',
    redTeam: '돼굴단',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-08',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm7',
    matchNumber: 7,
    blueTeam: '노코멘트',
    redTeam: '상체파괴자',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-09',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm8',
    matchNumber: 8,
    blueTeam: '돼굴단',
    redTeam: '치지직 프로스트',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-09',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm9',
    matchNumber: 9,
    blueTeam: '돼굴단',
    redTeam: '남성',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-10',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm10',
    matchNumber: 10,
    blueTeam: '노코멘트',
    redTeam: '치지직 프로스트',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-10',
    completed: false,
    progress: false,
    stage: '리그전',
    sets: [],
  },
]

export default totalMatchData
