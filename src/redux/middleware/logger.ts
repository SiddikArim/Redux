const Logger = (state) => (next) => (action) => {
  console.log("this is the state", state.getState());
  console.log("this the action", action);
  next(action);
  console.log("this is the state", state.getState());
};

export default Logger;
