import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCounterUser = createSelector(
    [selectUser],
    user => user.currentUser
);


