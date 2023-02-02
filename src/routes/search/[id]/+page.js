

export const load = async({ fetch, params }) => {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6c5762e26264089fee02b959c6b5343b&language=en-US&query=${params.id}&page=1&include_adult=false`
    );
    const data = await res.json();

    if (res.ok) {
        return {
            props: {searchResults:data.results, searchQuery:params.id}
        };
    }
    
}