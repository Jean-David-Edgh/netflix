import Film from "./Film";
import data from "../assets/data.json";

let array = data.map((elem, index) => {
  return elem;
});

let cover = (img) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
};

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
