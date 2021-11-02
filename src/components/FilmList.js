import Film from "./Film";
import data from "../assets/data.json";

let array = data.map((elem, index) => {
  return elem;
});

const FilmList = () => {
  return (
    <div className="film-list">
      {data.map((elem, index) => {
        return <Film key={index} image={elem.image} />;
      })}
    </div>
  );
};

export default FilmList;
