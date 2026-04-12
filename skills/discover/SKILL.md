---
name: discover
description: "아이디어부터 가정 매핑, 실험 설계까지 전체 프로덕트 디스커버리 사이클을 수행하는 스킬."
user_invocable: true
---

# /discover

> Full product discovery cycle — from ideation through assumption mapping to experiment design.
> Works for both **existing products** (continuous discovery) and **new products** (initial discovery).
> Each phase has a checkpoint before proceeding unless the user explicitly asks for auto-run.

---

## 실행 방법

```
/discover Smart notification system for our project management tool
/discover New product: AI writing assistant for non-native speakers
/discover                    # asks what you're discovering
```

---

## 전체 워크플로우

```
Step 1 (Context) → Step 2 (Brainstorm) → Step 3 (Identify Assumptions)
→ Step 4 (Prioritize Assumptions) → Step 5 (Design Experiments)
→ Step 6 (Discovery Plan) → Step 7 (Next Steps)
```

예상 소요 시간: **15~30분**. 시작 시 사용자에게 안내한다.

---

## Step 1 — Discovery Context 파악

아래를 확인한다:

1. **탐색 대상**: 제품 아이디어, 기능 영역, 기회 공간
2. **기존에 아는 것**: 사전 조사, 고객 피드백, 데이터
3. **이 디스커버리의 목적**: 무엇을 결정하기 위한 것인가 (build/kill, 우선순위, 피벗)

제품 단계를 판별한다:
- **Existing product** — 실제 유저가 있는 제품의 지속적 디스커버리
- **New product** — 검증되지 않은 개념에 대한 초기 디스커버리

파일(리서치, PRD, 인터뷰 트랜스크립트, 데이터), 링크, 또는 대화로부터 컨텍스트를 수용한다.

**체크포인트**: 컨텍스트를 요약하여 확인받은 후 Step 2로 진행.

---

## Step 2 — 아이디어 브레인스톰 (Divergent Phase)

제품 단계에 따라 아래 지침을 적용한다.

### Existing Product — 아이디어 브레인스톰

**컨텍스트**: 실제 유저가 있는 기존 제품의 지속적 디스커버리. Teresa Torres의 *Continuous Discovery Habits* 기반.

**Product Trio** 관점에서 각 5개씩, 총 15개의 아이디어를 생성한다:

- **Product Manager**: 비즈니스 가치, 전략적 정렬, 고객 임팩트 중심
- **Product Designer**: 사용자 경험, 사용성, 딜라이트 중심
- **Software Engineer**: 기술적 가능성, 데이터 활용, 확장 가능한 솔루션 중심

이후 상위 10개를 아래 기준으로 우선순위를 정한다:
- 목적과의 전략적 정렬
- 원하는 결과에 대한 잠재적 임팩트
- 실현 가능성과 투입 노력
- 기존 솔루션과의 차별성

각 우선순위 아이디어에 대해 제공한다:
- 명확한 이름과 한 줄 설명
- 선정 이유
- 검증해야 할 핵심 가정

### New Product — 아이디어 브레인스톰

**컨텍스트**: 검증되지 않은 신제품 초기 디스커버리. 핵심 가치 전달, 빠른 검증, 차별화 가능성에 가중치를 둔다.

**Product Trio** 관점에서 각 5개씩, 총 15개의 기능 아이디어를 생성한다:

- **Product Manager**: 시장 적합성, 가치 창출, 경쟁 우위 중심
- **Product Designer**: 사용자 경험, 온보딩, 참여도 중심
- **Software Engineer**: 기술 혁신, API 통합, 플랫폼 역량 중심

이후 신제품 기준으로 상위 10개 우선순위:
- 핵심 문제를 해결하는가?
- 빠르게 검증할 수 있는가?
- 차별화 가능성이 있는가?

**체크포인트**: "여기 10개의 아이디어가 있습니다. 스트레스 테스트할 것을 3~5개 골라주세요. 또는 전부 진행해도 됩니다."

---

## Step 3 — 가정 식별 (Critical Thinking Phase)

선택된 각 아이디어에 대해 제품 단계에 따른 분석을 수행한다.

### Existing Product — 가정 식별

PM, 디자이너, 엔지니어 관점에서 이 기능이 실패할 수 있는 이유를 생각한다.

**4가지 리스크 영역**에 걸쳐 가정을 식별한다:

- **Value**: 고객에게 가치를 창출할 것인가? 실제 문제를 해결하는가?
- **Usability**: 유저가 사용하는 방법을 알아낼 것인가? 학습 곡선이 허용 가능한가?
- **Viability**: 마케팅, 영업, 재무, 법무가 지원할 수 있는가?
- **Feasibility**: 기존 기술로 만들 수 있는가? 통합 리스크가 있는가?

각 가정에 대해:
- 무엇이 잘못될 수 있는지
- 신뢰도 (High/Medium/Low)
- 제안된 테스트 방법

### New Product — 가정 식별

Teresa Torres의 4가지 핵심 제품 리스크를 **8가지 리스크 카테고리**로 확장한다.

**8가지 리스크 카테고리**:

- **Value**: 고객에게 가치를 창출할 것인가? 계속 사용할 것인가?
- **Usability**: 사용 방법을 알아낼 것인가? 온보딩이 충분히 빠른가? 인지 부하를 증가시키는가?
- **Viability**: 판매/수익화/자금 조달이 가능한가? 비용 대비 가치가 있는가? 고객 성공을 지원할 수 있는가? 규정 준수가 가능한가?
- **Feasibility**: 현재 기술로 만들 수 있는가? 이 통합이 가능한가? 효율적으로 확장할 수 있는가?
- **Ethics**: 그것을 해야 하는가? 윤리적 고려사항이 있는가? 고객에게 위험을 초래할 것인가?
- **Go-to-Market**: 마케팅할 수 있는가? 필요한 채널이 있는가? 고객이 시도하도록 설득할 수 있는가? 지금이 맞는 시기인가?
- **Strategy & Objectives**: 핵심 가정은 무엇인가? 전략을 복사할 수 있는가? 정치적/경제적/법적/기술적/환경적 요인을 고려했는가?
- **Team**: 팀이 잘 협력할 것인가? 적합한 인재가 있는가? 적합한 도구가 있는가?

**체크포인트**: 모든 아이디어에 걸친 가정 마스터 목록을 컴파일한 후 진행.

---

## Step 4 — 가정 우선순위 (Focus Phase)

Impact × Risk 매트릭스를 사용하여 가정을 분류한다.

**각 가정에 대해 두 가지 차원을 평가한다**:
- **Impact**: 이 가정을 검증함으로써 창출되는 가치 × 영향받는 고객 수 (ICE에서: Impact = Opportunity Score × # Customers)
- **Risk**: (1 - Confidence) × Effort

**Impact × Risk 매트릭스로 각 가정을 분류한다**:

| | Low Risk | High Risk |
|---|---|---|
| **High Impact** | 바로 구현 진행 (고보상, 저위험) | **실험 설계 필요** ← "Leap of Faith" |
| **Low Impact** | 더 높은 우선순위 처리 후로 연기 | 아이디어 기각 (투자 가치 없음) |

테스트가 필요한 각 가정에 대해 아래를 제안한다:
- 최소한의 노력으로 검증된 학습을 극대화
- 의견이 아닌 실제 행동을 측정
- 명확한 성공 지표와 임계값 포함

결과를 우선순위 매트릭스 또는 표로 제시한다.

**체크포인트**: "가장 위험한 가정들입니다. 먼저 검증해야 할 것이 무엇인지 느껴지는 게 있나요?"

---

## Step 5 — 실험 설계 (Validation Phase)

최우선 가정에 대해 제품 단계에 따른 실험을 설계한다.

### Existing Product — 실험 설계

각 가정에 대해 1~2개의 실험을 설계한다. 사용 가능한 방법:
- 프로토타입으로 첫 번째 클릭 테스트 또는 작업 완료
- 기능 스텁 또는 Fake Door 테스트
- 기술 스파이크
- 프로덕션 A/B 테스트 (리스크 완화 포함)
- Wizard of Oz 접근
- 행동 기반 설문 검증 (의견 기반 아님)

**핵심 원칙**:
- 유저의 의견이 아닌 실제 행동을 측정한다
- 유저나 비즈니스를 위험에 빠뜨리지 않도록 책임감 있게 테스트한다
- 프로덕션 테스트(A/B 테스트)의 경우 리스크 완화 전략을 설명한다

각 실험에 대해:
| 항목 | 내용 |
|------|------|
| **Assumption** | 우리가 믿는 것은? |
| **Experiment** | 검증을 위해 정확히 무엇을 할 것인가? |
| **Metric** | 무엇을 측정할 것인가? |
| **Success Threshold** | 맞다면 기대되는 값은? |

### New Product — 실험 설계 (Lean Startup)

Alberto Savoia의 *The Right It* 방법론을 적용한다.

**XYZ 가설을 먼저 작성한다**: "최소 X%의 Y가 Z를 할 것이다"
- **X%**: 참여할 것으로 예상되는 목표 시장의 비율
- **Y**: 구체적인 목표 시장 (예: "중형 럭셔리 세단 구매자")
- **Z**: 제품과 어떻게 상호작용할 것인가

**핵심 가정별로 2~3개의 프리토타입 실험을 제안한다**:
- **Landing Page**: 가입 또는 클릭으로 관심도 측정
- **Explainer Video**: 참여도 지표를 통한 이해도와 매력 측정
- **Email Campaign**: 응답률과 클릭률을 통한 수요 측정
- **Pre-Order / Waitlist**: 실제 커밋먼트를 통한 지불 의향 측정
- **Concierge / Manual MVP**: 가치를 수동으로 전달하여 검증

**핵심 원칙**:
- **Skin-in-the-Game**: 단순한 관심이 아닌 지불 의향을 테스트한다. 실제 커밋먼트(시간, 돈, 평판)만이 신뢰할 수 있는 신호다.
- **YODA (Your Own Data)**: 시장 보고서나 유사 사례 같은 타인의 데이터(ODP)에 의존하지 않고 실험을 통해 자신의 데이터를 수집한다.
- 유저의 의견이 아닌 실제 행동을 측정한다

각 실험 마다 의존성과 노력에 따라 실험을 순서화한다.

---

## Step 6 — Discovery Plan 작성

모든 것을 하나의 디스커버리 플랜 문서로 컴파일한다:

```markdown
## Discovery Plan: [Topic]

**Date**: [today]
**Product Stage**: [existing/new]
**Discovery Question**: [what we're trying to learn]

### Ideas Explored
[브레인스톰된 아이디어 요약과 간단한 설명]

### Selected Ideas for Validation
[3~5개 선택된 아이디어와 선택 이유]

### Critical Assumptions
| # | Assumption | Category | Impact | Uncertainty | Priority |
|---|-----------|----------|--------|-------------|----------|

### Validation Experiments
| # | Tests Assumption | Method | Success Criteria | Effort | Timeline |
|---|-----------------|--------|-----------------|--------|----------|

### Experiment Details
[각 실험: 가설, 설정, 측정, 결정 기준]

### Discovery Timeline
Week 1: [experiments]
Week 2: [experiments]
Week 3: [analysis and decision]

### Decision Framework
- If [experiment] succeeds → proceed to [next step]
- If [experiment] fails → [pivot/kill/investigate further]
```

플랜을 마크다운 파일로 워크스페이스에 저장한다.

---

## Step 7 — 다음 단계 제안

디스커버리 플랜 완성 후 아래 옵션을 제안한다:

- "상위 아이디어에 대한 **PRD를 작성**할까요?"
- "이 실험들을 보완할 **인터뷰 스크립트를 설계**할까요?"
- "실험을 추적할 **지표를 설정**할까요?"
- "MVP를 위한 **노력 추정치와 유저 스토리를 작성**할까요?"

---

## 운영 노트

- 리서치 데이터가 있다면 브레인스톰 전에 인사이트를 먼저 추출한다
- 신제품의 경우 실현 가능성보다 **desirability 검증**을 우선시한다
- 기존 제품의 경우 가정에 대한 정보를 제공할 수 있는 사용 데이터가 있는지 확인한다
- 디스커버리 플랜은 살아있는 문서로, 실험 진행에 따라 업데이트를 제안한다
