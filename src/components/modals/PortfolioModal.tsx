import React, { useEffect, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

interface PortfolioModalProps {
  project: Project;
  projects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (projectId: number) => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  projects,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [isStatsVisible, setIsStatsVisible] = useState(true);

  // 현재 프로젝트의 인덱스 찾기
  const currentIndex = projects.findIndex(p => p.id === project.id);
  
  // 이전/다음 프로젝트 이동 함수
  const navigateProject = useCallback((direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
    onNavigate(projects[newIndex].id);
  }, [currentIndex, projects, onNavigate]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigateProject('prev');
          break;
        case 'ArrowRight':
          navigateProject('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, navigateProject, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-primary-light w-full max-w-[90vw] max-h-[90vh] rounded-xl relative flex flex-col"
        >
          {/* 스크롤 영역 */}
          <div className="overflow-y-auto flex-1 custom-scrollbar pb-[200px]"> {/* 하단 여백 추가 */}
            {/* 헤더 영역 */}
            <div className="sticky top-0 z-20 bg-primary-light/80 backdrop-blur-sm border-b border-white/10">
              <div className="flex justify-between items-center p-4">
                <div>
                  <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                  <span className="text-accent">{project.category}</span>
                </div>
                {/* 닫기 버튼 */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 이미지 섹션 */}
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>

      
          </div>

          {/* 고정된 하단 성과 지표 섹션 */}
          <motion.div
            initial={false}
            animate={{ 
              height: isStatsVisible ? 'auto' : '64px',
              opacity: 1 
            }}
            className="sticky bottom-0 w-full bg-primary-dark/20 backdrop-blur-sm border-t border-white/10 shadow-lg"
          >
            {/* 접기/펼치기 버튼 */}
            <button
              onClick={() => setIsStatsVisible(!isStatsVisible)}
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-dark hover:bg-primary
                         text-white px-4 py-1 rounded-full text-sm flex items-center gap-2 
                         border border-white/10 transition-colors backdrop-blur-sm"
            >
              <span>{isStatsVisible ? '접기' : '성과 보기'}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${isStatsVisible ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="p-4">
              <AnimatePresence>
                {isStatsVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl font-semibold text-accent mb-3">주요 성과</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>사용자 참여도 35% 증가</li>
                        <li>전환율 25% 개선</li>
                        <li>고객 만족도 95% 달성</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-accent mb-3">사용 기술</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 네비게이션 버튼 */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateProject('prev');
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>이전 프로젝트</span>
                </button>

                <span className="text-gray-400">
                  {currentIndex + 1} / {projects.length}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateProject('next');
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 transition-colors"
                >
                  <span>다음 프로젝트</span>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PortfolioModal;