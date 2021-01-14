
import React, { useState, useEffect } from 'react';
import "./App.css";
import { Link, Route, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";

function App() {

  const [movies, setMovies] = useState([{
    id: "1",
    Title: "The Godfather",
    Year: "1972",
    Description: "very good movie",
    Trailer: "https://www.youtube.com/watch?v=sY1S34973zA&ab_channel=Fan-MadeFilmTrailers",
    Rate: "9",
    Poster: "https://img.auctiva.com/imgdata/1/9/8/3/0/8/8/webimg/918848030_o.jpg"
  },
  {
    id: "2",
    Title: "Superman ",
    Year: "1994",
    Description: " nice movie ",
    Trailer: "https://www.youtube.com/watch?v=pUwxH4SM9Rg&ab_channel=DC",
    Rate: "7",
    Poster: "https://www.enjpg.com/img/2020/superman-2.png"
  },
  {
    id: "3",
    Title: "The Dark Knight",
    Year: "2008",
    Description: " cool movie",
    Trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=MovieclipsClassicTrailers",
    Rate: "9",
    Poster: "https://sutanrajaamurang.co/wp-content/uploads/2020/04/dark-knight-posters-the-poster-batman-joker-amazing-free-download.jpg"
  },
  {
    id: "4",
    Title: "Seven",
    Year: "1995",
    Description: " very good movie",
    Trailer: "https://www.youtube.com/watch?v=znmZoVkCjpI&ab_channel=MovieclipsClassicTrailers",
    Rate: "8",
    Poster: "https://i.pinimg.com/originals/8f/41/ec/8f41eca12bfaeaf9662431abe3bbc0a6.jpg"
  },
  {
    id: "5",
    Title: "Angry men",
    Year: "1957",
    Description: " okay movie ",
    Trailer: "https://www.youtube.com/watch?v=_13J_9B5jEk&ab_channel=MovieclipsClassicTrailers",
    Rate: "8",
    Poster: "https://flxt.tmsimg.com/assets/p2084_p_v10_ad.jpg"
  }

  ]);


  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  let [test, setTest] = useState([]);


  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = movies.filter(movie =>
      movie.Title.toLowerCase().includes(searchTerm) ||
      movie.Rate.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, movies]);



  return (
    <div className="">
      <header style={{ textAlign: "center", color: "white" }} >
        <h1>Movies List</h1>
      </header>
      <main>
        <Route exact path="/">
          <section className="searchbox-wrap">
            <input
              type="text"
              className="searchbox"
              placeholder="Search for a movie.."
              value={searchTerm}
              onChange={handleChange}
            />
          </section>

          <section className="searchbox-wrap" style={{ textAlign: "center" }}>
            <br /><br />
            <div style={{ color: "white", display: "flex", margin: "0px 100px" }} >
              <h5>Movie Title </h5> <input className="searchbox1" type="text" name="title" onChange={(e) => { setData({ ...data, Title: e.target.value }) }} />
              <h5>Movie Rate</h5> <input className="searchbox1" type="text" name="rate" onChange={(e) => { setData({ ...data, Rate: e.target.value }) }} />
              <h5>Movie Poster</h5> <input className="searchbox1" type="text" name="poster" onChange={(e) => { setData({ ...data, Poster: e.target.value }) }} />
              <h5>Movie Description</h5> <input className="searchbox1" type="text" name="poster" onChange={(e) => { setData({ ...data, Description: e.target.value }) }} /><br />
            </div> <br />
            <div>
              <button className="btn" onClick={(e) => {
                e.preventDefault()
                setMovies([...searchResults, data]);
              }
              }> Add movie </button> </div>

          </section>
        </Route>
        <section>

          <div className="results">
            {searchResults.map(filteredMovie => (
              <div className="result" >

                <Route exact path="/" >
                  <Link to="/newpage" onClick={() => {
                    test = [];
                    setTest([...test, filteredMovie]);
                  }
                  }>
                    <h3>{filteredMovie.Title}</h3>
                    <h3> {filteredMovie.Rate} </h3>
                    <img src={filteredMovie.Poster} alt="" ></img>
                  </Link>
                </Route>

              </div>
            ))}

            {test.map(teest => (<div className="center1">
              <Route exact path="/newpage">

                <h3 style={{color:"white"}}> Description : {teest.Description}</h3><br /><br/>
                <h3 style={{color:"white"}}> Trailer video : </h3><br /><br/> <ReactPlayer url={teest.Trailer} controls={true}/> <br /><br/>
                <button  className="btn" onClick={() => history.push("/")}> go back to movies list </button>

              </Route>
            </div>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
}
export default App;



