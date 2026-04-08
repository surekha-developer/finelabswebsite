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
    <section className="w-full bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
        {stats.map((item, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 rounded-none shadow-none bg-transparent border-b sm:border-b-0 sm:border-r border-border last:border-b-0 last:border-r-0"
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
              {/* Theme-aware Overlay for text readability */}
              <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/80" />
            </div>

            {/* Content Layer */}
            <CardContent className="relative z-10 py-10 sm:py-16 px-6 sm:px-10 h-full flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 leading-tight transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 sm:mt-4 text-foreground font-semibold text-sm tracking-wide uppercase transition-colors">{item.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}