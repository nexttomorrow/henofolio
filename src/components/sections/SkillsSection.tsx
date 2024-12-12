import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: string;
}

// 숫자 카운트 애니메이션을 위한 커스텀 훅
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return { count, ref };
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { count, ref } = useCounter(skill.level);

  return (
    <motion.div
      ref={ref}
      key={skill.name}
      className="bg-primary p-5 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-200 text-lg">{skill.name}</span>
        <span className="text-accent text-lg font-medium">
          {count}%
        </span>
      </div>
      <div className="w-full bg-primary-dark rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-accent h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Design', 'UI/UX', 'AI', 'Tools'];

  const skills: Skill[] = [
    // Design Tools
    { name: 'Figma', level: 80, category: 'Design' },
    { name: 'Photoshop', level: 90, category: 'Design' },
    { name: 'Illustrator', level: 95, category: 'Design' },
    // UI/UX
    { name: 'Wireframing', level: 80, category: 'UI/UX' },
    { name: 'User Research', level: 70, category: 'UI/UX' },
    { name: 'Design Systems', level: 85, category: 'UI/UX' },
    // AI Tools
    { name: 'Cursor AI', level: 90, category: 'AI' },
    { name: 'Chat GPT', level: 80, category: 'AI' },
    { name: 'Perplexity', level: 85, category: 'AI' },
    // Tools
    { name: 'Slack', level: 80, category: 'Tools' },
    { name: 'Notion', level: 90, category: 'Tools' },
    { name: 'OA', level: 80, category: 'Tools' },
  ];

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="skills" className="py-20 bg-primary-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-gradient text-center">Skills</h2>
          
          {isMobile ? (
            <div className="relative">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                      ${activeIndex === index 
                        ? 'bg-accent text-white shadow-lg shadow-accent/25' 
                        : 'bg-primary/50 text-gray-400 hover:bg-primary/70'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="overflow-hidden">
                {categories.map((category, index) => (
                  <div 
                    key={category} 
                    className={`w-full space-y-6 bg-primary/50 p-8 rounded-xl ${
                      activeIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-accent mb-6">{category}</h3>
                    <div className="space-y-5">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-accent mb-4">{category}</h3>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 