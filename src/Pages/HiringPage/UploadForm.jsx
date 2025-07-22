// import React, { useState } from 'react'
// import emailjs from '@emailjs/browser'
// import AWS from 'aws-sdk'

// const UploadForm = () => {
//   const [file, setFile] = useState(null)
//   const [uploading, setUploading] = useState(false)

//   const s3 = new AWS.S3({
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//     region: process.env.REACT_APP_AWS_REGION,
//   })

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0])
//   }

//   const uploadToS3 = async () => {
//     setUploading(true)
//     const params = {
//       Bucket: 'my-testing-form',
//       Key: `${Date.now()}_${file.name}`,
//       Body: file,
//       ContentType: file.type,
//       ACL: 'public-read',
//     }

//     try {
//       const data = await s3.upload(params).promise()
//       setUploading(false)
//       return data.Location
//     } catch (err) {
//       console.error('S3 upload error:', err)
//       setUploading(false)
//       return null
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!file) return alert('Please upload a file.')

//     const uploadedUrl = await uploadToS3()
//     if (!uploadedUrl) return alert('Failed to upload file to S3.')

//     const formData = {
//       from_name: e.target.name.value,
//       message: e.target.message.value,
//       file_url: uploadedUrl,
//     }

//     emailjs
//       .send(
//         'YOUR_EMAILJS_SERVICE_ID',
//         'YOUR_EMAILJS_TEMPLATE_ID',
//         formData,
//         'YOUR_EMAILJS_PUBLIC_KEY'
//       )
//       .then(() => {
//         alert('Form submitted successfully!')
//         e.target.reset()
//         setFile(null)
//       })
//       .catch((error) => {
//         console.error('EmailJS error:', error)
//         alert('Error sending form. Try again.')
//       })
//   }

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
//       <h2>Submit Your Info</h2>

//       <label>
//         Full Name:
//         <input type="text" name="name" required />
//       </label>
//       <br />
//       <br />

//       <label>
//         Message:
//         <textarea name="message" rows="4" required />
//       </label>
//       <br />
//       <br />

//       <label>
//         Upload PDF/Image:
//         <input
//           type="file"
//           accept="application/pdf,image/*"
//           onChange={handleFileChange}
//           required
//         />
//       </label>
//       <br />
//       <br />

//       <button type="submit" disabled={uploading}>
//         {uploading ? 'Uploading...' : 'Submit'}
//       </button>
//     </form>
//   )
// }

// export default UploadForm
