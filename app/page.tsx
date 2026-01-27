'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [urls, setUrls] = useState(['', '', '', '', '']);
  const router = useRouter();

  const handleInputChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const goToResult = () => {
    const validUrls = urls.filter(u => u.trim() !== '' && u.includes('kmong.com/gig/'));
    
    if (validUrls.length === 0) {
      alert('비교하고 싶은 크몽 서비스 주소를 최소 1개 이상 넣어주세요!');
      return;
    }

    const queryString = new URLSearchParams({ urls: validUrls.join(',') }).toString();
    router.push(`/result?${queryString}`);
  };

  return (
    <main style={{ maxWidth: '600px', margin: '100px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px' }}>🔍 서비스 비교하기</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6' }}>
          비교하고 싶은 서비스 링크를 넣어주세요. <br />
          가격, 리뷰 등을 분석하여 가장 적합한 서비스를 추천해드릴게요.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {urls.map((url, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#ccc', fontWeight: 'bold', width: '20px' }}>{i + 1}</span>
            <input
              type="text"
              placeholder="https://kmong.com/gig/..."
              value={url}
              onChange={(e) => handleInputChange(i, e.target.value)}
              style={{
                flex: 1,
                padding: '15px',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>
        ))}

        <button
          onClick={goToResult}
          style={{
            marginTop: '20px',
            padding: '20px',
            backgroundColor: '#fede00',
            color: '#333',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          서비스 분석 시작하기
        </button>
      </div>
      
      <p style={{ marginTop: '30px', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
        주관을 제거하고, 숫자로 선택을 돕습니다.
      </p>
    </main>
  );
}