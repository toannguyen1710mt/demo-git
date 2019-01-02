const uuidv4 = require('uuid/v4');

let infos = [
    [{
        company: "MAC Cosmetic Company", address: 'AKUNA ST. CANBERRA, ACT 2601',
        action1: 'pen', action2: 'times', action3: 'copy',
        level: 0, id: uuidv4(),
        field: 'Cosmetic Industry', foundationDate: '01-12-2015',
        OverView: 'Mac'
    },
    {
        company: 'Ghirardelli Chocolate Company', address: 'San Leandro, CA 94578',
        action1: 'pen', action2: 'times', action3: 'copy',
        level: 1, id: uuidv4(),
        field: 'Food Industry', foundationDate: '17-10-2014',
        OverView: 'Ghirardelli'
    },
    {
        company: 'PepsiCo Company', address: '700 Anderson Hill Rd.',
        action1: 'pen', action2: 'times', action3: 'copy',
        level: 2, id: uuidv4(),
        field: 'Baverage industry', foundationDate: '12-02-2016',
        OverView: 'Pepsico'
    }
    ],
    [
        {
            mainTitle: 'Ghirardelli Company',
            bodyDescription: 'Ghirardelli \'s legacy of creating exceptional products is the result of empowering and equipping our team to take on new challenges, inspire one another and excel in all they do.',
            historyTitle: 'Our History',
            historyContent: '1817 - Domenico Ghirardelli is born in Rapallo, Italy, to an exotic foods importer and his wife. At a young age, Domenico is introduced to the chocolate and confectionary trade when he apprentices with a local candy maker. 1962 - Two prominent San Franciscans acquire Ghirardelli Square and commission an architect to construct a modern specialty shopping center while retaining the exceptional Victorian qualities of the complex. 2003 - Ghirardelli introduces SQUARES stand up bags. 2006 - Ghirardelli introduces its first ecommerce initiative. 2011-Ghirardelli becomes the No. 2 baking brand in the U.S. 2016-Ghirardelli Chocolate Company celebrates its 160th anniversary.',
            titleLeft: 'Learn About Chocolate',
            subTitleLeft: 'How We Make Chocolate?',
            descriptionLeft: 'We are one of very few American manufacturers that make chocolate starting from the cocoa bean through to finished products.',
            diffReference: 'See the Ghiradelli Difference',
            src: '/images/MakeChocolate.jpg',
            titleRight: 'Discover A Place',
            descriptionRight: 'Here’s a quick look at how three of our core business areas bring Ghirardelli’s products from our factories and offices to stores, shops, and restaurants across the country. \'CONFECTIONS & BAKING\'-\'RESTAURANT & RETAIL\'-\'GHIRARDELLI PROFESSIONAL PRODUCTS\' ',
            link1: 'Careers',
            link2: 'Contact Us',
            link3: 'Global Site',
            LogoImage: 'GhirardelliLogo.png',
            BannerRightImage: '/images/GhirardelliRightbar.jpg',
            BannerLeftImage: '/images/MakeChocolate.jpg',
            historyImage: '/images/GhirardelliHistory.jpg',
        },
        {
            mainTitle: 'Pepsi Company',
            bodyDescription: 'We have a complementary food and beverage portfolio that includes 22 brands that in 2017 each generated more than $1 billion in estimated annual retail sales.',
            historyTitle: 'Our History',
            historyContent: 'PepsiCo, Inc. was established through the merger of Pepsi-Cola and Frito-Lay. Pepsi-Cola was created in the late 1890s by Caleb Bradham, a New Bern, N.C. pharmacist. Frito-Lay, Inc. was formed by the 1961 merger of the Frito Company, founded by Elmer Doolin in 1932, and the H. W. Lay Company, founded by Herman W. Lay, also in 1932. Herman Lay, former chairman and CEO of Frito-Lay, was chairman of the board of directors of the new company; Donald M. Kendall, former president and CEO of Pepsi-Cola, was president and chief executive officer. The new company reports sales of $510 million and has 19,000 employees. Major products of the new companies are: Pepsi-Cola Company',
            titleLeft: 'Investors',
            subTitleLeft: '2018 Annual Report',
            descriptionLeft: 'With a portfolio of iconic, beloved and locally relevant brands, we\'re delivering results today and confidently preparing for the future.',
            diffReference: 'For More Information',
            src: '/images/MakeChocolate.jpg',
            titleRight: 'BRANDS !!',
            descriptionRight: 'DID YOU KNOW? Pepsi-Cola brands include Pepsi, Mountain Dew, Lemon Lemon, Bubly, AMP Energy Organics, IZZE, Naked Juice, Propel, Mug, and Aquafina, among others',
            link1: 'Careers',
            link2: 'Contact Us',
            link3: 'Global Site',
            LogoImage: 'pepsiLogo.png',
            BannerRightImage: '/images/pepsiRightbar.jpg',
            BannerLeftImage: '/images/PepsiLeftbar.png',
            historyImage: '/images/PepsiHistory-1970.jpg',
        },
        {
            mainTitle: 'Mac Cosmetic Company',
            bodyDescription: 'What Makes up M·A·C. M·A·C is the world’s leading professional makeup authority because of our unrivalled expertise in makeup ARTISTRY. M·A·C is at the forefront of fashion TRENDSETTING, collaborating with leading talents from fashion, art and popular culture. Our Artists create trends backstage at fashion weeks around the world.',
            historyTitle: 'Our History -> Birth of a Cult: From Wow to Now!',
            historyContent: 'All Ages, All Races, All Genders… A professional makeup brand setting trends backstage at fashion weeks around the world. Today, M·A·C means so many things to its millions of fans in every corner of the planet, but a global beauty phenomenon has to begin somewhere. Make-Up Art Cosmetics started life in Toronto, Canada. Makeup artist and photographer Frank Toskan and salon owner Frank Angelo became frustrated by the lack of makeup that photographed well, so they decided to create their own. At first, they made the cosmetics in their kitchen and sold them straight from the salon to fellow makeup artists, as well as models and photographers.',
            titleLeft: 'Holiday Collections',
            subTitleLeft: 'Best Price !!',
            descriptionLeft: 'For two days only, take 50% off our limited-edition Fix+ Party Pack / Shiny Pretty Things. Yours for only $12 ($36 Value)! Plus, free shipping and gift wrap on all orders. No code needed. Discount applied in cart.SHOP NOW',
            diffReference: 'See the Ghiradelli Difference',
            src: '/images/MACHolidayPack.jpg',
            titleRight: 'M·A·C Event Hub',
            descriptionRight: 'Own the trends now, while they’re fresh off Instagram or the runway! Sit with an Artist to explore all of the season’s hottest makeup. In a luxe one-on-one appointment, create the looks popping up backstage, on social or in magazines – then make them your own. Also available for groups!',
            link1: 'Careers',
            link2: 'Contact Us',
            link3: 'Global Site',
            LogoImage: 'MACLogo.png',
            BannerRightImage: '/images/MACRightbar.jpg',
            BannerLeftImage: '/images/MACHolidayPack.jpg',
            historyImage: '/images/MACHistory.png',
        }
    ],
    [
        {
            knowledgeImg: "/images/KnowledgeImg1.png",
            year: "05 Dec 2018",
            subject: " Research & Ideas",
            title: "Why Managers Should Reveal Their Failures",
            author: "by Dina Gerdeman",
            content: "If you want to get your messages through to employees, be ready to confess your own management shortcomings, counsels Alison Wood Brooks.",
            link: "Open for comment; 7 Comment(s) posted.",
        },
        {
            knowledgeImg: "/images/KnowledgeImg2.png",
            year: "25 Oct 2017",
            subject: " Research & Ideas",
            title: "Will Machine Learning Make You a Better Manager? ",
            author: "by Michael Blanding",
            content: "Big data...artificial intelligence...Internet of Things. These technologies have taken their shares of the headlines the past few years, but now machine learning is the buzz. Mike Teodorescu explains how it is changing the lives of consumers and businesses. ",
            link: "Open for comment; 10 Comment(s) posted.",
        },
        {
            knowledgeImg: "/images/KnowledgeImg3.png",
            year: "18 Oct 2017",
            subject: " Research & Ideas",
            title: "How Economic Clusters Drive Globalization",
            author: "by Julia Hanna",
            content: "Historical research by Valeria Giacomin shows that industrial clusters, often cited in explaining local economic growth, have had a much wider impact, especially in developing countries.",
            link: "Open for comment; 6 Comment(s) posted.",
        },
        {
            knowledgeImg: "/images/KnowledgeImg4.jpg",
            year: "19 Jun 2017",
            subject: " Working Paper Summaries",
            title: "Learning to Manage: A Field Experiment in the Indian Startup Ecosystem",
            author: "by Aaron Chatterji, Solene Delecourt, Sharique Hasan, and Rembrand Koning",
            content: "This study of 100 high-growth startups in India finds that founder-executives can learn how to improve their management style from their peers at other firms. These interfirm network connections between founders may help explain why some companies are well managed and others less so. Despite the apparent value of this peer learning, founders don’t appear to naturally connect with peers who could help them improve their management style.",
            link: "Open for comment; 13 Comment(s) posted.",
        },
        {
            knowledgeImg: "/images/KnowledgeImg5.png",
            year: "24 Apr 2017",
            subject: "Op-Ed ",
            title: "Op-Ed: Courage: The Defining Characteristic of Great Leaders",
            author: "by Bill George",
            content: "Courageous leaders inspire employees, energize customers, and position their companies on the front lines of societal change. Bill George explains why there aren't more of them.",
            link: "Open for comment; 45 Comment(s) posted. "
        }
    ],
    [
        {
            titleBox: "Investment Management",
            titleContent: "Investing in the Fintech-Enabled Lending Boom",
            dateBox: "Oct 19, 2018",
            contentBox: "Born out of peer-to-peer lending, online alternative lending has gone mainstream, presenting new opportunities for small businesses, consumers and investors.",
        },
        {
            titleBox: "Investment Management",
            titleContent: "Fixed Income: Is It Time to Get Pro Active?",
            dateBox: "Oct 3, 2018",
            contentBox: "Investment Management’s Jim Caron says a seismic shift is underway in fixed income. How should investors rethink their approach?",
        }
    ],
    [
        {
            imgBox: "/images/InvestmentImg2.png",
            titleBox: "Investment Management",
            titleContent: "Measuring Impact, By the Numbers",
            dateBox: "Oct 2, 2018",
            contentBox: "How can straight-forward measures help investors quantify the impact that their portfolio has on the environment, society, and corporate governance?",
        },
        {
            titleBox: "Institute for Sustainable Investing",
            titleContent: "Protecting Real Assets Amid Climate Extremes",
            dateBox: "Sep 11, 2018",
            contentBox: "Climate change poses growing challenges for investors in real assets. What’s the key to building resilience into real-asset investments?",
        }
    ],
    [
        {   
            titleBox: "Investment Management",
            titleContent: "Stepping In and Stepping Up for Workplace Equality",
            dateBox: "Sep 11, 2018",
            contentBox: "Laura Bottega says that encouraging young women to pursue careers in the often male dominated field of asset management is a story that bears repeating.",
        },
        {
            imgBox: "/images/InvestmentImg3.png",
            titleBox: "Institute for Sustainable Investing",
            titleContent: "More Asset Owners Embrace Sustainability",
            dateBox: "Jun 18, 2018",
            contentBox: "In a survey, 70% of institutional investors said they're integrating sustainable investing into their process, signaling how quickly the ESG imperative is catching on.",
        }
    ],
    [
        {
            backgroundNewsBox: "/images/InvestmentImg1.png",
            titleBox: "Investment Management",
            titleContent: "A Bump in the Road... or the End of the Road?",
            dateBox: "Nov 20, 2018",
            contentBox: "Bull market corrections follow a consistent pattern—a dip, rally, retest and recovery—and this period of volatility may be no different says Andrew Slimmon.",
        }
    ],
    [
        {
            title: "Premier Management Company System",
            slide1: "/images/CarouselHome1.png",
            slide2: "/images/CarouselHome3.png",
            slide3: "/images/CarouselHome4.jpg",
            slide4: "/images/CarouselHome5.png",
            slide5: "/images/CarouselHome6.jpg",
            slide6: "/images/CarouselHome7.png",
            contact: "Contact Us Now for Free Consult and Support",
        },
        // {
        //     backgroundSlide: "/images/CarouselHome1.png",
        //     contact: "Contact Us Now for Free Consult and Support",
        // },
        {
            title: "Be A Reliable Partner With Us",
            slide1: "/images/ClientsPepsi1.jpg",
            slide2: "/images/ClientsGhirardelli1.jpg",
            slide3: "/images/ClientsMAC1.png",
            slide4: "/images/ClientsPepsi2.jpg",
            slide5: "/images/ClientsGhirardelli2.jpg",
            slide6: "/images/ClientsMAC2.png",
            contact: "Contact Us Now for Free Consult and Support",
        },
        {
            titleQuote: "What our customers say...",
            imageLeftQuote: "/images/quoteLeft.png",
            imageRightQuote: "/images/quoteRight.png",
            contentQuoteActive: "I felt that there was an excellent level of management services delivered for that development, I was very impressed. (Chelmsford Directors)",
            authorActive: "Katherine",
            titleContact: "Contact Us",
            email: "Email us at toannguyen1710mt@gmail.com or fill in the form below:"
        }
    ],
    [
       
        {
            contentQuote: "We recognise the development is maintained to a very high standard, and we heartdely thank MCS' for the hard work that helps achieve this. (Chelmsford Directors)",
            author: "Richard Wakefield"
        },
        {
            contentQuote:"Really impressed with your responsiveness and service level. (Dockland Directors)",
            author: "Ben"
        },
        {
            contentQuote: "I have dealt with a few management companies in my time and many people representing these management companies but I have never dealt with anyone as efficient, competent, reliable and caring. (Enfield Directors)",
            author: "Anthony Kyriacou"
        },
        {
            contentQuote: "Trish is doing an excellent job as managing agent and we would be lost without her. She is everything we could ask for in a managing agent and she keeps our development in great condition. (Edgware Directors)",
            author: "Joanna Barnett"
        },
        {
            contentQuote: "Thank you and all that are involved with the management of Star Holme Court for the time and effort it is very appreciated by me. (Ware Directors)",
            author: "Tony"
        },
    ],
    [
        {
            contactLink1: "News",
            contactLink2: "Events",
            contactLink3: "Customers",
            contactLink4: "Partners",
            contactLink5: "Gorvernment",
            contactLink6: "Newsletter"
        },
        {
            contactLink1: "Careers",
            contactLink2: "Site Map",
            contactLink3: "Trademarks",
            contactLink4: "Privacy Policy",
            contactLink5: "Feedback",
            contactLink6: "Contact Us"
        }
    ]
]


export default infos