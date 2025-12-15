import Hero from "@/components/application/hero";
import { useParams } from "react-router-dom";
import Body from "@/components/application/body";
import CallToAction from "@/components/application/callToAction";
import type { ApplicationContent } from "@/types";

const Application = () => {
    const { id } = useParams();

    const contents: ApplicationContent[] = [
    {
        id: "house-of-worship",
        headlineText: "Transform Your Worship Experience with Cutting Edge AV and Lighting",
        subHeadlineText: "Engage your congregation in a deeper and more meaningful way with immersive sound clear visuals and inspiring lighting.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/Church.webp)]",
        bodyContents: [
            {
                title: "Why Modern Worship Spaces Need Professional AV Integration",
                image: "/Church1.webp",
                items: [
                    { text: "Inspire deeper connection with crystal clear audio that carries every message prayer and song with precision." },
                    { text: "Amplify sermons worship content and announcements with visual displays that strengthen engagement." },
                    { text: "Use purposeful lighting to shape emotion highlight moments and elevate the worship atmosphere." },
                    { text: "Reach members anywhere with seamless live streaming and broadcast ready systems." }
                ]
                
            },
            {
                title: "Our Services for Houses of Worship",
                image: "/Church2.webp",
                items: [
                    { bold: "Audio Systems", text: "Purpose tuned sound designed for speech clarity and immersive worship experiences." },
                    { bold: "Video and Projection", text: "Large format screens projectors and LED walls that enhance teaching and communication." },
                    { bold: "Lighting Solutions", text: "Atmosphere shaping lighting that supports worship transitions and performances." },
                    { bold: "Control and Automation", text: "One touch volunteer friendly control over audio video and lighting." },
                    { bold: "Broadcast and Streaming", text: "Professional streaming setups for hybrid worship environments." }
                ]
            },
            {
                title: "Why Choose Spectra AVL",
                image: "/worship.png",
                items: [
                    { text: "Deep experience designing acoustically optimized sanctuaries and worship spaces." },
                    { text: "Custom solutions tailored to your congregation size architecture and worship style." },
                    { text: "Premium equipment trusted globally for reliability clarity and long term performance." },
                    { text: "Dedicated expert support ensuring flawless operation for every service." }
                ]
            }
        ],
        ctaHeadline: "Ready to Elevate Your Worship Experience",
        ctaSubheadline: "Let our experts design an atmosphere that inspires every heart in the room.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "cafes-restaurants",
        headlineText: "Create an Unforgettable Atmosphere for Your Guests",
        subHeadlineText: "Use immersive audio dynamic lighting and captivating visual design to elevate every dining moment.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/unforgettable.png)]",
        bodyContents: [
            {
                title: "Why Dining Spaces Need Professional AV Design",
                image: "/restaurant.webp",
                items: [
                    { text: "Set the perfect mood with curated ambient sound and lighting that reflects your brand." },
                    { text: "Ensure announcements promotions and live events sound clear and professional." },
                    { text: "Use visual displays to enhance menus storytelling and guest engagement." },
                    { text: "Centralize control of audio video and lighting for smooth daily operations." }
                ]
            },
            {
                title: "Our Services for Cafes and Restaurants",
                image: "/restaurant2.webp",
                items: [
                    { bold: "Audio Systems", text: "Balanced sound for background music and live performances alike." },
                    { bold: "Visual Displays", text: "Digital menus promotional screens and immersive visual storytelling." },
                    { bold: "Lighting Design", text: "Scene based lighting for daytime evenings and special events." },
                    { bold: "Control and Automation", text: "One touch control for seamless staff operation throughout the day." },
                    { bold: "Event Support", text: "Professional AV for private events live music and presentations." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/restaurant3.webp",
                items: [
                    { text: "Tailored AV design that aligns with your interior design brand identity and guest journey." },
                    { text: "Premium equipment that ensures performance reliability and longevity." },
                    { text: "Strong experience designing high end dining environments across hospitality." },
                    { text: "Full collaboration from concept to installation tuning and ongoing support." }
                ]
            }
        ],
        ctaHeadline: "Ready to Transform Your Cafe or Restaurant",
        ctaSubheadline: "Let us design a sensory atmosphere your guests will never forget.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "night-clubs-lounges",
        headlineText: "Turn Up the Night with Stunning Sound and Lighting",
        subHeadlineText: "Deliver an electrifying nightlife experience with powerful audio immersive lighting and captivating visuals.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/club.png)]",
        bodyContents: [
            {
                title: "Why Night Clubs and Lounges Need Professional AV Design",
                image: "/engineer.png",
                items: [
                    { text: "Deliver high impact audio that energizes guests without overwhelming the space." },
                    { text: "Use dynamic lighting that responds to the music and strengthens the vibe." },
                    { text: "Transform your space with LED visuals projection and immersive elements." },
                    { text: "Give staff and DJs effortless centralized control for smooth operation." }
                ]
            },
            {
                title: "Our Services for Night Clubs and Lounges",
                image: "/avl.png",
                items: [
                    { bold: "Audio Systems", text: "Powerful clean sound for dance floors lounges and VIP rooms." },
                    { bold: "Lighting Solutions", text: "Intelligent lighting that evolves with the music and energy." },
                    { bold: "Visual Systems", text: "LED walls screens and immersive visual designs." },
                    { bold: "Control and Automation", text: "One unified system for lighting sound and visuals." },
                    { bold: "Event Support", text: "Engineering for themed nights guest DJs and private parties." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/avl.png",
                items: [
                    { text: "Proven expertise building high performance nightlife environments." },
                    { text: "Designs that align with your brand entertainment style and crowd energy." },
                    { text: "Premium equipment built for clarity power and durability." },
                    { text: "Dedicated engineering support to ensure every night runs smoothly." }
                ]
            }
        ],
        ctaHeadline: "Ready to Elevate Your Night Club or Lounge",
        ctaSubheadline: "Let us create an experience your guests will always remember.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "large-congregations",
        headlineText: "Empower Every Voice Every Message Every Moment",
        subHeadlineText: "Deliver clarity and emotional impact to thousands with professional audio video and lighting design.",
        link: "/contact",
        buttonLabel: "Request a Consultation",
        backgroundImage: "bg-[url(/congregation.png)]",
        bodyContents: [
            {
                title: "Why Large Congregations Need Advanced AV Systems",
                image: "/clear.png",
                items: [
                    { text: "Deliver the same clarity and impact to every listener from the front row to the balcony." },
                    { text: "Use large format visuals to bring the message closer to every attendee." },
                    { text: "Enhance worship with lighting that guides emotion focus and atmosphere." },
                    { text: "Build scalable systems that grow with your congregation and events." }
                ]
            },
            {
                title: "Our Services for Large Congregations",
                image: "/light.png",
                items: [
                    { bold: "Audio Systems", text: "High power high fidelity sound for music speech and worship." },
                    { bold: "LED and Projection", text: "Large scale screens for sermons lyrics and media." },
                    { bold: "Lighting Systems", text: "Stage and ambient lighting that enhances worship flow." },
                    { bold: "Control and Automation", text: "Centralized systems for volunteer and technical teams." },
                    { bold: "Broadcast and Recording", text: "Professional streaming and recording systems." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/no.png",
                items: [
                    { text: "Extensive experience with mega churches and large format worship spaces." },
                    { text: "Custom acoustic and visual design tailored to your layout and style." },
                    { text: "Premium equipment that delivers long term performance and reliability." },
                    { text: "Full support for services events and special programs." }
                ]
            }
        ],
        ctaHeadline: "Ready to Scale Your Worship Experience",
        ctaSubheadline: "Let us design a system capable of serving every member of your congregation.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "hotels-resorts",
        headlineText: "Elevate Every Guest Experience with World Class AV and Lighting",
        subHeadlineText: "Create immersive environments that leave a lasting impression throughout your hotel or resort.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/hotel.png)]",
        bodyContents: [
            {
                title: "Why Hotels and Resorts Need Professional AV Design",
                image: "/sit-up.png",
                items: [
                    { text: "Create memorable first impressions with intentional audio and lighting." },
                    { text: "Support events conferences and weddings with production ready systems." },
                    { text: "Use immersive visuals to enhance brand storytelling and ambience." },
                    { text: "Improve staff efficiency with centralized control of AV and lighting." }
                ]
            },
            {
                title: "Our Services for Hotels and Resorts",
                image: "/resorts.png",
                items: [
                    { bold: "Audio Systems", text: "Balanced ambient sound for guest areas lounges and restaurants." },
                    { bold: "Visual Displays", text: "Screens LED walls and signage for branding and events." },
                    { bold: "Lighting Solutions", text: "Elegant lighting that enhances architecture and guest comfort." },
                    { bold: "Control and Automation", text: "One touch control for staff convenience and efficiency." },
                    { bold: "Event Support", text: "Professional AV services for conferences celebrations and gatherings." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/hotels.png",
                items: [
                    { text: "Strong experience designing AV for high end hotels and luxury resorts." },
                    { text: "Custom solutions aligned with your brand architecture and guest goals." },
                    { text: "Premium equipment ensuring reliable performance day and night." },
                    { text: "Dedicated support teams ensuring flawless guest experiences." }
                ]
            }
        ],
        ctaHeadline: "Ready to Elevate Your Hotel or Resort",
        ctaSubheadline: "Let us create immersive guest experiences across every space.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "auditoriums-concert-halls",
        headlineText: "Deliver Performances with Power and Precision",
        subHeadlineText: "Create world class audio visual and lighting environments for every performance.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/aud.png)]",
        bodyContents: [
            {
                title: "Why Auditoriums and Concert Halls Need Professional AV",
                image: "/blue_aud.png",
                items: [
                    { text: "Ensure unmatched clarity for orchestras speeches and live performances." },
                    { text: "Use high definition visuals for immersive audience engagement." },
                    { text: "Shape emotion with dynamic stage and architectural lighting." },
                    { text: "Design scalable production ready systems for any event." }
                ]
            },
            {
                title: "Our Services for Auditoriums and Halls",
                image: "/red.png",
                items: [
                    { bold: "Audio Systems", text: "High fidelity sound engineered for demanding performances." },
                    { bold: "Projection and LED", text: "Large visual surfaces for presentations and media." },
                    { bold: "Lighting Solutions", text: "Precision lighting for stages architecture and ambience." },
                    { bold: "Control Systems", text: "Streamlined control for technical crews and productions." },
                    { bold: "Event Support", text: "Engineering assistance for concerts conferences and shows." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/ligh.png",
                items: [
                    { text: "Trusted by high profile venues and production houses." },
                    { text: "Custom configurations based on acoustic modeling and venue layout." },
                    { text: "Premium equipment chosen for reliability and performance." },
                    { text: "Dedicated support for productions and touring events." }
                ]
            }
        ],
        ctaHeadline: "Ready to Upgrade Your Performance Venue",
        ctaSubheadline: "Let us design a system that enhances every performance on your stage.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    },

    {
        id: "concerts-live-events",
        headlineText: "Make Every Event Unforgettable",
        subHeadlineText: "Powerful sound immersive lighting and spectacular visuals built for impact.",
        link: "/contact",
        buttonLabel: "Lets Discuss Your Next Project",
        backgroundImage: "bg-[url(/mon.png)]",
        bodyContents: [
            {
                title: "Why Concerts and Live Events Need Advanced AV",
                image: "/cons.png",
                items: [
                    { text: "Deliver powerful clean audio that reaches every attendee clearly." },
                    { text: "Use dramatic lighting to shape energy and highlight performances." },
                    { text: "Captivate audiences with large visual canvases and projection." },
                    { text: "Build flexible systems suited for festivals indoor events and outdoor shows." }
                ]
            },
            {
                title: "Our Services for Live Events",
                image: "/the.png",
                items: [
                    { bold: "Audio Systems", text: "High output systems for performers and audiences." },
                    { bold: "Visual and Projection", text: "LED walls screens and projection for impactful visuals." },
                    { bold: "Lighting Solutions", text: "Intelligent lighting for dynamic stage presence." },
                    { bold: "Control Systems", text: "Unified control for audio lighting and visuals." },
                    { bold: "Event Support", text: "Full production engineering streaming and technical support." }
                ]
            },
            {
                title: "Why Choose Spectra AV",
                image: "/white.png",
                items: [
                    { text: "Extensive experience producing concerts festivals and live shows." },
                    { text: "Custom solutions tailored to your event scale and audience." },
                    { text: "Premium equipment built for demanding environments." },
                    { text: "Experienced teams ensuring flawless execution every time." }
                ]
            }
        ],
        ctaHeadline: "Ready to Elevate Your Live Event",
        ctaSubheadline: "Let us design an unforgettable experience for your audience.",
        ctaButtonText: "Lets Discuss Your Next Project",
        ctaButtonLink: "/contact"
    }
];


    const content = contents.find((content) => content.id === id);

    if (!content) {
        return <div>Application not found</div>;
    }

    return (
        <>
            <Hero {...content} />
            <Body contents={content.bodyContents} />
            <CallToAction
                headline={content.ctaHeadline}
                subheadline={content.ctaSubheadline}
                buttonText={content.ctaButtonText}
                buttonLink={content.ctaButtonLink}
            />
        </>
    );
}

export default Application;