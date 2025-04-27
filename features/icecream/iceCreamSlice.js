const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, actions) => {
      state.numberOfIceCreams += actions.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions
