import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div className="container grid-lg">
    <header className="navbar">
      <section className="navbar-section">
        <Link className="btn btn-link" to="/">
          Home
        </Link>
        <Link className="btn btn-link" to="/about-us">
          About
        </Link>
      </section>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
