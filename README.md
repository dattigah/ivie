# Ivié Prototype

Static prototype (Claude Design export) restructured for Vercel with clean URLs.

| Page | URL |
|---|---|
| Home | `/` |
| Shop | `/shop` |
| Product | `/product` |
| Checkout | `/checkout` |
| Account | `/account` |
| Atelier | `/atelier` |
| Book a Visit | `/book-a-visit` |
| Our Stores | `/our-stores` |
| Custom Request | `/custom-request` |
| Custom Tracker | `/custom-tracker` |
| How It Works | `/how-it-works` |
| Sign In | `/sign-in` |
| Client Care | `/client-care` |
| Back Office | `/back-office` |
| App Touchpoints | `/app-touchpoints` |
| Ivié App | `/ivie-app` |
| Mobile Preview | `/mobile-preview` |
| Prototype Hub | `/prototype-hub` |

`IvieHeader.dc.html` and `IvieFooter.dc.html` are shared components loaded by `support.js` and must keep their names. Old Claude Design URLs (e.g. `/Book%20a%20Visit.dc.html`) redirect to the clean URLs via `vercel.json`.
