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
      <NavTitleButton text="categories" onClick={() => setRoute(routes.Menu)} />
      <div className="categories__options">
        {categories.map((e) => (
          <div onClick={() => setRoute(routes.game)}>{e}</div>
        ))}
      </div>
    </div>
  );
};
