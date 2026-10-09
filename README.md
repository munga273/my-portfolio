# Alex Mungai- Personal Portfolio
This is my personal portfolio website, built for CSN 1101:Web Technologies and internet Applications (assignment 1 to 3).The site introduces me with a hero section, an About me section, my interests, skills, and a preview of upcoming projects, using semantic HTML5 and single external stylesheet, fully responsive from 320px up to desktop.

## Structure
 - 'index.html'- The home page
 - 'projects.html' - skills, projects, live GitHub repos, services and contact form 
 - 'styles.css'- all styling(only the skill-bar widths are set inline)
 - 'script.js' - project card expansion, Github API fetch and form validation 
 - 'images/'- compressed profile photo

## Live Deployments
- Github Pages: https://munga273.github.io/my-portfolio/

- Vercel: https://my-portfolio-eta-dusky-72.vercel.app/

## Contact 
- Email: alexmungai273@gmail.com
- Github: https://github.com/munga273

## Performance (Lighthouse)

Tested on the deployed Vercel site, home page, Mobile, Performance category.

| | Performance score |
|---|---|
| Before optimisation | 86–87 (two runs) |
| After optimisation | 93 |

**What I changed:** I resized the profile photo to 256×256 (twice its 128px display size, for sharp screens) and compressed it to about 13 KB. Lighthouse had flagged roughly 107 KiB of image savings before this change.

**Lazy loading:** The profile photo is the only image on the site, and it sits at the top of the page, so I deliberately did not lazy-load it, since that would delay the first paint. The project thumbnails are CSS-styled boxes, not images. Any future below-the-fold images will use `loading="lazy"`.

## Security review

- **No secrets:** the site uses the public GitHub REST API, which needs no API key, so nothing sensitive is in the client-side code.
- **Safe DOM insertion:** all dynamic content (repository cards and form messages) is inserted with `textContent`. `innerHTML` is not used anywhere.
- **HTTPS:** both deployments (GitHub Pages and Vercel) are served over HTTPS, and the padlock appears on both.