import React from "react";

export const Counter = (props) => {
  return (
    <div className="container-fluid" >
      <div className="row">
        
        <div className="col-3" ></div>
        <div className="col-1">
        
          <h1 className="text-center">{props.tiempo6}</h1>
        </div>
        <div className="col-1">
          <h1 className="text-center">{props.tiempo5}</h1>
        </div>
        <div className="col-1">
          <h1 className="text-center">{props.tiempo4}</h1>
        </div>
        <div className="col-1">
          <h1 className="text-center">{props.tiempo3}</h1>
        </div>
        <div className="col-1">
          <h1 className="text-center">{props.tiempo2}</h1>
        </div>
        <div className="col-1">
          <h1 className="text-center">{props.tiempo1}</h1>
        </div>
        <div className="col-3" ></div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button type="button" onClick={()=>{clearInterval(props.parar)}} className="btn btn-danger"> Detener contador</button>
      </div>
      </div>

  );
};
