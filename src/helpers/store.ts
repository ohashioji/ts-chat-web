import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import roomReducer from "./manageRoomSlice";

export function makeStore() {
	return configureStore({
		reducer: { user: userReducer, room: roomReducer },
	});
}
const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
