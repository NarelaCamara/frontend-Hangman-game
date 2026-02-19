import "./styles.css";

export const LetterAlphabet = ({
  letter,
  clickedLetter,
  onClick,
}: {
  letter: string;
  clickedLetter?: boolean;
  onClick: (letter: string) => void;
}) => {
  console.log(" letter,  clickedLetter, ", letter, clickedLetter);
  return (
    <div
      className={`${clickedLetter ? "letter__alphabet--clicked" : "letter__alphabet"}`}
      onClick={() => onClick(letter)}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
