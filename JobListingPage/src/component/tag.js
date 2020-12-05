import React from 'react';
import {connect, Provider} from 'react-redux';
import {store, mapState, mapDispatch} from '../redux.js';
import { Icon } from '@iconify/react';
import bxX from '@iconify/icons-bx/bx-x';
import './tag.less';

function Tag(props) {
  
  function handleClick(){
    props.handleAddFilter(props.text);
  }

  return (
    <div className="tag normalBorder" onClick={handleClick}>
      <p className="tag-name">{props.text}</p>
    </div>
  );
}

function TagWX(props){

  function handleClick(){
    props.handleRemoveFilter(props.text);
  }

  return (
    <div className="d-flex tagx">
      <div className="tag filterBorder">
        <p className="tag-name">{props.text}</p>
      </div>
      <div className="x-icon d-flex align-items-center" onClick={handleClick}>
        <Icon className="theIcon" icon={bxX} style={{color: '#e7fefe', fontSize: '24px'}} />
      </div>
    </div>
    
  );
}

const TagConnect = connect(mapState, mapDispatch)(Tag);
const TagWXConnect = connect(mapState, mapDispatch)(TagWX); 

function TagWrapper(props){
  return (
    <Provider store={store}>
      <TagConnect text={props.text}/>
    </Provider>
  )
}

function TagWXWrapper(props){
  return (
    <Provider store={store}>
      <TagWXConnect text={props.text}/>
    </Provider>
  )
}

export {TagWrapper, TagWXWrapper};