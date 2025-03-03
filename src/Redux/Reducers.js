import { SET_USER_EMAIL, SET_USER_NAME, SET_AUTH_TOKEN, SET_USER_CAR,SET_USER_FLAT,SET_MODE_VALUE,SET_STATE_VALUE,SET_USER_ENERGY,SET_USER_PRODUCTKEY,SET_USER_PRODUCT} from './Action';


const initialState = {
    Total_Current: "",
    email: "",
    authtoken:"",
    Battery_Pack:"",
    House:"",
    Car:"",
    modeValue:"",
    StateValue:"",
    SetEnergy:"",
    setProductkey:"",
    Product:[],
}

function userReducers(state = initialState, action) {
    switch (action.type) {
      case SET_USER_NAME:
        return { ...state, Total_Current: action.payload };
        case SET_USER_EMAIL:
          return { ...state, email: action.payload };
        case SET_USER_PRODUCTKEY:
          return { ...state, setProductkey: action.payload };
          case SET_USER_CAR:
        // console.log("harshsample",action);
        return { ...state, Battery_Pack: action.payload.Battery_Pack ,Car:action.payload.Car};
          case SET_USER_FLAT:
        // console.log("harshsample",action);
        return { ...state, House: action.payload };
          case SET_MODE_VALUE:
        // console.log("harshsahgmple",action);
        return { ...state, modeValue: action.payload };
          case SET_USER_PRODUCT:
        // console.log("harshsahgmple",action);
        return { ...state, Product: action.payload };
          case SET_STATE_VALUE:
        // console.log("harshsahgmple",action);
        return { ...state, StateValue: action.payload };
          case SET_USER_ENERGY:
        // console.log("harshsahgmple",action);
        return { ...state, SetEnergy: action.payload };
      case SET_AUTH_TOKEN:
        // console.log("harshsample",action);
        return { ...state, authtoken: action.payload };
      default:
        return state;
    }
  }
  

export default userReducers;