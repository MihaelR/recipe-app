import React from "react";
import { Icon } from "react-icons-kit";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { Link } from "react-router-dom";
import { trash } from "react-icons-kit/feather/trash";
import { ViewProp } from "./interfaces/interfaces";

export const View = (props: ViewProp) => {
  return (props?.filteredContacts as any).map((recipe: any) => (
    <tr key={recipe.id}>
      <td>{recipe.title}</td>
      <td>{recipe.duration}</td>
      <td>{recipe.instruction}</td>
      <td>
        <a href={`https://${recipe.image}/`} target="_blank">
          {recipe.image}
        </a>
      </td>
      <td className="delete-btn" onClick={() => props?.deleteRecipe(recipe.id)}>
        <Icon icon={trash} />
      </td>
      <td onClick={() => props?.showRecipe(recipe.id)}>
        <Link className="show-link" to="/show">
          <Icon icon={iosEye} />
        </Link>
      </td>
    </tr>
  ));
};
