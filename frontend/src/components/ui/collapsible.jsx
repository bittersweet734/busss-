
Home

buildco-preview


Upgrade Plan

User Avatar
Loading...
Mobile and menu are clean. Now exercising the quote form end-to-end and spot-checking inner pages.

Took a screenshot
Screenshots
Image 1
Image 2
Nov 18, 02:27 AM

Form flow works with confirmation toast. Final check: gallery visuals and the admin inbox.

$ curl -s -H "X-Admin-Passcode: BR-inbox-9t4Kx7WmQ...
Nov 18, 02:27 AM

Took a screenshot
Screenshots
Image 1
Image 2
Image 3
Nov 18, 02:28 AM

All flows verified. Writing the PRD and closing out.

Created
/app/memory/PRD.md
Nov 18, 02:28 AM

BuildRight Construction website — complete

A 7-page site built to win calls: a kinetic charcoal-and-ember hero with Call Now and Request a Quote buttons, a services overview, project gallery with filters and lightbox, verified-style testimonials, a quote-process FAQ, and a Contact page with a big click-to-call card
The quote request form saves every inquiry to the database and shows a confirmation, and you can read submissions in a passcode-protected inbox (nothing about a lead gets lost)
Fully responsive (desktop and mobile checked), with basic SEO baked in: page titles, descriptions, social sharing tags, local-business structured data, and a custom logo/favicon
Checked: submitted the quote form on the Contact page and it arrived in the /admin inbox (verified both by API and on screen); wrong passcode is rejected; clicked through Home, Gallery (filters + lightbox), Contact, and the mobile menu at 390px with no layout breaks

Credentials & handoff: everything uses placeholder content the user chose — company "BuildRight Construction", phone +1 (800) 555-0199, email quotes@buildrightconstruction.com (all samples to be replaced with real details). Admin quote inbox: open /admin and enter passcode BR-inbox-9t4Kx7WmQ2Vd (test credential — full details in /app/memory/test_credentials.md). All reviews, stats and project names are sample copy, and project photos are stock images standing in for real builds. Site content (services, testimonials, FAQs, gallery) is editable in one content file. The first Deploy copies this data once; anything entered in preview after that stays in preview, so enter real content on the live site

Open the preview and click through — start with the Call button and a test quote request


Publish

preview
Preview
Nov 18, 02:28 AM




Agent Finished
Nov 18, 02:28 AM
in the contact i want you to addd facebook pages

Nov 18, 02:34 AM

Adding a Facebook page link to the Contact page.

Edited
/app/frontend/src/pages/Contact.jsx
Nov 18, 02:35 AM

Edited
/app/frontend/src/content/site.js
Nov 18, 02:35 AM

Edited
/app/frontend/src/pages/Contact.jsx
Nov 18, 02:35 AM

Edited
/app/memory/test_credentials.md
Nov 18, 02:35 AM

Took a screenshot
Screenshots
Image 1
Nov 18, 02:35 AM

Facebook page link on Contact — complete

The Contact page now has a "Follow us" card with the Facebook icon, linking to your Facebook page in a new tab
The link is set as a placeholder (facebook.com/buildrightconstruction) and is editable in one place alongside your other company details
Checked: opened the Contact page and confirmed the Facebook card renders and points to the placeholder URL

Open the preview and check the Contact page — send me your real Facebook URL when ready and I'll swap it in

Next Action Items:

Real Facebook URL: Replace the placeholder Facebook link with your actual page address
More Socials: Add Instagram and LinkedIn cards beside the Facebook link
Footer Socials: Show the Facebook link in the site footer on every page
Facebook Feed: Show your latest Facebook posts directly on the Contact page

Publish

preview
Preview
Nov 18, 02:35 AM




2.69 free credit remaining!

Upgrade Plan


i want




Auto

Build

send

Preview
Live




Code


backend

pytest.ini

requirements.txt

server.py

frontend

plugins

health-check

health-endpoints.js

webpack-health-plu….js

public

favicon.svg

index.html

robots.txt

src

components

ui

accordion.jsx

alert-dialog.jsx

alert.jsx

aspect-ratio.jsx

avatar.jsx

badge.jsx

breadcrumb.jsx

button.jsx

calendar.jsx

card.jsx

carousel.jsx

checkbox.jsx

collapsible.jsx

command.jsx

context-menu.jsx

dialog.jsx

drawer.jsx

dropdown-menu.jsx

form.jsx

hover-card.jsx

input-otp.jsx

input.jsx

label.jsx

menubar.jsx

navigation-menu.jsx

pagination.jsx

popover.jsx

progress.jsx

radio-group.jsx

resizable.jsx

scroll-area.jsx

select.jsx

separator.jsx

sheet.jsx

skeleton.jsx

slider.jsx

sonner.jsx

switch.jsx

table.jsx

tabs.jsx

textarea.jsx

toast.jsx

toaster.jsx

toggle-group.jsx

toggle.jsx

tooltip.jsx

Buttons.jsx

CTABand.jsx

Footer.jsx

Logo.jsx

Marquee.jsx

Navbar.jsx

QuoteForm.jsx

Reveal.jsx

SEO.jsx

constants

content

hooks

lib

pages

App.css

App.js

index.css

index.js

.gitignore

components.json

craco.config.js

jsconfig.json

package.json

postcss.config.js

README.md

tailwind.config.js

yarn.lock

memory

.gitkeep

PRD.md

test_reports

tests

.gitignore

design_guidelines.json

README.md

test_result.md

yarn.lock

Open in VS Code

pytest.ini


requirements.txt


server.py


webpack-health-plugin.js


health-endpoints.js


favicon.svg


index.html


robots.txt


Buttons.jsx


CTABand.jsx


Footer.jsx


Logo.jsx


Marquee.jsx


Navbar.jsx


QuoteForm.jsx


Reveal.jsx


SEO.jsx


accordion.jsx


alert-dialog.jsx


alert.jsx


aspect-ratio.jsx


avatar.jsx


badge.jsx


button.jsx


breadcrumb.jsx


calendar.jsx


card.jsx


carousel.jsx


checkbox.jsx


collapsible.jsx



12345678910


Cannot edit in read-only editor