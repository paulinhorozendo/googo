import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🌎 Mundo' },
  { url: '/news', text: '📰 Notícias' },
  { url: '/images', text: '📸 Imagens' },
  { url: '/videos', text: '📺 Vídeos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-red-300 border-green-700 pb-2">{text}</NavLink>
    ))}
  </div>
);
