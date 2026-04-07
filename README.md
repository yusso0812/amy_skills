# Amy Skills

Claude Code에서 사용할 수 있는 AI 스킬 모음입니다.

## 스킬 목록

| 스킬 | 설명 |
|------|------|
| `/user-test` | URL, Figma 링크, 이미지, 텍스트를 입력하면 AI 퍼소나 유저 테스트를 수행하고 UX 리포트를 생성합니다 |
| `/persona-debate` | AI 페르소나 5명이 기획서를 다각도로 검증하는 구조화된 토론을 진행합니다 |

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
│       ├── user-test/
│       │   └── SKILL.md
│       └── persona-debate/
│           └── SKILL.md
└── ...
```

### 3. 실행

Claude Code에서 슬래시 커맨드로 실행합니다:

```
/user-test https://example.com
/persona-debate
```
