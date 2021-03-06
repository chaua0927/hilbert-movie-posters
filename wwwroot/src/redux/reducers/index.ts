import { AppState, BaseAction } from '../../types/index';
import { MoviePostersEntityReducer } from './entities/reducer-movie-posters';
import { MoviesEntityReducer } from './entities/reducer-movies';
import { ReviewsEntityReducer } from './entities/reducer-reviews';
import { MainMoviePostersListReducer } from './ui/reducer-main-movie-posters-list';
import { UiGlobalsReducer } from './ui/reducer-ui-globals';
import { THEME_DEFAULT, SR_OFF, UI_INIT, ANIMATIONS_ON } from '../constants';

const initialState = {
    entities: {
        moviePosters: {
            byId: {},
            allIds: []
        },
        movies: {
            byId: {},
            allIds: []
        },
        reviews: {
            byId: {},
            allIds: []
        }
    },
    ui: {
        uiGlobals: {
            theme: THEME_DEFAULT as THEME_DEFAULT,
            srMode: SR_OFF as SR_OFF,
            animationMode: ANIMATIONS_ON as ANIMATIONS_ON
        },
        mainMoviePostersList: {
            moviePosters: [],
            state: UI_INIT as UI_INIT
        }
    }
}

export const RootReducer = (state: AppState = initialState, action: BaseAction ) => {
    const moviePostersEntity = state.entities.moviePosters;

    return ({
        entities: {
            moviePosters: MoviePostersEntityReducer(state.entities.moviePosters, action),
            movies: MoviesEntityReducer(state.entities.movies, action),
            reviews: ReviewsEntityReducer(state.entities.reviews, action)
        }, 
        ui: {
            mainMoviePostersList: MainMoviePostersListReducer(state.ui.mainMoviePostersList, action, moviePostersEntity),
            uiGlobals: UiGlobalsReducer(state.ui.uiGlobals, action)
        }
    });
} 

// //Store Schema
// {
//     entities: {
//         moviePosters: {
//             byId: {
//                 1: {
//                     id: 1,
//                     name: "bach"
//                 }
//             },
//             allIds: [1,3]
//         },
//         movies: {
//             byId: {
//                 ...
//             },
//             allIds: [...]
//         },
//         reviews: {
//             byId: {
//                 ...
//             },
//             allIds: [...]
//         }
//     },
//     ui: {
//         mainMoviePostersList: {
//             state: DATA_LOADED, //INIT | LOADING | LOADED | ERROR
//             moviePosters: [1,3]
//         }
//     }
// }