import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeItem } from "./actions/index";
import { connect } from "react-redux";

const App = ({ state, addFeature, removeItem }) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("app.js remove feature");
    removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("app.js buy Item feature", item);
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

// export default App;
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  { addFeature, removeItem }
)(App);
