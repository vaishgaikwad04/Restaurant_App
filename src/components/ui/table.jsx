import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto max-h-[460px] overflow-y-auto">

      <table className="w-full text-left">

        <thead className="sticky top-0 bg-white dark:bg-[#111111] z-10">
          <tr className="border-b border-gray-200 dark:border-gray-700">

            {columns.map((col) => (
              <th key={col.key} className="py-3">
                {col.header}
              </th>
            ))}

          </tr>
        </thead>

        <tbody>

          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-6 text-gray-500">
                No data found
              </td>
            </tr>
          ) : (

            data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 dark:border-gray-800"
              >

                {columns.map((col) => (
                  <td key={col.key} className="py-3">
                    {col.render
                      ? col.render(row)
                      : row[col.key]}
                  </td>
                ))}

              </tr>
            ))

          )}

        </tbody>

      </table>

    </div>
  );
};

export default Table;