---
name: vibe-commander
description: "확정된 PRD + 와이어프레임 기반으로 크몽 UI 정책에 맞는 프론트엔드 목업을 생성하는 스킬."
user_invocable: true
---

# /vibe-commander

> 확정된 PRD + 와이어프레임 기반으로 크몽 UI 정책에 맞는 프론트엔드 목업을 생성.
> 백엔드 제외. UI 레이어만 구현.
> **반드시 `/Users/amy/.claude/commands/kmong-context.md`를 읽고 공통 원칙을 적용한다.**
> 기존 CLAUDE.md 지침(한국어, 계획 먼저, 크몽 컨텍스트) 전체 상속.

---

## 실행 방법
```
/vibe-commander [PRD 파일명 또는 아이디어명]
/vibe-commander --phase N       → 특정 Phase만 재실행 (이전 결과물 기반)
```

### 입력 파일 자동 감지
PRD + 와이어프레임 파일이 지정되지 않으면:
1. `/Users/amy/Documents/문서/아이디어/*_prd.md`, `*_wireframe.md` 에서 가장 최근 수정된 파일 쌍을 탐색
2. 발견 시 → `📄 최근 파일 감지: [PRD 파일명] + [와이어프레임 파일명] — 이 파일들을 사용할까요?` 확인
3. 미발견 시 → `/prd-commander`를 먼저 실행하도록 안내

---

## 기술 스택 (기본값)

| 항목 | 기본값 | 비고 |
|------|--------|------|
| 프레임워크 | Next.js (App Router) | Pages Router도 허용 |
| 스타일링 | Tailwind CSS | 크몽 토큰을 Tailwind 커스텀 값으로 매핑 |
| 언어 | TypeScript | strict mode |
| 패키지 매니저 | pnpm | npm/yarn도 허용 |

실행 시 사용자가 다른 스택을 지정하면 해당 스택으로 전환한다.

---

## 프로젝트 경로 규칙

### 신규 프로젝트
```
/Users/amy/Documents/prototypes/YYYYMMDD_아이디어명/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # 공통 컴포넌트
│   ├── features/      # 기능별 컴포넌트
│   └── styles/        # 글로벌 스타일, 토큰
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

### 기존 프로젝트에 추가
사용자가 기존 프로젝트 경로를 지정하면 해당 프로젝트 구조를 따른다.

---

## 크몽 UI 정책 (항상 적용)

아래 규칙은 모든 목업 생성 시 예외 없이 준수. 상세 토큰 값은 `kmong-context.md` 참조.

### 레이아웃
- 컨테이너: `max-width: 1168px` — `w-[1200px]` 절대 금지
- 반응형 기준: 모바일(375px) / 태블릿(768px) / 데스크탑(1168px)

### 이미지
- `next/image` 금지 → `<img>` 태그 사용

### 아이콘
- 기본 크기: 24x24px 그리드, Stroke/Round 스타일
- 사방 2px 여백 포함, 임의 변형 금지

### 컴포넌트 레포 참조
- 'kmong-frontend-story` 레포지토리를 최우선 참고
- 디자인 라이브러리: https://design-library.kmongcorp.com/

---

## Phase 1 — 작업 계획 수립

코드 작성 전 반드시 계획 먼저 제시.

```
⏳ Phase 1 — 작업 계획 수립 진행 중...

## 목업 작업 계획

### 기술 스택
- 프레임워크: [Next.js / 기타]
- 스타일링: [Tailwind CSS / 기타]
- 프로젝트 경로: [경로]

### 구현 화면 목록
| 순서 | 화면명 | 컴포넌트 수 | 상태 |
|------|--------|-----------|------|
| 1 | | | |

### 적용 크몽 컴포넌트
- 사용할 컴포넌트:
- 신규 구현 필요:

### Figma 연동
- [ ] Figma 와이어프레임 있음 → `get_design_context`로 디자인 참조
- [ ] Figma 없음 → 텍스트 와이어프레임 기반 구현

### 미포함 항목 (Out of Scope)
- API 연동
- 백엔드 로직
- 인증/권한

### 파일 구조
[생성할 파일 목록]
```

계획 승인 후 → 구현 시작.

---

## Phase 2 — 목업 구현

### Figma 연동 (선택)
prd-commander에서 Figma 와이어프레임이 생성된 경우:
1. `mcp__figma__get_design_context`로 디자인 컨텍스트 조회
2. 반환된 코드/스크린샷을 참조하여 구현
3. Code Connect 매핑이 있으면 기존 컴포넌트 활용

Figma 연결 실패 시 텍스트 와이어프레임 기반으로 구현. `ℹ️ Figma 미연결 — 텍스트 와이어프레임 기반 구현` 표기.

### 구현 원칙
- 더미 데이터로 UI 완성 (API 연동 없음)
- 크몽 컴포넌트 우선 사용, 없으면 토큰 직접 적용
- 모든 주요 상태 구현: Default / Loading / Error / Empty
- UX Writing: 크몽 기준 (`kmong-context.md` 참조)
- 접근성: `alt`, `aria-label` 기본 적용

### 구현 순서
1. 프로젝트 초기화 (scaffolding)
2. 레이아웃 & 컨테이너
3. 핵심 컴포넌트 (Hero, 주요 기능 영역)
4. 상태별 처리 (Loading, Error, Empty)
5. 인터랙션 (hover, focus, active)
6. 반응형 처리

---

## Phase 3 — 셀프 리뷰 (자동 검증)

구현 완료 후 **코드 분석으로 자동 검증**한다. 수동 체크리스트가 아닌 실제 검증.

### 자동 검증 항목

| 검증 항목 | 검증 방법 | 통과 기준 |
|----------|----------|----------|
| 컨테이너 1168px | Grep `w-[1200px]` | 0건 |
| 컬러 토큰 사용 | Grep 하드코딩 hex값 (`#[0-9a-f]{6}` 중 토큰에 없는 값) | 0건 |
| typo-* 클래스 | Grep `typo-36`, `typo-40` | 0건 (존재하지 않는 토큰) |
| next/image 미사용 | Grep `next/image` import | 0건 |
| 상태 구현 | 각 페이지에서 Loading/Error/Empty 컴포넌트 존재 여부 | 전체 통과 |
| UX Writing | 버튼 텍스트가 명사형(-하기/-기) 또는 동사형 2~5자인지 | 전체 통과 |
| 백엔드 의존성 | Grep `fetch(`, `axios`, API URL 패턴 | 0건 |

### 검증 결과 출력
```
## 크몽 UI 정책 자동 검증 결과
| 항목 | 결과 | 상세 |
|------|------|------|
| 컨테이너 1168px | ✅/❌ | |
| 컬러 토큰 | ✅/❌ | |
| typo-* 클래스 | ✅/❌ | |
| next/image 미사용 | ✅/❌ | |
| 상태 구현 | ✅/❌ | |
| UX Writing | ✅/❌ | |
| 백엔드 의존성 없음 | ✅/❌ | |
```

❌ 항목이 있으면 **즉시 자동 수정** 후 재검증. 수정 불가 항목은 사용자에게 알림.

---

## 완료 후 안내

```
## /vibe-commander 완료

### 실행 요약
- 기술 스택: [Next.js + Tailwind / 기타]
- 프로젝트 경로: [경로]
- 구현 화면: [목록]
- Figma 연동: ✅ 사용 / ℹ️ 미사용

### 자동 검증 결과
[검증 결과 표]

### 프리뷰
프로젝트를 로컬에서 확인하려면:
\`\`\`
cd [프로젝트 경로]
pnpm install && pnpm dev
\`\`\`
→ http://localhost:3000 에서 확인

### 미구현 (Out of Scope)
- API 연동, 백엔드 로직, 인증/권한

### 추가 작업
- 화면 추가 → /vibe-commander --phase 2 재실행
- PRD 수정 → /prd-commander 재실행
- 스프린트 계획 → /sprint 실행
```
