# NAS Global Platform

Monorepo containing:

- `web/`: Next.js (TypeScript) marketing website
- `api/`: Django REST API (contact form + admin)
- `mobile/`: React Native (TypeScript) mobile app

## Quick start

### Web

```bash
cd web
npm install
npm run dev
```

The web app proxies `/api/*` to Django. You can override the backend origin:

```bash
API_ORIGIN=http://localhost:8000 npm run dev
```

### API

```bash
cd api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Mobile

```bash
cd mobile
npm install
npm run start
```

To point the mobile app at your Django server, set:

```bash
EXPO_PUBLIC_API_ORIGIN=http://localhost:8000
```

