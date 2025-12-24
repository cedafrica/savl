import { useEffect } from "react";

export type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
};

const SEO = ({ title, description, keywords }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard SEO
    setMeta("description", description);
    if (keywords?.length) {
      setMeta("keywords", keywords.join(", "));
    }

    // Open Graph
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, keywords]);

  return null;
};

export default SEO;
