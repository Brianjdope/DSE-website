# Stevens DSE — Campus Recreation

A reservation and occupancy site for Stevens Institute of Technology's campus
recreation facilities, deployed to GitHub Pages.

**Live site:** https://brianjdope.github.io/DSE-website/

> **Status: front-end prototype.** Time-slot booking counts are mock data,
> generated with `Math.random` each time a facility or date is selected. The
> "Live" occupancy figures are fixed placeholder numbers hard-coded in
> `index.html`. There is no backend or account system, and reservations cannot
> be made yet.

## Features

- **Reserve** — pick a facility, step through dates, and see hourly time slots
  (6 AM – 10 PM) with randomly generated fill levels
- **My Reservations** — static empty-state placeholder
- **Live Occupancy** — static per-facility occupancy cards (placeholder numbers,
  despite the "Live" / "Real-time" labels)

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
index.html   page layout: tabs, facility list, time-slot grid, static occupancy cards
style.css    styling
script.js    tab switching, date navigation, and random time-slot counts
.github/workflows/deploy.yml   GitHub Pages deployment
```

## Known issues

- **Reserve** buttons have no click handler, so clicking one does nothing.
- **Log in** and the menu button have no handlers.
- Date arrows can step back to past dates without limit.
- A slot showing **Full** is random, and the counts change every time you
  re-select a facility or change the date.
- The Live Occupancy tab never updates even though it is labeled "Live".

## Roadmap

- [ ] Real occupancy and booking data
- [ ] Persist reservations (backend + sign-in)
- [ ] Cancel / reschedule from My Reservations

## Related

- [DSE Gym concept site](https://github.com/Brianjdope/dse-gym)
- [Codebase map](https://brianjdope.github.io/repo-maps/maps/DSE-website.html)
