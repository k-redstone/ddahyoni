'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { teams } from '@/constants/teams'
import { analyzeMatches } from '@/lib/analyzeMatches'

export default function TeamStatsPage() {
  const [selectedTeamName, setSelectedTeamName] = useState(teams[0].teamName)
  const [activeTab, setActiveTab] = useState('picks')
  const teamStats = analyzeMatches()

  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-4 text-2xl font-bold">팀별 픽 & 밴</h1>

      <div className="mb-4 flex flex-wrap gap-3">
        <Select
          value={selectedTeamName}
          onValueChange={setSelectedTeamName}
        >
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Select Team" />
          </SelectTrigger>
          <SelectContent>
            {teams.map((team) => (
              <SelectItem
                key={team.id}
                value={team.teamName}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2">{team.teamName}</div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {teamStats.teams[selectedTeamName] ? (
        <Tabs
          defaultValue="picks"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="mb-4 w-full">
            <TabsTrigger
              value="picks"
              className="flex-1 cursor-pointer"
            >
              Most pick
            </TabsTrigger>
            <TabsTrigger
              value="bans"
              className="flex-1 cursor-pointer"
            >
              Targeted Bans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="picks">
            <Card>
              <CardContent className="p-3">
                <div className="space-y-3">
                  {teamStats.teams[selectedTeamName].picks.map((stat) => (
                    <div key={crypto.randomUUID()}>
                      <div className="mb-1 flex items-center gap-2">
                        <Image
                          src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${stat.champion}.png`}
                          alt={stat.champion}
                          width={24}
                          height={24}
                          className="rounded-md"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">
                              {stat.champion}
                            </span>
                            <span className="text-xs">{stat.picks} picks</span>
                          </div>
                          <div className="text-muted-foreground flex justify-between text-xs">
                            <span>Win Rate: {stat.winRate.toFixed(1)}%</span>
                            <span>
                              {stat.wins} W - {stat.picks - stat.wins} L
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bans">
            <Card>
              <CardContent className="p-3">
                <div className="space-y-3">
                  {teamStats.teams[selectedTeamName].bannedAgainst.map(
                    (stat) => {
                      const champion = stat.champion

                      if (!champion) return null

                      return (
                        <div key={crypto.randomUUID()}>
                          <div className="mb-1 flex items-center gap-2">
                            <div className="relative">
                              <Image
                                src={`https://ddragon.leagueoflegends.com/cdn/15.7.1/img/champion/${stat.champion}.png`}
                                alt={stat.champion}
                                width={24}
                                height={24}
                                className="rounded-md"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-destructive h-0.5 w-full rotate-45"></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium">
                                  {stat.champion}
                                </span>
                                <span className="text-xs">
                                  {stat.count} bans
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    },
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="text-center">
          <span>아직 경기결과가 없습니다.</span>
        </div>
      )}
    </div>
  )
}
