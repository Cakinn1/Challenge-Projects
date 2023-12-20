import React from 'react'

export default function NavList({navItem}: {navItem: string}) {
  return (
    <li className="text-white text-5xl uppercase font-bold">
    {navItem}
  </li>
);
}
