import totalMatchData from '@/constants/matchData'
import playoffMatchData from '@/constants/playoffData'

type TeamAnalysis = {
  pickStats: Record<string, ChampionStats>
  bannedAgainst: Record<string, number>
}

type ChampionStats = {
  picks: number
  wins: number
}

type Output = {
  teams: {
    [teamName: string]: {
      picks: {
        champion: string
        picks: number
        wins: number
        winRate: number
      }[]
      bannedAgainst: {
        champion: string
        count: number
      }[]
    }
  }
}

function analyzeMatches(): Output {
  const teamStats: Record<string, TeamAnalysis> = {}
  const totalData = [...totalMatchData, ...playoffMatchData]
  totalData.forEach((match) => {
    match.sets.forEach((set) => {
      const blueTeam = match.blueTeam
      const redTeam = match.redTeam

      // 초기화
      if (!teamStats[blueTeam]) {
        teamStats[blueTeam] = { pickStats: {}, bannedAgainst: {} }
      }
      if (!teamStats[redTeam]) {
        teamStats[redTeam] = { pickStats: {}, bannedAgainst: {} }
      }

      // 픽 처리
      set.blueTeam.forEach((player) => {
        const champ = player.champion
        const stats = teamStats[blueTeam].pickStats[champ] ?? {
          picks: 0,
          wins: 0,
        }
        stats.picks += 1
        if (set.winner === blueTeam) stats.wins += 1
        teamStats[blueTeam].pickStats[champ] = stats
      })

      set.redTeam.forEach((player) => {
        const champ = player.champion
        const stats = teamStats[redTeam].pickStats[champ] ?? {
          picks: 0,
          wins: 0,
        }
        stats.picks += 1
        if (set.winner === redTeam) stats.wins += 1
        teamStats[redTeam].pickStats[champ] = stats
      })

      // 밴당한 챔피언 처리
      set.redTeamBans.forEach((champ) => {
        if (!champ) return
        teamStats[blueTeam].bannedAgainst[champ] =
          (teamStats[blueTeam].bannedAgainst[champ] ?? 0) + 1
      })
      set.blueTeamBans.forEach((champ) => {
        if (!champ) return
        teamStats[redTeam].bannedAgainst[champ] =
          (teamStats[redTeam].bannedAgainst[champ] ?? 0) + 1
      })
    })
  })

  // 프론트엔드용 포맷
  const formatted: Output = { teams: {} }

  Object.entries(teamStats).forEach(([teamName, teamData]) => {
    const picks = Object.entries(teamData.pickStats).map(([champ, stat]) => ({
      champion: champ,
      picks: stat.picks,
      wins: stat.wins,
      winRate: Number(((stat.wins / stat.picks) * 100).toFixed(2)),
    }))

    const bannedAgainst = Object.entries(teamData.bannedAgainst).map(
      ([champ, count]) => ({
        champion: champ,
        count,
      }),
    )

    formatted.teams[teamName] = {
      picks: picks.sort((a, b) => b.picks - a.picks),
      bannedAgainst: bannedAgainst.sort((a, b) => b.count - a.count),
    }
  })

  return formatted
}

export { analyzeMatches }
