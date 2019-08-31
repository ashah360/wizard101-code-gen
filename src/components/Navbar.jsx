import React  from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#!">Wizard101 Code Gen</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#!">Discord</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/ashah360/wizard101-code-gen">Github Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar;


