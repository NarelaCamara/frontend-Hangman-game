import { ButtonBlue } from "../../components/button-blue/button-blue";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { routes } from "../../utils/utils";
import "./styles.css";

export const Categorie = ({
  setRoute,
}: {
  setRoute: (route: string) => void;
}) => {
  const categories = [
    "Movies",
    "Tv Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];

  return (
    <div className="categories">
      <NavTitleButton
        text="Pick a category"
        onClick={() => setRoute(routes.Menu)}
      />
      <div className="categories__options">
        {categories.map((e) => (
          <ButtonBlue onClick={() => setRoute(routes.game)} text={e} />
        ))}
      </div>
    </div>
  );
};
