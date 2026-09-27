# haitao-chen0248.github.io

Source for my personal website: **[haitao-chen0248.github.io](https://haitao-chen0248.github.io)**

I'm a Ph.D. candidate in Biomedical Engineering at Duke University, working on computational imaging in the [Computational Optics Lab](https://horstmeyer.pratt.duke.edu/).

## Structure

| Path | What it holds |
| --- | --- |
| `_config.yml` | Site settings and sidebar profile |
| `_data/navigation.yml` | Top navigation bar |
| `_pages/` | Page content: About, Publications, Talks, News, Teaching |
| `_sass/layout/_custom.scss` | Styles for the cards on every page (light and dark themes) |
| `images/` | Photos and figures used on the site |

Everything else is the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template.

## Updating content

Each page is a list of cards. To add an entry, copy an existing card in the matching file under `_pages/` and edit it. Put images in `images/`, resized to 1200 px on the long side.

## Local preview

Requires Ruby 3.x and Bundler.

```bash
bundle install
bundle exec jekyll serve -l
```

Open <http://localhost:4000>. Restart the server after editing `_config.yml`.

## Deployment

GitHub Pages builds and publishes the site on every push to `master`.

## Updating the template

```bash
git remote add upstream https://github.com/academicpages/academicpages.github.io.git
git fetch upstream
git merge upstream/master
```

Resolve conflicts in favor of local content. Delete any sample posts, pages, or images the merge brings back.

## License

Template code is MIT licensed (see [LICENSE](LICENSE)). Site content and images © Haitao Chen. All rights reserved.
