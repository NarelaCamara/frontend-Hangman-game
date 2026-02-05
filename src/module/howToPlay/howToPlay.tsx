import { Card } from "../../components/card/card";
import "./styles.css";

export const HowToPlay = ({
  setRoute,
}: {
  setRoute: (route: string) => void;
}) => {
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
      {steps.map((e) => (
        <Card title={e.title} step={e.step} description={e.description} />
      ))}
    </div>
  );
};
