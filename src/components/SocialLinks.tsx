import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from './SocialIcon';

const SocialLinks: React.FC = () => (
  <div className="flex justify-center">
    <a href="mailto:mccoy018@gmail.com" rel="noopener">
      <SocialIcon icon={faEnvelope} />
    </a>
    <a
      href="https://www.linkedin.com/in/caidong"
      target="_blank"
      rel="noopener"
    >
      <SocialIcon icon={faLinkedin} />
    </a>
    <a href="https://github.com/dontry" target="_blank" rel="noopener">
      <SocialIcon icon={faGithub} />
    </a>
  </div>
);

export default SocialLinks; 