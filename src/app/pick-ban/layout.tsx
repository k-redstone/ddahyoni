import type { Metadata } from 'next'

import { getMetadata } from '@/constants/metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata({
    title: '팀별 픽&밴',
    description: '팀별 픽&밴 정보를 확인하세요',
    path: '/pick-ban',
  })
}

export default function MatchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
