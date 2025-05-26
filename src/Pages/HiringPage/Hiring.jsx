import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Hiring.module.css'

const Hiring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    status: 'Student',
    institute: '',
    program: '',
    branch: '',
    year_of_joining: '',
    has_experience: 'No',
    role: '',
    message: '',
    resume_link: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formattedData = {
        ...formData,
        isStudent: formData.status === 'Student',
      }

      const response = await emailjs.send(
        'service_dmh3eqe',
        'template_pv5z9sf',
        formattedData,
        'nqoWdx3KBI6ZFflMj'
      )

      if (response.status === 200) {
        alert('Form submitted successfully! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          contact: '',
          status: 'Student',
          institute: '',
          program: '',
          branch: '',
          year_of_joining: '',
          has_experience: 'No',
          role: '',
          message: '',
          resume_link: '',
        })
      }
    } catch (error) {
      alert(`Something went wrong: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.hiringContainer}>
      <form className={styles.hiringForm} onSubmit={handleSubmit}>
        <h2>Join Our Team</h2>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Student">Student</option>
            <option value="Graduated">Graduated</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="institute"
            placeholder="Institute/University *"
            value={formData.institute}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="program"
            placeholder="Program (e.g., B.Tech, B.Sc) *"
            value={formData.program}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Enter your branch"
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            name="year_of_joining"
            placeholder="Year of Joining *"
            value={formData.year_of_joining}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Do you have any past work experience?</label>
          <select
            name="has_experience"
            value={formData.has_experience}
            onChange={handleChange}
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {formData.has_experience === 'Yes' && (
          <div className={styles.formGroup}>
            <input
              type="text"
              name="role"
              placeholder="Your Role in previous experience"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        )}

        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Tell us why you're interested in this opportunity and what makes you a good fit *"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="url"
            name="resume_link"
            placeholder="Link to your CV/Resume (Google Drive, Dropbox, etc.) *"
            value={formData.resume_link}
            onChange={handleChange}
            required
          />
          <p className={styles.note}>
            Note: Please ensure your resume link is accessible to everyone
          </p>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Apply'}
        </button>
      </form>
    </div>
  )
}

export default Hiring
