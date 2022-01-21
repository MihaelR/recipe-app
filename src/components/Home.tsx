import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider/Slider";
import { View } from "./View";
import Cooking from "./assets/cook3.jpg";
import { HomeRecipe } from "./interfaces/interfaces";
import { toast } from "react-toastify";

export const Home = (props: HomeRecipe) => {
  // Search based on title.
  const [searchField, setSearchField] = useState("");

  /* Search, filter based on name or email. */
  const filteredContacts = props.recipes?.filter((recipe: any) => {
    return recipe.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e: any): void => {
    setSearchField(e.target.value);
  };

  return (
    <div className="main">
      {/* Carousel */}
      <div className="carousel">
        <Slider recipes={props?.recipes} />
      </div>
      {/* Add new recipe */}
      <div className="link-container">
        <button className="btn btn-success btn-md">
          <Link className="link" to="/add">
            Add new recipe{" "}
          </Link>
        </button>
        <input
          type="search"
          onChange={handleChange}
          className="form-control"
          placeholder="Search recipe..."
        ></input>
      </div>
      {/* Table with recipes */}
      <div className="table-container">
        <img className="cooking-img" src={Cooking} alt="Cooking" />
        <div className="view-container">
          {props?.recipes.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Duration</th>
                      <th>Instruction</th>
                      <th>Image</th>
                      <th>Delete</th>
                      <th>Show</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View
                      filteredContacts={filteredContacts}
                      deleteRecipe={props?.deleteRecipe}
                      showRecipe={props?.showRecipe}
                    />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => {
                  props?.setRecipes([]);
                  toast.success("Recipes Deleted Successfully");
                }}
              >
                Remove All
              </button>
            </>
          )}
          {props?.recipes.length < 1 && <div>No recipes are added yet</div>}
        </div>
      </div>
    </div>
  );
};
