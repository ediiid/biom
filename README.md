# Welcome

Greetings! :smiley:
My name is Edis, thank you for reviewing my exam of the Biom site home page option.

## Building & running the project

Clone, build and run (tested with npm version 9.6.2 & node version 18.12.1)

```bash
# download the zip from above or clone as follows
git clone https://github.com/ediiid/biom.git

# install all dependencies
npm install

# build
npm run build
```

Run option 1: preview

```bash
# run as preview
npm run preview

# preview server should be available at http://localhost:4173/
```

Run option 2: production

```bash
# run in production
npm run start

# production server should be available at http://localhost:3000/ (port can be forwarded through
# a reverse proxy before allowing it to be accessible from outside
# (this is how the bellow self-hosted demo is running))
```

## More info

Used dependencies / libraries / design-systems:

- SvelteKit framework (and its core dependencies)
- TailwindCSS
- Checking with JSDoc (tool)
- ESLint (tool)
- Prettier (tool)

Notes:

- Took 24 hours to complete from start to finish
- Images were optimized and converted to .webp instead of .jpeg (due to most of them being transparent)
- Mobile version was improvised
- 'Brandon Grotesque' font appears slightly different (perhaps due to a different version/revision of the font that I managed to obtain)
- 'Chronicle Display' font was replaced by Serif (since I couldn't obtain it)

Demo can be found also here: https://biom.edis.one/

> Please note that the demo is self-hosted on a home server and there is a small chance for it to be offline (server uptime is 95% and upload speed isn't great but enough).

Thank you for reviewing the exam!
