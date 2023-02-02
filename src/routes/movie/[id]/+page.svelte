<script>
    export let data;
    let movieDetail = data.props.movieDetail;
    import {fly} from 'svelte/transition';
</script>

<div class="movie-details" in:fly={{y:50, duration:500, delay:500}} out:fly={{duration:500}}>
    <div class="img-container">
        <img src={'https://image.tmdb.org/t/p/original'+movieDetail.backdrop_path} alt="{movieDetail.title}" />
    </div>

    <div class="txt-container">
        <h1> {movieDetail.title}</h1>
        <p class="overview">  {movieDetail.overview} </p>
        <p> 
            <span> Release Date: </span> {movieDetail.release_date} <br />
            <span> Budget: </span> {movieDetail.budget} <br />
            <span> Rating: </span> {movieDetail.vote_average} <br />
            <span> Runtime: </span> {movieDetail.runtime}min
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0rem 2rem; 
    }

    p {
        padding: 1rem 0rem;
    }

    .img-container {
        width:100%; /* img {width:100%} means the image fits up to 100% width of the page. */
    }

    img{
        width:100%;
        border-radius:1rem;
    }

</style>