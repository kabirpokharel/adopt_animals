import { Link } from "react-router-dom";
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let img = images?.length
    ? images[0]
    : "http://pets-images.dev-apis.com/pets/none.jpg"; //NOTE: default image

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
