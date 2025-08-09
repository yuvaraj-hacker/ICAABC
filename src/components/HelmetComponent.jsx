import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICAABC, ICAABC 2025, International Conference, Artificial Intelligence, Business Analytics, Cloud Systems, Data Science, AI Research, Machine Learning, Deep Learning, Predictive Analytics, Cloud Computing, Enterprise Technology, Smart Business Solutions, AI in Business, Tech Conference 2025, IT Innovations, Digital Transformation" />
            <meta name="description" content="The International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC 2025) brings together global researchers and professionals to explore breakthroughs in AI, data-driven decision making, and scalable cloud technologies." />
            <meta name="author" content="ICAABC 2025 Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC 2025)" />
            <meta property="og:description" content="Join ICAABC 2025 to engage with global experts in AI, business intelligence, and cloud systems through keynote sessions, paper presentations, and workshops." />
            <meta property="og:url" content="https://aiba2025.com/" />
            <meta property="og:image" content="https://aiba2025.com/assets/images/og-image.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://aiba2025.com/assets/images/favicon.png" />
        </Helmet>
    );
}

export default HelmetComponent;
