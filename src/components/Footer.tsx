import React from 'react';

const Footer: React.FC = () => (
  <footer className="relative bottom-0 bg-light w-full h-[60px] text-sm">
    <div className="flex justify-center items-center h-full">
      Copyright © {new Date().getFullYear()} dontry.github.io
    </div>
  </footer>
);

export default Footer; 