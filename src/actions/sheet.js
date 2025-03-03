"use server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Spreadsheet ID
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export default async function fetchGoogleSheetData() {
  try {
    // Authenticate with the service account

    const auth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    // Initialize the Google Spreadsheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);

    // Load the document
    await doc.loadInfo();
    // console.log(loadInfo, "loadInfo=>>>");
    // Access the first sheet
    const sheet = doc.sheetsByIndex[2];

    // Get all rows
    const rows = await sheet.getRows();
    console.log(rows[0], "rows=>>>");
    const data = rows.map((row) => {
      return {
        entity: row.get("topic"), // Use .get() to access column data
        volume: row.get("mentions"),
        scumScore: row.get("scum_score"),
        change: row.get("24h Change(%)"),
        fuders: row.get("Top Fudders"),

        sentiment: 20000,
        // priceImpact: -4950,
        // image: "/assets/png/Ramon-LOGO-COLOUR.jpg",

        // entity: row, // Maps to the "topic" column
        // volume: row.mentions, // Maps to the "mentions" column
        // scum_score: row.scum_score, // Maps to the "scum_score" column
        // change_24h: row["24h Change(%)"], // Maps to the "24h Change(%)" column
        // top_fudders: row["Top Fudders"], // Maps to the "Top Fudders" column
      };
    });
    // Extract data
    // const data = rows.map((row) => {
    //   return {
    //     // Map your columns here
    //     entity: row.topic, // Replace with your column names
    //     volume: row.mentions,
    //     scum_score: row.scum_score,
    //     // Change_24h: row.24h Change(%),
    //     // : row.,
    //   };
    // });

    // Return the data as JSON
    // res.status(200).json(data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    // res.status(500).json({ error: "Failed to fetch data" });
  }
}
