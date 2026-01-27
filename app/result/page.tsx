'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlsParam = searchParams.get('urls');
    if (urlsParam) {
      const urlList = decodeURIComponent(urlsParam).split(',');
      
      const mock = urlList.map((url, i) => {
        const reorderCount = Math.floor(Math.random() * 25 + 5);
        const titles = ["맞춤형 비즈니스 PPT", "고효율 마케팅 상세페이지", "프리미엄 로고 브랜딩", "기업형 SNS 콘텐츠", "속도 중심 카드뉴스"];

        return {
          id: i,
          url: url, // 원본 URL 저장
          title: titles[i] || `분석 서비스 #${i + 1}`,
          rating: (4.8 + Math.random() * 0.2).toFixed(1),
          reviews: Math.floor(Math.random() * 200 + 50),
          priceRange: "55,000원 ~ 480,000원",
          updateRange: "3회 ~ 무제한",
          speed: i === 0 ? "빠름 (10분 내)" : "보통",
          reorderStatus: `${reorderCount}명`
        };
      });
      setData(mock);
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>📊 분석 리포트 생성 중...</div>;

  return (
    <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', color: '#333' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800' }}>🔍 서비스 비교 분석 리포트</h1>
        <p style={{ color: '#666' }}>정량적 지표를 바탕으로 최적의 서비스를 추천합니다.</p>
      </header>

      {/* 추천 카드 섹션 */}
      <section style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px', padding: '25px', backgroundColor: '#f0f7ff', borderRadius: '15px', border: '1px solid #91d5ff' }}>
          <h3 style={{ margin: '0 0 10px', color: '#0052cc' }}>🏆 만족도 기준 최적</h3>
          <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{data[0]?.title}</p>
          <p style={{ fontSize: '0.85rem', color: '#555' }}>압도적인 평점과 재구매 고객 수를 보유한 검증된 서비스입니다.</p>
        </div>
        {data[1] && (
          <div style={{ flex: '1', minWidth: '300px', padding: '25px', backgroundColor: '#fffbe6', borderRadius: '15px', border: '1px solid #ffe58f' }}>
            <h3 style={{ margin: '0 0 10px', color: '#856404' }}>💰 가성비 기준 추천</h3>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{data[1]?.title}</p>
            <p style={{ fontSize: '0.85rem', color: '#555' }}>예산 대비 가장 넓은 작업 범위와 수정 횟수를 제공합니다.</p>
          </div>
        )}
      </section>

      {/* 비교 테이블 */}
      <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={{ padding: '15px', borderBottom: '2px solid #ddd', textAlign: 'left', width: '180px' }}>정량 지표</th>
              {data.map(d => (
                <th key={d.id} style={{ padding: '15px', borderBottom: '2px solid #ddd', textAlign: 'center' }}>{d.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['평점 / 리뷰 수', (d: any) => `⭐ ${d.rating} (${d.reviews})`],
              ['가격 범위', (d: any) => d.priceRange],
              ['수정 횟수', (d: any) => d.updateRange],
              ['응답 속도', (d: any) => d.speed],
              ['재구매 고객', (d: any) => d.reorderStatus],
              ['페이지 이동', (d: any) => (
                <a href={d.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block', padding: '8px 16px', backgroundColor: '#fede00', 
                  color: '#333', textDecoration: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '0.8rem'
                }}>상세보기 ↗</a>
              )],
            ].map(([label, getValue]: any) => (
              <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 'bold', backgroundColor: '#fafafa', fontSize: '0.9rem' }}>{label}</td>
                {data.map(d => (
                  <td key={d.id} style={{ padding: '15px', textAlign: 'center', fontSize: '0.9rem' }}>{getValue(d)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer style={{ marginTop: '50px', textAlign: 'center' }}>
        <button onClick={() => router.push('/')} style={{ padding: '12px 30px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          ← 다른 서비스 비교하기
        </button>
      </footer>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>데이터 로딩 중...</div>}>
      <ResultContent />
    </Suspense>
  );
}