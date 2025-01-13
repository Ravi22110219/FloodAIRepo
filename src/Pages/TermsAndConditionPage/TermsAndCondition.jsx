import React from "react";
import styles from "./TermsAndCondition.module.css"


const TermAndCondition = () =>{

  return(
    <section className={styles.termAndConditionSection}> <div className={styles.container}>
    <h1 className={styles.heading}>Terms of Use</h1>
    <p className={styles.text}>
      Welcome to AIResQ CLIMSOLS PRIVATE LIMITED. By accessing or using our
      website, you agree to comply with the following terms and conditions:
    </p>
    <ol className={styles.list}>
      <li>
        <strong>Acceptance of Terms:</strong> By using this website, you
        accept these Terms of Use. If you do not agree, please refrain from
        using our services.
      </li>
      <li>
        <strong>Intellectual Property:</strong> All content, including text,
        graphics, logos, and software, is owned by AIResQ CLIMSOLS PRIVATE
        LIMITED and protected by copyright laws.
      </li>
      <li>
        <strong>User Conduct:</strong> Users agree not to misuse the website,
        including engaging in unlawful activities or violating third-party
        rights.
      </li>
      <li>
        <strong>Limitation of Liability:</strong> AIResQ CLIMSOLS PRIVATE
        LIMITED is not liable for damages arising from the use of this
        website.
      </li>
    </ol>

    <h1 className={styles.heading}>Privacy Policy</h1>
    <p className={styles.text}>
      At AIResQ CLIMSOLS PRIVATE LIMITED, we are committed to protecting your
      privacy. This policy explains how we handle your information.
    </p>
    <ol className={styles.list}>
      <li>
        <strong>Information Collection:</strong> We may collect personal
        information, such as your name, email, and usage data, for providing
        better services.
      </li>
      <li>
        <strong>Use of Information:</strong> The collected data will be used
        for service improvement, communication, and compliance with legal
        obligations.
      </li>
      <li>
        <strong>Third-Party Sharing:</strong> We do not share your
        information with third parties except as required by law.
      </li>
      <li>
        <strong>Cookies:</strong> Our website uses cookies to enhance user
        experience. You can disable cookies in your browser settings.
      </li>
      <li>
        <strong>Data Security:</strong> We use industry-standard measures to
        secure your data against unauthorized access.
      </li>
    </ol>

    <p className={styles.footer}>
      For any questions or concerns, please contact us at{" "}
      <a href="mailto:support@airesq.com" className={styles.link}>
        support@airesq.com
      </a>
      .
    </p>
  </div></section>
  )
}

export default TermAndCondition;