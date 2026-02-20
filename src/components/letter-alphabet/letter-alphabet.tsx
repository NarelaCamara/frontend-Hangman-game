import "./styles.css";

export const LetterAlphabet = ({
  letter,
  lettersClicked,
  onClick,
}: {
  letter: string;
  lettersClicked?: string[];
  onClick: (letter: string) => void;
}) => {
  return (
    <div
      className={`${lettersClicked?.some((e) => e === letter) ? "letter__alphabet--clicked" : "letter__alphabet"}`}
      onClick={() => onClick(letter)}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
