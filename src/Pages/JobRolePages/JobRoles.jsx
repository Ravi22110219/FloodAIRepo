import React from 'react'
import styles from './JobRoles.module.css'
import { Link } from 'react-router-dom'

const JobRoles = () => {
  // Sample job data - replace with your actual requirements
  const jobOpenings = [
    // {
    //   id: 1,
    //   title: 'Machine Learning Engineer',
    //   type: 'Full-time',
    //   location: 'Remote/Hybrid',
    //   experience: '3+ years',
    //   description:
    //     'Design and implement ML models to solve complex problems and enhance our AI capabilities.',
    //   requirements: [
    //     'Strong Python programming with ML libraries (scikit-learn, pandas, NumPy)',
    //     'Experience with deep learning frameworks (TensorFlow/PyTorch)',
    //     'Knowledge of ML algorithms (supervised/unsupervised learning, NLP, CV)',
    //     'Experience with cloud ML services (AWS SageMaker, GCP Vertex AI)',
    //     'Understanding of MLOps and model deployment',
    //     'Degree in CS, Math, Statistics or related quantitative field',
    //   ],
    //   skills: [
    //     'Python',
    //     'TensorFlow',
    //     'PyTorch',
    //     'scikit-learn',
    //     'AWS',
    //     'MLOps',
    //   ],
    // },
    // {
    //   id: 2,
    //   title: 'Deep Learning Researcher',
    //   type: 'Full-time/Contract',
    //   location: 'Remote',
    //   experience: '2+ years (PhD preferred)',
    //   description:
    //     'Advance our DL capabilities through cutting-edge research and implementation of novel architectures.',
    //   requirements: [
    //     'Strong theoretical foundation in deep learning',
    //     'Experience with transformer architectures and attention mechanisms',
    //     'Proficiency in implementing research papers',
    //     'Experience with large-scale model training',
    //     'Publications in top ML conferences (NeurIPS, ICML, CVPR)',
    //     'Strong mathematical background (linear algebra, calculus, probability)',
    //   ],
    //   skills: [
    //     'PyTorch',
    //     'TensorFlow',
    //     'CUDA',
    //     'Transformers',
    //     'GANs',
    //     'Reinforcement Learning',
    //   ],
    // },
    {
      id: 1,
      title: 'Machine Learning Engineer',
      company: 'AIResQ ClimSols Pvt. Ltd.',
      type: 'Full-Time',
      duration: '0.5–5 years of experience',
      location: 'IIT Gandhinagar / Hybrid',
      experience:
        '[0.5-5 years] of experience in ML engineering, software engineering, or a related role',
      description:
        'Join a mission-driven team building real-world AI applications for flood prediction, urban resilience, and smart city development in India. As a Machine Learning Engineer, you will collaborate closely with researchers, data scientists, and DevOps engineers to develop and deploy scalable machine learning systems that make a measurable impact on urban planning and disaster mitigation.',
      about_company:
        'AIResQ ClimSols is a team of researchers from IIT Gandhinagar focused on AI-driven flood prediction, mitigation, and resilience solutions for Indian cities. We collaborate with municipal bodies and academic experts to deploy models that support sustainable, climate-resilient urban development.',
      key_responsibilities: [
        'Collaborate with data scientists to move ML models from notebooks to production-ready APIs/services',
        'Design and implement ML pipelines for training, validation, testing, and deployment',
        'Build and maintain CI/CD pipelines for model deployment using Docker, Jenkins, and GitHub Actions',
        'Containerize ML applications with Docker and manage them with Kubernetes or similar tools',
        'Implement model versioning, logging, monitoring, and performance tuning',
        'Optimize inference performance using ONNX, TensorRT, and FastAPI',
        'Preprocess data and implement feature engineering pipelines in production',
        'Ensure ML service scalability, reliability, and fault-tolerance in cloud/on-prem environments',
        'Collaborate in code reviews, testing, and documentation',
      ],
      qualifications: [
        '0.5–5 years of experience in ML engineering or related role',
        'Portfolio of deployed ML projects (GitHub repos, blog posts, or case studies preferred)',
      ],
      skills: [
        'Python',
        'scikit-learn',
        'pandas',
        'numpy',
        'joblib',
        'FastAPI',
        'Flask',
        'Django',
        'MLFlow',
        'DVC',
        'Kubeflow',
        'Airflow',
        'Docker',
        'Kubernetes',
        'CI/CD tools (Jenkins, GitHub Actions)',
        'AWS',
        'GCP',
        'Azure',
        'Monitoring and alerting systems',
      ],
      nice_to_have_skills: [
        'Exposure to deep learning or ML modeling',
        'Experience with streaming data',
        'Understanding of software engineering principles (modularity, testing, design patterns)',
      ],
      compensation:
        'Competitive and commensurate with experience, skill set, and qualifications.',
      what_youll_gain: [
        'Real-world impact: Help build and deploy AI solutions for high-impact urban resilience problems',
        'Cross-sector collaboration: Work closely with government, academia, and industry stakeholders',
        'Ownership: Lead end-to-end ML modeling initiatives in a fast-paced startup-style environment',
        'Purpose-driven work: Be part of a team building solutions that drive measurable change across Indian cities',
      ],
    },

    // {
    //   id: 4,
    //   title: 'Frontend Developer',
    //   type: 'Full-time',
    //   location: 'Remote',
    //   experience: '2+ years',
    //   description:
    //     "We're looking for a skilled frontend developer to join our team and help build amazing user experiences.",
    //   requirements: [
    //     'Proficiency in React.js and modern JavaScript',
    //     'Experience with CSS/SASS and responsive design',
    //     'Familiarity with state management (Redux, Context API)',
    //     'Knowledge of RESTful APIs integration',
    //     'Understanding of Git version control',
    //   ],
    //   skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git'],
    // },
    // {
    //   id: 5,
    //   title: 'Backend Developer',
    //   type: 'Full-time',
    //   location: 'Hybrid (Bangalore)',
    //   experience: '3+ years',
    //   description:
    //     'Join our backend team to build scalable and efficient server-side applications.',
    //   requirements: [
    //     'Strong experience with Node.js and Express',
    //     'Database design (SQL and NoSQL)',
    //     'API design and development',
    //     'Authentication and authorization systems',
    //     'Cloud services (AWS, GCP, or Azure)',
    //   ],
    //   skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'],
    // },
  ]

  return (
    <div className={styles.jobRolesContainer}>
      <div className={styles.heroSection}>
        <h1>Join Our Team at AIResQ ClimSols</h1>
        <p>
          We are building AI-powered flood prediction solutions and looking for
          passionate individuals to help us create visual impact.
        </p>
      </div>

      <div className={styles.jobsList}>
        {jobOpenings.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <div className={styles.jobHeader}>
              <h2>{job.title}</h2>
              <div className={styles.jobMeta}>
                <span>{job.type}</span>
                <span>{job.location}</span>
                <span>{job.duration}</span>
                <span>{job.experience}</span>
              </div>
            </div>

            <div className={styles.jobContent}>
              <p className={styles.jobDescription}>{job.description}</p>

              <div className={styles.aboutCompany}>
                <h3>About AIResQ ClimSols:</h3>
                <p>{job.about_company}</p>
              </div>

              <div className={styles.responsibilities}>
                <h3>Key Responsibilities:</h3>
                <ul>
                  {job.key_responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.requirements}>
                <h3>Qualifications:</h3>
                <ul>
                  {job.qualifications.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.skills}>
                <h3>Skills:</h3>
                <div className={styles.skillTags}>
                  {job.skills.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.requirements}>
                <h3>Nice to have skills:</h3>
                <ul>
                  {job.nice_to_have_skills.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.requirements}>
                <h3>What you'll gain:</h3>
                <ul>
                  {job.what_youll_gain.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <button className={styles.applyButton}>
                <Link to="/hiring">Apply Now</Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.benefitsSection}>
        <h2>Why Join Our Internship Program?</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3>Real Project Experience</h3>
            <p>Work on actual branding projects that will be deployed.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Mentorship</h3>
            <p>
              Direct guidance from IIT researchers and design professionals.
            </p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Portfolio Building</h3>
            <p>Create meaningful work samples for your design portfolio.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Flexible Schedule</h3>
            <p>Remote work with hours that accommodate your studies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobRoles
