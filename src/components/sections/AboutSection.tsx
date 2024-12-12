import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BearProfile from '../atoms/BearProfile';
import ScrollIndicator from '../atoms/ScrollIndicator';
import SnowEffect from '../atoms/SnowEffect';

const AboutSection: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // 페이지 로드 시 About 섹션으로 스크롤
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'auto' });
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadImage = () => {
    const imageUrl = '/라쿤맨.jpg';
    
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '라쿤맨.jpg';
        
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('이미지 다운로드 중 오류 발생:', error);
        alert('이미지 다운로드에 실패했습니다. 다시 시도해 주세요.');
      });
  };

  const scrollToPortfolio = () => {
    
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
          <section 
        ref={sectionRef}
        id="about" 
        className="pt-20 md:pt-32 pb-20 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <SnowEffect />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                ref={textRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 md:space-y-8 text-center lg:text-left"
                style={{ position: 'relative' }}
              >
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight md:leading-[1.2]">
                    9년간의 여정으로{' '}
                    <span className="text-gradient">비즈니스 성공을 목표로 디자인하는 <br className="hidden md:block" />이현우</span>입니다
                  </h1>
                  <h2 className="text-xl md:text-2xl text-gray-400">Package / Web / UI·UX Designer</h2>
                </div>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 max-w-2xl mx-auto lg:mx-0">
                  <span className="text-gradient font-semibold">패키지, 웹, UI/UX 디자인</span>을 아우르는 
                  폭넓은 경험을 바탕으로, 12개의 대규모 프로젝트와 2개의 리드 경험을 통해 
                  사용자의 니즈를 정확히 파악하고 비즈니스 성과를 창출하는 솔루션을 제시합니다.
                  유저와 비즈니스의 접점에서 최적의 경험을 설계하는 것이 저의 전문성입니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button
                    onClick={scrollToPortfolio}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary px-8 py-3 w-full sm:w-auto"
                  >
                    포트폴리오 먼저보기
                  </motion.button>
                  <motion.button
                    onClick={handleDownloadImage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary px-8 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>이력서 다운로드</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                ref={profileRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative hidden lg:block"
                style={{ position: 'relative' }}
              >
                <div className="relative aspect-square rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-10" />
                  <div className="relative w-full h-full">
                    <BearProfile className="w-full h-full"/>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full filter blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full filter blur-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-row justify-center items-center">
          <ScrollIndicator/>
        </div>
      </section>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary hover:bg-primary/80 text-white shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutSection; 