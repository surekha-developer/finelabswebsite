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
import Image from "next/image";

const stats = [
  {
    title: "Fortune 500",
    subtitle: "Customers Served",
    image: "/images/fortune500.png",
  },
  {
    title: "US & India",
    subtitle: "Global Presence",
    image: "/images/us&india.png",
  },
  {
    title: "5",
    subtitle: "Practice Areas",
    image: "/images/5.png",
  },
  {
    title: "AI",
    subtitle: "Native Approach",
    image: "/images/Ai.png",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#e9e9e9]">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 rounded-none shadow-none bg-transparent border-r border-[#e9e9e9] last:border-r-0"
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-130"
              />
              {/* Fade Overlay for text readability */}
              <div className="absolute inset-0 bg-white/35 transition-colors duration-500 group-hover:bg-white/60" />
            </div>

            {/* Content Layer */}
            <CardContent className="relative z-10 py-12 px-8 h-full flex flex-col justify-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-600 leading-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-800 font-medium text-sm">{item.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}