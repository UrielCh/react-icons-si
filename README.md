# Simple Icons icons for deno / Preact

**License** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

**Project** [https://simpleicons.org/](https://simpleicons.org/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=si)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/si":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-si@1.0.1/mod.ts",
    "react-icons/si/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-si/ico/",
  }
}
```

## Direct import sample

`import { Si1001Tracklists } from "https://deno.land/x/react_icons_si@1.0.1/mod.ts"`

## import_map import sample

`import { Si1001Tracklists } from "react-icons/si"`

## minimal import

`import { Si1001Tracklists } from "react-icons/si/Si1001Tracklists.ts"`

## minimal import default

`import Si1001Tracklists from "react-icons/si/Si1001Tracklists.ts"`

