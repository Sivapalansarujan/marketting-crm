import React from "react";

const TermsAndConditions = () => {
  const containerStyle = {
    padding: "20px",
    maxWidth: "1000px", // Increased width for a wider layout
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "left", // Left alignment
  };

  const titleStyle = {
    fontSize: "2.5em",
    color: "#F36637", // Primary color applied here
    marginBottom: "20px",
    borderBottom: "3px solid #F36637", // Matching border color
    paddingBottom: "10px",
  };

  const subheadingStyle = {
    fontSize: "1.5em",
    marginTop: "30px",
    color: "#F36637", // Same color for subheadings
  };

  const paragraphStyle = {
    fontSize: "1em",
    marginBottom: "15px",
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
      <h2 style={titleStyle}>Terms and Conditions</h2>
      <p><strong>Last updated: December 07, 2024</strong></p>
      <p style={paragraphStyle}>Please read these terms and conditions carefully before using Our Service.</p>

      <h2 style={subheadingStyle}>Interpretation and Definitions</h2>

      <h3 style={subheadingStyle}>Interpretation</h3>
      <p style={paragraphStyle}>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The
        following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>

      <h3 style={subheadingStyle}>Definitions</h3>
      <p style={paragraphStyle}>For the purposes of these Terms and Conditions:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party,
          where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote
          for election of directors or other managing authority.
        </li>
        <li style={listItemStyle}><strong>Country</strong> refers to: Sri Lanka</li>
        <li style={listItemStyle}><strong>Company</strong> refers to Kolina Solutions PVT LTD, 30A Bodhiraja Mawatha, Kurunegala 60000.</li>
        <li style={listItemStyle}><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
        <li style={listItemStyle}><strong>Service</strong> refers to the Website.</li>
        <li style={listItemStyle}>
          <strong>Terms and Conditions</strong> mean these Terms and Conditions that form the entire agreement between You and the Company.
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
          <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on
          behalf of which such individual is accessing or using the Service, as applicable.
        </li>
      </ul>

      <h2 style={subheadingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>If you have any questions about these Terms and Conditions, You can contact us:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          By email: <a href="mailto:support@kolinasolutions.com" style={linkStyle}>support@kolinasolutions.com</a>
        </li>
        <li style={listItemStyle}>
          By visiting this page on our website: <a href="https://kolinasolutions.com/" style={linkStyle}>https://kolinasolutions.com/</a>
        </li>
        <li style={listItemStyle}>By phone number: (+94) (011) 2576397</li>
        <li style={listItemStyle}>By mail: 30A Bodhiraja Mawatha, Kurunegala 60000, Sri Lanka</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
