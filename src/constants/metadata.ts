import { Metadata } from 'next'

interface IGenerateMetadataProps {
  title?: string
  description?: string
  path?: string
}

export const META = {
  title: '낙오전',
  siteName: 'saebaldong.kr',
  description: '낙오전 경기 기록 일정과 기록을 확인하세요.',
  keyword: [
    '낙오전',
    '따효니',
    '롤',
    '치지직',
    '유튜브',
    '통계',
    '스트리머',
    '롤내전',
  ],
  url: 'https://lol.saebaldong.kr',
  ogImage: '/opengraph-image.png',
} as const

export const getMetadata = (metadataProps?: IGenerateMetadataProps) => {
  const { title, description, path } = metadataProps || {}

  const TITLE = title ? `낙오전 | ${title}` : META.title
  const DESCRIPTION = description || META.description
  const PAGE_URL = path ? path : ''

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    robots: {
      index: true,
      follow: true,
    },

    // og
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: META.ogImage,
      },
    },

    // 트위터
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: META.ogImage,
      },
    },
  }

  return metadata
}
