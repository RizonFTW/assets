# 5.0.0-master.4 (2025-02-20 23:20)

## Added 
- Added Tabs to bot pages for Description, Updates and Reviews
- Added Server Count and Average Reviews to Bot Cards

## Changes
- Changed link icons to have the icon of what the link is
- You can now use Vanity URLs for /settings
- Improved the UI on Teams Page
- Team Cards & Server Cards have been updated to the new card design.
- Changed Teams Permission Edit to a modal
- Updated the Team Members Cards

# 5.0.0-master.1 (2024-06-15 20:41:33.655586+00:00)

Welcome to the all new and improved Infinity List v5. Featuring a ton of new improvements and changes. This change log may not state everything that has been changed but it will state the important stuff!

## Added

- 5 spicy new themes, they’re pretty cool.
- Server Listing
- Bot/Server page redesign: dropdown in bot/server page sections (links etc) to reduce clutter, improved UX and removal of dedicated vote page + captchas
- New hierarchy post in our help/support panel.
- A bunch of other minor improvements and changes
- Sessions: Improved security compared to the prior API Tokens


## Updated

- Redesigned bot card, badges and tooltips.
- Added new edge feature to bot cards (displays votes)
- Invite button to bot pages (replaces vote)
- Added user friendly vote button to all bot pages.
- Button layout on bot, team and server pages
- Navbar and dropdown menus (works a lot smoother)
- Team settings pane.
- Bot statistics page.
- Packs page/directory.
- List statistics.


## Removed

- Vote button from bot cards
- User and/or shard count from bot cards.
- Sentry support and configs.
- Remove HCaptcha support


# 4.12.0 (2023-11-24 04:59:30.795551+00:00)

## Added

- Teams now supports vanities like bots and servers do to allow for quicker linking to your team!
- Webhooks: Multiple webhooks (up to 5) can now be created as opposed to just one
- Webhooks: Proper support for event whitelists in webhooks to allow different webhooks to process different events


## Updated

- Fixed a bug in which reviews would constantly reload itself
- HTTP bots will no longer show a status at all in most cases as they aren't connected to the gateway
- Style improvements including larger tab buttons


# 4.11.0 (2023-11-19 09:52:31.892560+00:00)

## Added

- Search has been internally rewritten to support multiple entities such as Servers etc.
- Webhook URL's are now shown/visible in the settings page. Previously, both URL and Secret used to not be viewable once set but now only Secret is invisible
- More improvements to our upcoming server listing platform
- Teams has been more fleshed out (4.12.0 improves this even further) with new options.
- Added 'Simple Auth' to webhooks. This allows developers to use the same typical 'Authorization' header method they've been using on other bot lists instead of dealing with our custom encryption system. This is opt-in and disabled by default.
- URL layout has been revamped with new/better vanity support
- Team 'data holders' have been added due to Data Request handling. A 'data holder' owns the data in a team and all teams must have one. They are also responsible for any leaks of personal data within your team
- User pages have been rewritten to group bots by their teams if possible as well as to show entities such as Bots/Servers/Packs within different tabs to both reduce bandwidth and to allow for scaling to other entity types in the future
- Internal configuration system has been rewritten to improve the Developer Experience (DX) when developing the site


## Updated

- CDN assets such as core icons, team avatars and bot/server/team banners have been moved to our own CDN due to upcoming "CDN authentication" checks coming to the Discord CDN
- In accordance with the CDN changes, ticket attachments have also been moved to the CDN thanks to AES-256-GCM. While the attachments are stored publicly, the decryption key can only be accessed by the author as well as Infinity Bot List staff thus protecting tickets from evil eyes.
- The Premium Page for bots now shows all eligible bots correctly
- Major bug fixes to webhook testing. The page no longer endlessly reloads
- Update fetch calls due to API changes to prepare for our server list
- Improvements to our CI processes and versioning code
- Better management of permissions on the site
- Improvements to data requests and data deletion requests to more comprehensively fetch user data
- Better asset management for images in line with our CDN changes including card previews when setting a new banner/avatar etc.
- Partners/Changelogs/Staff Templates page(s) have been updated to be on our database instead of a static slice in our server and the frontend has been updated to take the necessary API changes into account
- Accessibility improvements including better use of ARIA in inputs including checkboxes and labels, better alt tags for images and in-general improvements throughout the site
- Rewrote the authentication code to take up less bundle size. This also led to several fixed bugs where null'd credentials crashed the site
- Rewrote the 'About Us' section to take server listing into account as a future feature
- General bug fixes and improvements to the site


## Removed

- Help center icons and pictures have been temporarily removed due to an oversight and will be fixed by 4.12.0 or 4.12.1
- Staff Panel has been removed from the site in favor of our new panelv2: https://panel.infinitybots.gg


# 4.10.1 (2023-11-09 18:16:57.093313+00:00)

## Updated

- Internal revamps to user reminders. User reminders are now generic across entities to prepare for team/server/'non-bot' voting
- Fixed an error in which credentials was not checked when checking bot approval status leading to infinite loops in the client
- 'Status' codes in error headers have been improved in some areas to not be misleading ('Whoa there' instead of false 403s)
- Internal: Reorganized code to allow for better treeshaking and easier navigation and maintenance.


# 4.10.0 (2023-11-09 04:17:38.292963+00:00)

This release includes big bug fixes throughout the board in preparation for our CDN changes

## Added

- Team Permissions v2. Permissions are now generic across supported entities rather than individualized permissions for each entities. This both reduces code bloat and improves usability by team managers
- Mentionables. Team members can now control whether or not they want to be mentioned in alerts by setting the 'mentionable' flag


## Updated

- General bug fixes to the client
- Sentry has been added in proper and replays are now lazy loaded by the client to improve performance
- Internal changes to reduce bundle sizes
- In general revamps to teams with new features and customizability
- In general improvements to pages on the list


# 4.9.1 (2023-09-01 04:10:59.908940+00:00)

## Updated

- Fixed blog posts not loading due to a regression in 4.9.0
- Fixed bot packs using erroneously nested DIVs for loading bot cards


# 4.9.0 (2023-09-01 04:10:59.913103+00:00)

## Updated

- Vanities has been rewritten from the ground up to be more generic and abstracted to all entities. This will allow easier addition of server listing coming in the near future
- Team Settings layout has been updated to use a consistent layout and make best use of screen space
- Authentication has been rewritten to allow for faster page load times and significant improvements to performance and stability
- Large parts of the site have been rewritten to improve performance
- General bug fixes and improvements


## Removed

- Some old short-form URLs such /{id}/v etc have been removed. Please update to using the full-form URLs such as /{id}/vote etc.


# 4.8.0 (2023-09-01 04:10:59.915264+00:00)

## Updated

- Voting has been rewritten from the ground up to be more generic and abstracted to all entities. This will allow easier addition of server listing coming in the near future
- Bot Packs layout has been improved to be more user friendly
- Analytics on bot pages is now better handled using a target query parameter
- Removed use of custom x-client header for privacy, openness and security reasons. This also fixes some CORS errors that max be experienced by some browsers


# 4.7.0 (2023-09-01 04:10:59.918487+00:00)

## Updated

- Internal backend change: service discovery has been added to the backend to allow for easier scaling if required


# 4.6.0 (2023-09-01 04:10:59.921088+00:00)

## Added

- Added rules to help center
- Webhook logs has been added


## Updated

- Internal backend changes to better support webhooks
- Internal frontend changes
- General bug fixes and improvements
- Improvements to webhook testing


## Removed

- Webhooks v1 has been mostly removed outside of a set of whitelisted bots (13 to be precise)


# 4.5.2 (2023-09-01 04:10:59.923181+00:00)

## Updated

- Dummy release to fix up CI


# 4.5.1 (2023-09-01 04:10:59.925148+00:00)

## Updated

- Hotfix to fix errors in fetching blog posts due to a regression in 4.4.0 and 4.5.0


# 4.5.0 (2023-09-01 04:10:59.926964+00:00)

## Updated

- htmlsanitize no longer sends the entire long description for sanitization, but instead now uses RPC queries to minimize bandwidth usage
- New layout, the new layout wastes less space and is less hacky layout wise (less use of absolute positioning)
- General bug fixes and improvements


## Removed

- Small snippets under servers and shards. They were a waste of space and broke the new layout as well


# 4.4.0 (2023-09-01 04:10:59.929110+00:00)

## Added

- Team webhooks have been added to Team Settings
- Alerts can now be managed through User Settings


## Updated

- Refactored/rewrote the data fetching code for the site to make it more performant with less hacks and issues
- User settings is now tabbed using next/dynamic to reduce load/download times
- TypeScript has been added to most of the site
- Reviews has been refactored internally, no user-facing changes
- General bug fixes and improvements


# 4.3.0 (2023-09-01 04:10:59.931284+00:00)

This version is mostly revamping existing code and systems!

## Added

- Internal: Proper TypeScript coverage!!!
- Changelogs and versioning have been added to allow you to keep track of the changes we're making
- Staff: Onboarding Quizzes and Onboarding V2. As an aside: We're hiring :)
- Redirects: teams/ID -> team/ID to make it easier to link to teams


## Updated

- Some useless code blocks have been removed to reduce bundle sizes slightly
- Rewrote lots of the site to use up-to-date practices including proper TypeScript coverage along with increased performance
- Increased usage of next/dynamic (nextjs dynamic) to reduce page sizes, especially in team settings and bot settings pages
- Bot settings is now a paned layout (bot settings v2) to reduce clutter, page size and avoid confusion with buttons
- The 'Bot JSON' feature in Bot Settings has been replaced by a custom user-friendly viewer called 'Tree View'. Other uses of JSON printing have also been replaced
- API: Webhooks should be more performant with bad intent handling to allow for authentication tests
- Adding a bot with a team ownership now only makes a single API call to avoid failing in a partial state if the team cannot be transferred to as well to decrease time taken to add bots
- Reviews has been refactored internally, no user-facing changes
- Add bot has been improved with better validation and error management to fix several crashes experienced during testing and QA
- An infinite loop when accessing bot settings and possibly other pages as a not-logged-in user has been resolved. The site will now redirect to the login page in such a case
- Updated nextjs to 13.4.4
- Broken sorting in the 'About Us' page due to a broken string comparison sort has been removed. Staff team members are now sorted by permissions instead
