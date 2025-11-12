import { NextResponse } from 'next/server';
import ImageKit from '@imagekit/nodejs';

// Initialize ImageKit with your credentials
const privateKey = "private_W1dmrK9xwBJPPIRyAUjBxO2pfSY=";

const imagekit = new ImageKit({
  privateKey: privateKey,
});

export async function GET() {
  try {
    // Generate authentication parameters
    const authenticationParameters = imagekit.helper.getAuthenticationParameters();
    
    return NextResponse.json(authenticationParameters);
  } catch (error) {
    console.error('Error generating ImageKit auth parameters:', error);
    return NextResponse.json(
      { error: 'Failed to generate authentication parameters' },
      { status: 500 }
    );
  }
}
