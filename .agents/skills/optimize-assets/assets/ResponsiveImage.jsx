import React from 'react';
import manifest from '@/assets/manifest.json';

const ResponsiveImage = ({ src, alt, className, sizes = "100vw", loading, fetchPriority, ...props }) => {
  // src can be:
  // 1. A string URL: "banners/feb-2026/Fenton Chemical 1.webp"
  // 2. A Turbopack URL: "/_next/static/media/Fenton Chemical 1.55e9b89b.webp"
  // 3. A static import object: { src: "/_next/static/media/Fenton Chemical 1.55e9b89b.webp", width: 1920, height: 1080 }

  const rawSrc = typeof src === 'object' && src !== null ? src.src : src;
  if (!rawSrc) return null;

  const imgWidth = typeof src === 'object' && src !== null ? src.width : props.width;
  const imgHeight = typeof src === 'object' && src !== null ? src.height : props.height;

  const srcString = decodeURIComponent(rawSrc);

  const cleanBasename = (pathStr) => {
    // Splits by / or \ and gets the last part
    const parts = pathStr.split(/[/\\]/);
    const basename = parts.pop();
    // Handle Turbopack/Next.js hashes: FILENAME.HASH.EXT -> FILENAME.EXT
    // Pattern: 8-digit hex or more
    const match = basename.match(/^(.+?)\.([a-f0-9]{8,}|[a-f0-9]{32})\.(\w+)$/);
    if (match) return `${match[1]}.${match[3]}`;
    return basename;
  };

  const getNoExt = (basename) => basename.split('.').slice(0, -1).join('.');

  const normalizePath = (pathStr) => {
     // Convert /../assets/... to /assets/...
     if (typeof pathStr !== 'string') return pathStr;
     if (pathStr.startsWith('/../')) return pathStr.substring(3);
     return pathStr;
  }

  let imageVariants = null;

  // 1. Direct match in manifest
  if (manifest[srcString]) {
    imageVariants = manifest[srcString];
  } else {
    const lookupBasename = cleanBasename(srcString);
    const lookupNoExt = getNoExt(lookupBasename);

    // 2. Fuzzy match by basename
    let keyMatch = Object.keys(manifest).find(
      (key) => cleanBasename(key) === lookupBasename
    );

    // 3. Match by name only (handles extension changes)
    if (!keyMatch) {
      keyMatch = Object.keys(manifest).find(
        (key) => getNoExt(cleanBasename(key)) === lookupNoExt
      );
    }
    
    imageVariants = keyMatch ? manifest[keyMatch] : null;
  }

  if (!imageVariants) {
    return (
      <img 
        loading={loading || "lazy"} 
        fetchPriority={fetchPriority}
        src={rawSrc} 
        width={imgWidth}
        height={imgHeight}
        alt={alt} 
        className={className} 
        {...props} 
      />
    );
  }

  const widths = Object.keys(imageVariants)
    .filter(k => k !== 'original')
    .sort((a, b) => Number(a) - Number(b));
  
  const srcSetEntries = widths.map(w => `${encodeURI(normalizePath(imageVariants[w]))} ${w}w`);
  
  // Include original in srcset if we know its width
  if (imgWidth && imageVariants.original) {
    srcSetEntries.push(`${encodeURI(normalizePath(imageVariants.original))} ${imgWidth}w`);
  }

  const srcSet = srcSetEntries.length > 0 ? srcSetEntries.join(', ') : undefined;
  const defaultSrc = encodeURI(normalizePath(imageVariants.original || imageVariants[widths[widths.length - 1]] || rawSrc));

  return (
    <img
      loading={loading || "lazy"}
      fetchPriority={fetchPriority}
      src={defaultSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={imgWidth}
      height={imgHeight}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default ResponsiveImage;
