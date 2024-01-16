"use client"

import { useRouter, usePathname } from "next/navigation";

import './footer.css'
import React, { useState } from 'react';

const tabs = [
  { name: 'home', icon: 'home' },
  { name: 'products', icon: 'shopping_bag' },
  { name: 'services', icon: 'plumbing' },
  { name: 'about', icon: 'business' },
  { name: 'help', icon: 'help_outline' },
];

export default function TabBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName:any) => {
    setActiveTab(tabName);
  };

  return (
    <>
    {pathname !== "/" && (<div className="tabbar tab-style1 relative top-[79.6vh]">
          <ul className="flex-center">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={`${tab.name === activeTab ? 'active' : ''}`}
                data-where={tab.name}
                onClick={() => handleTabClick(tab.name)}
              >
                <span className="material-icons-outlined">
                  {tab.icon}
                </span>
              </li>
            ))}
            <li className="follow">&nbsp;</li>
          </ul>
        </div>)}
        </>
  );
}
