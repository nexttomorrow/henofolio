import React from 'react';
import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <motion.div 
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.span 
        className="text-sm text-white font-medium tracking-wider"
        animate={{
          y: [0, -3, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
      
      </motion.span>

      <div className="relative">
        {/* 배경 빛나는 효과 */}
        <motion.div
          className="absolute -inset-2 bg-accent/20 rounded-full blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 마우스 컨테이너 */}
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full p-1 relative bg-background/50 backdrop-blur-sm"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(255, 255, 255, 0.3)",
              "0 0 0 8px rgba(255, 255, 255, 0)",
              "0 0 0 0 rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* 스크롤 도트 */}
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* 아래 방향 화살표들 */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              animate={{
                y: [0, 2, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15
              }}
            >
              {/* 화살표 왼쪽 선 */}
              <motion.div
                className="w-2 h-0.5 bg-white rounded-full origin-right"
                style={{ transform: "rotate(45deg)" }}
              />
              {/* 화살표 오른쪽 선 */}
              <motion.div
                className="w-2 h-0.5 bg-white rounded-full origin-left -ml-[1px]"
                style={{ transform: "rotate(-45deg)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator; 