# EPIC Lab Website (Jekyll)

This repository is a Jekyll version of the EPIC Lab website so you can avoid hand-editing repeated HTML (nav/footer/head).

## What changed vs the old static site?

- `nav.html` and `footer.html` are now Jekyll includes in `_includes/`
- A single layout `_layouts/default.html` provides the shared `<head>`, navbar, and footer
- Each page (e.g. `index.html`, `team.html`) now has a small YAML front matter header and contains only page-specific content

## Local development

### 1) Install Ruby dependencies

```bash
bundle install
```

### 2) Serve locally

```bash
bundle exec jekyll serve
```

Then open: http://localhost:4000

## Deploy (GitHub Pages)

If you host on GitHub Pages:

- Ensure the repository is configured for GitHub Pages.
- If you use a custom domain, keep/update the `CNAME` file in the repo root.

GitHub Pages will build Jekyll automatically when you push to the default branch.

## Adding new pages

Create a new file, e.g. `people.html`:

```yaml
---
layout: default
title: People - EPIC Lab
permalink: /people.html
---
```

Then add your HTML content below.

## Notes

- Asset paths in the layout use `relative_url` so they work both locally and on GitHub Pages.
- You can later migrate repeated content (team list, publications, etc.) into `_data/*.yml` and render it via Liquid if you want.
