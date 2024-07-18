# Simple Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/si)](https://jsr.io/@preact-icons/si)

**License** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

**Project** [https://simpleicons.org/](https://simpleicons.org/)

[See available icons here](https://react-icons.deno.dev/si)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/si": "jsr:@preact-icons/si@^1.0.11/mod.ts",
    "react-icons/si/": "jsr:@preact-icons/si@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib si

```ts
import { Si1001Tracklists } from "jsr:preact-icons/si@1.0.11/mod.ts"
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

