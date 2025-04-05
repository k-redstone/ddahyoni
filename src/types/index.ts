export const roleKeys = {
  TOP: 'TOP',
  JG: 'JG',
  MID: 'MID',
  ADC: 'ADC',
  SUP: 'SUP',
} as const

interface IPlayer {
  name: string
  role: RoleUnion
  profileUrl: string
}

interface ITeam {
  id: string
  teamName: string
  matchWins: number
  matchLosses: number
  setWins: number
  setLosses: number
  points: number
  players: IPlayer[]
}

interface ISet {
  id: string
  setNumber: number
  winner: string
  blueTeamBans: string[]
  redTeamBans: string[]
  blueTeamPicks: string[]
  redTeamPicks: string[]
  blueTeamKills: number
  redTeamKills: number
  blueTeamDeath: number
  redTeamDeath: number
  blueTeamAsist: number
  redTeamAsist: number
  blueTeamGold: number
  redTeamGold: number
  duration: string
  blueTeam: IPlayerStat[]
  redTeam: IPlayerStat[]
}

interface IPlayerStat {
  champion: string
  role: RoleUnion
  name: string
  kill: number
  death: number
  assist: number
  damage: number
  gold: number
}

interface IMatch {
  id: string
  matchNumber: number
  blueTeam: string
  redTeam: string
  blueTeamScore: number
  redTeamScore: number
  date: string
  completed: boolean
  stage: string
  sets: ISet[]
}

type RoleUnion = (typeof roleKeys)[keyof typeof roleKeys]

export type { IPlayer, ITeam, RoleUnion, IMatch }
