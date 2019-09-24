import React, { useEffect, useState } from 'react';
import { MoviePosterListProps } from '../types/index';
import { ListEmpty } from './list-empty';
import { MoviePoster } from './movie-poster';
import '../styles/components/movie-poster-list';



export function MoviePosterList(props: MoviePosterListProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [moviePosters, setMoviePosters] = useState([]);

    let isListEmpty: boolean  = !moviePosters.length;

    async function loadMoviePosters(url: string): Promise<void> {
        setIsLoading(true);
        setIsError(false);
        try {
            await fetch(url)
                .then(response => response.json())
                .then(response => { 
                    setMoviePosters(response);
                    isListEmpty = !moviePosters.length;
                    setIsLoading(false);
                });
        } catch (e) {
            setIsError(true);
            throw new Error('Error in retrieving initial movie poster data...');
        }
    }

    useEffect(() => {
        if (isLoading && isListEmpty) { 
            loadMoviePosters(props.getMoviePostersUrl); 
        }
    }, [moviePosters]);

    return (
        <ul className="movie-posters">
            { isError && <div>Something went wrong...</div> }
            {
                isListEmpty ? <ListEmpty/> : moviePosters.map((moviePoster: IMoviePosterData) => (
                    <li key={moviePoster.moviePosterId}>
                        <MoviePoster 
                            moviePosterName={moviePoster.name} 
                            moviePosterYear={moviePoster.year} 
                        />
                    </li>
                    ))
            }
        </ul>
    );
}
