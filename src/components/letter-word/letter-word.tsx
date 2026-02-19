import "./styles.css";

export const LetterWord = ({
  letter,
  showLetter,
}: {
  letter: string;
  showLetter: boolean;
}) => {
  console.log("LetterWord, ", letter, showLetter);
  return letter === " " ? (
    <div className="letter__space"></div>
  ) : (
    <div
      className={` ${showLetter ? "letter__word" : "--letter__word__not__show"}`}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
