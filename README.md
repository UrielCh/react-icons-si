# Simple Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/si)](https://jsr.io/@preact-icons/si)

**License** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

**Project** [https://simpleicons.org/](https://simpleicons.org/)

[See available icons here](https://react-icons.deno.dev/si)

## install the module

```bash
deno add @preact-icons/si
dnpx jsr add @preact-icons/si
pnpm dlx jsr add @preact-icons/si
bunx jsr add @preact-icons/si
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { Si1001Tracklists } from "@preact-icons/si"
```

## import a single icon, downloading just one icon

```ts
import { Si1001Tracklists } from "react-icons/si/Si1001Tracklists"
```

or using default export

```ts
import Si1001Tracklists from "react-icons/si/Si1001Tracklists"
```
