// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function Pagination() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10;

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const getPages = () => {
//     const pages: (number | string)[] = [];
//     if (totalPages <= 6) {
//       for (let i = 1; i <= totalPages; i++) pages.push(i);
//     } else {
//       if (currentPage <= 3) {
//         pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
//       } else if (currentPage >= totalPages - 2) {
//         pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
//       } else {
//         pages.push(
//           1,
//           "...",
//           currentPage - 1,
//           currentPage,
//           currentPage + 1,
//           "...",
//           totalPages
//         );
//       }
//     }
//     return pages;
//   };

//   return (
//     <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 py-6">
//       {/* Previous Button */}
//       <button
//         className="flex items-center gap-1 border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-100 disabled:opacity-50"
//         onClick={() => goToPage(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         <ChevronLeft size={16} className="hidden sm:inline" />
//         Previous
//       </button>

//       {/* Page Numbers */}
//       <div className="flex items-center gap-1 sm:gap-2">
//         {getPages().map((page, idx) =>
//           typeof page === "number" ? (
//             <button
//               key={idx}
//               onClick={() => goToPage(page)}
//               className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm ${
//                 currentPage === page
//                   ? "bg-gray-200 font-semibold"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {page}
//             </button>
//           ) : (
//             <span
//               key={idx}
//               className="px-2 text-gray-500 text-xs sm:text-sm"
//             >
//               {page}
//             </span>
//           )
//         )}
//       </div>

//       {/* Next Button */}
//       <button
//         className="flex items-center gap-1 border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-100 disabled:opacity-50"
//         onClick={() => goToPage(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//         <ChevronRight size={16} className="hidden sm:inline" />
//       </button>
//     </div>
//   );
// }



"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}



export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 py-6">
      {/* Previous */}
      <button
        className="flex items-center gap-1 border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} className="hidden sm:inline" /> Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-2">
        {getPages().map((page, idx) =>
          typeof page === "number" ? (
            <button
              key={idx}
              onClick={() => onPageChange(page)}
              className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm ${
                currentPage === page
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={idx} className="px-2 text-gray-500 text-xs sm:text-sm">
              {page}
            </span>
          )
        )}
      </div>

      {/* Next */}
      <button
        className="flex items-center gap-1 border px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next <ChevronRight size={16} className="hidden sm:inline" />
      </button>
    </div>
  );
}
