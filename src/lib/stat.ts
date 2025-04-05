type PlayerStatsInput = {
  kill: number
  death: number
  assist: number
  damage: number
  gold: number
  teamTotalKills: number
  teamTotalDamage: number
  teamTotalGold: number
  gameDuration: string
}

type PlayerStatsOutput = {
  KDA: number
  KP: number
  DPM: number
  DMGPercent: number
  GPM: number
  GOLDPercent: number
}

function parseGameDuration(duration: string): number {
  const [minStr, secStr] = duration.split(':')
  const minutes = parseInt(minStr, 10)
  const seconds = parseInt(secStr, 10)
  return minutes + seconds / 60
}

function calculatePlayerStats(input: PlayerStatsInput): PlayerStatsOutput {
  const {
    kill,
    death,
    assist,
    damage,
    gold,
    teamTotalKills,
    teamTotalDamage,
    teamTotalGold,
    gameDuration,
  } = input

  const totalMinutes = parseGameDuration(gameDuration) || 1 // 최소 1분으로 보정

  const KDA = (kill + assist) / (death === 0 ? 1 : death)

  const KP = teamTotalKills > 0 ? ((kill + assist) / teamTotalKills) * 100 : 0

  const DPM = damage / totalMinutes

  const DMGPercent = teamTotalDamage > 0 ? (damage / teamTotalDamage) * 100 : 0

  const GPM = gold / totalMinutes

  const GOLDPercent = teamTotalGold > 0 ? (gold / teamTotalGold) * 100 : 0

  return {
    KDA: parseFloat(KDA.toFixed(2)),
    KP: parseFloat(KP.toFixed(2)),
    DPM: parseFloat(DPM.toFixed(2)),
    DMGPercent: parseFloat(DMGPercent.toFixed(2)),
    GPM: parseFloat(GPM.toFixed(2)),
    GOLDPercent: parseFloat(GOLDPercent.toFixed(2)),
  }
}

export { calculatePlayerStats }
