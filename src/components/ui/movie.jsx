import React from "react";

const Movie = () => {
  return (
    <section>
      <p>Movie Component</p>
    </section>
  );
};

export default Movie;

// class App extends Component {
//     state = {
//       movie: {},
//     };

//     async componentDidMount() {
//       try {
//         const { data: movie } = await _httpService.get(
//           "https://api.themoviedb.org/3/movie/76341"
//         );
//         this.setState({ movie });
//       } catch (error) {
//         console.error(error.message);
//       }
//     }

//     render() {
//       const { movie } = this.state;
//       return (
//         <div className="App">
//           <header className="App-header">
//             <p>Movie App</p>
//             <p>{movie.original_title}</p>
//           </header>
//         </div>
//       );
//     }
//   }

//   export default App;
