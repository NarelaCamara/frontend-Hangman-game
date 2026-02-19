import "./styles.css";

export const LetterWord = ({
  letter,
  showLetter,
}: {
  letter: string;
  showLetter: boolean;
}) => {
  return letter === " " ? (
    <div className="letter__space"></div>
  ) : (
    <div
      className={`letter__word ${showLetter ? "--letter__word__show" : "--letter__word__not__show"}`}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
