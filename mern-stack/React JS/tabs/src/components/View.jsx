import React from "react";
import AnimatedText from "react-animated-text-content";

const View = (props) => {
  return (
    <div className="view">
      <h4>
        <AnimatedText
          type="chars" // animate words or chars
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="wave"
          interval={0.06}
          duration={0.5}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          {props.content}
        </AnimatedText>
        
      </h4>
    </div>
  );
};

export default View;
