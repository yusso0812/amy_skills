# Amy Skills

Claude Code에서 사용할 수 있는 AI 스킬 모음입니다.

## 스킬 목록

### PM 커맨더 파이프라인

아이디어 → PRD → 목업까지 순차적으로 연결되는 스킬 체인입니다.

| 스킬 | 설명 |
|------|------|
| `/idea-commander` | 크몽 PO 아이디어 스케치 에이전트. 중복 감지 → 인터뷰 → 경쟁사 조사 → 1Pager 작성 → 파티 토론까지 자율 실행합니다 |
| `/prd-commander` | 확정된 1Pager 기반으로 PRD → UI/UX 설계 → 와이어프레임을 자율 작성합니다 |
| `/vibe-commander` | 확정된 PRD + 와이어프레임 기반으로 크몽 UI 정책에 맞는 프론트엔드 목업을 생성합니다 |
| `/kmong-context` | 크몽 커맨더 공통 컨텍스트. 비즈니스 컨텍스트, UX Writing, 컬러 토큰, 디자인 원칙을 정의합니다 |

### 검증 & 리서치

| 스킬 | 설명 |
|------|------|
| `/persona-debate` | AI 페르소나 5명이 기획서를 다각도로 검증하는 구조화된 토론을 진행합니다 |
| `/user-test` | URL, Figma 링크, 이미지, 텍스트를 입력하면 AI 퍼소나 유저 테스트를 수행하고 UX 리포트를 생성합니다 |
| `/ab-insight` | 크몽 A/B 테스트 기록을 근거로 고민 지점에 대한 방향성을 제안합니다 |
| `/discover` | 아이디어부터 가정 매핑, 실험 설계까지 전체 프로덕트 디스커버리 사이클을 수행합니다 |

## 사용법

### 1. Claude Code 설치

[Claude Code](https://claude.ai/code)가 설치되어 있어야 합니다.

### 2. 스킬 파일 복사

프로젝트 루트에서 아래 명령어를 실행하세요:

```bash
mkdir -p .claude/skills
cd .claude/skills
git clone https://github.com/yusso0812/amy_skills.git temp
mv temp/skills/* .
rm -rf temp
```

완료되면 디렉토리 구조가 이렇게 됩니다:

```
your-project/
├── .claude/
│   └── skills/
│       ├── ab-insight/
│       │   └── SKILL.md
│       ├── discover/
│       │   └── SKILL.md
│       ├── idea-commander/
│       │   └── SKILL.md
│       ├── kmong-context/
│       │   └── SKILL.md
│       ├── persona-debate/
│       │   └── SKILL.md
│       ├── prd-commander/
│       │   └── SKILL.md
│       ├── user-test/
│       │   └── SKILL.md
│       └── vibe-commander/
│           └── SKILL.md
└── ...
```

### 3. 실행

Claude Code에서 슬래시 커맨드로 실행합니다:

```
# PM 커맨더 파이프라인 (순차 실행)
/idea-commander 전문가 매칭 자동화
/prd-commander
/vibe-commander

# 검증 & 리서치
/persona-debate
/user-test https://example.com
/ab-insight 검색 결과 정렬 순서를 바꾸면 전환율이 오를까?
/discover AI 기반 전문가 추천 시스템
```
