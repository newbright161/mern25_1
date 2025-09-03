import React from 'react';
import SuccessChild from "./SuccessChild.jsx";
import SuccessStory from "./SuccessStory.jsx";

export default class Success extends React.Component {
  render() {
    return (
      <div>
        <h1>Success</h1>
        <h2>Hello From Success</h2>
        <h3>React Assesment 2025</h3>

        <SuccessChild
          name="Ryan Prettypaul"
          address="USA"
          StoryComponent={SuccessStory}
        />
      </div>
    );
  }
}
