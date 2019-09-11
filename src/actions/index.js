export const addFeature = feature => {
  console.log(feature);
  return { type: "ADD_FEATURE", payload: feature };
};

export const removeFeature = feature => {
  return {
    type: "REMOVE_FEATURES",
    payload: feature
  };
};
