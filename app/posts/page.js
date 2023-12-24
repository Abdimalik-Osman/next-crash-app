
// revalidate the page every 1 hour

import Link from "next/link";

// export const revalidate = 3600
const  Posts =  async() =>{
  const posts = await fetch('http://localhost:3000/api/post',{cache: 'no-store'});
  const postData = await posts.json();
  return (
    <>
   <h1>Hello from the post page</h1>
    {
      postData.map((post) =>(
        <div key={post.id} className="">
        <Link href={`/posts/${post.id}`} className="list-item">{post.title}</Link>
        <Link href={`/posts/${post.id}`}>{post.body}</Link>
        </div>
      ))
    }
  </>
  )
}

export default Posts;