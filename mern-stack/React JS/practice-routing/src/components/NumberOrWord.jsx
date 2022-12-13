import React from "react";

const NumberOrWord = (props) => {
  return (
    <div>
      <div className="styling">
        {isNaN(props.input) ? (
          <p>
            The <strong>word</strong> is: {props.input}
          </p>
        ) : ( 
          <p>
            The <strong>number</strong> is: {props.input}
          </p>
        )}
      </div>
    </div>
  );
};

export default NumberOrWord;
