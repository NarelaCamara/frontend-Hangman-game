import "./styles.css";

export const Card = ({
  title,
  step,
  description,
}: {
  title: string;
  step: number;
  description: string;
}) => {
  return (
    <div className="card">
      <h2 className="card__step">{step}</h2>
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </div>
  );
};
