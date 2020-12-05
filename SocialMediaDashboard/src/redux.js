import {createStore} from 'redux';

const SWITCH = 'SWITCH';

function handleSwitch(status){
  if (status === 'on'){
    return {
      type: SWITCH,
      theme: 'light'
    };
  } else {
    return {
      type: SWITCH,
      theme: 'dark'
    };
  }
}

function switchReducer(state={theme: 'dark'}, action){
  switch(action.type){
    case SWITCH:
      return {
        theme: action.theme
      };
    default:
      return state;
  };
}

const store = createStore(switchReducer);

const mapState = (state)=>{
  return {
    theme: state.theme
  };
};

const mapDispatch = (dispatch)=>{
  return {
    handleSwitch: (status)=>{
      dispatch(handleSwitch(status)); 
    }
  };
};

export {store, mapDispatch, mapState};
