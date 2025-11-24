export interface BodyItem {
    bold?: string;
    text: string;
}

export interface BodyContent {
    title: string;
    items: BodyItem[];
    image: string;
}

export interface ApplicationContent {
    id: string;
    headlineText: string;
    subHeadlineText: string;
    link: string;
    buttonLabel: string;
    backgroundImage: string;
    bodyContents: BodyContent[];
    ctaHeadline: string;
    ctaSubheadline: string;
    ctaButtonText: string;
    ctaButtonLink: string;
}