import React, {useEffect,useState} from 'react';
import { Icon } from '@iconify/react';
import dotSingle from '@iconify/icons-entypo/dot-single';
import {connect, Provider} from 'react-redux';
import {store, mapState, mapDispatch} from '../redux.js';
import {TagWrapper} from './tag.js';
import './jobAds.less';

function JobAds(props){

  const [tags, setTags] = useState(<TagWrapper/>);
  const [tagList, setTagList] = useState([]);
  const [border, setBorder] = useState("");
  const [neww, setNeww] = useState("hidden");
  const [featured, setFeatured] = useState("hidden");
  const [status, setStatus] = useState("");

  useEffect(()=>{
    let temp = [props.data.role, props.data.level];

    if (props.data.languages){
      for (let i = 0; i < props.data.languages.length; i++){
        temp.push(props.data.languages[i]);
      }
    }
    
    if (props.data.tools){
      for (let i = 0; i < props.data.tools.length; i++){
        temp.push(props.data.tools[i]);
      } 
    }
    

    setTagList(temp);
  },[props.data.role, props.data.languages, props.data.level, props.data.tools]);

  useEffect(()=>{
    let temp = [];

    for (let i = 0; i < tagList.length; i++){
      temp.push(<TagWrapper text={tagList[i]} key={i}/>);
    }    

    setTags(temp);
  }, [tagList]);

  useEffect(()=>{
   if (props.data.featured){
     setBorder("borderLeft")
   } else {
     setBorder("");
   }
  },[props.data.featured]);

  useEffect(()=>{
    if (props.data.featured){
      setFeatured("")
    } else {
      setFeatured("hidden");
    }
   },[props.data.featured]);

  useEffect(()=>{
    if (props.data.new){
      setNeww("")
    } else {
      setNeww("hidden");
    }
   },[props.data.new]);

   useEffect(()=>{
    for (let i = 0; i < props.tags.length; i++){
      if (!tagList.includes(props.tags[i])){
        setStatus("hidden");
        return;
      }
    }
    setStatus("");
   }, [props.tags, tagList]);
  
  return (
    <div className={"jobads " + status + " " + border}>
      <div className="job-details">
        <img alt={"company logo"} src={process.env.PUBLIC_URL + props.data.logo}/>
        <div className="job-details-text">
          <div className="d-flex flex-row align align-items-center">
            <p className="companyName noGap">{props.data.company}</p>
            <div className={"smallNotifBox " + neww} style={{"background": "#5BA4A4"}}>
              <p className="smallNotif">NEW!</p>
            </div>
            <div className={"smallNotifBox " + featured} style={{"background": "#2C3A3A"}}>
              <p className="smallNotif">FEATURED</p>
            </div>
          </div>
          <p className="roleName noGap">{props.data.position}</p>
          <div className="job-small-text">
            <p className="smallText noGap">{props.data.postedAt}</p>
            <Icon icon={dotSingle} style={{color: '#7b8e8e', fontSize: '20px'}} />
            <p className="smallText noGap">{props.data.contract}</p>
            <Icon icon={dotSingle} style={{color: '#7b8e8e', fontSize: '20px'}} />
            <p className="smallText noGap">{props.data.location}</p>
          </div>
        </div>
      </div>
      
      <div className="job-tags">
        {tags}
      </div>
    </div>
  );
}

const ReduxWrapper = connect(mapState, mapDispatch)(JobAds);

function JobAdsWrapper(props){
  return(
    <Provider store={store}>
      <ReduxWrapper data={props.data}/>
    </Provider>
  );
}

export {JobAdsWrapper};
