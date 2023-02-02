export const load = async({ fetch, params }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API}&language=en-US`
    );
    const movieDetail = await res.json();
    if (res.ok) {
        return {
            props: {movieDetail}
        };
    }
    
}