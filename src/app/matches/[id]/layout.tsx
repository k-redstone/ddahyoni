import type { Metadata } from 'next'

import { getMetadata } from '@/constants/metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata({
    title: '매치 상세 기록',
    description: '낙오전에서 진행한 매치 상세기록을 확인하세요.',
    path: '/matches',
  })
}

export default function MatchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
