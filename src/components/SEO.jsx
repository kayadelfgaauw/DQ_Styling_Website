import React from 'react';

/**
 * SEO component for managing metadata in React 19.
 * React 19 automatically hoists <title>, <link>, and <meta> tags to the <head>.
 */
const SEO = ({ title, description, url, image }) => {
    const siteName = "DQ Styling - Zijden Bloemen & Handgemaakte Vazen";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = "DQ Styling - Specialist in luxe zijden bloemen en handgemaakte vazen van Des Pots in Burgh-Haamstede.";
    const metaDescription = description || defaultDescription;
    const baseUrl = "https://dqstyling.nl"; // Hypothetical base URL
    const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image || `${baseUrl}/Logo/Logo.png`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={image || `${baseUrl}/Logo/Logo.png`} />
        </>
    );
};

export default SEO;
