export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const addFeature = feature => {
  console.log("we made it into the add feature action");
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeItem = feature => {
  return {
    type: "REMOVE_FEATURES",
    payload: feature
  };
};
