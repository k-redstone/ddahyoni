'use client'

import { Card, CardContent } from '@/components/ui/card'
import { GAPageView } from '@/hooks/useGAPageViesw'

export default function BracketPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="mb-4 text-2xl font-bold">플레이오프</h1>

      <div className="overflow-x-auto pb-4">
        <div className="min-w-[700px]">
          <div className="mb-8 grid grid-cols-3 gap-4">
            <div className="space-y-3">
              <h3 className="mb-1 text-center text-sm font-medium">Round 1</h3>
              <Card className="relative">
                <CardContent className="p-2">
                  <div className="text-muted-foreground mb-1 text-xs">
                    Match #1 • 2025-04-12
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">남성</span>
                      </div>
                      <div className="text-sm font-bold">2</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">상체파괴자</span>
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
                        <span className="text-xs">노코멘트</span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">돼굴단</span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-3">
              <h3 className="mb-1 text-center text-sm font-medium">Round 2</h3>
              <Card className="relative">
                <CardContent className="p-2">
                  <div className="text-muted-foreground mb-1 text-xs">
                    Match #3 • 2025-04-12
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs">남성</span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground text-xs">
                          2경기 승리팀
                        </span>
                      </div>
                      <div className="text-sm font-bold">-</div>
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
                        <span className="text-xs">상체파괴자</span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground text-xs">
                          2경기 패배팀
                        </span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-3">
              <h3 className="mb-1 text-center text-sm font-medium">Round 3</h3>
              <Card className="relative">
                <CardContent className="p-2">
                  <div className="text-muted-foreground mb-1 text-xs">
                    Match #5 • 2025-04-13
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground text-xs">
                          승자조 패배팀
                        </span>
                      </div>
                      <div className="text-sm font-bold">-</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-muted-foreground text-xs">
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
                      <span className="text-muted-foreground text-xs">
                        승자조 승리팀
                      </span>
                    </div>
                    <div className="font-bold">-</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground text-xs">
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
      <GAPageView />
    </div>
  )
}
