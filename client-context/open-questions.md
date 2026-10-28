# Client Discovery & Technical Open Questions

**Project:** `minit-charger-layout-review`  
**Updated:** 2026-10-28  
**Total Open Questions:** 20  

The following questions guide ongoing discovery and technical configuration:

1. **[Domain & Hosting]** What is the exact primary production domain (`minitcharger.com` vs subdomain) intended for DNS pointer?
2. **[Form Processing]** Should `/contact` submissions route to an SMTP service (Resend, SendGrid), a CRM webhook (HubSpot, Salesforce), or an internal notification mailbox?
3. **[Analytics]** What is the official Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) to configure under `NEXT_PUBLIC_GA_ID`?
4. **[Altus II Video]** Is the video module on `/products/altus-ii` hosted directly in S3/CloudFront or embedded from Vimeo/YouTube?
5. **[Cumulus Demo]** Will there be an interactive software sandbox or embedded live demo for the Cumulus IoT platform?
6. **[Datasheet Downloads]** Should downloadable PDF specification sheets be made available for each charger model on `/products/[slug]`?
7. **[Compliance Certificates]** Which electrical safety certifications (UL 2202, UL 2594, CE, FCC Class A) should be badged on the hardware spec tables?
8. **[Case Study Partners]** Are specific airport ground handlers or fleet operators authorized to be named in the testimonial blocks?
9. **[Customer Support Portal]** Should the navigation header include a direct link to an external ticketing/support portal?
10. **[Warranty & SLA]** What standard warranty terms (e.g. 2-year hardware, 5-year power module) should be highlighted in product specs?
11. **[Firmware & OTA Updates]** Should over-the-air update capabilities be positioned as a standalone feature banner for fleet operators?
12. **[CellTrac Compatibility]** Are CellTrac units bundled with hardware sales or sold as optional add-on accessories?
13. **[Pricing Transparency]** Will pricing remain strictly "Request a Quote" or will indicative tier ranges be shown for Level 2 units?
14. **[Multi-Currency / Region]** Will international sales (EU, UK, APAC) require regional voltage options displayed on the product pages?
15. **[Search Indexing Timeline]** When is the target go-live date to lift the `noindex` preview guard flag?
16. **[Lead Scoring Fields]** Does the contact form require custom fields for expected charger count and utility transformer capacity?
17. **[Career / Team Page]** Should an engineering leadership or careers section be added to `/about`?
18. **[Legal Entity Details]** What is the official legal entity name and registered headquarters address for the footer legal notices?
19. **[Newsletter / Insights]** Is there an active newsletter subscription list to hook up to `/blogs`?
20. **[Maintenance Contracts]** Should field service maintenance packages (Gold, Platinum SLA) be detailed on a dedicated services page?

