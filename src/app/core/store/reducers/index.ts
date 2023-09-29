import * as fromLayoutReducer from './layout.reducers';
import * as fromUserReducer from './user.reducers';

export interface State {
  layout: fromLayoutReducer.State;
  user: fromUserReducer.userState;
}

export const reducer = {
  layout: fromLayoutReducer.reducer,
  user: fromUserReducer.reducer,
};
