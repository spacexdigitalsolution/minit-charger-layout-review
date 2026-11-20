import React from 'react';

export default function ImagePlaceholder({
  currentMode,
  imgWidth,
  imgHeight,
  displayWidth,
  displayHeight,
  safeAreaWidth,
  safeAreaHeight,
  rawSrc,
  alt,
  description,
  className = '',
  fill = false
}) {
  if (currentMode === 'dimensions') {
    const sWidth = safeAreaWidth || (imgWidth ? Math.round(imgWidth * 0.9) : 0);
    const sHeight = safeAreaHeight || (imgHeight ? Math.round(imgHeight * 0.9) : 0);

    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 text-gray-500 overflow-hidden text-center ${className}`}
        style={{ width: imgWidth ? `${imgWidth}px` : '100%', height: imgHeight ? `${imgHeight}px` : '100%' }}
      >
        <div className="text-sm font-semibold text-gray-700">
          {displayWidth || imgWidth}x{displayHeight || imgHeight} (Safe: {sWidth}x{sHeight})
        </div>
        <div className="text-xs font-mono bg-white px-2 py-1 rounded shadow-sm break-all mt-2">
          {rawSrc || 'No src'}
        </div>
        <div className="text-xs font-medium text-gray-600 mt-2">
          Alt: {alt || 'MISSING'}
        </div>
        {description && (
          <div className="text-xs text-gray-500 mt-2 italic max-w-full px-2">
            {description}
          </div>
        )}
      </div>
    );
  }

  // Placeholder graphic mode
  const w = imgWidth || 400;
  const h = imgHeight || 300;

  const vbW = 200;
  const vbH = Math.max(60, Math.round((h / w) * vbW));
  const sunR = Math.max(6, Math.round(vbW * 0.06));
  const sunCx = Math.round(vbW * 0.25);
  const sunCy = Math.round(vbH * 0.3);

  const fillStyle = fill
    ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      }
    : { width: imgWidth ? `${imgWidth}px` : '100%', height: imgHeight ? `${imgHeight}px` : '100%' };

  return (
    <div
      className={`flex items-center justify-center bg-[#D0D6DC] overflow-hidden ${fill ? '' : 'relative'} ${className}`}
      style={fillStyle}
    >
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full text-[#EDF1F5]"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={sunCx} cy={sunCy} r={sunR} />
        <path
          d={`M-20 ${vbH} C ${vbW * 0.05} ${vbH * 0.67} ${vbW * 0.2} ${vbH * 0.53} ${vbW * 0.35} ${vbH * 0.8} C ${vbW * 0.425} ${vbH * 0.93} ${vbW * 0.475} ${vbH} ${vbW * 0.55} ${vbH} L -20 ${vbH} Z`}
        />
        <path
          d={`M${vbW * 0.25} ${vbH} C ${vbW * 0.45} ${vbH * 0.53} ${vbW * 0.65} ${vbH * 0.2} ${vbW * 0.85} ${vbH * 0.67} C ${vbW * 0.95} ${vbH * 0.9} ${vbW * 1.05} ${vbH} ${vbW * 1.15} ${vbH} L ${vbW * 0.25} ${vbH} Z`}
        />
      </svg>
    </div>
  );
}

