// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// const stats = [
//   {
//     title: "Fortune 500",
//     subtitle: "Customers Served",
//   },
//   {
//     title: "US & India",
//     subtitle: "Global Presence",
//   },
//   {
//     title: "5",
//     subtitle: "Practice Areas",
//   },
//   {
//     title: "AI",
//     subtitle: "Native Approach",
//   },
// ];

// export default function StatsSection() {
//   return (
//     <section className="w-full bg-gray-50">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-50">
//         {stats.map((item, index) => (
//           <Card
//             key={index}
//             className="border-0 rounded-none shadow-none bg-transparent border-r border-gray-50 last:border-r-0"
//           >
//             <CardContent className="py-10 px-8">
//               {/* BIG TEXT */}
//               <h3 className="text-4xl sm:text-5xl font-bold text-blue-500 leading-tight">
//                 {item.title}
//               </h3>

//               {/* SMALL LABEL */}
//               <p className="mt-4 text-gray-500 text-sm">{item.subtitle}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

//.....

"use client";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Fortune 500",
    subtitle: "Customers Served",
  },
  {
    title: "US & India",
    subtitle: "Global Presence",
  },
  {
    title: "5",
    subtitle: "Practice Areas",
  },
  {
    title: "AI",
    subtitle: "Native Approach",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#e9e9e9]">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="border-0 rounded-none shadow-none bg-transparent border-r border-[#e9e9e9] last:border-r-0"
          >
            <CardContent className="py-12 px-8">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-500 leading-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 text-sm">{item.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}