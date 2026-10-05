/**
 * ==========================================================================
 * Structured Data (Schema.org) for Candy Clicker
 * Injects appropriate JSON-LD for Google Rich Results based on page:
 * - Home Page: VideoGame & FAQPage
 * - Category Pages: CollectionPage
 * ==========================================================================
 */

(function () {
    const pathname = window.location.pathname.toLowerCase();

    const categorySchemas = {
        'shooting.html': {
            name: "Free Online Shooting Games",
            description: "Collection of unblocked shooting, aim reflex, and fast-paced tap games on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/shooting.html"
        },
        'action.html': {
            name: "Free Online Action Games",
            description: "Adrenaline-packed unblocked action games and tap-adventure challenges on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/action.html"
        },
        'sports.html': {
            name: "Free Online Sports Games",
            description: "Collection of unblocked sports, fitness, track racing, and athletic clickers on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/sports.html"
        },
        'puzzle.html': {
            name: "Free Online Puzzle Games",
            description: "Collection of unblocked match-3, candy logic, brain teasers, and sweet puzzle games on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/puzzle.html"
        },
        'cars.html': {
            name: "Free Online Car & Racing Games",
            description: "Unblocked browser car, racing, and turbo speed clicker games on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/cars.html"
        },
        'other.html': {
            name: "Free Online Clicker & Casual Games",
            description: "Collection of unblocked idle clicker games, fun simulators, and novelty browser games on Candy Clicker.",
            url: "https://candy-clicker.github.io/category/other.html"
        }
    };

    let schemaData = null;

    // Check if current page is one of the category pages
    const matchedCategoryKey = Object.keys(categorySchemas).find(key => pathname.includes(key));

    if (matchedCategoryKey) {
        const cat = categorySchemas[matchedCategoryKey];
        schemaData = {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": cat.name,
            "description": cat.description,
            "url": cat.url,
            "publisher": {
                "@type": "Organization",
                "name": "Candy Clicker Gaming Hub",
                "url": "https://candy-clicker.github.io/",
                "logo": "https://candy-clicker.github.io/img/candy.png"
            }
        };
    } else if (pathname === '/' || pathname.endsWith('/index.html') || pathname.endsWith('index')) {
        // Homepage: VideoGame & FAQPage
        schemaData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "VideoGame",
                    "name": "Candy Clicker",
                    "url": "https://candy-clicker.github.io/",
                    "description": "Candy Clicker is an incremental clicker game where you produce candies by clicking, unlock sweet automation factories, and build a sugary confectionery empire.",
                    "genre": ["Incremental Game", "Idle Game", "Clicker Game", "Casual"],
                    "playMode": "SinglePlayer",
                    "applicationCategory": "Game",
                    "operatingSystem": "Web Browser (HTML5)",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    }
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is Candy Clicker unblocked and free to play?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! Candy Clicker is 100% free and unblocked on school and workplace networks. It runs directly in any modern HTML5 web browser without downloads or extensions."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I play Candy Clicker on mobile and tablet?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Absolutely. The game is fully responsive and supports touch inputs on iOS (iPhone/iPad) and Android devices with zero latency."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does Candy Clicker save my progress if I close the tab?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! The game automatically stores your candy count, unlocked factories, and achievements in your browser's local storage."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How is Candy Clicker different from Cookie Clicker?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "While inspired by the classic Cookie Clicker genre, Candy Clicker features vibrant confectionery visuals, optimized lightweight loading speeds, and unique candy frenzy power-ups."
                            }
                        }
                    ]
                }
            ]
        };
    }

    if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);
    }
})();
