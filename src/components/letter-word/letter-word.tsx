import "./styles.css";

export const LetterWord = ({
  letter,
  lettersClicked,
}: {
  letter: string;
  lettersClicked: string[];
}) => {
  console.log(
    "LetterWord, ",
    letter,
    lettersClicked,
    lettersClicked.some((e) => e === letter),
  );
  return letter === " " ? (
    <div className="letter__space"></div>
  ) : (
    <div
      className={` ${lettersClicked.some((e) => e === letter) ? "letter__word" : "--letter__word__not__show"}`}
    >
      {String(letter).toLocaleUpperCase()}
    </div>
  );
};
