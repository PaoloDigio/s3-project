import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import SearchForm from "./components/SearchForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost/s3-project/wp-json/wp/v2/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Errore durante il recupero dei post:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements[0].value;
    try {
      const response = await axios.get(`http://localhost/s3-project/wp-json/wp/v2/posts?search=${searchQuery}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Errore durante la ricerca dei post:", error);
    }
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4">Sito Blog</h1>
        <p className="lead">Benvenuto nel nostro blog</p>
      </header>
      <SearchForm handleSearch={handleSearch} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
