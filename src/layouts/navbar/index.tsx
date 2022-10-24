import * as React from 'react';
import './index.css';
export interface IHeaderProps {
}

export default function NavBar (props: IHeaderProps) {
  return (
    <div className="navbar">
      <div>
        <a href="#" className="logo navbar-link">GAMEJAM</a>
        <a href="#" className="navbar-link">BROWSE</a>
        <a href="#" className="navbar-link">GAME</a>
      </div>
      <div>
        <a href="#" className="navbar-link">UPLOAD GAME</a>
        <a href="#" className="navbar-link">COMMUNITY</a>
        <a href="#" className="navbar-link">SUPPORT</a>
      </div>
      <div>
        <a href="#" className="navbar-link">Sign up</a>
        <a href="#" className="navbar-link">Log in</a>
      </div>
    </div>
  );
}

//#1E293E
