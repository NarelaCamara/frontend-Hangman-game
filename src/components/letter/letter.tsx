import "./styles.css";

export const Letter = ({ letter }: { letter: string }) => {
  return letter === " " ? (
    <div className="space"></div>
  ) : (
    <div className="letter">{String(letter).toLocaleUpperCase()}</div>
  );
};
