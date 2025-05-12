import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const factorMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/factors/healthcare-security">Healthcare Security</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/factors/medical-devices">Medical Device Security</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/factors/compliance">Healthcare Compliance</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/factors/data-protection">Data Protection</Link>
      </Menu.Item>
    </Menu>
  );

  const attackMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/response/incident-response">Incident Response</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/response/breach-notification">Breach Notification</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/response/recovery">Recovery Procedures</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/response/forensics">Digital Forensics</Link>
      </Menu.Item>
    </Menu>
  );

  const productMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/products/security-platform">Security Platform</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/products/threat-intelligence">Threat Intelligence</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/products/risk-assessment">Risk Assessment</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/products/security-operations">Security Operations</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <img src="/assets/logos/SHTP LOGO.png" alt="SHTP Logo" />
            </Link>
          </div>
          
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <span className="hamburger-icon">
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
          
          <nav className={`main-nav ${isOpen ? 'active' : ''}`}>
            <ul className="nav-items">
              <li className="nav-item"><Link to="/">HOME</Link></li>
              
              <li className="nav-item">
                <Dropdown overlay={factorMenu} trigger={['hover']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    CHOOSE A FACTOR <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              
              <li className="nav-item">
                <Dropdown overlay={attackMenu} trigger={['hover']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    RESPOND TO A CYBER ATTACK <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              
              <li className="nav-item">
                <Dropdown overlay={productMenu} trigger={['hover']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    FIND A PRODUCT OR SERVICE <DownOutlined />
                  </a>
                </Dropdown>
              </li>
            </ul>
            
            <div className="nav-buttons">
              <Link to="/demo" className="btn btn-primary">Request Demo</Link>
              <Link to="/portal" className="btn btn-secondary">Patient Portal</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;