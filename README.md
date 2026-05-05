# Kaya Summer School

> Kids Playground

Bilingual (RO / EN) Next.js site promoting events for children with disabilities and single-parent families. Includes:

- Events listing + registration form
- Donations page
- Gallery
- "Unplug" / screen-free section with parent tips and an interactive weekly pledge widget
- Interactive character game with **Free Play** and **Forest Adventure** scenario modes

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind 3
- Poppins via `next/font/google`
- Playwright smoke tests
- Docker Compose for local dev + tests (no host Node toolchain needed)

## Run locally

```bash
docker compose up -d web                       # → http://localhost:3000  (redirects to /ro)
docker compose --profile smoke run --rm smoke  # run the 23-test Playwright smoke suite
docker compose down                            # stop everything
```

## Layout

```
web/                       Next.js app
  src/app/[locale]/...     RO + EN routes (page, events, gallery, donate, register, play, unplug)
  src/app/api/register     form POST handler
  src/components/          SiteChrome, Logo, Pledge, CharacterGame
  src/i18n/                dictionaries.ts, events.ts
  public/gallery/          photos
  public/logo-kaya-summer-school.svg
tests/                     Playwright smoke suite (runs in its own container)
docker-compose.yml         web service + smoke profile
```

## Theme

Three colors used as section accents: **orange** (brand) for warmth/CTAs, **blue** (sky) for events/info, **green** (leaf) for nature/play/success.
