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
  console.log(
    " LetterAlphabet, ",
    letter,
    lettersClicked,
    lettersClicked?.some((e) => e === letter),
  );
  return (
    <div
      className={`${lettersClicked?.some((e) => e === letter) ? "letter__alphabet--clicked" : "letter__alphabet"}`}
      onClick={() => onClick(letter)}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
