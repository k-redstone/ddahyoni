import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import totalMatchData from '@/constants/matchData'
import playoffMatchData from '@/constants/playoffData'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function MatchesPage() {
  const matchesByDate = [...totalMatchData, ...playoffMatchData].reduce(
    (acc, match) => {
      if (!acc[match.date]) {
        acc[match.date] = []
      }
      acc[match.date].push(match)
      return acc
    },
    {} as Record<string, typeof totalMatchData>,
  )

  const sortedDates = Object.keys(matchesByDate).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  )

  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-4 text-2xl font-bold">모든 매치 기록</h1>

      <div className="space-y-6">
        {sortedDates.map((date) => (
          <div key={date}>
            <h2 className="mb-3 text-lg font-medium">{date}</h2>
            <div className="grid gap-3">
              {matchesByDate[date].map((match) => (
                <Link
                  key={match.id}
                  href={`/matches/${match.id}`}
                  className="block"
                >
                  <Card className="hover:bg-accent/10 transition-colors">
                    <CardContent className="p-3">
                      <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">
                            Match #{match.matchNumber}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs"
                          >
                            {match.stage}
                          </Badge>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {match.date}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex w-40 items-center gap-2">
                          <div>
                            <div className="text-sm font-medium">
                              {match.blueTeam}
                            </div>
                            {match.completed && (
                              <div className="text-lg font-bold">
                                {match.blueTeamScore}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {match.completed ? 'Final' : 'Upcoming'}
                        </div>
                        <div className="flex w-40 items-center justify-end gap-2">
                          <div className="text-right">
                            <div className="text-sm font-medium">
                              {match.redTeam}
                            </div>
                            {match.completed && (
                              <div className="text-lg font-bold">
                                {match.redTeamScore}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <GAPageView />
    </div>
  )
}
