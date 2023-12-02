import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     text: this.props.country
  //   }
  // };

  // handlechng = (event) => {
  //   this.setState({text: event.target.value});
  // }
  // handleclck = () => {
  //   this.props.change(this.state.text);
  // }

    let {mode,togglemode} = props;
    return (
      <div>
          <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsTeller
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">general</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">technology</Link>
                </li>
              </ul>
            </div>
            {mode==="light"?<div className="bg-dark mx-4 rounded" onClick={togglemode} style={{height: "40px",width: "40px"}}></div>:<div className="bg-light mx-4 rounded" onClick={togglemode} style={{height: "40px",width: "40px"}}></div>}
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" value={this.state.text} onChange={this.handlechng} placeholder="Enter the country" aria-label="Search"/>
              <button className="btn btn-sm btn-primary" onClick={this.handleclck}>h</button>
            </form> */}
          </div>
        </nav>
      </div>
    );
}

export default Navbar;
