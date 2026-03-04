import React from 'react';

const JSONLD = ({ type = 'LocalBusiness', data = {} }) => {
    let schema = {};

    if (type === 'LocalBusiness') {
        schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DQ Styling",
            "description": "Specialist in luxe zijden bloemen van Silk-ka en handgemaakt keramiek van Des Pots in Burgh-Haamstede.",
            "url": "https://www.dqstyling.nl",
            "logo": "https://www.dqstyling.nl/Logo/Logo.png",
            "image": "https://www.dqstyling.nl/Images/Home%20Page/image00002.webp",
            "telephone": "+31621414513",
            "email": "dqstyling@gmail.com",
            "priceRange": "€€",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ring 14",
                "addressLocality": "Burgh-Haamstede",
                "postalCode": "4328AE",
                "addressRegion": "Zeeland",
                "addressCountry": "NL"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.6950,
                "longitude": 3.7494
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "17:00"
                }
            ],
            "sameAs": [
                "https://www.instagram.com/dq_styling/",
                "https://www.facebook.com/profile.php?id=61555699011343"
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
                "item": `https://www.dqstyling.nl${item.url}`
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
