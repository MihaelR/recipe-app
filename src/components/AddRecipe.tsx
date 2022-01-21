import React from "react";
import { useNavigate } from "react-router-dom";
import { AddRecipeProps } from "./interfaces/interfaces";

export const AddRecipe = (props: AddRecipeProps) => {
  const navigate = useNavigate();
  /* Return to Home component.  */

  return (
    <div className="form-container">
      <form
        autoComplete="off"
        className="form-group"
        onSubmit={props?.handleAddRecipeSubmit}
      >
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e: any) => props?.setTitle(e.target.value)}
          value={props?.title}
        ></input>
        <br></br>
        <label>Duration(min)</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => props?.setDuration(e.target.value)}
          value={props?.duration}
        ></input>
        <br></br>
        <label>Instruction</label>
        <textarea
          className="form-control instruction"
          required
          onChange={(e) => props?.setInstruction(e.target.value)}
          value={props?.instruction}
        ></textarea>
        <br></br>
        <label>Link to your image</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => props?.setImage(e.target.value)}
          value={props?.image}
        ></input>
        <br></br>
        <div className="submit-container">
          <button type="submit" className="btn btn-success btn-md">
            ADD
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            type="submit"
            className="btn btn-danger btn-md"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};
