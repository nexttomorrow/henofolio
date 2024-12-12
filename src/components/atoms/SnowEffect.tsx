import React, { useEffect, useRef } from 'react';

const SnowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 눈이 쌓이는 지점들을 저장하는 배열
    let snowPiles: { x: number; height: number }[] = [];
    const PILE_RESOLUTION = 10; // 눈 쌓임 해상도
    const MAX_PILE_HEIGHT = 100; // 최대 쌓임 높이
    const SNOWFLAKE_COUNT = 100; // 동시에 떨어지는 눈송이 수 감소

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // 캔버스 리사이즈시 눈 쌓임 초기화
      snowPiles = Array(Math.ceil(canvas.width / PILE_RESOLUTION))
        .fill(null)
        .map((_, i) => ({
          x: i * PILE_RESOLUTION,
          height: 0
        }));
    };

    class Snowflake {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speed: number = 0;
      wind: number = 0;
      settled: boolean = false;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = 10; // 항상 화면 위에서 시작
        this.size = Math.random() * 2 + 1; // 크기 범위 축소 (1-3px)
        this.speed = Math.random() * 0.9 + 0.5; // 속도 감소 (0.2-0.7)
        this.wind = Math.random() * 0.3 - 0.15; // 바람 효과 감소
        this.settled = false;
      }

      update() {
        if (!canvas) return;
        
        if (this.settled) {
          this.reset(); // 쌓인 눈은 다시 위에서 시작
          return;
        }

        this.y += this.speed;
        this.x += this.wind;

        // 화면 경계 처리
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;

        // 눈 쌓임 확인
        const pileIndex = Math.floor(this.x / PILE_RESOLUTION);
        if (pileIndex >= 0 && pileIndex < snowPiles.length) {
          const pile = snowPiles[pileIndex];
          const groundLevel = canvas.height - pile.height;

          if (this.y + this.size >= groundLevel) {
            if (pile.height < MAX_PILE_HEIGHT) { // 최대 높이 제한
              pile.height += this.size * 0.2; // 쌓이는 속도 감소
            }
            this.settled = true;
          }
        }

        // 화면 밖으로 나가면 재활용
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    // 눈송이 생성
    const snowflakes: Snowflake[] = Array(SNOWFLAKE_COUNT)
      .fill(null)
      .map(() => new Snowflake());

    // 눈 쌓임 그리기
    const drawSnowPiles = () => {
      if (!ctx || !canvas) return;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      // 부드러운 곡선으로 눈 쌓임 표현
      for (let i = 0; i < snowPiles.length; i++) {
        const pile = snowPiles[i];
        const x = pile.x;
        const y = canvas.height - pile.height;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          const xc = (pile.x + snowPiles[i - 1].x) / 2;
          const yc = (y + (canvas.height - snowPiles[i - 1].height)) / 2;
          ctx.quadraticCurveTo(xc, yc, x, y);
        }
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 눈 쌓임 그리기
      drawSnowPiles();
      
      // 눈송이 업데이트 및 그리기
      snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
      });
      
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default SnowEffect;