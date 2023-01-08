export const incrementCounter = (data) => {
  return {
    type: "INCREASE",
    data: data,
  };
};

export const decrementCounter = () => {
  return {
    type: "DECREASE",
  };
};

export const resetCounter = () => {
  return {
    type: "RESET",
  };
};

export const zeroCounter = () => {
  return {
    type: "ZERO",
  };
};
