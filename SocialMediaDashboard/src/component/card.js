import React from 'react';
import {useEffect, useState} from 'react';
import {mapState} from '../redux.js';
import {connect} from 'react-redux';

import './css/card.css';
import '../color.css';


function Card(props){

  const [changeIcon, setChangeIcon] = useState("icon-up");
  const [cssTheme, setCssTheme] = useState({
    bgColor: "card-bg-dark",
    textColor: "greyish-text-dark",
    bigTextColor: "white-text"
  });

  useEffect(()=>{
    if (props.theme === 'light'){
      setCssTheme({
        bgColor: "card-bg-light",
        textColor: "greyish-text-lg",
        bigTextColor: "black-text"
      });
    } else {
      setCssTheme({
        bgColor: "card-bg-dark",
        textColor: "greyish-text-dark",
        bigTextColor: "white-text"
      });
    }
  }, [props.theme]);

  useEffect(()=>{
    if (props.data.changes > 0){
      setChangeIcon("icon-up");
    } else {
      setChangeIcon("icon-down");
    }
  }, [props.data.changes]);

  return (
    <div className={"card-lg " + cssTheme.bgColor}>
      <div className="cardLine" style={{"background": props.data.color}}></div>
      <div className="cardTag">
        <img alt="social media brand icon" className="icon-brand" src={process.env.PUBLIC_URL + "/" + props.data.icon}/>
        <p className={cssTheme.textColor}>{props.data.handle}</p>
      </div>
      <p className={"cardNb " + cssTheme.bigTextColor}>{props.data.followers}</p>
      <p className={"cardFol " + cssTheme.textColor}>FOLLOWERS</p>
      <div className="cardChanges">
        <img  alt="up or down in changes icon" className="iconChanges" src={process.env.PUBLIC_URL + "/images/" + changeIcon + ".svg"}/>
        <p className={changeIcon}>{props.data.changes} Today</p>
      </div>
    </div>
  );
}


function SmallCard(props){

  const [changeIcon, setChangeIcon] = useState("icon-up");
  const [cssTheme, setCssTheme] = useState({
    bgColor: "card-bg-dark",
    textColor: "greyish-text-dark",
    bigTextColor: "white-text"
  });

  useEffect(()=>{
    if (props.theme === 'light'){
      setCssTheme({
        bgColor: "card-bg-light",
        textColor: "greyish-text-lg",
        bigTextColor: "black-text"
      });
    } else {
      setCssTheme({
        bgColor: "card-bg-dark",
        textColor: "greyish-text-dark",
        bigTextColor: "white-text"
      });
    }
  }, [props.theme]);

  useEffect(()=>{
    if (props.data.changes > 0){
      setChangeIcon("icon-up");
    } else {
      setChangeIcon("icon-down");
    }
  }, [props.data.changes]);

  return(
    <div className={"card-sm " + cssTheme.bgColor}>
      <div className="card-sm-row">
        <p className={"mLeft card-sm-title " + cssTheme.textColor}>{props.data.category}</p>
        <img alt="social media brand icon" className="mRight icon-brand" src={process.env.PUBLIC_URL + "/" + props.data.icon}/>
      </div>
      <div className="card-sm-row">
        <p className={"mLeft card-sm-count " + cssTheme.bigTextColor}>{props.data.count}</p>
        <div className="mRight cardChanges">
          <img alt="up or down in changes icon" className="iconChanges" src={process.env.PUBLIC_URL + "/images/" + changeIcon +".svg"}/>
          <p className={changeIcon}>{props.data.changes}%</p>
        </div>
      </div>
    </div>
  );
}

const CardWrapper = connect(mapState)(Card);
const SmallCardWrapper = connect(mapState)(SmallCard);

export {CardWrapper, SmallCardWrapper};