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
    "react-icons/si":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-si@1.0.4/mod.ts",
    "react-icons/si/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-si@1.0.4/ico/",
  }
}
```

## Direct import sample

```ts
import { Si1001Tracklists } from "https://deno.land/x/react_icons_si@1.0.4/mod.ts"
```

## import_map import sample

```ts
import { Si1001Tracklists } from "react-icons/si"
```

## minimal import

```ts
import { Si1001Tracklists } from "react-icons/si/Si1001Tracklists.ts"
```

## minimal import using default export

```ts
import Si1001Tracklists from "react-icons/si/Si1001Tracklists.ts"
```

