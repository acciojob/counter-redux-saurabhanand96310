import { legacy_createStore as createStore } from "redux";

const reducer=(state={count:0},action)=>{
switch(action.type){
    case "inc":{return {count:state.count+1}};
    case "dec": {return {count:state.count-1}};
    default:return state;
}


}
const Store=createStore(reducer)

export default Store