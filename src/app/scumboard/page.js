import fetchGoogleSheetData from "@/actions/sheet";
import Scumboard from "@/components/pages/scumboard/Scumboard";
import React from "react";

export default async function ScumBoardPage() {
  const data = await fetchGoogleSheetData();

  return <Scumboard data={data} />;
}
