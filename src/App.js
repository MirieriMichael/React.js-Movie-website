
import SearchIcon from'./search.svg';
import{useState,useEffect} from 'react';
import MovieCard from './MovieCard';
import'./App.css';
//7ff7dd9a


/*const Person=(props)=> {
  return(
    <>
    <h4>
    Name:{props.name}
  </h4>
  <h5>
  LastName:{props.lastname}</h5>
<h6>
Age:{props.age}</h6>
  </>
  )
}*/

 /*const  App= ()=> {
  const[counter,setCounter]=useState(0);
  //const name="Jane";
  //const isNameShowing=true;
  useEffect(() =>
  {
//alert('youve  changed the counter to'+counter)
setCounter(0);
  },[]);
  return (
    <div className="App">

<button onClick={()=>setCounter((prevCount) => prevCount-1)}>-</button>
<h1>{counter}</h1>
<button onClick={()=>setCounter((prevCount) => prevCount+1)}>+</button>

    </div>
    )


  //</div> {/*} <Person name ='John' lastname='Doe' age={30} />
     //<Person name="Mary" lastname='Doe' age={35}/>
  //*/
   /* <h1>Hello</h1>
<h1>
  {
    name ? (
    <h1>{name}</h1>
    ):(
      <h2>There is no name</h2>
    )
  }
</h1>*/
  
const API_URL="http://www.omdbapi.com?apikey=b6003d8a";

const App=()=>{
  const[searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    searchMovies("Batman");}

  ,[]);
  const searchMovies= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);

    const data=await response.json();
    setMovies(data.Search);

  };
  return(
<div className="app">
  <h1>Movies</h1>

<div className="search">
<input placeholder='search for a movie' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
  
  />
<img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)}/>
</div>

{movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
