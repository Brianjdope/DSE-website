# Stevens DSE — Campus Recreation

A reservation and occupancy site for Stevens Institute of Technology's campus
recreation facilities, deployed to GitHub Pages.

**Live site:** https://brianjdope.github.io/DSE-website/

> **Status: front-end prototype.** Booking counts and occupancy numbers are
> randomly generated in the browser on each page load. There is no backend,
> account system, or saved reservations yet.

## Features

- **Reserve** — pick a facility, step through dates, and see hourly time slots
  (6 AM – 10 PM) with how full each slot is
- **My Reservations** — placeholder view for upcoming bookings
- **Live Facility Occupancy** — capacity overview for each space

Facilities and their capacities (from `script.js`):

| Facility | Capacity |
|---|---|
| Schaefer Fitness Center | 65 |
| UCC Fitness Center | 50 |
| Pool | 40 |
| Varsity Weight Room | 20 |
| UCC North Tennis Court | 8 |
| UCC South Tennis Court | 8 |

## Tech stack

Plain HTML, CSS, and JavaScript — no build step. Deployed by the GitHub Actions
workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Project structure

```text
index.html   page layout: tabs, facility list, time-slot grid, occupancy view
style.css    styling
script.js    tab switching, date navigation, and generated time slots
.github/workflows/deploy.yml   GitHub Pages deployment
```

## Roadmap

- [ ] Real occupancy and booking data
- [ ] Persist reservations (backend + sign-in)
- [ ] Cancel / reschedule from My Reservations

## Related

- [DSE Gym concept site](https://github.com/Brianjdope/dse-gym)
- [Codebase map](https://brianjdope.github.io/repo-maps/maps/DSE-website.html)
