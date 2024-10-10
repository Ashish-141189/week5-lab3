/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

// src/App.jsx
import React from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';


// Dynamic content using JavaScript variables
const appTitle = 'JSX and Props Showcase';
const section1Content = 'This is the content of section 1.';
const article1Title = 'Article 1';
const article1Text = 'Content of Article 1.';
const sidebarContent = 'Sidebar content goes here.';
const section2Content = 'This is the content of section 2.';
const footerText = 'Copyright © 2024 JSX Props App';

function App() {
  return (
    <div>
      <Header title={appTitle} />
      <Section heading="Section 1" content={section1Content} />
      <Article title={article1Title} text={article1Text} />
      <Sidebar content={sidebarContent} />
      <Section heading="Section 2" content={section2Content} />
      <Footer text={footerText} />
    </div>
  );
}

export default App;
