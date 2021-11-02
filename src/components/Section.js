import FilmList from "./FilmList";
import Category from "./Category";

import data from "../assets/data.json";
// const arrayOfNames = [{ name: "Bastien" }, { name: "Tom" }, { name: "Farid" }];

const Section = () => {
  return (
    <div>
      {/* {arrayOfNames.map((item) => {
        console.log(item);
        return <h1>{item.name}</h1>;
      })} */}
      {data.map((movies, index) => {
        return (
          <>
            <h1>{movies.category}</h1>
            <div class="moviesList">
              {movies.images.map((pic, index) => {
                return <img src={pic} alt="" />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Section;
