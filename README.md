# Isaia Huron

## Technologies Used

- Framework: [Next.js](https://nextjs.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Analytics: [Vercel Web Analytics](https://vercel.com/docs/speed-insights) and [Speed Insights](https://vercel.com/docs/speed-insights)
- Deployment: [Vercel](https://vercel.com/)

## Installation

Uses [pnpm](https://pnpm.io/installation) for dependency management, so ensure it is installed on your system.

Install dependencies:
```
pnpm install
```

### Development
Start the development server:
```
pnpm dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

### Production
Build the project for production:
```
pnpm build
```

Start the production server:
```
pnpm start
```

### Compressing Images
```
npx sharp-cli resize --input ./public/Archive/*.png --width 2000 --format webp --output ./public/compressed --no-with-metadata
```