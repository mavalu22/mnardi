---
title: "Migrating a Blog to a Static Site: What Actually Changed"
date: 2024-05-14
summary: "Notes from moving a small blog from a server-rendered CMS to a static site generator, and what got simpler and what got harder."
---

This is placeholder sample content used to test the site's layout and content pipeline. It will be replaced with a real post before launch.

Last month I moved a small personal blog from a traditional server-rendered CMS to a static site generator. The content itself barely changed, but almost everything around it did. Here are the notes I wish I had before starting.

## What got simpler

A few things became noticeably easier once the site was just static files:

- Hosting: any CDN or object storage bucket can serve the site, no server process to keep alive
- Security: there is no database and no admin login to protect, so the attack surface shrinks a lot
- Local development: cloning the repository and running the build gives the exact same output as production

## What got harder

Not everything was an improvement. A few workflows needed more thought:

- Editing content requires a Git commit instead of a web form, which is fine for a developer but not for a non-technical editor
- Anything dynamic, like a comment count or a "related posts" widget that depends on live data, needs a separate client-side call
- Preview links for a draft post require a branch deploy rather than just saving the draft

## A small build script

To keep the migration honest, I wrote a short script that compared every rendered page between the old CMS and the new static build, byte by byte after stripping timestamps:

```bash
#!/usr/bin/env bash
set -euo pipefail

for path in $(cat page-list.txt); do
  diff <(curl -s "https://old-site.example.com$path" | strip-timestamps) \
       <(curl -s "https://new-site.example.com$path" | strip-timestamps) \
    || echo "MISMATCH: $path"
done
```

Running this against the full list of URLs caught a handful of pages where a shortcode from the old CMS had not been converted to plain Markdown. Fixing those before the cutover avoided a round of broken pages in production.

If you are planning a similar move, the [Jamstack site generator comparison](https://jamstack.org/generators/) is a good starting point for picking a tool that fits your content and your team's workflow.

## Would I do it again

Yes, for a blog with infrequent updates and no need for a non-technical editing workflow, the trade-off is worth it: faster pages, a smaller attack surface, and a much simpler hosting bill.
