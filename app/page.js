
// revalidate the page every 1 hour

import Link from "next/link";

// export const revalidate = 3600
const  Home =  async() =>{
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts',{next: {revalidate: 10}});
  const postData = await posts.json();
  return (
    <>
   <h1>Hello from the home page</h1>
    {
      postData.map((post) =>(
        <div key={post.id}>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))
    }
  </>
  )
}

export default Home;