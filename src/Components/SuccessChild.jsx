import React from "react";
export default function SuccessChild({ name, address, StoryComponent }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <StoryComponent />
    </div>
  );
}
