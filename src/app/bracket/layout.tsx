import type { Metadata } from 'next'

import { getMetadata } from '@/constants/metadata'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetadata({
    title: '플레이오프',
    description: '낙오전 플레이오프 일정과 결과를 확인하세요.',
    path: '/bracket',
  })
}

export default function BracketLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
