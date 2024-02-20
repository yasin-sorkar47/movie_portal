import star from "../../assets/star.svg";
export default function Ratting({ value }) {
  const ratings = Array(value).fill(star);
  return (
    <>
      {ratings.map((rating, index) => (
        <img key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
