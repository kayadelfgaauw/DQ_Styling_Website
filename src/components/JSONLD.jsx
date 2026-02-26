import React from 'react';

const JSONLD = ({ type = 'Organization', data = {} }) => {
    let schema = {};

    if (type === 'Organization') {
        schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DQ Styling",
            "url": "https://dqstyling.nl",
            "logo": "https://dqstyling.nl/Logo/Logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31-6-21-41-45-13",
                "contactType": "customer service",
                "areaServed": "NL",
                "availableLanguage": "Dutch"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ring 14",
                "addressLocality": "Burgh-Haamstede",
                "postalCode": "4328AE",
                "addressCountry": "NL"
            },
            "sameAs": [
                "https://www.instagram.com/dq_styling/"
            ]
        };
    } else if (type === 'BreadcrumbList') {
        schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": `https://dqstyling.nl${item.url}`
            }))
        };
    }

    return (
        <script type="application/ld+json">
            {JSON.stringify(schema)}
        </script>
    );
};

export default JSONLD;
