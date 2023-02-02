<script>
    export let data;
    let query = data.props.searchQuery;
    let searchResults = data.props.searchResults;
    import MovieCard from "../../../components/MovieCard.svelte";
    import SearchMovies from "../../../components/SearchMovies.svelte";
</script>

<!-- <SearchMovies /> -->
<h3>Search results for "{query}"</h3>
<div class="searched-movies">
    {#each searchResults as movie}
        <MovieCard {movie} />
    {/each}
</div>

<style>
    h3  {
        padding: 0 1rem;
    }
    .searched-movies {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>