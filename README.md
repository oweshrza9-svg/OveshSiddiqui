# OveshSiddiqui

## devOvi portfolio

A responsive, typography-led developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Custom styling lives in `src/app/globals.css`; the project artwork is drawn with CSS and HTML rather than presented as screenshots of features that have not been verified. Motion is deliberately restrained and respects the system reduced-motion setting.

### Requirements

- Node.js 20.9 or newer
- npm

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build and serve it locally, run `npm run build` followed by `npm start`.

### Content notes

- The Selected Work section includes NSOC Winter Edition, the Restaurant Ordering App, and DropVault. DropVault has no public demo or source link in the project configuration, so none is implied.
- The Restaurant Ordering App is disclosed as an independent frontend recreation, made with the original owner's permission and not the official application.
- The inquiry form currently validates required fields in the browser but does not deliver or store submissions. To enable delivery, create a Formspree form addressed to `developerovesh234@gmail.com`, add its endpoint ID as a deployment environment variable, and wire the form submission to that endpoint with loading, success, and error feedback. Keep any private service token on the server; never put it in browser code.
- Confirm that `developerovesh234@gmail.com` is an active account before adding the visible direct-email link. The current page intentionally does not expose an unconfirmed mailto address.
# OveshSiddiqui
