import React from "react";
import _ from 'lodash';


const NumberOrWordRepeated = (props) => {

  return (
    <div>
      <div className="styling" style={{ color: props.fontColor, backgroundColor: props.bgColor }}
      >
        {isNaN(props.input) ? (
          <div className="flexing"><p>The <strong>word</strong> is:</p><ul>{_.times( props.times, (()=><li>{props.input}</li>) )}</ul></div>
          
        ) : (
            <div className="flexing"><p>The <strong>number</strong> is:</p><ul>{_.times( props.times, (()=><li>{props.input}</li>) )}</ul></div>

        )}
      </div>
    </div>
  );
};

export default NumberOrWordRepeated;
