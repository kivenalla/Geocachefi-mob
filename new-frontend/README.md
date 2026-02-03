# Branch specific README, do not merge to main
## What has been changed?
### Migrated from .scss files to .module.scss files to support how NextJS handles CSS, refer to [Documentation](https://nextjs.org/docs/app/getting-started/css#css-modules)

The following components and pages have been migrated to scss modules:
- Component: Button Primary
- Component: Button Warning
- Component: GeocacheList
- Component: GeocacheModal
- Component: GeocacheTitle
- Page: HomePage

Original .scss files were saved for reference purposes, but should no longer be necessary for components/pages with a matching .module.scss file.

### Migrated pages from /old/pages/ to /app/

The following pages have been moved to fit the NextJS structure:
- Page: HomePage
- Page: CachePage (/app/geocaches/) (not fully functional)
- Page: MapViewPage (/app/map/) (not fully functional)

### CachePage { useParams } has been migrated from 'react-router-dom' to the NextJS alternative 'next/navigation'.
Works with the '[cacheId]' folder to dynamically get the cache id from the url

``` http://localhost:3004/geocaches/[cacheId] ```

Refer to NextJS [Documentation](https://nextjs.org/docs/app/api-reference/functions/use-params)

### Leaflet is now imported globally inside /app/layout.tsx
NextJS did not support importing leaflet inside individual .scss files, but it should now be globally usable.
In addition leaflet has been added as a dependency inside package.json for the new-frontend.

### File paths have been changed from static to dynamic ( ../../components/... --> @/old/components/... )
Nothing much to add here, this change has only been implemented in files that I did other changes in, not for every file in the project.

### End note
I probably forgot something and may have made mistakes with the changes, just ask for any clarifications.

# END OF BRANCH SPECIFIC README


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
