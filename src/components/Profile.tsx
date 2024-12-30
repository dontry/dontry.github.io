import React from 'react';
import Logo from './Logo';
import Intro from './Intro';

const Profile: React.FC = () => (
  <div className="flex flex-col justify-center items-center pl-2.5 min-w-[200px] pr-[50px] -ml-5">
    <Logo />
    <Intro />
  </div>
);

export default Profile; 