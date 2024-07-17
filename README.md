# Simple Icons icons for deno / Preact

**License** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

**Project** [https://simpleicons.org/](https://simpleicons.org/)

[See available icons here](https://react-icons.deno.dev/si)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/si":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-si@1.0.10/mod.ts",
    "react-icons/si/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-si@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib si

```ts
import { Si1001Tracklists } from "https://deno.land/x/react_icons_si@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { Si1001Tracklists } from "react-icons/si"
```

## import a single icon, downloading just one icon

```ts
import { Si1001Tracklists } from "react-icons/si/Si1001Tracklists.ts"
```

or using default export

```ts
import Si1001Tracklists from "react-icons/si/Si1001Tracklists.ts"
```

