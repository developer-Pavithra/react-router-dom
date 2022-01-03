import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export function Sidebar() {
  let sidebarDetails = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/about-us', label: 'About Us' },
    { id: 3, path: '/career', label: 'Carrer' },
    {
      id: 4,
      path: 'https://www.npmjs.com/package/react-router-dom/v/5.3.0',
      label: 'NPM',
    },
    {
      id: 4,
      path: '/error',
      label: 'error',
    },
  ];
  return (
    <div className="sidebar">
      <nav>
        {sidebarDetails.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path}>{item.label}</Link>
              {/* url change  */}
            </li>
          );
        })}
      </nav>
    </div>
  );
}