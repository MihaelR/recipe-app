import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";
import { AddRecipe } from "./components/AddRecipe";
import { Home } from "./components/Home";
import { ShowRecipe } from "./components/ShowRecipe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Getting the values from local storage.
const getDatafromLS = () => {
  const data = localStorage.getItem("recipes");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  const navigate = useNavigate();
  //  Recipes array of objects.
  const [recipes, setRecipes] = useState(getDatafromLS());
  // Input field states.
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [instruction, setInstruction] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(uuidv1());
  const [recipeId, setRecipeId] = useState();

  // Form submit event.
  const handleAddRecipeSubmit = (e: any) => {
    e.preventDefault();
    // Creating an recipe object.
    let recipe = {
      title,
      duration,
      instruction,
      image,
      id,
    };
    /* Set states. */
    setRecipes([...recipes, recipe]);
    setTitle("");
    setDuration("");
    setInstruction("");
    setImage("");
    setId(uuidv1());
    /* Return to Home component.  */
    navigate("/");
    toast.success("Recipe Added Successfully");
  };

  // Delete recipe from LS.
  const deleteRecipe = (id: string) => {
    const filteredRecipes = recipes.filter((element: any, index: string) => {
      return element.id !== id;
    });
    setRecipes(filteredRecipes);
    toast.success("Recipe Deleted Successfully");
  };

  // Show recipe .
  const showRecipe = (id: string) => {
    const filteredRecipes = recipes.filter((element: any, index: string) => {
      return element.id === id;
    });
    setRecipeId(filteredRecipes);
  };

  // Saving data to local storage.
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div id="app">
      {/* Notifications */}
      <ToastContainer />
      {/* Home- carousel + table */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              deleteRecipe={deleteRecipe}
              showRecipe={showRecipe}
            />
          }
        />
        <Route
          path="/add"
          element={
            <AddRecipe
              handleAddRecipeSubmit={handleAddRecipeSubmit}
              title={title}
              setTitle={setTitle}
              duration={duration}
              setDuration={setDuration}
              instruction={instruction}
              setInstruction={setInstruction}
              image={image}
              setImage={setImage}
            />
          }
        />
        <Route path="/show" element={<ShowRecipe recipeId={recipeId} />} />
      </Routes>
    </div>
  );
};

export default App;
