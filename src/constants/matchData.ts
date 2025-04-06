import { IMatch } from '@/types'

const totalMatchData: IMatch[] = [
  {
    id: 'm1',
    matchNumber: 1,
    blueTeam: 'TEAM 큐베',
    redTeam: 'TEAM 뱅',
    blueTeamScore: 1,
    redTeamScore: 2,
    date: '2025-04-06',
    completed: true,
    stage: '리그전',
    sets: [
      {
        id: 's1',
        setNumber: 1,
        winner: 'TEAM 큐베',
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
        winner: 'TEAM 뱅',
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
        winner: 'TEAM 뱅',
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
    blueTeam: 'TEAM 앰비션',
    redTeam: 'TEAM 플레임',
    blueTeamScore: 1,
    redTeamScore: 0,
    date: '2025-04-06',
    completed: false,
    stage: '리그전',
    sets: [
      {
        id: 's4',
        setNumber: 1,
        winner: 'TEAM 앰비션',
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
    ],
  },
  {
    id: 'm3',
    matchNumber: 3,
    blueTeam: 'TEAM 플레임',
    redTeam: 'TEAM 매드라이프',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-07',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm4',
    matchNumber: 4,
    blueTeam: 'TEAM 뱅',
    redTeam: 'TEAM 앰비션',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-07',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm5',
    matchNumber: 5,
    blueTeam: 'TEAM 매드라이프',
    redTeam: 'TEAM 앰비션',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-08',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm6',
    matchNumber: 6,
    blueTeam: 'TEAM 플레임',
    redTeam: 'TEAM 큐베',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-08',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm7',
    matchNumber: 7,
    blueTeam: 'TEAM 뱅',
    redTeam: 'TEAM 플레임',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-09',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm8',
    matchNumber: 8,
    blueTeam: 'TEAM 큐베',
    redTeam: 'TEAM 매드라이프',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-09',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm9',
    matchNumber: 9,
    blueTeam: 'TEAM 큐베',
    redTeam: 'TEAM 앰비션',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-10',
    completed: false,
    stage: '리그전',
    sets: [],
  },
  {
    id: 'm10',
    matchNumber: 10,
    blueTeam: 'TEAM 뱅',
    redTeam: 'TEAM 매드라이프',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-10',
    completed: false,
    stage: '리그전',
    sets: [],
  },
]

export default totalMatchData
