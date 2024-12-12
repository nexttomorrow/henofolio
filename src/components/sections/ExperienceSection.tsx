import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  period: string;
  company: string;
  position: string;
  description: string[];
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      period: '2014.07 - 2016.04',
      company: '티스타',
      position: '의류프린팅, 일러스트레이터',
      description: [
        '고객 맞춤형 의류 디자인 및 프린팅 작업으로 고객 만족도 향상',
        '일러스트레이터를 소스 재활용한 디자인 작업 프로세스 개선으로 작업 효율성 향상',
        '온라인 주문 시스템 개선 및 고객 응대 매뉴얼 구축으로 처리 시간 40% 단축',
        '프린팅 품질 관리 체계 구축으로 재작업률 15% 감소 및 고객 클레임 50% 감소',
      ],
    },
    {
      period: '2016.05 - 2018.04',
      company: '주식회사 신익',
      position: '패키지/웹 디자인',
      description: [
        '캐릭터 상품 패키지 디자인 및 상세페이지 제작으로 브랜드 인지도 35% 향상',
        '카페24 솔루션 기반 온라인 쇼핑몰 운영 및 매출 25% 성장 달성',
        '중국 수입상품 소싱 및 품질관리를 통한 원가 20% 절감',
        '디자인팀 내 온라인/디자인 업무 전담으로 업무 효율성 40% 개선',
      ],
    },
    {
      period: '2018.08 - 2022.12',
      company: '주식회사 비씨씨코리아',
      position: '패키지/브랜드 디자인',
      description: [
        '전사 디자인 전략 수립 및 브랜드 아이덴티티 가이드라인 구축으로 브랜드 일관성 40% 향상',
        '아마존 제품 이미지 촬영/보정 및 A+ 컨텐츠 제작으로 전환율 35% 증가',
        '시즈널 프로모션 배너 및 마케팅 콘텐츠 제작으로 클릭률 45% 개선',
        '제품 홍보 영상 기획/편집 및 소셜미디어 운영으로 브랜드 인지도 50% 상승',
      ],
    },
    {
      period: '2023.01 - 2024.11',
      company: '주식회사 프리윌링(공동창업자)',
      position: 'UX/UI디자인',
      description: [
        '스타트업 프로젝트 전체 기획/관리 및 디자인 시스템 구축으로 업무 효율성 향상',
        '디자인팀 리드 및 UI/UX 프로세스 최적화를 통한 프로젝트 완료율 90% 달성',
        '팀 간 협업 체계 구축 및 업무 프로세스 개선으로 생산성 50% 향상',
        '조직 체계 및 업무 프로세스 구축으로 업무 효율성 향상',
        '수평적 소통과 자율적 업무 문화 정착으로 팀 만족도 상승',
        '리소스 최적화 및 비용 절감 전략 수립으로 운영비용 40% 절감',
        '투자 유치를 위한 IR 자료 기획/디자인으로 투자자 미팅 성공률 75% 달성',
        '대학생 서포터즈 프로그램 기획 및 운영으로 브랜드 인지도 상승'
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-gradient text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* 세로 그라데이션 라인 */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent" />
                
                {/* 타임라인 원형 마커 */}
                <div className="absolute -left-[11px] top-0">
                  <div className="relative">
                    {/* 후광 효과 */}
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md animate-pulse" />
                    
                    {/* 원형 배경 */}
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-lg shadow-accent/40 flex items-center justify-center animate-[breathe_4s_ease-in-out_infinite]">
                      {/* 내부 원형 */}
                      <div className="w-2 h-2 rounded-full bg-white/90 shadow-inner" />
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary-light/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl hover:shadow-accent/5"
                >
                  <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <span className="text-accent text-sm font-medium">{exp.period}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {exp.company}
                    </h3>
                    <p className="text-accent/90 text-lg font-medium">{exp.position}</p>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors">
                        <svg 
                          className="w-5 h-5 mt-1 text-accent" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4" 
                          />
                        </svg>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 