
export const load = async({ fetch }) => {

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=6c5762e26264089fee02b959c6b5343b&language=en-US&page=1`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            props: {popular: data.results}
        };
    }
    
}