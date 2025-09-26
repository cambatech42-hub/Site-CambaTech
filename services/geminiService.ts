import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

// Initialize AI only if API key is available
let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

// Fallback placeholder images with the Cambatech color scheme
const generatePlaceholderImage = (aspectRatio: string): string => {
  const dimensions = {
    '1:1': { width: 400, height: 400 },
    '16:9': { width: 640, height: 360 },
    '4:3': { width: 640, height: 480 },
    '9:16': { width: 360, height: 640 }
  };
  
  const { width, height } = dimensions[aspectRatio as keyof typeof dimensions] || dimensions['16:9'];
  
  // Create a simple SVG placeholder with Cambatech colors
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0D47A1;stop-opacity:0.1" />
          <stop offset="50%" style="stop-color:#00ACC1;stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:#FB8C00;stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad1)"/>
      <circle cx="${width/2}" cy="${height/2}" r="30" fill="#0D47A1" opacity="0.2"/>
      <circle cx="${width/2 + 20}" cy="${height/2 - 20}" r="15" fill="#FB8C00" opacity="0.3"/>
      <circle cx="${width/2 - 25}" cy="${height/2 + 15}" r="20" fill="#00ACC1" opacity="0.3"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const generateLogoInspiredImage = async (
  prompt: string, 
  aspectRatio: '1:1' | '16:9' | '4:3' | '9:16' = '16:9'
): Promise<string> => {
  // If no API key is available, return a placeholder image
  if (!API_KEY || !ai) {
    console.log("Gemini API key not configured, using placeholder image");
    return generatePlaceholderImage(aspectRatio);
  }

  try {
    const fullPrompt = `Generate a minimalist, professional tech-themed image in a clean vector art style. The image should incorporate abstract elements like speech bubbles, data waves, and simple circuit lines. The color palette must be strictly limited to a deep blue (#0D47A1), a vibrant orange (#FB8C00), and a bright teal (#00ACC1), on a clean white or very light gray background. The overall aesthetic should be modern, clean, and optimistic. The image must represent the concept of: "${prompt}"`;
    
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: fullPrompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: aspectRatio,
        },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    } else {
      throw new Error("No image was generated.");
    }
  } catch (error) {
    console.error("Error generating image with Gemini, falling back to placeholder:", error);
    // Return placeholder on error
    return generatePlaceholderImage(aspectRatio);
  }
};