import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import archiveReducer from '../reducers/archiveReducer';
import editReducer from '../reducers/editReducer';
import notesDataReducer from '../reducers/notesDataReducer';
import trashReducer from '../reducers/trashReducer';
import userAuthReducer from '../reducers/userAuthReducer';

const configureStore=()=>{
    const store=createStore(combineReducers({
     data:userAuthReducer,
     notesData:notesDataReducer,
     editData:editReducer,
     archivedData:archiveReducer,
     trashData:trashReducer
    }),applyMiddleware(thunk))
   return store
}
export default configureStore