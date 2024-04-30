import React from "react";

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <h2 className="my-4">Lista dei Post</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h3>{post.title.rendered}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
            <p>Autore: {post.author}</p>
            <p>Data di Pubblicazione: {new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
