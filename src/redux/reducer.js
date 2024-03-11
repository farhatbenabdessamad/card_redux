import { ADDMOVIE, DELETEMOVIE, EDITMOVIE } from "./actiontype"

const initialState = {
    movies:[
        {
          "title": "spaider man ",
          "poster": "https://fr.web.img5.acsta.net/medias/nmedia/00/00/00/33/spiderman.jpg",
          "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "rating": "9.3",
          "id": "1"
        },
        {
          "title": "The Godfather",
          "poster": "https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg",
          "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          "rating": "9.2",
          "id": "2"
        },
        {
          "title": "The Dark Knight",
          "poster": "https://ew.com/thmb/B0w9qzmQqCZ1tumxv8cBx0aPTrQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mcddakn_ec005-2000-a3d30c1958fb442486fb1e10ba92dd17.jpg",
          "description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
          "rating": "9.0",
          "id": "3"
        }
      ]
    
}

export const moviesRed = (state = initialState,action) => {
  switch (action.type) {

  case ADDMOVIE:
    return { ...state, movies:[...state.movies,action.payload] }
  case DELETEMOVIE:
        return { ...state, movies:state.movies.filter(
            (e)=>e.id !== action.payload
        ) }
    
 case EDITMOVIE:
  return {...state, movies: state.movies.map(e => e.id=== action.payload.id? e=action.payload.data: e)}
        default:
    return state
  }
}
