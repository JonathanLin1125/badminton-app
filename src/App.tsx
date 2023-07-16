import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Layout>
          <Content>HOLDER</Content>
          <Footer>{"FOOTER"}</Footer>
        </Layout>
      </header>
    </div>
  );
}

export default App;
