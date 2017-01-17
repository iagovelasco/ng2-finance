import { ActionReducer, Action } from '@ngrx/store';
import { WatchlistStateInterface, WatchlistInitialState } from './watchlist.state';
import { WatchlistActions } from './watchlist.actions';

const initialState:WatchlistStateInterface = new WatchlistInitialState() as WatchlistStateInterface;

export const watchlistReducer:ActionReducer<WatchlistStateInterface> =
  (state:WatchlistStateInterface = initialState, action:Action = null) => {
  switch (action.type) {
    case WatchlistActions.FETCH_STOCKS_FULFILLED:
      return state.set('data', action.payload);
    default:
      return state;
  }
};
