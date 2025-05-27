import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import styles from './BlogMainPage.module.css'
import { IoIosMail } from 'react-icons/io'

const BlogMainPage = () => {
  const { postId } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true) // Reset loading state on postId change
      setError(null) // Reset error state
      try {
        const response = await fetch(
          'https://airesqblogpage.s3.ap-south-1.amazonaws.com/blogdata.json'
        )

        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`)
        }

        const data = await response.json()
        // Ensure `data.blogs` is an array. If `data` itself is the array, use that.
        const blogs = Array.isArray(data.blogs)
          ? data.blogs
          : Array.isArray(data)
          ? data
          : []

        if (!Array.isArray(blogs)) {
          throw new Error('Fetched data does not contain a blogs array.')
        }

        const selectedBlog = blogs.find((b) => b.id === parseInt(postId))

        if (!selectedBlog) {
          throw new Error('Blog not found')
        }

        setBlog(selectedBlog)

        // Get 2 random related blogs (excluding current one)
        const filteredBlogs = blogs.filter((b) => b.id !== parseInt(postId))
        const randomBlogs = filteredBlogs
          .sort(() => 0.5 - Math.random())
          .slice(0, 2)
        setRelatedBlogs(randomBlogs)
      } catch (err) {
        setError(err.message || 'Failed to fetch blog. Please try again later.')
        console.error('Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    if (postId) {
      // Only fetch if postId is available
      fetchBlog()
    } else {
      setError('No blog ID provided.') // Handle cases where postId might be undefined
      setLoading(false)
    }
  }, [postId])

  if (loading) {
    return <div className={styles.loading}>Loading blog...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  if (!blog) {
    return <div className={styles.error}>Blog post not available.</div>
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link to="/">home</Link> / <Link to="/blog/1">Blog Home Page</Link>
      </nav>

      <div className={styles.contentWrapper}>
        {/* Main Blog Content */}
        <article className={styles.mainContent}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          {blog.description && (
            <p className={styles.blogDescription}>{blog.description}</p>
          )}
          <p className={styles.publishDate}>Published on: {blog.date}</p>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title || 'Blog Image'}
              className={styles.blogImage}
            />
          )}
          <div className={styles.creditDiv}>
            <b>Photo Credit:</b>{' '}
            <a href={blog.creditImageLink}>{blog.imageCredits}</a>
          </div>

          <div
            className={styles.blogText}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Author Section Card */}
          {(blog.author || blog.authorImage) && (
            <section
              className={`${styles.sidebarSection} ${styles.authorCard}`}
            >
              <h3 className={styles.sidebarTitle}>About The Author</h3>
              <div className={styles.authorInfo}>
                <div className={styles.authorSection}>
                  <img
                    src={blog.authorImage || '/default-author.jpg'}
                    alt={blog.author || 'Author'}
                    className={styles.authorImage}
                  />
                  <h4 className={styles.authorName}>
                    {blog.author || 'Anonymous'}
                  </h4>
                  <div className={styles.authorIconDiv}>
                    <Link to={blog.authorProfile} target="__main__">
                      <FaLinkedin className={styles.linkedInIcon} />
                    </Link>
                    <Link className={styles.mailIcon}>
                      <IoIosMail />
                    </Link>
                  </div>
                </div>
                <div className={styles.authorDetails}>
                  <p className={styles.authorBio}>
                    {blog.authorBio || 'No bio available.'}
                  </p>
                </div>
              </div>
              {/* Related Blogs */}
              {relatedBlogs.length > 0 && (
                <section className={styles.relatedBlogs}>
                  <h2>Related Blogs</h2>
                  <div className={styles.relatedBlogsGrid}>
                    {relatedBlogs.map((relatedBlog) => (
                      <article
                        key={relatedBlog.id}
                        className={styles.relatedBlogCard}
                      >
                        {' '}
                        <div>
                          {relatedBlog.image && (
                            <img
                              src={relatedBlog.image}
                              alt={relatedBlog.title || 'Related Blog Image'}
                              className={styles.relatedBlogImage}
                            />
                          )}{' '}
                        </div>
                        <div className={styles.relatedBlogInfo}>
                          <Link
                            to={`/blog/${relatedBlog.id}`}
                            className={styles.relatedBlogTitleLink}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <h3 className={styles.relatedBlogTitle}>
                              {relatedBlog.title}
                            </h3>
                          </Link>
                          <p className={styles.relatedBlogMeta}>
                            {relatedBlog.date
                              ? new Date(relatedBlog.date).toLocaleDateString()
                              : 'N/A'}
                            {relatedBlog.author && ` by ${relatedBlog.author}`}
                          </p>
                          <Link
                            to={`/blog/${relatedBlog.id}`}
                            className={styles.readMoreButton}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            Read More
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </section>
          )}

          {/* Social Links Card */}
          {(blog.socialLinks?.instagram || blog.socialLinks?.linkedin) && (
            <section
              className={`${styles.sidebarSection} ${styles.socialCard}`}
            >
              <h3 className={styles.sidebarTitle}>Connect with the Author</h3>
              <div className={styles.socialLinks}>
                {blog.socialLinks?.instagram && (
                  <a
                    href={blog.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${blog.author || 'Author'}'s Instagram`}
                  >
                    <img
                      src={blog.image}
                      alt="Instagram"
                      className={styles.socialIcon}
                    />
                  </a>
                )}
                {blog.socialLinks?.linkedin && (
                  <a
                    href={blog.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${blog.author || 'Author'}'s LinkedIn`}
                  >
                    <img
                      src="/linkedin-icon.svg"
                      alt="LinkedIn"
                      className={styles.socialIcon}
                    />
                  </a>
                )}
                {/* Add other social links here if available and desired */}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  )
}

export default BlogMainPage
