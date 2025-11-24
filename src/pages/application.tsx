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
            headlineText: "Transform Your Worship Experience with Cutting-Edge AV & Lighting",
            subHeadlineText: "Engage your congregation like never before with immersive sound, crystal-clear visuals, and inspiring lighting.",
            link: "",
            buttonLabel: "Request a Consultation",
            backgroundImage: "bg-[url(/Church.webp)]",
            bodyContents: [
                {
                    title: "Why Modern Worship Spaces Need Professional AV Integration",
                    image: "/Church1.webp",
                    items: [
                        {
                            text: "Clear audio ensures every word, song, and message reaches the congregation with clarity."
                        },
                        {
                            text: "Visual displays amplify sermons, announcements, and worship content."
                        },
                        {
                            text: "Lighting creates atmosphere, highlighting performances and enhancing engagement."
                        },
                        {
                            text: "Seamless integration for live streaming or hybrid worship experiences."
                        },
                    ]
                },
                {
                    title: "Our Services for Houses of Worship",
                    image: "/Church2.webp",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "From crystal-clear speech reinforcement to immersive music experiences."
                        },
                        {
                            bold: "Video & Projection",
                            text: "Large screens, projectors, and LED walls for impactful visuals."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Ambient, stage, and architectural lighting to enhance worship."
                        },
                        {
                            bold: "Control & Automation",
                            text: "Centralized control systems for audio, video, and lighting."
                        },
                        {
                            bold: "Live Streaming Support",
                            text: "Reach your congregation online with professional-grade streaming setups."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/worship.png",
                    items: [
                        {
                            text: "Years of experience designing AV systems for churches and worship spaces."
                        },
                        {
                            text: "Customized solutions tailored to your space, budget, and worship style."
                        },
                        {
                            text: "High-quality equipment from trusted brands for reliability and longevity."
                        },
                        {
                            text: "Expert installation and ongoing support—so your system works perfectly every service."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Elevate Your Worship Experience?",
            ctaSubheadline: "Let our experts design an AV and lighting system that inspires your congregation.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "cafes-restaurants",
            headlineText: "Create an Unforgettable Atmosphere for Your Guests",
            subHeadlineText: "Elevate your café or restaurant with immersive audio, dynamic lighting, and captivating visuals that keep guests coming back.",
            link: "",
            buttonLabel: "Let's Discuss Your Next Project",
            backgroundImage: "bg-[url(/unforgettable.png)]",
            bodyContents: [
                {
                    title: "Why Modern Dining Spaces Need Professional AV Integration",
                    image: "/restaurant.webp",
                    items: [
                        {
                            text: "Set the perfect mood with ambient music and lighting tailored to your brand."
                        },
                        {
                            text: "Ensure announcements and live events are crystal-clear and seamless."
                        },
                        {
                            text: "Enhance guest engagement with video displays for menus, promotions, or entertainment."
                        },
                        {
                            text: "Simplify operations with centralized control systems for audio, video, and lighting."
                        },
                    ]
                },
                {
                    title: "Our Services for Cafés & Restaurants",
                    image: "/restaurant2.webp",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "From background music to live performances—perfectly balanced sound throughout your space."
                        },
                        {
                            bold: "Visual & Display Solutions",
                            text: "Digital menus, video walls, and screens for a modern dining experience."
                        },
                        {
                            bold: "Lighting Design",
                            text: "Adjustable lighting for daytime, evenings, or special events to create the right ambiance."
                        },
                        {
                            bold: "Control & Automation",
                            text: "One-touch management of music, lights, and screens for staff convenience."
                        },
                        {
                            bold: "Event Support",
                            text: "Seamless AV setup for live music, presentations, or private events."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/restaurant3.webp",
                    items: [
                        {
                            text: "Experience designing AV solutions for high-end cafés and restaurants."
                        },
                        {
                            text: "Custom solutions tailored to your space, brand, and target audience."
                        },
                        {
                            text: "Reliable, high-quality equipment from premium brands."
                        },
                        {
                            text: "Expert installation, integration, and ongoing support for flawless operations."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Transform Your Café or Restaurant?",
            ctaSubheadline: "Let our experts design a sound, lighting, and visual system that delights your guests.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "night-clubs-lounges",
            headlineText: "Turn Up the Night with Stunning Sound & Lighting",
            subHeadlineText: "Deliver an electrifying experience that keeps guests coming back, with immersive audio, dynamic lighting, and striking visuals.",
            link: "",
            buttonLabel: "Let's Discuss Your Next Project",
            backgroundImage: "bg-[url(/club.png)]",
            bodyContents: [
                {
                    title: "Why Night Clubs & Lounges Need Professional AV Integration",
                    image: "/engineer.png",
                    items: [
                        {
                            text: "Create high-impact audio experiences with precision-engineered sound systems."
                        },
                        {
                            text: "Transform the space with dynamic lighting that moves with the beat."
                        },
                        {
                            text: "Enhance visuals with LED walls, screens, and projection mapping."
                        },
                        {
                            text: "Ensure seamless control for DJs, events, and staff with centralized AV management."
                        },
                    ]
                },
                {
                    title: "Our Services for Night Clubs & Lounges",
                    image: "/avl.png",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "Powerful, balanced sound to energize the dance floor and VIP areas."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Intelligent, programmable lights that create the perfect vibe."
                        },
                        {
                            bold: "Visual & Projection",
                            text: "LED walls, screens, and immersive visuals to captivate your audience."
                        },
                        {
                            bold: "Control & Automation",
                            text: "One-touch operation for music, lights, and visuals—perfect for busy nights."
                        },
                        {
                            bold: "Event Support",
                            text: "Full AV setup for themed nights, guest DJs, and private parties."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/avl.png",
                    items: [
                        {
                            text: "Proven experience designing high-end AV systems for nightlife venues."
                        },
                        {
                            text: "Tailored solutions that match your brand, space, and entertainment style."
                        },
                        {
                            text: "Premium, reliable equipment for uninterrupted performances."
                        },
                        {
                            text: "Expert installation and ongoing support so your venue always shines."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Elevate Your Night Club or Lounge?",
            ctaSubheadline: "Let our experts design an audio, lighting, and visual system that keeps guests talking.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "large-congregations",
            headlineText: "Empower Every Voice, Every Message, Every Moment",
            subHeadlineText: "Deliver exceptional audio, video, and lighting experiences that engage thousands of worshippers with clarity and impact.",
            link: "",
            buttonLabel: "Request a Consultation",
            backgroundImage: "bg-[url(/congregation.png)]",
            bodyContents: [
                {
                    title: "Why Large Congregations Need Professional AV Integration",
                    image: "/clear.png",
                    items: [
                        {
                            text: "Ensure clear audio reaches every corner, from the front row to the back balcony."
                        },
                        {
                            text: "Use large-format video displays for sermons, announcements, and live events."
                        },
                        {
                            text: "Enhance engagement with dynamic lighting that complements performances and worship."
                        },
                        {
                            text: "Scalable systems designed to grow with your congregation and events."
                        },
                    ]
                },
                {
                    title: "Our Services for Large Congregations",
                    image: "/light.png",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "High-power, high-fidelity sound for speech, music, and choir performances."
                        },
                        {
                            bold: "Video & Projection",
                            text: "LED walls, projectors, and screens for immersive worship experiences."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Stage, architectural, and ambient lighting for impactful visuals."
                        },
                        {
                            bold: "Control & Automation",
                            text: "Centralized systems to manage audio, video, and lighting effortlessly."
                        },
                        {
                            bold: "Live Streaming & Recording",
                            text: "Broadcast services for members who cannot attend in person."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/no.png",
                    items: [
                        {
                            text: "Extensive experience designing AV systems for mega churches and large venues."
                        },
                        {
                            text: "Custom solutions tailored to your sanctuary layout, congregation size, and worship style."
                        },
                        {
                            text: "Premium equipment for reliability and long-term performance."
                        },
                        {
                            text: "Expert installation and ongoing support to ensure flawless operations during every service."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Transform Your Worship for Large Congregations?",
            ctaSubheadline: "Let our experts design a scalable audio, video, and lighting system that engages every member of your congregation.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "hotels-resorts",
            headlineText: "Elevate Every Guest Experience with World-Class AV & Lighting",
            subHeadlineText: "Deliver immersive audio, stunning visuals, and elegant lighting that leave a lasting impression on your guests.",
            link: "",
            buttonLabel: "Let's Discuss Your Next Project",
            backgroundImage: "bg-[url('/hotel.png')]",
            bodyContents: [
                {
                    title: "Why Hotels & Resorts Need Professional AV Integration",
                    image: "/sit-up.png",
                    items: [
                        {
                            text: "Create memorable experiences in lobbies, lounges, restaurants, and event spaces."
                        },
                        {
                            text: "Ensure crystal-clear audio for announcements, presentations, and live events."
                        },
                        {
                            text: "Enhance guest satisfaction with dynamic lighting and visual displays."
                        },
                        {
                            text: "Simplify operations with centralized control systems for audio, video, and lighting."
                        },
                    ]
                },
                {
                    title: "Our Services for Hotels & Resorts",
                    image: "/resorts.png",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "Ambient sound for lobbies, restaurants, spas, and event halls."
                        },
                        {
                            bold: "Video & Projection",
                            text: "Screens, LED walls, and projectors for entertainment, promotions, and meetings."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Customizable mood lighting for guest rooms, public spaces, and event venues."
                        },
                        {
                            bold: "Control & Automation",
                            text: "One-touch operation for staff to manage AV and lighting efficiently."
                        },
                        {
                            bold: "Event & Conference Support",
                            text: "Professional setups for conferences, weddings, and large-scale events."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/hotels.png",
                    items: [
                        {
                            text: "Proven expertise designing AV and lighting solutions for luxury hotels and resorts."
                        },
                        {
                            text: "Tailored systems to match your brand, space, and guest experience goals."
                        },
                        {
                            text: "Premium, reliable equipment ensuring seamless operations 24/7."
                        },
                        {
                            text: "Expert installation and support for flawless experiences every time."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Elevate Your Hotel or Resort Experience?",
            ctaSubheadline: "Let our experts design an AV and lighting system that delights every guest.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "auditoriums-concert-halls",
            headlineText: "Deliver World-Class Performances with Perfect Sound & Lighting",
            subHeadlineText: "Transform your auditorium or concert hall with immersive audio, stunning visuals, and elegant lighting for every performance.",
            link: "",
            buttonLabel: "Let's Discuss Your Next Project",
            backgroundImage: "bg-[url(/aud.png)]",
            bodyContents: [
                {
                    title: "Why Auditoriums & Concert Halls Need Professional AV Integration",
                    image: "/blue_aud.png",
                    items: [
                        {
                            text: "Ensure crystal-clear audio for every performance, speech, or presentation."
                        },
                        {
                            text: "Enhance audience engagement with high-definition visual displays and projection systems."
                        },
                        {
                            text: "Create memorable experiences with dynamic lighting tailored to performances."
                        },
                        {
                            text: "Scalable systems designed for theaters, symphonies, and live events."
                        },
                    ]
                },
                {
                    title: "Our Services for Auditoriums & Concert Halls",
                    image: "/red.png",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "High-fidelity sound for speech, music, orchestras, and live performances."
                        },
                        {
                            bold: "Video & Projection",
                            text: "LED screens, projectors, and immersive visual solutions."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Stage, architectural, and ambient lighting for every event."
                        },
                        {
                            bold: "Control & Automation",
                            text: "Centralized management of AV systems for smooth operations."
                        },
                        {
                            bold: "Event Support",
                            text: "Professional AV setup for concerts, conferences, and performances."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/ligh.png",
                    items: [
                        {
                            text: "Experienced in designing AV systems for high-profile auditoriums and concert halls."
                        },
                        {
                            text: "Custom solutions tailored to your space, audience size, and type of performances."
                        },
                        {
                            text: "Premium, reliable equipment ensuring flawless operations every time."
                        },
                        {
                            text: "Expert installation, integration, and ongoing support for consistent performance quality."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Elevate Your Auditorium or Concert Hall?",
            ctaSubheadline: "Let our experts design an AV and lighting system that enhances every performance.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        },
        {
            id: "concerts-live-events",
            headlineText: "Make Every Event Unforgettable with Spectacular AV & Lighting",
            subHeadlineText: "Deliver immersive sound, stunning visuals, and dynamic lighting that elevates every concert, festival, or live show.",
            link: "",
            buttonLabel: "Let's Discuss Your Next Project",
            backgroundImage: "bg-[url('/mon.png')]",
            bodyContents: [
                {
                    title: "Why Concerts & Live Events Need Professional AV Integration",
                    image: "/cons.png",
                    items: [
                        {
                            text: "Ensure powerful, clear audio reaches every attendee, no matter the venue size."
                        },
                        {
                            text: "Enhance performances with dynamic lighting and stage effects."
                        },
                        {
                            text: "Captivate audiences with large-format video displays and projection mapping."
                        },
                        {
                            text: "Scalable and flexible systems for indoor and outdoor events, festivals, and live shows."
                        },
                    ]
                },
                {
                    title: "Our Services for Concerts & Live Events",
                    image: "/the.png",
                    items: [
                        {
                            bold: "Audio Systems",
                            text: "High-output, distortion-free sound for performers and audiences."
                        },
                        {
                            bold: "Video & Projection",
                            text: "LED walls, screens, and projection solutions to amplify the experience."
                        },
                        {
                            bold: "Lighting Solutions",
                            text: "Intelligent, programmable lights for dramatic stage effects."
                        },
                        {
                            bold: "Control & Automation",
                            text: "Seamless management of audio, lighting, and visuals for event staff."
                        },
                        {
                            bold: "Event Support",
                            text: "Full AV setup, including live streaming, recording, and technical support."
                        },
                    ]
                },
                {
                    title: "Why Choose Spectra AVL",
                    image: "/white.png",
                    items: [
                        {
                            text: "Extensive experience designing AV for concerts, festivals, and live events."
                        },
                        {
                            text: "Customized solutions tailored to your venue, event type, and audience size."
                        },
                        {
                            text: "Premium, reliable equipment built for high-demand, high-impact environments."
                        },
                        {
                            text: "Expert installation, integration, and on-site support for flawless events."
                        },
                    ]
                },
            ],
            ctaHeadline: "Ready to Take Your Live Event to the Next Level?",
            ctaSubheadline: "Let our experts design an AV and lighting system that wows every audience.",
            ctaButtonText: "Schedule Your Free Consultation Today",
            ctaButtonLink: "/contact"
        }
    ]

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