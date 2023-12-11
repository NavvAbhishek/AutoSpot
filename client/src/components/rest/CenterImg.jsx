const CenterImg = ({ center, index = 0, className = null }) => {
  if (!center.photos?.length) {
    return "";
  }

  if (!className) {
    className = "object-cover";
  }

  return (
    <img
      className={className}
      src={"http://localhost:4000/uploads/"+center.photos[index]}
      alt=""
    />
  );
};

export default CenterImg;
