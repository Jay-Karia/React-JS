import React, { useState } from "react";

export default function About(props) {
  return (
    <>
      <div className="container" >
        <div className="accordion my-5 mx-5" id="accordionExample"style={{backgroundColor: props.theme.bg, color:props.theme.color}}>
          <h2>About Us</h2>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.theme.anotherColor}}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"style={{backgroundColor: props.theme.otherColor}}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This word counter software works in any web browser such as Chrome, Safari, Internet Explorer, Edge, Firefox and Opera. It suits to count words, characters in facebook,blog, books, document, pdf, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
