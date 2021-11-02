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
            <h2>{movies.category}</h2>
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
