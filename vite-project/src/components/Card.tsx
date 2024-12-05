import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  image: string;
};

function Card(props: Props) {
  const {children, image} = props;
  return (
    <div
      className="card"
      style={{
        background: "#bbb",
      }}
    >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

type BodyProps={
    title: string;
    text?: string;
};

export function CardBody(props: BodyProps) {
    const{title, text}=props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        añadir
      </a>
    </>
  );
}
