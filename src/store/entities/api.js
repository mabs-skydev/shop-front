const { createAction } = require("@reduxjs/toolkit");

export const apiCallBegan = createAction("api/callBegan");
export const apiCallFailed = createAction("api/callFailed");
