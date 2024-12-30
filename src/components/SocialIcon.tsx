import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialIconProps {
  icon: IconDefinition;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <FontAwesomeIcon
      className={`mx-1.5 ${isHover ? 'text-gray-600' : 'text-gray-400'} transition-colors duration-200`}
      size="lg"
      icon={icon}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    />
  );
};

export default SocialIcon; 