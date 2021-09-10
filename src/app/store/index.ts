import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lotrDeckReducer from 'app/slices/lotrDeckSlice';

export const store = configureStore({
  reducer: {
    lotrDeck: lotrDeckReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
