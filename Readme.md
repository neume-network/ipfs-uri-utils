# ipfs-utils

> Set of utilities for IPFS URIs

## Install

```
npm install ipfs-uri-utils
```

## Usage

### `function breakdownIpfs(ipfsUri: string): { cid: string; path: string; }`
Breakdown given IPFS URI into CID and path. IPFS URI can be a [native IPFS URI](https://docs.ipfs.tech/how-to/address-ipfs-on-web/#native-urls), [subdomain URI](https://docs.ipfs.tech/how-to/address-ipfs-on-web/#subdomain-gateway) or [path gateway URI](https://docs.ipfs.tech/how-to/address-ipfs-on-web/#path-gateway).

```js
import { breakdownIpfs } from "ipfs-uri-utils";

breakdownIpfs("https://soundxyz.mypinata.cloud/ipfs/QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU")
// => {cid: QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU, path: ""}

breakdownIpfs("ipfs://bafybeihehacot7c5dj7y5qhwgaj7q6gdxfrjfmxcltl6wmtrjxzcn6cs7e/path/to/")
// => {cid: bafybeihehacot7c5dj7y5qhwgaj7q6gdxfrjfmxcltl6wmtrjxzcn6cs7e, path: "/path/to/"}
```

### `function anyIpfsToNativeIpfs(ipfsUri: string): string`

Given any IPFS URI convert it into native IPFS URI. IPFS URI can be of type subdomain or path gateway.

Note: Will throw an error if the given URI isn't a valid IPFS URI.

```js
import { anyIpfsToNativeIpfs } from "ipfs-uri-utils";

anyIpfsToNativeIpfs("https://soundxyz.mypinata.cloud/ipfs/QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU")
// => ipfs://QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU

anyIpfsToNativeIpfs("https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.cf-ipfs.com/wiki/Vincent_van_Gogh.html/#1850")
// => ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/wiki/Vincent_van_Gogh.html/#1850
```

### `function ifIpfsConvertToNativeIpfs(uri: string): string`

If given URI is a valid IPFS URI, try convert it into native IPFS URI.

Unlike `anyIpfsToNativeIpfs` this function doesn't throw an error. It will return the given URI if it can't be converted.

```js
import { ifIpfsConvertToNativeIpfs } from "ipfs-uri-utils";

ifIpfsConvertToNativeIpfs("https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.cf-ipfs.com/wiki/Vincent_van_Gogh.html/#1850")
// => ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/wiki/Vincent_van_Gogh.html/#1850

ifIpfsConvertToNativeIpfs("https://ipfs.io")
// => https://ipfs.io
```

For more examples, check out the [test file](/test/index_test.js).