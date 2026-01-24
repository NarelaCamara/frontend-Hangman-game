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
      <h2>{step}</h2>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
