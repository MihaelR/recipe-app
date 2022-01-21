export interface BtnSliderProp {
  direction: any;
  moveSlide: any;
}

export interface SliderProp {
  recipes: any[];
}

export interface ViewProp {
  filteredContacts: any;
  showRecipe: (id: string) => void;
  deleteRecipe: (id: string) => void;
}

export interface AddRecipeProps {
  title: string;
  duration: string;
  instruction: string;
  image: string;
  setTitle: (e: any) => void;
  setDuration: (e: any) => void;
  setInstruction: (e: any) => void;
  setImage: (e: any) => void;
  handleAddRecipeSubmit: (e: any) => void;
}

export interface ShowProp {
  recipeId: any;
}

export interface HomeRecipe {
  recipes: any[];
  setRecipes: ([]) => void;
  showRecipe: (id: string) => void;
  deleteRecipe: (id: string) => void;
}
