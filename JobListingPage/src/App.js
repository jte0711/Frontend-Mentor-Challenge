import React, {useState, useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import {store, mapState, mapDispatch} from './redux.js';

import {JobAdsWrapper} from './component/jobAds.js';
import {TagWXWrapper} from './component/tag.js';

import customData from './data.json';
import './app.less';

function App(props) {

  const [jobList, setJobList] = useState();
  const [filter, setFilter] = useState({
    filterClass: "hidden",
    jobListClass: ""
  });
  const [filterList, setFilterList] = useState([]);
  const [view, setView] = useState("desktop");

  useEffect(()=>{
    
    function handleResize(){
      let width = window.screen.width;

      if (width < 376){
        setView("mobile");
      } else {
        setView("desktop");
      }
    }

    window.addEventListener("resize", handleResize);

    let temp = [];
    
    for (let i = 0; i < customData.length; i++){
      temp.push(<JobAdsWrapper data={customData[i]} key={i}/>);
    }

    setJobList(temp);
  },[]);

  useEffect(()=>{
    if (props.filter === true){
      setFilter({
        filterClass: "",
        jobListClass: "pullTop"
      });
    } else {
      setFilter({
        filterClass: "hidden",
        jobListClass: ""
      });
    }
  }, [props.filter]);

  useEffect(()=>{
    let temp = [];

    for (let i = 0; i < props.tags.length; i++){
      temp.push(<TagWXWrapper text={props.tags[i]} key={i}/>);
    }

    setFilterList(temp);
  }, [props.tags]);

  return (
    <div className="App">
      <header className="App-header">
        <img style={{"width": "100%"}} alt="header background" src={process.env.PUBLIC_URL + "/images/bg-header-" + view + ".svg"}/>
      </header>

      <div className={"pullTop container " + filter.filterClass}>
        <div className="filterBar d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex filterTags">
            {filterList}
          </div>
          <div>
            <span className="clearButton" onClick={props.handleClearFilter}>Clear</span>
          </div>
        </div>
      </div>

      <div className={"container p-bot-3 " + filter.jobListClass}>
        {jobList}
      </div>
    </div>
  );
}

const ReduxWrapper = connect(mapState, mapDispatch)(App);

function AppWrapper(){
  return(
    <Provider store={store}>
      <ReduxWrapper/>
    </Provider>
  );
}

export {AppWrapper};