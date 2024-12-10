import React from "react";

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: "1200px", // Increased width for a wider layout
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    textAlign: "left", // Left alignment
  };

  const titleStyle = {
    fontSize: "2.5em",
    color: "#F36637", // Primary color applied here
    marginBottom: "20px",
    borderBottom: "3px solid #F36637", // Matching border color
    paddingBottom: "10px",
    textAlign: "left", // Left alignment for title
  };

  const subheadingStyle = {
    fontSize: "1.5em",
    marginTop: "30px",
    color: "#F36637", // Same color for subheadings
    textAlign: "left", // Left alignment for subheadings
  };

  const paragraphStyle = {
    fontSize: "1em",
    marginBottom: "15px",
    textAlign: "left", // Left alignment for paragraphs
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "15px",
  };

  const linkStyle = {
    color: "#F36637", // Consistent link color
    textDecoration: "none",
    fontWeight: "600",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Privacy Policy</h1>
      <p>Last updated: December 07, 2024</p>
      <p style={paragraphStyle}>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p style={paragraphStyle}>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy. This Privacy Policy has been
        created with the help of the{" "}
        <a
          href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Free Privacy Policy Generator
        </a>
        .
      </p>

      <h2 style={subheadingStyle}>Interpretation and Definitions</h2>
      <h3 style={subheadingStyle}>Interpretation</h3>
      <p style={paragraphStyle}>
        The words of which the initial letter is capitalized have meanings
        defined under the following conditions. The following definitions shall
        have the same meaning regardless of whether they appear in singular or
        in plural.
      </p>

      <h3 style={subheadingStyle}>Definitions</h3>
      <p style={paragraphStyle}>For the purposes of this Privacy Policy:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Account</strong> means a unique account created for You to
          access our Service or parts of our Service.
        </li>
        <li style={listItemStyle}>
          <strong>Affiliate</strong> means an entity that controls, is
          controlled by or is under common control with a party, where "control"
          means ownership of 50% or more of the shares, equity interest or other
          securities entitled to vote for election of directors or other managing
          authority.
        </li>
        <li style={listItemStyle}>
          <strong>Company</strong> (referred to as either "the Company", "We",
          "Us" or "Our" in this Agreement) refers to Kolina Solutions PVT LTD, 30A
          Bodhiraja Mawatha, Kurunegala 60000.
        </li>
        <li style={listItemStyle}>
          <strong>Cookies</strong> are small files that are placed on Your
          computer, mobile device or any other device by a website, containing
          the details of Your browsing history on that website among its many
          uses.
        </li>
        <li style={listItemStyle}>
          <strong>Country</strong> refers to: Sri Lanka
        </li>
        <li style={listItemStyle}>
          <strong>Device</strong> means any device that can access the Service
          such as a computer, a cellphone or a digital tablet.
        </li>
        <li style={listItemStyle}>
          <strong>Personal Data</strong> is any information that relates to an
          identified or identifiable individual.
        </li>
        <li style={listItemStyle}>
          <strong>Service</strong> refers to the Website.
        </li>
        <li style={listItemStyle}>
          <strong>Website</strong> refers to kolinasolutions, accessible from{" "}
          <a
            href="https://kolinasolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            https://kolinasolutions.com/
          </a>
        </li>
        <li style={listItemStyle}>
          <strong>You</strong> means the individual accessing or using the
          Service, or the company, or other legal entity on behalf of which such
          individual is accessing or using the Service, as applicable.
        </li>
      </ul>

      <h2 style={subheadingStyle}>Collecting and Using Your Personal Data</h2>
      <h3 style={subheadingStyle}>Types of Data Collected</h3>
      <h4 style={subheadingStyle}>Personal Data</h4>
      <p style={paragraphStyle}>
        While using Our Service, We may ask You to provide Us with certain
        personally identifiable information that can be used to contact or
        identify You. Personally identifiable information may include, but is
        not limited to:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Email address</li>
        <li style={listItemStyle}>First name and last name</li>
        <li style={listItemStyle}>Usage Data</li>
      </ul>

      <h4 style={subheadingStyle}>Usage Data</h4>
      <p style={paragraphStyle}>
        Usage Data is collected automatically when using the Service. Usage Data
        may include information such as Your Device&apos;s Internet Protocol
        address (e.g., IP address), browser type, browser version, the pages of
        our Service that You visit, the time and date of Your visit, the time
        spent on those pages, unique device identifiers and other diagnostic
        data.
      </p>

      <h2 style={subheadingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Email: <a href="mailto:support@kolinasolutions.com" style={linkStyle}>support@kolinasolutions.com</a>
        </li>
        <li style={listItemStyle}>
          Website:{" "}
          <a
            href="https://kolinasolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            https://kolinasolutions.com/
          </a>
        </li>
        <li style={listItemStyle}>Phone: +942576397</li>
        <li style={listItemStyle}>
          Address: 30A Bodhiraja Mawatha, Kurunegala 60000, Sri Lanka.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
