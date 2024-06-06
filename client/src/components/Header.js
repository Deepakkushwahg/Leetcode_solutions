import React from 'react'
import '../css-style/Header.css';

import leetcode from '../images/leetcode.png';
import git from '../images/git.png';

export default function Header() {
  return (
    <nav>
        <div id="header">
            <div id="leetcode">
                <img src={leetcode} alt="leetcode.png" width="5.5%"/>
                <h1>Leetcode Solutions Using Java</h1>
            </div>
        </div>
        <a id="profile" href="https://github.com/Deepakkushwahg/leetcode">
                <img src={git} alt="git.png" width="12%"/> <span>Deepakkushwahg/Leetcode</span>
        </a>
    </nav>
  )
}
