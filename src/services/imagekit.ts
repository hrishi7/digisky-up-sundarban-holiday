import { upload } from '@imagekit/javascript';

interface ImageKitAuthParams {
  token: string;
  signature: string;
  expire: number;
}

interface ImageKitUploadResponse {
  fileId: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  filePath: string;
  size: number;
  fileType: string;
}

const urlEndpoint = "https://ik.imagekit.io/digiskyup";
const publicKey = "public_4jBanV+6o1NwEDdXQSxTCt5rGJM=";

/**
 * Uploads an image file to ImageKit and returns the public URL
 * @param file - The file to upload
 * @param fileName - Optional custom file name
 * @returns Promise with the upload response including the public URL
 */
export async function uploadToImageKit(
  file: File,
  fileName?: string
): Promise<ImageKitUploadResponse> {
  try {
    // Step 1: Get authentication parameters from our backend
    const authResponse = await fetch('/api/imagekit-auth');
    
    if (!authResponse.ok) {
      throw new Error('Failed to get authentication parameters');
    }
    
    const authParams: ImageKitAuthParams = await authResponse.json();
    
    // Step 2: Get public key and URL endpoint from environment variables
    
    if (!publicKey || !urlEndpoint) {
      throw new Error('ImageKit configuration is missing');
    }
    
    // Step 3: Upload the file to ImageKit
    const uploadResponse = await upload({
      file: file,
      fileName: fileName || file.name,
      publicKey: publicKey,
      signature: authParams.signature,
      token: authParams.token,
      expire: authParams.expire,
    });
    
    return uploadResponse as ImageKitUploadResponse;
  } catch (error) {
    console.error('ImageKit upload error:', error);
    throw error;
  }
}

/**
 * Gets the current ImageKit configuration status
 * @returns Object indicating if ImageKit is properly configured
 */
export function isImageKitConfigured(): boolean {
  return !!(
    publicKey &&
    urlEndpoint
  );
}
