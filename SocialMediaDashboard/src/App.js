import React, { useEffect, useState } from 'react';
import {connect, Provider} from 'react-redux';

import {CardWrapper, SmallCardWrapper} from './component/card.js';
import {facebook, twitter, instagram, youtube, fbView, fbLike, twtLike, twtRtweet, igLike, igView, ytLike, ytView} from './data.js';
import {store, mapDispatch, mapState} from './redux.js';

import './App.css';
import './color.css';

function App(props) {

  const [cssTheme, setCssTheme] = useState({
    backgroundColor: "bg-dark",
    topBannerColor: "topBanner-dark",
    textOne: "white-text",
    textTwo: "greyish-text-dark"
  });
  
  const handleChange = (e)=>{
    let test = document.getElementById("checkbox");
    if (test.checked === true){
      props.handleSwitch("on");
    } else {
      props.handleSwitch("off");
    }
  };

  useEffect(()=>{
    if (props.theme === 'light'){
      setCssTheme({
        backgroundColor: "",
        topBannerColor: "topBanner-light",
        textOne: "black-text",
        textTwo: "greyish-text-lg"
      });
    } else {
      setCssTheme({
        backgroundColor: "bg-dark",
        topBannerColor: "topBanner-dark",
        textOne: "white-text",
        textTwo: "greyish-text-dark"
      });
    }
  }, [props.theme])

  return (
    <div className={"App " + cssTheme.backgroundColor}>
      <div className={"topBanner " + cssTheme.topBannerColor}>
        
        <div className="contentHeader alignCenter">
          <div className="headerTitle">
            <h1 className={cssTheme.textOne}>Social Media Dashboard</h1>
            <h3 className={cssTheme.textTwo}>Total Followers: 23,002</h3>
          </div>
          <div className="line-mb"></div>
          <div className="modeDiv">
            <h4 className={cssTheme.textTwo}>Dark Mode</h4>
            <label className="switch">
              <input id="checkbox" type="checkbox" onChange={handleChange}/>
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        
      </div>

      {/*Line of Social Medias Followers/Subscribers*/}
      <div className="botRow">
        <div id="socialMediaCards" className="alignCenter">
          <CardWrapper data={facebook}/>
          <CardWrapper data={twitter}/>
          <CardWrapper data={instagram}/>
          <CardWrapper data={youtube}/>
        </div>

        <h2 className={"overviewTitle alignCenter " + cssTheme.textOne}>Overview - Today</h2>

        <div id="socialMediaCards-sm">
          <div className="sm-cards-row alignCenter">
            <SmallCardWrapper data={fbView}/>
            <SmallCardWrapper data={twtRtweet}/>
            <SmallCardWrapper data={igView}/>
            <SmallCardWrapper data={ytView}/>
          </div>
          <div className="sm-cards-row alignCenter">
            <SmallCardWrapper data={fbLike}/>
            <SmallCardWrapper data={twtLike}/>
            <SmallCardWrapper data={igLike}/>
            <SmallCardWrapper data={ytLike}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

const ReduxWrapper = connect(mapState, mapDispatch)(App);

function AppWrapper(){
  return (
    <Provider store={store}>
      <ReduxWrapper/>
    </Provider>
  );
}

export default AppWrapper;
