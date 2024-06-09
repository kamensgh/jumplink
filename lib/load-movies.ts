export async function loadPosts() {
  // Call an external API endpoint to get posts
 const res = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
   method: 'GET',
   headers: {
     'x-rapidapi-key': 'aaae9a5713msh443d7b969725018p156461jsn8e5ee1c2f3c5',
     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
   },
 });
 const movies = await res.json();

  return movies;
}
