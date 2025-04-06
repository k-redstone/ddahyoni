'use client'

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { use } from 'react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import totalMatchData from '@/constants/matchData'
import { GAPageView } from '@/hooks/useGAPageViesw'

type Params = Promise<{ matchId: string }>

export default function MatchDetailPage(props: { params: Params }) {
  const params = use(props.params)
  const match = totalMatchData.find((data) => data.id === params.matchId)

  if (!match) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6">
      {/* Match Header */}
      <Card className="mb-4">
        <CardContent className="pt-4">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <div className="text-muted-foreground mb-1 text-sm">
                Match #{match.matchNumber} • {match.date}
              </div>
              <h1 className="text-xl font-bold">
                {match.blueTeam} vs {match.redTeam}
              </h1>
            </div>
            <Badge variant="outline">{match.stage}</Badge>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <div className="font-medium">{match.blueTeam}</div>
                <div className="text-2xl font-bold">{match.blueTeamScore}</div>
              </div>
            </div>
            <div className="text-muted-foreground text-sm">
              {match.completed ? 'Final' : 'Upcoming'}
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-medium">{match.redTeam}</div>
                <div className="text-2xl font-bold">{match.redTeamScore}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* All Sets at once */}
      {match.sets.length > 0 ? (
        <div className="space-y-4">
          {match.sets.map((set) => {
            return (
              <Card key={crypto.randomUUID()}>
                <CardContent className="pt-4">
                  <h2 className="mb-3 text-lg font-bold">
                    Set {set.setNumber}
                  </h2>

                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Left column - Picks, Bans, and Result */}
                    <div className="">
                      {/* Result */}
                      <div className="bg-accent/30 mb-4 rounded-md p-2">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">Won: {set.winner} </div>
                        </div>
                      </div>

                      {/* Team A Picks & Bans */}
                      <div className="mb-3">
                        <div className="mb-1 flex items-center gap-1">
                          <span className="text-sm font-medium">
                            {match.blueTeam}
                          </span>
                        </div>

                        <div className="mb-2">
                          <div className="text-muted-foreground mb-1 text-xs">
                            Bans
                          </div>
                          <div className="flex gap-1">
                            {set.blueTeamBans.map((champName) => (
                              <div
                                key={crypto.randomUUID()}
                                className="relative"
                              >
                                {champName !== '' && (
                                  <Image
                                    src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${champName}.png`}
                                    alt={champName}
                                    width={24}
                                    height={24}
                                    className="rounded-md opacity-80"
                                  />
                                )}

                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-destructive h-0.5 w-full rotate-45"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-muted-foreground mb-1 text-xs">
                            Picks
                          </div>
                          <div className="flex gap-1">
                            {set.blueTeamPicks.map((champName) => (
                              <Image
                                key={crypto.randomUUID()}
                                src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${champName}.png`}
                                alt={champName}
                                width={24}
                                height={24}
                                className="rounded-md"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Team B Picks & Bans */}
                      <div>
                        <div className="mb-1 flex items-center gap-1">
                          <span className="text-sm font-medium">
                            {match.redTeam}
                          </span>
                        </div>

                        <div className="mb-2">
                          <div className="text-muted-foreground mb-1 text-xs">
                            Bans
                          </div>
                          <div className="flex gap-1">
                            {set.redTeamBans.map((champName) => (
                              <div
                                key={crypto.randomUUID()}
                                className="relative"
                              >
                                {champName !== '' && (
                                  <Image
                                    src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${champName}.png`}
                                    alt={champName}
                                    width={24}
                                    height={24}
                                    className="rounded-md opacity-80"
                                  />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-destructive h-0.5 w-full rotate-45"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-muted-foreground mb-1 text-xs">
                            Picks
                          </div>
                          <div className="flex gap-1">
                            {set.redTeamPicks.map((champName) => (
                              <Image
                                key={crypto.randomUUID()}
                                src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${champName}.png`}
                                alt={champName}
                                width={24}
                                height={24}
                                className="rounded-md"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right column - Stats & MVP */}
                    <div className="">
                      {/* Stats */}
                      <div className="mb-4">
                        <div className="mb-2 text-sm font-medium">
                          Game Stats
                        </div>
                        {/* Stats Header */}
                        <div className="text-muted-foreground mb-1 grid grid-cols-5 gap-1 text-xs">
                          <div>Player</div>
                          <div className="text-center">Pick</div>
                          <div className="text-center">KDA</div>
                          <div className="text-center">Damage</div>
                          <div className="text-center">Gold</div>
                        </div>

                        {/* Team A Players */}
                        <div className="mb-2">
                          <div className="mb-1 flex items-center gap-1">
                            {/* <Image
                              src={teamA.logo || '/placeholder.svg'}
                              alt={teamA.name}
                              width={12}
                              height={12}
                              className="rounded-sm"
                            /> */}
                            <span className="text-xs font-medium">
                              {match.blueTeam}
                            </span>
                          </div>

                          {set.blueTeam.map((player) => {
                            return (
                              <div
                                key={crypto.randomUUID()}
                                className="grid grid-cols-5 gap-1 border-b py-0.5 text-xs"
                              >
                                <div className="flex items-center gap-1 overflow-hidden">
                                  <span className="text-muted-foreground">
                                    {player.role}
                                  </span>
                                  <span>{player.name}</span>
                                </div>
                                <div className="flex justify-center">
                                  <Image
                                    src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${player.champion}.png`}
                                    alt={player.champion}
                                    width={24}
                                    height={24}
                                    className="rounded-md"
                                  />
                                </div>
                                <div className="text-center">
                                  {`${player.kill} / ${player.death} / ${player.assist}`}
                                </div>
                                <div className="text-center">
                                  {player.damage}
                                </div>
                                <div className="text-center">{player.gold}</div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Team B Players */}
                        <div>
                          <div className="mb-1 flex items-center gap-1">
                            {/* <Image
                              src={teamB.logo || '/placeholder.svg'}
                              alt={teamB.name}
                              width={12}
                              height={12}
                              className="rounded-sm"
                            /> */}
                            <span className="text-xs font-medium">
                              {match.redTeam}
                            </span>
                          </div>

                          {set.redTeam.map((player) => (
                            <div
                              key={crypto.randomUUID()}
                              className="grid grid-cols-5 gap-1 border-b py-0.5 text-xs"
                            >
                              <div className="flex items-center gap-1 overflow-hidden">
                                <span className="text-muted-foreground">
                                  {player.role}
                                </span>
                                <span>{player.name}</span>
                              </div>
                              <div className="flex justify-center">
                                <Image
                                  src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${player.champion}.png`}
                                  alt={player.champion}
                                  width={24}
                                  height={24}
                                  className="rounded-md"
                                />
                              </div>
                              <div className="text-center">
                                {`${player.kill} / ${player.death} / ${player.assist}`}
                              </div>
                              <div className="text-center">{player.damage}</div>
                              <div className="text-center">{player.gold}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-6 text-center">
            <p className="text-muted-foreground">
              아직 경기가 진행되지 않었거나, 데이터가 반영이 안되었습니다.
            </p>
          </CardContent>
        </Card>
      )}
      <GAPageView />
    </div>
  )
}
