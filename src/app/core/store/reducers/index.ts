// import * as fromSystemConfigDetailReducer from './system-config.reducers';
import * as fromLayoutReducer from './layout.reducers';

export interface State {
  layout: fromLayoutReducer.State;
  // systemConfig: fromSystemConfigDetailReducer.State;
}

export const reducer = {
  layout: fromLayoutReducer.reducer,
};
