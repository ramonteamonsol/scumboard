"use client";
import { DasedSpan } from "@/components/helper/Icon";
import React, { useState } from "react";
import ScumTable from "./ScumTable";

export default function Scumboard({ data }) {
  const [tableDataView, setTableDataView] = useState("24h");

  return (
    <div className="bg-[#1B1B1B] min-h-screen overflow-hidden">
      <div className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-[134px]">
        <h2 className="text-white uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center !leading-[163%] mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-14 2xl:mb-[90px] font-vandalism">
          SCUMBOARD
        </h2>
      </div>
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[72px] pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20">
        <div className="rounded-3xl lg:rounded-[45px] xl:rounded-[69px] border-white border-2 md:border-4 p-4 lg:p-6 mt-4 md:mt-6 lg:mt-8 xl:mt-12 mb-1 lg:mb-2 overflow-hidden">
          <div data-aos="flip-left" className="flex w-full items-center gap-3">
            <p className="text-[19px] lg:text-2xl xl:text-3xl 2xl:text-[40px] text-white !leading-[162.5%] flex items-center gap-4 text-nowrap xl:pl-4">
              Scum Index{" "}
            </p>
            <DasedSpan />
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 w-full max-w-fit xl:pr-4">
              <button
                onClick={() => {
                  setTableDataView("24h");
                }}
                className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] text-[#1B1B1B] !leading-[162.5%] rounded-xl lg:rounded-2xl 2xl:rounded-[18px] px-2 md:px-3
              ${
                tableDataView === "24h"
                  ? "bg-[#B4FFA3] text-[#1B1B1B]"
                  : "text-white bg-transparent"
              }`}
              >
                24h
              </button>
              <button
                onClick={() => {
                  setTableDataView("7d");
                }}
                className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px]  !leading-[162.5%] rounded-xl lg:rounded-2xl 2xl:rounded-[18px] px-2 md:px-3 ${
                  tableDataView === "7d"
                    ? "bg-[#B4FFA3] text-[#1B1B1B]"
                    : "text-white bg-transparent"
                }`}
              >
                7d
              </button>
            </div>
          </div>
          <ScumTable ScumTableData={data || []} />
        </div>
      </div>
    </div>
  );
}
