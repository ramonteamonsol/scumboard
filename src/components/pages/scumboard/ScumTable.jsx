import React from "react";

export default function ScumTable({ ScumTableData }) {
  const formatNumber = (number) => {
    if (number >= 1e12) {
      return (number / 1e12).toFixed(1) + "t";
    } else if (number >= 1e9) {
      return (number / 1e9).toFixed(1) + "b";
    } else if (number >= 1e6) {
      return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
      return (number / 1e3).toFixed(1) + "k";
    } else {
      return number.toString();
    }
  };
  const calculatePercentage = (part, total) => {
    const percentage = (part / total) * 100;
    if (percentage % 1 === 0) {
      return percentage.toFixed(0);
    } else {
      return percentage.toFixed(1);
    }
  };

  return (
    <div data-aos="fade-up" className="mt-6 xl:px-4 w-full overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-2 xl:border-b-[3px] border-[#555555]">
          <tr className="text-[#FFFFFF80] text-nowrap text-lg md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px]">
            <th className="font-helvetica-neue-condensed text-start !leading-[162%] font-bold px-2">
              Entity
            </th>
            <th className="font-helvetica-neue-condensed text-center !leading-[162%] font-bold px-2">
              Scum Score
            </th>
            <th className="font-helvetica-neue-condensed text-center !leading-[162%] font-bold px-2">
              24h Change
            </th>

            <th className="font-helvetica-neue-condensed text-center !leading-[162%] font-bold px-2">
              Volume
            </th>
            <th className="font-helvetica-neue-condensed text-start !leading-[162%] font-bold px-2">
              Top FUDers
            </th>
          </tr>
        </thead>
        <tbody>
          {ScumTableData.map((row, index) => (
            <tr
              key={index}
              className={
                index === ScumTableData.length - 1
                  ? ""
                  : "border-b-2 xl:border-b-[3px] border-[#555555]"
              }
            >
              <td>
                <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className="text-[#FFFFFF] truncate w-28 sm:w-36 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue-condensed">
                    {row.entity}
                  </p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className="text-[#B4FFA3] truncate w-28 sm:w-36 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue-condensed">
                    {calculatePercentage(row.scumScore, row.volume)}%
                  </p>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className="text-[#B4FFA3] truncate w-28 sm:w-36 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue-condensed">
                    {calculatePercentage(row.change, row.volume)}%
                  </p>
                </div>
              </td>

              <td>
                <div className="flex items-center justify-center text-center gap-4 lg:gap-6 xl:gap-8 px-2 py-5">
                  <p className="text-[#FFFFFF] truncate w-28 sm:w-36 max-w-52 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] !leading-[162%] font-bold font-helvetica-neue-condensed">
                    {formatNumber(row.volume)}
                  </p>
                </div>
              </td>
              <td>
                <div className="flex items-center px-2 py-5 max-w-36 overflow-x-scroll hide-scrollbar cursor-pointer  ">
                  {row.fuders.split(",").map((name, index2) => (
                    <div
                      key={index2}
                      className={`rounded-3xl w-max text-md px-2 font-normal text-black bg-[#B4FFA3]  border-2 lg:border-[3px] border-[#1B1B1B] `}
                    >
                      <p>{name}</p>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
