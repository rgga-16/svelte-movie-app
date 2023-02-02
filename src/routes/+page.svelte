
<script>
    export let data; 
    
    let popular = data.props.popular;
    import PopularMovies from "../components/PopularMovies.svelte";
    import SearchMovies from "../components/SearchMovies.svelte";
    import {fly} from 'svelte/transition';
    
</script>

<section in:fly={{y:50, duration:500, delay:500}} out:fly={{duration:500}}> 
    <SearchMovies />
    <PopularMovies movies={popular}/> 
</section> 