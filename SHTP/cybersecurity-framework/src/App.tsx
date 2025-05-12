import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/global.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
};

export default App;
