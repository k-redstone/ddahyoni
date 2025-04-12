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
    redTeamScore: 1,
    date: '2025-04-12',
    completed: false,
    progress: true,
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
      // {
      //   id: 's35',
      //   setNumber: 3,
      //   winner: '',
      //   blueTeamBans: [],
      //   redTeamBans: [],
      //   blueTeamPicks: [],
      //   redTeamPicks: [],
      //   blueTeamKills: 13,
      //   redTeamKills: 30,
      //   blueTeamDeath: 30,
      //   redTeamDeath: 13,
      //   blueTeamAsist: 22,
      //   redTeamAsist: 66,
      //   blueTeamGold: 55040,
      //   redTeamGold: 65356,
      //   duration: '',
      //   blueTeam: [
      //     {
      //       name: '인섹',
      //       champion: 'Olaf',
      //       role: 'TOP',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '고수달',
      //       champion: 'XinZhao',
      //       role: 'JG',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '인간젤리',
      //       champion: 'Malzahar',
      //       role: 'MID',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '뱅',
      //       champion: 'Kalista',
      //       role: 'ADC',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '던',
      //       champion: 'Leona',
      //       role: 'SUP',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //   ],
      //   redTeam: [
      //     {
      //       name: '강소연',
      //       champion: 'Yorick',
      //       role: 'TOP',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '네클릿',
      //       champion: 'Vi',
      //       role: 'JG',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '큐베',
      //       champion: 'Vladimir',
      //       role: 'MID',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '크캣',
      //       champion: 'Ashe',
      //       role: 'ADC',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //     {
      //       name: '루루카',
      //       champion: 'Seraphine',
      //       role: 'SUP',
      //       kill: 0,
      //       death: 0,
      //       assist: 0,
      //       damage: 0,
      //       gold: 0,
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 'm13',
    matchNumber: 13,
    blueTeam: '1경기 승리팀',
    redTeam: '2경기 승리팀',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-12',
    completed: false,
    progress: false,
    stage: '플레이오프',
    sets: [],
  },
  {
    id: 'm14',
    matchNumber: 14,
    blueTeam: '1경기 패배팀',
    redTeam: '2경기 패배팀',
    blueTeamScore: 0,
    redTeamScore: 0,
    date: '2025-04-12',
    completed: false,
    progress: false,
    stage: '플레이오프',
    sets: [],
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
