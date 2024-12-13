import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from '../modals/PortfolioModal';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  detailImage: string;
  description: string;
  tags: string[];
}

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // UI/UX Projects
    {
      id: 1,
      title: '항공권 예매가 쉬운 - 에어서울 UX/UI 리뉴얼 프로젝트',
      category: 'UI/UX',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/6002eddd-beae-4cbb-a035-aa3d2340186a/contents/foBXLFaptQKLCY8j.1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/6002eddd-beae-4cbb-a035-aa3d2340186a/contents/e6ScEJuLHR9mRhkb.2.png',
      description: '항공권 예매가 쉬운 - 에어서울 UX/UI 리뉴얼 프로젝트',
      tags: ['UI Design', 'UX Research', 'Prototyping'],
    },
    {
      id: 2,
      title: 'Banking App Interface',
      category: 'UI/UX',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/30a66fa3-753f-41d4-a7af-c69a67a2fe62/contents/KWbRRTZnXnYnFaYF.1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/30a66fa3-753f-41d4-a7af-c69a67a2fe62/contents/DfcgZp483xMmKrp8.15.png',
      description: '모바일 뱅킹 애플리케이션 UI/UX 디자인',
      tags: ['Mobile Design', 'FinTech', 'UI Kit'],
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'UI/UX',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/7edacf9d-91d1-42c6-af34-cb34942009d8/contents/DgjsdNMmaTUnnDSd.01_%EB%A1%9C%EC%BB%AC%EB%A7%81%ED%81%AC_%EC%83%81%EC%84%B8.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/7edacf9d-91d1-42c6-af34-cb34942009d8/contents/AeDv7bPpG5BvTKAV.04_%EB%A1%9C%EC%BB%AC%EB%A7%81%ED%81%AC_%EC%83%81%EC%84%B8.jpg',
      description: '의료 데이터 시각화 대시보드 디자인',
      tags: ['Dashboard', 'Data Visualization', 'Healthcare'],
    },
    {
      id: 4,
      title: 'Social Media App',
      category: 'UI/UX',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/a7b6e661-4d3d-44f8-9410-203494d318bb/contents/DzvqQmA6nXMFuoyA.1.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/a7b6e661-4d3d-44f8-9410-203494d318bb/contents/EpK2AghdDNfnpyNj.2.jpg',
      description: '소셜 미디어 플랫폼 UI/UX 디자인',
      tags: ['Social Media', 'Mobile App', 'Interaction Design'],
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      category: 'UI/UX',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/014b8f80-61f4-4068-bdb6-43972a713a5f/contents/BYV2d8KAk9uoCzg2.1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/014b8f80-61f4-4068-bdb6-43972a713a5f/contents/6VqjH69kzfo4NXr3.3.png',
      description: '여행 예약 플랫폼 사용자 경험 개선',
      tags: ['Travel', 'Booking System', 'UX Design'],
    },

    // Branding Projects
    {
      id: 6,
      title: 'Tech Startup Branding',
      category: 'Branding',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/2509b158-6daf-458e-a2b2-e43de2f7197c/contents/bUDGYgLWkvxZ5smD.01_%E1%84%91%E1%85%AD%E1%84%8C%E1%85%B5.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/2509b158-6daf-458e-a2b2-e43de2f7197c/contents/ZzHfmRKGqqNo27fd.05_%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%84%85%E1%85%B5%E1%84%89%E1%85%A5%E1%84%8E%E1%85%B5-%E1%84%83%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%A5%E1%84%80%E1%85%A1%E1%84%80%E1%85%B5-%E1%84%8C%E1%85%B5%E1%86%AF%E1%84%86%E1%85%AE%E1%86%AB.png',
      description: '기술 스타트업 브랜드 아이덴티티 디자인',
      tags: ['Logo Design', 'Brand Guidelines', 'Marketing'],
    },
    {
      id: 7,
      title: 'Restaurant Chain Identity',
      category: 'Branding',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/31d35fb6-6f3f-4726-8021-4785df183d8c/contents/w2gjiFUuWGbZgr9D.ppt%EC%97%85%EB%A1%9C%EB%93%9C%EC%9A%A9-01.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/31d35fb6-6f3f-4726-8021-4785df183d8c/contents/sWCWxjzu86eGxqYN.ppt%EC%97%85%EB%A1%9C%EB%93%9C%EC%9A%A9-09.jpg',
      description: '레스토랑 체인 브랜드 아이덴티티',
      tags: ['Food Industry', 'Visual Identity', 'Packaging'],
    },
    {
      id: 8,
      title: 'Fashion Brand Identity',
      category: 'Branding',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/f81ca025-83cc-43fe-afc8-42b93d43b88b/contents/dVsswGHkrgWt798p.%281%29-Ripple-the-boutique.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/f81ca025-83cc-43fe-afc8-42b93d43b88b/contents/U3NJR8V7bAoGvRq5.%282-1%29-Ripple-the-boutique.jpg',
      description: '패션 브랜드 아이덴티티 및 패키지 디자인',
      tags: ['Fashion', 'Packaging', 'Brand Strategy'],
    },
    {
      id: 9,
      title: '불가리스 패키징',
      category: 'Branding',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/7f54cbf4-e748-474b-bdf9-2c44efae64e2/contents/YPuFWEk6PiGHNVRy.2023%20IF_%E1%84%87%E1%85%AE%E1%86%AF%E1%84%80%E1%85%A1%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3-09.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/7f54cbf4-e748-474b-bdf9-2c44efae64e2/contents/4y44mZqtuyaY7NRt.2023%20IF_%E1%84%87%E1%85%AE%E1%86%AF%E1%84%80%E1%85%A1%E1%84%85%E1%85%B5%E1%84%89%E1%85%B3-03.jpg',
      description: '불가리스 브랜드 패키지 디자인',
      tags: ['Cosmetics', 'Packaging Design', 'Product Design'],
    },
    {
      id: 10,
      title: '[ ICOOL 폰 케이스 ] 깜보냥이 COTD',
      category: 'Branding',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/366d4c69-2df1-42b5-9a6b-5f533def9cb5/contents/eZE9nJrsj8Zq5ar6.3..jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/366d4c69-2df1-42b5-9a6b-5f533def9cb5/contents/PaHbdr8iMmz7njyU.1..jpg',
      description: '[ ICOOL 폰 케이스 ] 깜보냥이 COTD',
      tags: ['Sports', 'Brand Identity', 'Marketing Materials'],
    },

    // Web Design Projects
    {
      id: 11,
      title: 'VILLA RECORDS: 가구 브랜드 빌라레코드 UI/UX WEB 리디자인 @2023',
      category: 'Web Design',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/3474d202-79d7-4d09-b46a-69977f29f39c/contents/W4SSBUPWwKZZ4qgj.31.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/3474d202-79d7-4d09-b46a-69977f29f39c/contents/5GMLGRfbzkzutfpN.35.png',
      description: 'VILLA RECORDS: 가구 브랜드 빌라레코드 UI/UX WEB 리디자인 @2023',
      tags: ['Web Development', 'Corporate', 'Responsive Design'],
    },
    {
      id: 12,
      title: 'SELLET Brand Identity',
      category: 'Web Design',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/f49d5c71-617d-456a-8b91-1c39f7ca08ac/contents/A7XN456dtjsbHb2q.1.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/f49d5c71-617d-456a-8b91-1c39f7ca08ac/contents/kAJn3gACLdvt5XSG.8.jpg',
      description: 'SELLET Brand Identity',
      tags: ['Portfolio', 'Gallery', 'Interactive'],
    },
    {
      id: 13,
      title: 'NLIFE IN ART, LART!',
      category: 'Web Design',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/8adaa6a9-d862-4475-88fe-b572ec8932d5/contents/MypFVdmpAWPScY98.Frame%2017.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/8adaa6a9-d862-4475-88fe-b572ec8932d5/contents/MypFVdmpAWPScY98.Frame%2017.jpg',
      description: 'LIFE IN ART, LART!',
      tags: ['News', 'Content Management', 'Web Design'],
    },
    {
      id: 14,
      title: '어랏(Alot) 브랜드 아이덴티티 & 어플리케이션',
      category: 'Web Design',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/5b740380-c35f-4a40-be24-21df9932a4e3/contents/Z3NR3d89vPpCeW9f.Alot_03.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/5b740380-c35f-4a40-be24-21df9932a4e3/contents/ZFjH6PHbXVdBYgqZ.Alot_05.jpg',
      description: '어랏(Alot) 브랜드 아이덴티티 & 어플리케이션',
      tags: ['Education', 'E-Learning', 'Web Platform'],
    },
    {
      id: 15,
      title: 'Nomonomo Website Renewal',
      category: 'Web Design',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/84656ec4-0242-477f-8d95-20514d71235b/contents/k7bb4p8yEv4fyW2w.nomonomo1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/84656ec4-0242-477f-8d95-20514d71235b/contents/UbESauEFpkHprZLz.04.png',
      description: 'Nomonomo Website Renewal',
      tags: ['Real Estate', 'Property Listing', 'Web Design'],
    },

    // Mobile App Projects
    {
      id: 16,
      title: 'MY LOOPING WORKSPACE',
      category: 'Mobile App',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/239efc0d-0f49-4f37-b624-521df78490dc/contents/VX3pq56WQPioyQ7M.%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C-1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/239efc0d-0f49-4f37-b624-521df78490dc/contents/Mw5AzxcyysPtmuqJ.%EB%85%B8%ED%8F%B4%EC%9A%A9.jpg',
      description: 'MY LOOPING WORKSPACE',
      tags: ['Fitness', 'Health', 'Mobile Design'],
    },
    {
      id: 17,
      title: '대한민국경찰청 기념품용 그래픽 개발 Graphic Design for KNPA Sovenir',
      category: 'Mobile App',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/3ef9534b-ec89-4ca2-ab6f-1b10c0f11e42/contents/ee2xtYUXYewCHxVj.%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/3ef9534b-ec89-4ca2-ab6f-1b10c0f11e42/contents/eBxhcf9gEfPC66ti.14.jpg',
      description: '대한민국경찰청 기념품용 그래픽 개발 Graphic Design for KNPA Sovenir',
      tags: ['Food Delivery', 'Mobile UI', 'Service Design'],
    },
    {
      id: 18,
      title: '실론티 리브랜딩 패키지 디자인',
      category: 'Mobile App',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/1f9cf26f-8054-414b-8881-772863a4e053/contents/JdHaWjc8gAnHUuiH.%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202024-11-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.29.04.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/1f9cf26f-8054-414b-8881-772863a4e053/contents/5iMSsr6tXzPLBXYn.Three_Posters_In_Metal_Frames.jpg',
      description: '실론티 리브랜딩 패키지 디자인',
      tags: ['Music', 'Streaming', 'Entertainment'],
    },
    {
      id: 19,
      title: 'Greener 그리너',
      category: 'Mobile App',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/d6469553-afbf-4f76-bf08-8a7049b86733/contents/VmGs359CExAoryQ8.Slide%2016_9%20-%203.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/d6469553-afbf-4f76-bf08-8a7049b86733/contents/VmGs359CExAoryQ8.Slide%2016_9%20-%203.png',
      description: 'Greener 그리너',
      tags: ['Productivity', 'Task Management', 'Mobile UI'],
    },
    {
      id: 20,
      title: '[DEPROMEET 12th] 똑똑 Knocknock | 푸시알림 커스텀 서비스',
      category: 'Mobile App',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/fcaabda6-233b-4824-ad51-6170d6cc0c9e/contents/K836ZtHzXmWkyzT4.1.png',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/fcaabda6-233b-4824-ad51-6170d6cc0c9e/contents/ZPQdY3uP3WwVhhHL.2.png',
      description: '[DEPROMEET 12th] 똑똑 Knocknock | 푸시알림 커스텀 서비스',
      tags: ['Dating', 'Social', 'Mobile Design'],
    },

    // Illustration Projects
    {
      id: 21,
      title: 'What`s Your Ascendant Sign?',
      category: 'Illustration',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/b123e3ee-3583-4fd5-8aa9-5100c3faa00d/contents/NHzYwwzC83GQfzyy.%EC%B1%85%EA%B0%88%ED%94%BC_%EB%AC%BC%EA%B3%A0%EA%B8%B0%EC%9E%90%EB%A6%AC.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/b123e3ee-3583-4fd5-8aa9-5100c3faa00d/contents/NNjuaPTYzFMsCfLb.%EC%B1%85%EA%B0%88%ED%94%BC%20%EB%B6%84%EB%A5%98_%EB%8C%80%EC%A7%80%201.jpg',
      description: 'What`s Your Ascendant Sign?',
      tags: ['Character Design', 'Game Art', 'Digital Illustration'],
    },
    {
      id: 22,
      title: '올리브영 기프트카드 일러스트레이션',
      category: 'Illustration',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/1480bd5b-40e3-4ef1-9f8f-359db60554a2/contents/iRHaRrDibrLkx78N.jpg3.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/1480bd5b-40e3-4ef1-9f8f-359db60554a2/contents/EhqM4QvpXXfKByyC.jpg2.jpg',
      description: '올리브영 기프트카드 일러스트레이션',
      tags: ['Editorial', 'Publishing', 'Illustration'],
    },
    {
      id: 23,
      title: "Character Branding",
      category: 'Illustration',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/0dc7d089-04e8-4924-b41c-5665b6fcb6a5/contents/GjqdmfZLBckhpyeo.Artboard%201.png', 
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/0dc7d089-04e8-4924-b41c-5665b6fcb6a5/contents/ibGqgcDUWc2jHo7e.Poster_01.png',
      description: 'Character Branding',
      tags: ["Children's Books", 'Publishing', 'Character Design'],
    },
    {
      id: 24,
      title: '2024 크리스마스 일러스트',
      category: 'Illustration',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/9a1ae44b-db7a-43db-8a41-a1462ebf6f0a/contents/FhYbJXBjbSm6fx4H.%E1%84%8E%E1%85%A9%E1%86%BA%E1%84%87%E1%85%AE%E1%86%AF.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/9a1ae44b-db7a-43db-8a41-a1462ebf6f0a/contents/3s747SDhZFANU3SQ.%E1%84%8E%E1%85%A9%E1%86%BA%E1%84%87%E1%85%AE%E1%86%AF03.jpg',
      description: '2024 크리스마스 일러스트',
      tags: ['Icons', 'Vector Art', 'UI Elements'],
    },
    {
      id: 25,
      title: 'Super Bolachas',
      category: 'Illustration',
      thumbnail: 'https://cdn-bastani.stunning.kr/prod/portfolios/6f15b950-cdf6-45bf-85a9-773ff84504b8/contents/KFHEGufMw2VyLq66.1_Super_Bolachas_Box_Phil_Bungo-cover.jpg',
      detailImage: 'https://cdn-bastani.stunning.kr/prod/portfolios/6f15b950-cdf6-45bf-85a9-773ff84504b8/contents/TtDmerSZwhxTjyNW.5-Super_Bolachas_Box_Phil_Bungo_New-.jpg',
      description: 'Super Bolachas',
      tags: ['Infographics', 'Data Visualization', 'Vector Design'],
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const handleProjectNavigation = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-primary-light relative overflow-hidden">

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Portfolio</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors duration-200 
                    ${selectedCategory === category 
                      ? 'bg-accent text-white' 
                      : 'bg-primary text-gray-400 hover:text-accent'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-accent/20" />
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-primary-light text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <AnimatePresence>
        {selectedProject && (
          <PortfolioModal
            project={{
              ...selectedProject,
              image: selectedProject.detailImage // detailImage를 image로 매핑
            }}
            projects={filteredProjects.map(project => ({
              ...project,
              image: project.detailImage // 각 프로젝트의 detailImage를 image로 매핑
            }))}
            isOpen={!!selectedProject}
            onClose={handleModalClose}
            onNavigate={handleProjectNavigation}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection; 