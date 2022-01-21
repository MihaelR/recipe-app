import React from "react";
import { useNavigate } from "react-router-dom";
import { ShowProp } from "./interfaces/interfaces";

export const ShowRecipe = (props: ShowProp) => {
  const navigate = useNavigate();
  /* Return to Home component.  */

  return (
    <div className="show-container">
      <label>Id</label>
      <input
        type="text"
        className="form-control"
        required
        placeholder={props?.recipeId[0].id}
      ></input>
      <br></br>
      <label>Title</label>
      <input
        type="text"
        className="form-control"
        required
        placeholder={props?.recipeId[0].title}
      ></input>
      <br></br>
      <label>Duration(min)</label>
      <input
        type="text"
        className="form-control"
        required
        placeholder={props?.recipeId[0].duration}
      ></input>
      <br></br>
      <label>Instruction</label>
      <textarea
        className="form-control instruction"
        required
        placeholder={props?.recipeId[0].instruction}
      ></textarea>
      <br></br>
      <label>Link to your image</label>
      <input
        type="text"
        className="form-control"
        required
        placeholder={props?.recipeId[0].image}
      ></input>
      <br></br>
      <div className="submit-container">
        <button
          className="btn btn-danger btn-md"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};
