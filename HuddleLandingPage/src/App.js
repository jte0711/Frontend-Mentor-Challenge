import React from 'react';

import './app.less';

function App() {
  return (
    <div className="App">
      <header className="container-fluid">
        <img alt="logo" className="logo" src={process.env.PUBLIC_URL + "/images/logo.svg"}/>
      </header>

      <div className="container-fluid content">
        <img alt="illustrations" className="illustration" src={process.env.PUBLIC_URL + "/images/illustration-mockups.svg"}/>
        <div className="cta">
          <h1>Build the Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in a genuine discussion.</p>
          <div className="button d-flex justify-content-center align-items-center">
            <span>Register</span>
          </div>
        </div>
      </div>

      <footer className="container-fluid">
        <div className="row">
          <div className="col-md-10"></div>
          <div className="socialMediaButtons col-md-2">
            <img alt="facebook logo" src={process.env.PUBLIC_URL + "/images/Facebook.svg"}/>
            <img alt="twitter logo" src={process.env.PUBLIC_URL + "/images/Twitter.svg"}/>
            <img alt="instagram logo" src={process.env.PUBLIC_URL + "/images/Instagram.svg"}/>
          </div>
        </div>
        
      </footer>

      <footer className="container-fluid">
        <div className="socialMediaButtons-mb">
          <img alt="facebook logo" src={process.env.PUBLIC_URL + "/images/Facebook.svg"}/>
          <img alt="twitter logo" src={process.env.PUBLIC_URL + "/images/Twitter.svg"}/>
          <img style={{"marginRight": "0"}} alt="instagram logo" src={process.env.PUBLIC_URL + "/images/Instagram.svg"}/>
        </div>
      </footer>
    </div>
  );
}

export default App;
