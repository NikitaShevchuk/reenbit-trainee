import { RootState } from './../store';
export const isAuthorizedSelector = (state: RootState) => state.profileSlice.isAuthorized;
export const profileSelector = (state: RootState) => state.profileSlice.profile;
