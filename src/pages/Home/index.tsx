import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"></img>
        </header>

        <main>
          <h1>Your waste collect marketplace.</h1>
          <p>
            We help people to find collect points in a efficient way.
          </p>

          <Link to="/create-point">
            <span> <FiLogIn /> </span>
            <strong>Add a collect point</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;