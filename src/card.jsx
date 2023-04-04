export function Card(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img} height="100px" alt="avatar" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
