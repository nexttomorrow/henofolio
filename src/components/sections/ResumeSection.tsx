import React from 'react';
import { motion } from 'framer-motion';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-32 relative overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl font-bold mb-16 text-gradient text-center">Resume</h2>
          
          <div className="prose prose-invert max-w-none space-y-16">
            {/* 자기소개 섹션 - 여백 조정 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                자기소개
              </h3>
              <div className="space-y-6 text-lg">
                <p className="text-gray-300 leading-relaxed">
                  안녕하세요, <span className="text-gradient font-semibold">웹, UI/UX, 패키지 디자인</span>을 
                  아우르는 9년 경력의 디자이너 이현우입니다. 총 프로젝트 수주 금액 150억+, 연간 매출 20% 이상 
                  성장에 기여한 실적을 보유하고 있으며, 고객 만족도 95% 이상을 달성하며 사용자와 비즈니스의 
                  접점에서 최적의 경험을 설계하는 것을 전문으로 합니다.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-gradient font-semibold">6개의 대규모 프로젝트</span>와 
                  <span className="text-gradient font-semibold"> 2개의 리드 경험</span>을 통해, 
                  사용자의 니즈를 정확히 파악하고 비즈니스 성과를 창출하는 솔루션을 제시해왔습니다. 
                </p>
                <p className="text-gray-300 leading-relaxed">
                  저는 <span className="text-gradient font-semibold">기술을 잘 다루는 것을 넘어 기술을 현명하게 활용하는 디자이너</span>가 
                  되고자 합니다. 급변하는 디지털 시대에서, 새로운 기술을 맹목적으로 추종하기보다는 
                  각 기술의 본질적 가치를 이해하고 이를 효과적으로 활용하여 진정한 사용자 가치를 
                  창출하는 것이 제 목표입니다.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  저는 <span className="text-gradient font-semibold">문제 정의부터 해결까지 체계적인 접근 방식</span>을 
                  가진 디자이너입니다. 사용자 리서치와 데이터 분석을 통해 핵심 문제를 정확히 파악하고, 
                  이를 바탕으로 실질적인 해결책을 도출합니다. 특히 <span className="text-gradient font-semibold">전자상거래 
                  플랫폼의 결제 프로세스 최적화를 통해 전환율 35% 향상</span>을 달성한 경험이 있으며, 
                  항상 측정 가능한 성과 지표를 기반으로 디자인 솔루션의 효과성을 검증합니다.
                </p>
              </div>
            </motion.div>

            {/* 핵심 역량 섹션 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-light/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
            >
              <div className="text-left">  {/* 좌측 정렬을 위한 컨테이너 추가 */}
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                  핵심 역량
                </h3>
                <ul className="space-y-6 text-lg">
                  <li className="flex items-start group">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-gradient text-xl block mb-2">통합적 디자인 역량</strong>
                      <p className="text-gray-300 leading-relaxed">
                        1. 패키지 디자인 80+, 웹/모바일 UI 디자인 10+ 등 다양한 프로젝트 경험을 바탕으로 브랜드 인지도 <span className="text-accent">45%</span> 상승<br />
                        2. 고객 참여도 <span className="text-accent">60%</span> 향상을 달성한 통합 디자인 솔루션 제공
                      </p>
                    </div>
                  </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-gradient text-xl block mb-2">기술 활용 능력</strong>
                    <p className="text-gray-300 leading-relaxed">
                      Figma, Cursor AI, ChatGPT AI, Gemini AI 등 최신 디자인 도구 활용과 함께 인공지능툴, 
                      모션(Lottie) 디자인 기술을 프로젝트에 적극 도입하여 전환율 <span className="text-accent">25%</span> 향상 및 
                      사용자 체류시간 향상
                    </p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-gradient text-xl block mb-2">리더십과 협업</strong>
                    <p className="text-gray-300 leading-relaxed">
                      1. 프로젝트 리더로서 10명 규모 팀을 이끌며 일정 준수율 <span className="text-accent">95%</span> 달성<br />
                      2. 주간 리뷰 세션 운영으로 팀 적극성 향상<br />
                      3. 팀원들과의 적극적인 지식 공유 및 협업을 통해 프로젝트 성공률 <span className="text-accent">90%</span> 달성<br />
                      4. 부서간 협업 프로세스 개선으로 업무 효율성 향상<br />
                      5. 디자인 시스템 구축 및 문서화를 통해 업무 생산성 <span className="text-accent">75%</span> 향상<br />
                      6. 고객사와의 원활한 커뮤니케이션으로 고객 만족도 향상
                    </p>
                  </div>
                </li>
              </ul>
              </div>
            </motion.div>

            {/* 교육 섹션 - 주석 처리 */}
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-light/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                교육 & 병역
              </h3>
              <div className="bg-primary/50 p-8 rounded-lg hover:bg-primary/60 transition-colors">
                <h4 className="text-xl font-semibold text-gradient">경영 학사</h4>
                <p className="text-gray-400 text-lg mt-2">한양대학교 경영학과</p>
                <p className="text-accent mt-1">2009 - 2020 장기 휴학 후 디자인 실무 경험</p>
              </div>
              <br />
              <div className="bg-primary/50 p-8 rounded-lg hover:bg-primary/60 transition-colors">
                <h4 className="text-xl font-semibold text-gradient">병장 만기 전역</h4>
                <p className="text-gray-400 text-lg mt-2">해병대</p>
                <p className="text-accent mt-1">2010.05 - 2012.02</p>
              </div>
            </motion.div> */}

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;