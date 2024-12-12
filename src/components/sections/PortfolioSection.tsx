import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const projects: Project[] = [
    // UI/UX Projects
    {
      id: 1,
      title: 'E-commerce Platform Redesign',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
      description: '대규모 전자상거래 플랫폼의 사용자 경험 개선 프로젝트',
      tags: ['UI Design', 'UX Research', 'Prototyping'],
    },
    {
      id: 2,
      title: 'Banking App Interface',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
      description: '모바일 뱅킹 애플리케이션 UI/UX 디자인',
      tags: ['Mobile Design', 'FinTech', 'UI Kit'],
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
      description: '의료 데이터 시각화 대시보드 디자인',
      tags: ['Dashboard', 'Data Visualization', 'Healthcare'],
    },
    {
      id: 4,
      title: 'Social Media App',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
      description: '소셜 미디어 플랫폼 UI/UX 디자인',
      tags: ['Social Media', 'Mobile App', 'Interaction Design'],
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      category: 'UI/UX',
      image: 'https://via.placeholder.com/600x400',
      description: '여행 예약 플랫폼 사용자 경험 개선',
      tags: ['Travel', 'Booking System', 'UX Design'],
    },

    // Branding Projects
    {
      id: 6,
      title: 'Tech Startup Branding',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
      description: '기술 스타트업 브랜드 아이덴티티 디자인',
      tags: ['Logo Design', 'Brand Guidelines', 'Marketing'],
    },
    {
      id: 7,
      title: 'Restaurant Chain Identity',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
      description: '레스토랑 체인 브랜드 아이덴티티',
      tags: ['Food Industry', 'Visual Identity', 'Packaging'],
    },
    {
      id: 8,
      title: 'Fashion Brand Identity',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
      description: '패션 브랜드 아이덴티티 및 패키지 디자인',
      tags: ['Fashion', 'Packaging', 'Brand Strategy'],
    },
    {
      id: 9,
      title: 'Cosmetics Packaging',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
      description: '화장품 브랜드 패키지 디자인',
      tags: ['Cosmetics', 'Packaging Design', 'Product Design'],
    },
    {
      id: 10,
      title: 'Sports Brand Identity',
      category: 'Branding',
      image: 'https://via.placeholder.com/600x400',
      description: '스포츠 브랜드 아이덴티티 디자인',
      tags: ['Sports', 'Brand Identity', 'Marketing Materials'],
    },

    // Web Design Projects
    {
      id: 11,
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://via.placeholder.com/600x400',
      description: '기업 웹사이트 디자인 및 개발',
      tags: ['Web Development', 'Corporate', 'Responsive Design'],
    },
    {
      id: 12,
      title: 'Portfolio Platform',
      category: 'Web Design',
      image: 'https://via.placeholder.com/600x400',
      description: '크리에이티브 포트폴리오 플랫폼 디자인',
      tags: ['Portfolio', 'Gallery', 'Interactive'],
    },
    {
      id: 13,
      title: 'News Portal Design',
      category: 'Web Design',
      image: 'https://via.placeholder.com/600x400',
      description: '뉴스 포털 웹사이트 디자인',
      tags: ['News', 'Content Management', 'Web Design'],
    },
    {
      id: 14,
      title: 'Educational Platform',
      category: 'Web Design',
      image: 'https://via.placeholder.com/600x400',
      description: '온라인 교육 플랫폼 디자인',
      tags: ['Education', 'E-Learning', 'Web Platform'],
    },
    {
      id: 15,
      title: 'Real Estate Website',
      category: 'Web Design',
      image: 'https://via.placeholder.com/600x400',
      description: '부동산 중개 웹사이트 디자인',
      tags: ['Real Estate', 'Property Listing', 'Web Design'],
    },

    // Mobile App Projects
    {
      id: 16,
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400',
      description: '피트니스 트래킹 모바일 앱 디자인',
      tags: ['Fitness', 'Health', 'Mobile Design'],
    },
    {
      id: 17,
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400',
      description: '음식 배달 앱 UI/UX 디자인',
      tags: ['Food Delivery', 'Mobile UI', 'Service Design'],
    },
    {
      id: 18,
      title: 'Music Streaming App',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400',
      description: '음악 스트리밍 앱 인터페이스 디자인',
      tags: ['Music', 'Streaming', 'Entertainment'],
    },
    {
      id: 19,
      title: 'Task Management App',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400',
      description: '생산성 관리 앱 디자인',
      tags: ['Productivity', 'Task Management', 'Mobile UI'],
    },
    {
      id: 20,
      title: 'Dating App Design',
      category: 'Mobile App',
      image: 'https://via.placeholder.com/600x400',
      description: '데이팅 앱 UI/UX 디자인',
      tags: ['Dating', 'Social', 'Mobile Design'],
    },

    // Illustration Projects
    {
      id: 21,
      title: 'Character Design Set',
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400',
      description: '게임 캐릭터 일러스트레이션',
      tags: ['Character Design', 'Game Art', 'Digital Illustration'],
    },
    {
      id: 22,
      title: 'Editorial Illustrations',
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400',
      description: '매거진 편집 일러스트레이션',
      tags: ['Editorial', 'Publishing', 'Illustration'],
    },
    {
      id: 23,
      title: "Children's Book Art",
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400', 
      description: '어린이 도서 일러스트레이션',
      tags: ["Children's Books", 'Publishing', 'Character Design'],
    },
    {
      id: 24,
      title: 'Icon Set Design',
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400',
      description: '앱용 아이콘 세트 디자인',
      tags: ['Icons', 'Vector Art', 'UI Elements'],
    },
    {
      id: 25,
      title: 'Infographic Design',
      category: 'Illustration',
      image: 'https://via.placeholder.com/600x400',
      description: '데이터 시각화 인포그래픽',
      tags: ['Infographics', 'Data Visualization', 'Vector Design'],
    },

    // Motion Design Projects
    {
      id: 26,
      title: 'Brand Animation',
      category: 'Motion Design',
      image: 'https://via.placeholder.com/600x400',
      description: '브랜드 로고 모션 그래픽',
      tags: ['Motion Graphics', 'Animation', 'Branding'],
    },
    {
      id: 27,
      title: 'Product Showcase',
      category: 'Motion Design',
      image: 'https://via.placeholder.com/600x400',
      description: '제품 소개 애니메이션',
      tags: ['Product Animation', '3D Motion', 'Commercial'],
    },
    {
      id: 28,
      title: 'UI Animation Set',
      category: 'Motion Design',
      image: 'https://via.placeholder.com/600x400',
      description: '앱 인터페이스 모션 디자인',
      tags: ['UI Animation', 'Interaction', 'Motion Design'],
    },
    {
      id: 29,
      title: 'Explainer Video',
      category: 'Motion Design',
      image: 'https://via.placeholder.com/600x400',
      description: '서비스 설명 모션 그래픽',
      tags: ['Explainer', 'Motion Graphics', 'Storytelling'],
    },
    {
      id: 30,
      title: 'Social Media Animations',
      category: 'Motion Design',
      image: 'https://via.placeholder.com/600x400',
      description: '소셜 미디어용 모션 그래픽',
      tags: ['Social Media', 'Animation', 'Marketing'],
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
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
                className="bg-primary rounded-lg overflow-hidden group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20" />
                  <img
                    src={project.image}
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
  );
};

export default PortfolioSection; 