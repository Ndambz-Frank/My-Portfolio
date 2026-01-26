// Utility to extract dominant colors from profile photo
// This helps create a cohesive color scheme based on the actual photo

export const extractColorsFromImage = (imagePath, callback) => {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  img.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const colorCounts = {};
      
      // Sample pixels (every 10th pixel for performance)
      for (let i = 0; i < pixels.length; i += 40) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const a = pixels[i + 3];
        
        if (a > 128) { // Only count non-transparent pixels
          const color = `rgb(${r},${g},${b})`;
          colorCounts[color] = (colorCounts[color] || 0) + 1;
        }
      }
      
      // Get dominant colors
      const sortedColors = Object.entries(colorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(entry => entry[0]);
      
      if (callback) {
        callback(sortedColors);
      }
    } catch (e) {
      console.log('Color extraction limited by CORS, using default palette');
      if (callback) {
        callback(null);
      }
    }
  };
  
  img.src = imagePath;
};

// Convert RGB string to hex
export const rgbToHex = (rgb) => {
  const match = rgb.match(/\d+/g);
  if (!match) return null;
  const [r, g, b] = match.map(Number);
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

