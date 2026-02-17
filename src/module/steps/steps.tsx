import { Card } from "../../components/card/card";
import { NavTitleButton } from "../../components/nav-title-button/nav-title-button";
import { routes } from "../../utils/utils";

import "./styles.css";

export const Steps = ({ setRoute }: { setRoute: (route: routes) => void }) => {
  const steps = [
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      title: "Choose a category",
      step: 1,
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
  ];
  return (
    <div className="steps">
      <NavTitleButton
        text="How to play"
        onClick={() => setRoute(routes.Menu)}
      />
      <div className="steps__cards">
        {steps.map((e) => (
          <Card title={e.title} step={e.step} description={e.description} />
        ))}
      </div>
    </div>
  );
};
