import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fanatiekbouw.nl";
  const now = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/diensten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/diensten/verbouwingen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/diensten/renovatie-onderhoud`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/diensten/overkappingen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/diensten/onderhoud-beheer`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ons-werk`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacyverklaring`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/algemene-voorwaarden`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookiebeleid`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
