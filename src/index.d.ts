/**
 * @param ipfsUri IPFS URI to breakdown into CID and path.
 * Can be a native IPFS URI, subdomain URI or path gateway URI.
 *
 * @example
 * ```js
 * import { breakdownIpfs } from "ipfs-uri-utils";
 *
 * breakdownIpfs("https://soundxyz.mypinata.cloud/ipfs/QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU")
 * // => {cid: QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU, path: ""}
 *
 * breakdownIpfs("ipfs://bafybeihehacot7c5dj7y5qhwgaj7q6gdxfrjfmxcltl6wmtrjxzcn6cs7e/path/to/")
 * // => {cid: bafybeihehacot7c5dj7y5qhwgaj7q6gdxfrjfmxcltl6wmtrjxzcn6cs7e, path: "/path/to/"}
 * ```
 */

export function breakdownIpfs(ipfsUri: string): {
  cid: string;
  path: string;
};

/**
 * @param ipfsUri Any IPFS URI to convert into native IPFS URI.
 * Can be of type subdomain or path gateway.
 *
 * @throws Will throw an error if the given URI isn't a valid IPFS URI.
 *
 * @example
 * ```js
 * import { anyIpfsToNativeIpfs } from "ipfs-uri-utils";
 *
 * anyIpfsToNativeIpfs("https://soundxyz.mypinata.cloud/ipfs/QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU")
 * // => ipfs://QmXHfjwQ1MKmZLmzMNWc51brBTxFRWyjXKtLLysj2e5FcU
 *
 * anyIpfsToNativeIpfs("https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.cf-ipfs.com/wiki/Vincent_van_Gogh.html/#1850")
 * // => ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/wiki/Vincent_van_Gogh.html/#1850
 * ```
 */
export function anyIpfsToNativeIpfs(ipfsUri: string): string;

/**
 * If given URI is a valid IPFS URI, try convert it into native IPFS URI.
 *
 * Unlike `anyIpfsToNativeIpfs` this function doesn't throw an error. It
 * will return the given URI if it can't be converted.
 *
 * @param uri
 *
 * @example
 * ```js
 * import { ifIpfsConvertToNativeIpfs } from "ipfs-uri-utils";
 *
 * ifIpfsConvertToNativeIpfs("https://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq.ipfs.cf-ipfs.com/wiki/Vincent_van_Gogh.html/#1850")
 * // => ipfs://bafybeiemxf5abjwjbikoz4mc3a3dla6ual3jsgpdr4cjr3oz3evfyavhwq/wiki/Vincent_van_Gogh.html/#1850
 *
 * ifIpfsConvertToNativeIpfs("https://ipfs.io")
 * // => https://ipfs.io
 * ```
 */
export function ifIpfsConvertToNativeIpfs(uri: string): string;
