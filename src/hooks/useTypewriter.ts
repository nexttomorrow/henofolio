import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  useEffect(() => {
    setDisplayText('');
    setIsTypingComplete(false);
    
    let currentIndex = 0;
    let isMounted = true;
    
    const typingInterval = setInterval(() => {
      if (!isMounted) return;

      if (currentIndex < text.length) {
        const nextChar = text.charAt(currentIndex);
        setDisplayText(prev => prev + nextChar);
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return {
    displayText: displayText.toString(),
    isTypingComplete
  };
};

export default useTypewriter; 