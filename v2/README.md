# SearXNG Browser

A production-ready, TypeScript React search browser with SearXNG backend integration, Dockerized for development and production.

## Features
- React 18 + TypeScript, Vite, React Router v6
- React Query for API state
- ESLint + Prettier, strict TS
- Docker & Nginx for prod/dev
- SearXNG backend with CORS
- Feature-based folder structure

## Quick Start

### Automated
```sh
chmod +x setup.sh
./setup.sh
```

### Manual
```sh
docker-compose -f docker-compose.dev.yml up --build
# or for production
cd frontend && npm install
cd ..
docker-compose up --build
```

## File Structure
See project mapping in docs or above.

## Environment
- `.env` for Vite API base
- `settings.yml` for SearXNG config

## License
MIT
