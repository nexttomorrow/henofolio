import React from 'react';

/**
 * 푸터 컴포넌트
 * 소셜 링크와 저작권 정보를 포함
 */
const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-primary-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <ul className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-center text-gray-400">
            <p>Contact: ludolfy91@naver.com</p>
            <p className="mt-2">&copy; 2024 leeheno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 