# Linear Page Clone

A recreation of Linear's integration essentials page built with Next.js and Tailwind CSS.

## Running the project

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Navigate to an integration page via a route like `/integrations/github`.

## Tested on

Rather than testing fixed viewport dimensions, the application was tested by continuously resizing the browser window to ensure responsive layouts across desktop, tablet, and mobile-sized viewports.

## Known issues / unfinished

- Some parts are not specifically exact (not pixel perfect).
- Used placeholders on the icons and images on integrations page.
- Integrations page is not so accurate since will be allocating time for the other parts.


## AI usage
 I used Claude (Anthropic) from the very beginning of this project, essentially for all the foundational/template work — the boring but necessary setup, including:

- Tech stack confirmation
- Folder structure confirmation

For the actual site details (colors, fonts, icons, spacings, margins), I extracted these myself using a browser extension rather than relying on AI for that part. 

I reviewed and tested all layout/styling changes myself against the reference site before keeping them.


## Deployment

Deployed on Vercel. 
https://samahan-frontend-submission.vercel.app/