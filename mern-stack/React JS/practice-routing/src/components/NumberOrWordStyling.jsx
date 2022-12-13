import React from "react";

const NumberOrWordStyling = (props) => {
  return (
    <div>
      <div className="styling" style={{ color: props.fontColor, backgroundColor: props.bgColor }}>
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

export default NumberOrWordStyling;
