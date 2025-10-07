import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Initialize Google Sheets
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    
    // Authenticate
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    });

    // Load document
    await doc.loadInfo();
    
    // Get or create sheet
    let sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      sheet = await doc.addSheet({ headerValues: ['Email', 'Date'] });
    }

    // Add row
    await sheet.addRow({
      Email: email,
      Date: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Email added to newsletter list' }, { status: 200 });
  } catch (error) {
    console.error('Error adding to newsletter:', error);
    return NextResponse.json({ error: 'Failed to add to newsletter' }, { status: 500 });
  }
}
