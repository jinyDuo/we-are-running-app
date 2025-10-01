## Running App (Next.js 15) - 프로젝트 개요

러닝 대회 관리용 웹앱입니다. Next.js App Router 기반으로 레이스, 러너, 결과, 리더보드, 일정 라우트를 제공합니다. 컴포넌트/유틸/타입을 기능 단위로 분리했으며, Tailwind CSS v4 인라인 테마 토큰으로 px 기반 spacing/size 유틸을 사용합니다.

## 실행 방법

npm run dev
# 또는
yarn dev

개발 서버: http://localhost:3000

## 기술 스택
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4 (@tailwindcss/postcss 플러그인)
- ESLint 9

## 프로젝트 구조

```text
./
├─ public/                     # 정적 에셋 (SVG 등)
├─ src/
│  ├─ app/                     # App Router 라우트
│  │  ├─ api/                  # API 라우트 핸들러 (route.ts)
│  │  │  ├─ races/route.ts
│  │  │  ├─ runners/route.ts
│  │  │  └─ results/route.ts
│  │  ├─ races/
│  │  │  ├─ page.tsx           # /races
│  │  │  └─ [raceId]/page.tsx  # /races/:raceId
│  │  ├─ runners/
│  │  │  ├─ page.tsx           # /runners
│  │  │  └─ [runnerId]/page.tsx# /runners/:runnerId
│  │  ├─ results/page.tsx      # /results
│  │  ├─ leaderboard/page.tsx  # /leaderboard
│  │  ├─ schedule/page.tsx     # /schedule
│  │  ├─ layout.tsx            # 루트 레이아웃
│  │  └─ page.tsx              # 홈 (Header/Main/Footer 구성)
│  │
│  ├─ components/
│  │  ├─ layout/               # 레이아웃 구성 요소
│  │  │  ├─ Header.tsx
│  │  │  ├─ Main.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ ui/                   # 재사용 UI 컴포넌트
│  │  │  ├─ Button/index.tsx
│  │  │  └─ Card/index.tsx
│  │  └─ features/             # 기능 단위 컴포넌트
│  │     ├─ races/RaceList.tsx
│  │     ├─ runners/RunnerList.tsx
│  │     └─ results/ResultsTable.tsx
│  │
│  ├─ lib/                     # 공통 라이브러리/유틸
│  │  ├─ api/http.ts           # fetch 래퍼 등
│  │  ├─ constants/app.ts      # 앱 상수
│  │  └─ helpers/date.ts       # 날짜 포맷 등 헬퍼
│  │
│  ├─ styles/
│  │  └─ globals.css           # Tailwind v4 및 인라인 테마 토큰
│  │
│  ├─ types/                   # 타입 정의
│  │  ├─ api.types.ts
│  │  ├─ common.types.ts
│  │  └─ running.types.ts      # Race/Runner/Result 타입
│  │
│  ├─ context/                 # (추가 예정) 전역 컨텍스트
│  └─ hooks/                   # (추가 예정) 커스텀 훅
│
├─ tailwind.config.ts          # Tailwind v4 명시적 설정(콘텐츠 경로)
├─ postcss.config.mjs          # @tailwindcss/postcss 플러그인
├─ tsconfig.json               # 경로 alias(@/*) 등
├─ eslint.config.mjs
└─ next.config.ts
```

## 라우팅 설명
- /races: 레이스 목록/탐색
- /races/[raceId]: 개별 레이스 상세
- /runners: 러너 목록/탐색
- /runners/[runnerId]: 개별 러너 상세
- /results: 결과 리스트/검색
- /leaderboard: 리더보드
- /schedule: 일정

API 라우트 (간단 GET 예시)
- /api/races
- /api/runners
- /api/results

## 컴포넌트 규칙
- 기본 내보내기(default export)는 화살표 함수 컴포넌트 사용
  - 예: `const Page = () => { ... }; export default Page;`
- 기능별(`features/`)과 UI 재사용(`ui/`) 컴포넌트 분리
- 레이아웃 구성 요소는 `components/layout` 보관

## 스타일 가이드 (Tailwind v4)
- `src/styles/globals.css`의 `@theme inline` 토큰으로 px 기반 스케일 정의
  - spacing: `p-1`, `m-1`, `gap-1` → 1px (2, 3, 4, … 동일)
  - size: `w-10`, `h-10`, `min-w-10`, `max-h-10` → 10px
- 필요 시 토큰 확장(예: 72, 80, 96px 등) 가능

## 개발 메모
- 경로 별칭: `@/*` → `src/*` (`tsconfig.json` 설정)
- 폰트: `next/font`(Geist) 사용, 레이아웃에서 변수 적용
- ESLint/TypeScript 엄격 모드 유지

## 스크립트
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start",
  "lint": "eslint"
}
```

## 향후 작업 제안
- 컨텍스트(예: ThemeProvider, Auth 등) 추가
- 실제 데이터 연동(API 연동, 서버 액션, 캐시 전략)
- 페이지에 feature 컴포넌트 연결 및 UI/상태 고도화
