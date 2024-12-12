import React, { useEffect, useRef } from 'react';

interface BearProfileProps {
  className?: string;
}

const BearProfile: React.FC<BearProfileProps> = ({ className = "w-full h-full" }) => {
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const eyes = [leftEyeRef.current, rightEyeRef.current];
      eyes.forEach((eye) => {
        if (!eye) return;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = 3; // 눈동자 움직임 범위 축소
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        const pupil = eye.querySelector('.pupil');
        if (pupil) {
          pupil.setAttribute('transform', `translate(${moveX}, ${moveY})`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 귀 */}
      <circle cx="120" cy="100" r="60" fill="#855C52" /> {/* 왼쪽 귀 */}
      <circle cx="280" cy="100" r="60" fill="#855C52" /> {/* 오른쪽 귀 */}
      <circle cx="120" cy="100" r="40" fill="#B98875" /> {/* 왼쪽 귀 안쪽 */}
      <circle cx="280" cy="100" r="40" fill="#B98875" /> {/* 오른쪽 귀 안쪽 */}

      {/* 얼굴 */}
      <circle cx="200" cy="220" r="160" fill="#855C52" /> {/* 메인 얼굴 */}
      <circle cx="200" cy="220" r="140" fill="#B98875" /> {/* 얼굴 안쪽 */}
      
      {/* 볼 */}
      <circle cx="130" cy="240" r="35" fill="#E5B5A1" opacity="0.6" />
      <circle cx="270" cy="240" r="35" fill="#E5B5A1" opacity="0.6" />

      {/* 눈 영역 */}
      <g ref={leftEyeRef}>
        {/* <circle cx="150" cy="200" r="25" fill="white" /> 왼쪽 눈 흰자 */}
        <g className="pupil">
          <circle cx="150" cy="200" r="13" fill="black" /> {/* 왼쪽 눈동자 */}
          {/* <circle cx="158" cy="192" r="6" fill="white" /> 왼쪽 눈 광채 */}
        </g>
      </g>
      <g ref={rightEyeRef}>
        {/* <circle cx="250" cy="200" r="25" fill="white" /> 오른쪽 눈 흰자 */}
        <g className="pupil">
          <circle cx="250" cy="200" r="13" fill="black" /> {/* 오른쪽 눈동자 */}
          {/* <circle cx="258" cy="192" r="6" fill="white" /> 오른쪽 눈 광채 */}
        </g>
      </g>

      {/* 코 */}
      <g>
        <ellipse cx="200" cy="270" rx="25" ry="20" fill="#4A332D" /> {/* 코 메인 */}
        <circle cx="190" cy="265" r="8" fill="#6B4842" opacity="0.6" /> {/* 코 광택 */}
      </g>

      {/* 입
      <path
        d="M175 300 Q200 320 225 300"
        stroke="#4A332D"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      /> */}

    </svg>
  );
};

export default BearProfile; 