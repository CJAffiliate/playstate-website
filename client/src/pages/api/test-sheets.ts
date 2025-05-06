import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwA4aLa6kQRHEgfdpN7J4oikKQrZP_l5gG0rwSKUMTsdPASXi3B5Yai_0cu09YVpgAl/exec';

export default async function handler(req: NextRequest) {
  try {
    // Test data
    const testData = [
      new Date().toISOString(),
      'Test Name',
      'test@example.com',
      'Test Project',
      'Test Budget',
      'Test Message'
    ];

    console.log('Sending test data to Google Sheets:', testData);

    const response = await fetch(GOOGLE_SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postData: {
          contents: JSON.stringify({
            values: [testData]
          })
        }
      }),
      mode: 'no-cors'
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    return NextResponse.json({ 
      message: 'Test data sent',
      data: testData
    });
  } catch (error) {
    console.error('Error in test:', error);
    return NextResponse.json({ 
      message: 'Error sending test data',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 