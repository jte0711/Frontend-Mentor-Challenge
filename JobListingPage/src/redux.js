import {createStore} from 'redux';

var initState = {
  filter: false,
  tags: []
};

const ADDFILTER = "ADDFILTER";
const REMOVEFILTER = "REMOVEFILTER";
const CLEARFILTER = "CLEARFILTER";

function handleAddFilter(tag){
  return ({
    type: ADDFILTER,
    newTag: tag
  });
}

function handleRemoveFilter(tag){
  return ({
    type: REMOVEFILTER,
    removedTag: tag
  });
}

function handleClearFilter(){
  return {
    type:CLEARFILTER,
  };
}

function filterReducer(state=initState, action){
  switch(action.type){
    case ADDFILTER:
      if (state.filter === false){
        return{
          filter: true,
          tags: [action.newTag]
        };
      } else {
        if (state.tags.includes(action.newTag)){
          return state;
        }
        return Object.assign({}, state, {
          tags: [...state.tags,action.newTag]
        });
      }
    case REMOVEFILTER:
      if (state.tags.length === 1){
        return({
          filter: false,
          tags: []
        });
      } else {
        let temp = [...state.tags];
        temp.splice(temp.indexOf(action.removedTag),1);
        return Object.assign({}, state, {
          tags: temp
        });
      }
    case CLEARFILTER:
      return ({
        filter: false,
        tags: []
      });
    default:
      return state;
  };
}

const store = createStore(filterReducer);

const mapState = (state)=>{
  return {
    filter: state.filter,
    tags: state.tags
  };
};

const mapDispatch = (dispatch)=>{
  return {
    handleAddFilter: (tag)=>{
      dispatch(handleAddFilter(tag)); 
    },
    handleRemoveFilter: (tag)=>{
      dispatch(handleRemoveFilter(tag));
    },
    handleClearFilter: ()=>{
      dispatch(handleClearFilter());
    }
  };
};

export {store, mapDispatch, mapState};
