export function breakdownIpfs(ipfsUri) {
  // Modified from is-ipfs package at https://github.com/ipfs-shipyard/is-ipfs/blob/393859af921ef52d786c0f14bf772eeda7f8930b/src/index.js#L12
  const nativeIpfsPattern = /ipfs:\/\/(\w+)([\w#\/?]*)$/;
  const pathGatewayPattern = /^https?:\/\/[^/]+\/ipfs\/(\w+)([\w#\/?]*)$/;
  const subdomainGatewayPattern = /^https?:\/\/(\w+)\.ipfs\.[^/?#]+(.*)$/;

  if (typeof ipfsUri !== "string")
    throw new Error("Given IPFS URI should be of type string");

  const nativeIpfsMatch = ipfsUri.match(nativeIpfsPattern);
  if (nativeIpfsMatch) {
    const [_, hash, path] = nativeIpfsMatch;
    return {
      cid: hash,
      path: path,
    };
  }

  const pathGatewayMatch = ipfsUri.match(pathGatewayPattern);
  if (pathGatewayMatch) {
    const [_, hash, path] = pathGatewayMatch;
    return {
      cid: hash,
      path: path,
    };
  }

  const subdomainGatewayMatch = ipfsUri.match(subdomainGatewayPattern);
  if (subdomainGatewayMatch) {
    const [_, hash, path] = subdomainGatewayMatch;
    return {
      cid: hash,
      path: path,
    };
  }

  throw new Error(`Couldn't breakdown ${ipfsUri} to CID and path`);
}

export function anyIpfsToNativeIpfs(ipfsUri) {
  const IPFSIANAScheme = "ipfs://";
  const ipfs = breakdownIpfs(ipfsUri);
  return `${IPFSIANAScheme}${ipfs.cid}${ipfs.path}`;
}

export function ifIpfsConvertToNativeIpfs(uri) {
  try {
    return anyIpfsToNativeIpfs(uri);
  } catch {
    return uri;
  }
}
