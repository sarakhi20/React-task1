import React from "react";
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

const Box = ({ element }) => {
  return (
    <>
      <div className="col-md-4" style={{backgroundColor:"white"}}>
        <div className="card  rounded-3 shadow-md">
          <div className="card-header py-3">
            <h5 className="my-0 fw-normal text-center text-muted text-opacity-20">
              {element.title}
            </h5>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title text-center p-3 border-bottom">
              ${element.price}/month
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              {element.features.map((feature, index) => {
                return (
                  <li key={index}>
                    {feature.enable ? (
                      <span className="text-dark">
                        <TiTick />
                        {feature.name}
                      </span>
                    ) : (
                      <>
                        <span className="text-muted opacity-25">
                          <FaXmark />
                          {feature.name}
                        </span>{" "}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              className="w-100 btn btn-lg btn-primary rounded-pill" style={{backgroundColor:"blue"}}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;