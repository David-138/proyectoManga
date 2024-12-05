type Props = {
    items: string[]
};

export default function List({items}: Props) {
  return (
    <ul className="list-group">
        {items.map((elemento)=>(
            <li className="list-group-item">{elemento}</li>
        ))}
    </ul>
  );
}
