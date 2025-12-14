## Running App (Next.js 15) - 프로젝트 개요

러닝 대회 관리용 웹앱입니다. Next.js App Router 기반으로 레이스, 러너, 결과, 리더보드, 일정 라우트를 제공합니다. **Feature-Sliced Design (FSD)** 아키텍처를 적용하여 레이어별로 명확하게 분리했으며, Tailwind CSS v4 인라인 테마 토큰으로 px 기반 spacing/size 유틸을 사용합니다.

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

## 프로젝트 구조 (Feature-Sliced Design)

```text
./
├─ public/                     # 정적 에셋 (SVG 등)
├─ src/
│  ├─ app/                     # App Router 라우트 (Next.js)
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
│  │  ├─ layout.tsx            # 루트 레이아웃
│  │  └─ page.tsx              # 홈 페이지
│  │
│  ├─ shared/                  # 공유 리소스 레이어
│  │  ├─ ui/                   # 재사용 UI 컴포넌트
│  │  │  ├─ Button/index.tsx
│  │  │  └─ Card/index.tsx
│  │  ├─ lib/                  # 공통 라이브러리/유틸
│  │  │  ├─ api/http.ts        # fetch 래퍼 등
│  │  │  ├─ constants/app.ts   # 앱 상수
│  │  │  └─ helpers/date.ts    # 날짜 포맷 등 헬퍼
│  │  ├─ types/                # 타입 정의
│  │  │  ├─ api.types.ts
│  │  │  ├─ common.types.ts
│  │  │  └─ running.types.ts   # Race/Runner/Result 타입
│  │  ├─ constants/            # 상수
│  │  │  └─ Icon.tsx
│  │  ├─ styles/               # 스타일
│  │  │  └─ globals.css        # Tailwind v4 및 인라인 테마 토큰
│  │  ├─ hooks/                # (추가 예정) 커스텀 훅
│  │  └─ context/             # (추가 예정) 전역 컨텍스트
│  │
│  ├─ widgets/                 # 독립적인 UI 블록 레이어
│  │  ├─ header/Header.tsx     # 헤더 위젯
│  │  ├─ footer/Footer.tsx     # 푸터 위젯
│  │  ├─ main/Main.tsx         # 메인 컨테이너 위젯
│  │  └─ banner/MainBanner.tsx # 배너 위젯
│  │
│  ├─ features/                # 비즈니스 기능 레이어
│  │  ├─ filter/               # 필터 기능
│  │  │  ├─ MainFilter.tsx
│  │  │  ├─ SubFilter.tsx
│  │  │  └─ MainFilterContainer.tsx
│  │  ├─ home/                 # 홈 기능
│  │  │  ├─ MainCardContainer.tsx
│  │  │  └─ RaceList.tsx
│  │  ├─ races/                # 레이스 기능
│  │  │  └─ RaceList.tsx
│  │  ├─ results/              # 결과 기능
│  │  │  └─ ResultsTable.tsx
│  │  ├─ runners/              # 러너 기능
│  │  │  └─ RunnerList.tsx
│  │  └─ google/               # Google 기능
│  │     └─ GoogleAdSenseProvider.tsx
│  │
│  └─ entities/                # 비즈니스 엔티티 레이어 (추가 예정)
│     # Race, Runner, Result 등의 엔티티 모델
│
├─ tailwind.config.ts          # Tailwind v4 명시적 설정(콘텐츠 경로)
├─ postcss.config.mjs          # @tailwindcss/postcss 플러그인
├─ tsconfig.json               # 경로 alias 설정
├─ eslint.config.mjs
└─ next.config.ts
```

### FSD 레이어 설명

- **app/** - Next.js App Router 라우트 및 페이지
- **shared/** - 프로젝트 전역에서 공유되는 리소스 (UI 컴포넌트, 유틸리티, 타입, 상수 등)
- **widgets/** - 독립적으로 동작하는 복합 UI 블록 (Header, Footer, Banner 등)
- **features/** - 비즈니스 기능 단위 컴포넌트 (Filter, Home, Races 등)
- **entities/** - 비즈니스 엔티티 모델 (추가 예정)

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

### FSD 아키텍처 원칙
- **shared/** - 프로젝트 전역에서 재사용되는 순수한 UI 컴포넌트 및 유틸리티
- **widgets/** - 여러 features를 조합한 독립적인 UI 블록
- **features/** - 특정 비즈니스 기능을 구현하는 컴포넌트
- **entities/** - 비즈니스 도메인 엔티티 모델 (추가 예정)

### 코딩 규칙
- 기본 내보내기(default export)는 화살표 함수 컴포넌트 사용
  - 예: `const Page = () => { ... }; export default Page;`
- 레이어 간 의존성 규칙 준수 (상위 레이어는 하위 레이어만 참조 가능)
  - `features` → `shared`, `entities`
  - `widgets` → `features`, `shared`, `entities`
  - `app` → 모든 레이어 참조 가능

## 스타일 가이드 (Tailwind v4)
- `src/styles/globals.css`의 `@theme inline` 토큰으로 px 기반 스케일 정의
  - spacing: `p-1`, `m-1`, `gap-1` → 1px (2, 3, 4, … 동일)
  - size: `w-10`, `h-10`, `min-w-10`, `max-h-10` → 10px
- 필요 시 토큰 확장(예: 72, 80, 96px 등) 가능

## 개발 메모
- 경로 별칭 (`tsconfig.json` 설정):
  - `@/*` → `src/*`
  - `@/shared/*` → `src/shared/*`
  - `@/entities/*` → `src/entities/*`
  - `@/features/*` → `src/features/*`
  - `@/widgets/*` → `src/widgets/*`
- 폰트: `next/font`(Geist) 사용, 레이아웃에서 변수 적용
- ESLint/TypeScript 엄격 모드 유지
- FSD 레이어 간 의존성 규칙 준수

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
- **entities 레이어 구축**: Race, Runner, Result 등의 엔티티 모델 정의
- **컨텍스트 추가**: `shared/context`에 ThemeProvider, Auth 등 추가
- **실제 데이터 연동**: API 연동, 서버 액션, 캐시 전략 구현
- **페이지에 feature 컴포넌트 연결**: 각 페이지에 해당하는 features 연결 및 UI/상태 고도화
- **커스텀 훅 추가**: `shared/hooks`에 공통 훅 구현
