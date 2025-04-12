'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import totalMatchData from '@/constants/matchData'
import playoffMatchData from '@/constants/playoffData'
import { teams } from '@/constants/teams'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function Home() {
  const sortedTeams = [...teams].sort((a, b) => b.points - a.points)
  return (
    <div className="container mx-auto py-6">
      {/* 헤더 */}
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          따효니배 낙오전
        </h1>
        <Badge
          variant="outline"
          className="px-3 py-1 text-sm"
        >
          Current Stage:{' '}
          <span className="ml-1 font-bold">4/6 ~ 4/10 리그전</span>
        </Badge>
      </div>

      {/* 팀 소개 */}
      <Card className="mb-6">
        <CardContent className="pt-4">
          <h2 className="mb-3 text-xl font-bold">참가 팀 소개</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {teams.map((team) => (
              <div
                key={team.id}
                className="hover:bg-accent/20 rounded-lg border p-3 transition-colors"
              >
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="font-bold">{team.teamName}</h3>
                  <Link
                    href={`https://mul.live/${team.players.map((player) => player.hash).join('/')}`}
                    prefetch={false}
                    target="_blank"
                    className="text-blue-600"
                  >
                    <span className="text-xs">팀 멀티뷰</span>
                  </Link>
                </div>

                <div className="space-y-1">
                  {team.players.map((player) => (
                    <div
                      key={player.name}
                      className="flex items-center gap-1"
                    >
                      <span className="text-muted-foreground w-12 text-xs">
                        {player.role}:
                      </span>
                      <Image
                        src={player.profileUrl || ''}
                        alt={player.name}
                        width={24}
                        height={24}
                        className="rounded-md"
                        unoptimized
                      />
                      <span className="text-sm">{player.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 팀별 승점  */}
      <Card className="mb-6">
        <CardContent className="pt-4">
          <h2 className="mb-3 text-xl font-bold">팀별 승점 결과</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] text-center">순위</TableHead>
                <TableHead>팀</TableHead>
                <TableHead className="text-center">세트 승/패</TableHead>
                <TableHead className="text-center">승점</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedTeams.map((team, index) => (
                <TableRow
                  key={team.teamName}
                  className={`text-center ${index === 4 && `bg-gray-300`}`}
                >
                  <TableCell className="text-center font-medium">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {team.teamName}
                    </div>
                  </TableCell>
                  <TableCell>
                    {team.setWins}-{team.setLosses}
                  </TableCell>

                  <TableCell className="font-bold">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent>
          <h2 className="mb-3 text-xl font-bold">플레이오프 상황판</h2>
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[700px]">
              <div className="mb-8 grid grid-cols-3 gap-4">
                <div className="space-y-3">
                  <h3 className="mb-1 text-center text-sm font-medium">
                    Round 1
                  </h3>
                  <Card className="relative">
                    <CardContent className="p-2">
                      <div className="text-muted-foreground mb-1 text-xs">
                        Match #1 • 2025-04-12
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">남성</span>
                          </div>
                          <div className="text-sm font-bold">2</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">
                              상체파괴자
                            </span>
                          </div>
                          <div className="text-sm font-bold">0</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative">
                    <CardContent className="p-2">
                      <div className="text-muted-foreground mb-1 text-xs">
                        Match #2 • 2025-04-12
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">노코멘트</span>
                          </div>
                          <div className="text-sm font-bold">1</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">돼굴단</span>
                          </div>
                          <div className="text-sm font-bold">2</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-3">
                  <h3 className="mb-1 text-center text-sm font-medium">
                    Round 2
                  </h3>
                  <Card className="relative">
                    <CardContent className="p-2">
                      <div className="text-muted-foreground mb-1 text-xs">
                        Match #3 • 2025-04-12
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">남성</span>
                          </div>
                          <div className="text-sm font-bold">2</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">돼굴단</span>
                          </div>
                          <div className="text-sm font-bold">0</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="relative">
                    <CardContent className="p-2">
                      <div className="text-muted-foreground mb-1 text-xs">
                        Match #4 • 2025-04-12
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">
                              상체파괴자
                            </span>
                          </div>
                          <div className="text-sm font-bold">0</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">노코멘트</span>
                          </div>
                          <div className="text-sm font-bold">1</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-3">
                  <h3 className="mb-1 text-center text-sm font-medium">
                    Round 3
                  </h3>
                  <Card className="relative">
                    <CardContent className="p-2">
                      <div className="text-muted-foreground mb-1 text-xs">
                        Match #5 • 2025-04-13
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold">돼굴단</span>
                          </div>
                          <div className="text-sm font-bold">-</div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-muted-foreground text-xs font-bold">
                              패자조 승리팀
                            </span>
                          </div>
                          <div className="text-sm font-bold">-</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Finals */}
              <h2 className="mb-3 text-lg font-bold">Finals</h2>
              <div className="mx-auto max-w-xs">
                <Card className="border-primary relative">
                  <CardContent className="p-3">
                    <div className="mb-2 text-center">
                      <div className="text-sm font-bold">Grand Finals</div>
                      <div className="text-muted-foreground text-xs">
                        2025-04-13
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold">남성</span>
                        </div>
                        <div className="font-bold">-</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground text-xs font-bold">
                            최종 진출전 승리팀
                          </span>
                        </div>
                        <div className="font-bold">-</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 모든 매치기록 */}
      <Card>
        <CardContent className="pt-4">
          <h2 className="mb-3 text-xl font-bold">
            리그전 전체 경기 (총 10매치 - 매치당 3세트 필수 진행)
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {totalMatchData.map((match) => (
              <Link
                key={match.id}
                href={`/matches/${match.id}`}
                className="block"
                prefetch={false}
              >
                <div className="hover:bg-accent/50 rounded-lg border p-2 transition-colors">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-muted-foreground text-xs">
                      #{match.matchNumber} • {match.date}
                    </div>
                    <div className="text-xs">
                      {match.progress ? (
                        <span className="text-red-500">진행중</span>
                      ) : match.completed ? (
                        <span className="text-green-600">완료</span>
                      ) : (
                        <span className="text-blue-600">예정</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">
                        {match.blueTeam}
                      </span>
                    </div>
                    {match.completed && (
                      <div className="text-sm font-bold">
                        {match.blueTeamScore}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">
                        {match.redTeam}
                      </span>
                    </div>
                    {match.completed && (
                      <div className="text-sm font-bold">
                        {match.redTeamScore}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="mb-3 text-xl font-bold">
              플레이오프 경기 (BO3 / 결승 BO5)
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {playoffMatchData.map((match) => (
                <Link
                  key={match.id}
                  href={`/matches/${match.id}`}
                  className="block"
                >
                  <div className="hover:bg-accent/50 border-primary/30 rounded-lg border p-2 transition-colors">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-muted-foreground text-xs">
                        #{match.matchNumber} • {match.date}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Badge
                          variant="outline"
                          className="text-xs"
                        >
                          플레이오프
                        </Badge>
                        <div className="text-xs">
                          {match.progress ? (
                            <span className="text-red-500">진행중</span>
                          ) : match.completed ? (
                            <span className="text-green-600">완료</span>
                          ) : (
                            <span className="text-blue-600">예정</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {match.blueTeam}
                        </span>
                      </div>
                      {match.completed ? (
                        <div className="text-sm font-bold">
                          {match.blueTeamScore}
                        </div>
                      ) : (
                        <div className="text-xs">vs</div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {match.redTeam}
                        </span>
                      </div>
                      {match.completed ? (
                        <div className="text-sm font-bold">
                          {match.redTeamScore}
                        </div>
                      ) : (
                        <div className="text-xs">{match.date}</div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <GAPageView />
    </div>
  )
}
