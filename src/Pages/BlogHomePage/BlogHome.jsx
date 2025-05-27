import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './BlogHomePage.module.css'

const BlogHomePage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [displayCount, setDisplayCount] = useState(3)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://airesqblogpage.s3.ap-south-1.amazonaws.com/blogdata.json'
        )

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setBlogs(data.blogs || data)
      } catch (err) {
        setError('Failed to fetch blogs. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const displayedBlogs = filteredBlogs.slice(0, displayCount)

  const loadMore = () => {
    setDisplayCount((prev) => prev + 3)
  }

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Latest Blog Posts</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search blog posts..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className={styles.searchIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className={styles.blogGrid}>
        {displayedBlogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.blogDescription}>
                {blog.description.length > 100
                  ? `${blog.description.substring(0, 100)}...`
                  : blog.description}
              </p>
              <div className={styles.blogMeta}>
                <span className={styles.blogDate}>{blog.date}</span>
                <span className={styles.blogAuthor}>{blog.author}</span>
              </div>
              <Link to={`/blog/${blog.id}`} className={styles.readMoreButton}>
                Read Full Article
              </Link>
            </div>
          </div>
        ))}
      </div>

      {displayCount < filteredBlogs.length && (
        <div className={styles.loadMoreContainer}>
          <button onClick={loadMore} className={styles.loadMoreButton}>
            Show More Articles
          </button>
        </div>
      )}

      {displayCount > 3 && (
        <div className={styles.loadMoreContainer}>
          <button
            onClick={() => setDisplayCount(3)}
            className={styles.showLessButton}
          >
            Show Less Articles
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogHomePage
