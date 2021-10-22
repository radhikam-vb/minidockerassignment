import { combineReducers } from "redux";

import BotReducer from "./Bot/Bot-reducer";

const rootReducer = combineReducers({
  shop: BotReducer,
});

export default rootReducer;