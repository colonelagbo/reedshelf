# Reedshelf

Reedshelf is a responsive web application for building a personal digital bookshelf, uploading PDF books, reading in the browser, saving reading progress, and creating reading plans.

## Included

- Existing Reedshelf landing website preserved
- Registration and login flow
- Protected application routes
- Dashboard
- Personal library with search
- PDF upload
- Browser PDF reader
- Reading progress persistence
- Reading plans
- Profile
- Settings
- Responsive desktop/tablet/mobile web layouts
- Logo placeholders wherever a Reedshelf/partner logo is needed

## Important implementation note

This first functional build uses browser storage (localStorage + IndexedDB) so the application can be exercised without a backend. It is a frontend MVP/prototype, not production authentication or cloud storage.

For production, replace the storage functions in `src/lib/appStore.js` with the real authentication, database, API, and secure file-storage services.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Main app routes

- `/login`
- `/register`
- `/app/home`
- `/app/library`
- `/app/upload`
- `/app/reader/:bookId`
- `/app/reading-plans`
- `/app/profile`
- `/app/settings`
