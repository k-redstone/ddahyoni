import { Menu } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <span className="inline-block font-bold">따효니배 낙오전</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            메인
          </Link>
          <Link
            href="/matches"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            매치기록
          </Link>
          {/* <Link
            href="/players"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Players
          </Link> */}
          {/* <Link
            href="/team-stats"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            Team Stats
          </Link> */}
          <Link
            href="/bracket"
            className="hover:text-primary text-sm font-medium transition-colors"
          >
            플레이오프
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 md:hidden"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-4">
                <Link
                  href="/"
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  메인
                </Link>

                <Link
                  href="/matches"
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  매치기록
                </Link>
                {/* <Link
                  href="/players"
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  Players
                </Link>
                <Link
                  href="/team-stats"
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  Team Stats
                </Link> */}
                <Link
                  href="/bracket"
                  className="hover:text-primary text-sm font-medium transition-colors"
                >
                  플레이오프
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
