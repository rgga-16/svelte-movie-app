export const load = async({ fetch, params }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=6c5762e26264089fee02b959c6b5343b&language=en-US`
    );
    const movieDetail = await res.json();
    if (res.ok) {
        return {
            props: {movieDetail}
        };
    }
    
}