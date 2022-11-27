async function fetchPost() {
  const req = await fetch('https://jsonplaceholder.typicode.com/posts');
  return req.json();
 }

export default fetchPost;