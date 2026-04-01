// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// const services = [
//   {
//     title: "Cloud",
//     desc: "End-to-end cloud strategy, infrastructure modernization, and FinOps across AWS and Azure.",
//     icon: "☁️",
//   },
//   {
//     title: "Cyber Security",
//     desc: "Multi-layered enterprise security spanning cloud, OT, threat intelligence, and compliance.",
//     icon: "🔐",
//   },
//   {
//     title: "Experience Platforms",
//     desc: "ERP, SCM, CRM, HCM transformation through advisory, implementation, and managed support.",
//     icon: "⚡",
//   },
//   {
//     title: "Product Engineering",
//     desc: "Full-lifecycle product capabilities from ideation through modernization and sustenance.",
//     icon: "🧪",
//   },
//   {
//     title: "Data, AI & Automation",
//     desc: "Generative AI, RAG, Agentic AI, data platforms, and hyper-automation turning data into advantage.",
//     icon: "🤖",
//   },
//   {
//     title: "IoT & Supply Chain",
//     desc: "Edge-driven visibility, predictive intelligence, and connected operations for complex supply chains.",
//     icon: "🔗",
//   },
// ];

// export default function CoreCapabilities() {
//   return (
//     <section className="w-full bg-white py-20 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* TOP TITLE */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
//           <div>
//             <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 mb-4">
//               CORE CAPABILITIES
//             </p>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
//               What we{" "}
//               <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                 deliver.
//               </span>
//             </h2>
//           </div>

//           <button className="mt-6 lg:mt-0 border border-gray-300 rounded-full px-6 py-3 text-sm hover:bg-gray-100 transition">
//             All services →
//           </button>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-3xl overflow-hidden">
//           {services.map((item, index) => (
//             <Card
//               key={index}
//               className="group border-0 rounded-none shadow-none relative hover:bg-gray-50 transition-all duration-300"
//             >
//               {/* bottom gradient border on hover */}
//               <div className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500" />

//               <CardContent className="p-10">
//                 {/* ICON BOX */}
//                 <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
//                   {item.icon}
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {item.desc}
//                 </p>

//                 {/* LINK */}
//                 <span className="text-sm text-gray-400 group-hover:text-blue-500 transition">
//                   Explore ↗
//                 </span>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//....


// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// const services = [
//   {
//     title: "Cloud",
//     desc: "End-to-end cloud strategy, infrastructure modernization, and FinOps across AWS and Azure.",
//     icon: "☁️",
//   },
//   {
//     title: "Cyber Security",
//     desc: "Multi-layered enterprise security spanning cloud, OT, threat intelligence, and compliance.",
//     icon: "🔐",
//   },
//   {
//     title: "Experience Platforms",
//     desc: "ERP, SCM, CRM, HCM transformation through advisory, implementation, and managed support.",
//     icon: "⚡",
//   },
//   {
//     title: "Product Engineering",
//     desc: "Full-lifecycle product capabilities from ideation through modernization and sustenance.",
//     icon: "🧪",
//   },
//   {
//     title: "Data, AI & Automation",
//     desc: "Generative AI, RAG, Agentic AI, data platforms, and hyper-automation turning data into advantage.",
//     icon: "🤖",
//   },
//   {
//     title: "IoT & Supply Chain",
//     desc: "Edge-driven visibility, predictive intelligence, and connected operations for complex supply chains.",
//     icon: "🔗",
//   },
// ];

// export default function CoreCapabilities() {
//   return (
//     <section className="w-full bg-white py-20 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* TOP TITLE */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
//           <div>
//             <p className="text-xs font-semibold tracking-[0.25em] text-blue-600 mb-4">
//               CORE CAPABILITIES
//             </p>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
//               What we{" "}
//               <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
//                 deliver.
//               </span>
//             </h2>
//           </div>

//           <button className="mt-6 lg:mt-0 border border-gray-300 rounded-full px-6 py-3 text-sm hover:bg-gray-100 transition">
//             All services →
//           </button>
//         </div>

//         {/* GRID (NO BORDER NOW) */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3">
//           {services.map((item, index) => (
//             <Card
//               key={index}
//               className="group border-none shadow-none rounded-none relative hover:bg-gray-50 transition-all duration-300"
//             >
//               {/* bottom gradient border on hover */}
//               <div className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500" />

//               <CardContent className="p-10">
//                 {/* ICON BOX */}
//                 <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
//                   {item.icon}
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {item.desc}
//                 </p>

//                 {/* LINK */}
//                 <span className="text-sm text-gray-400 group-hover:text-blue-500 transition">
//                   Explore ↗
//                 </span>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//........

"use client";

import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Cloud",
    desc: "End-to-end cloud strategy, infrastructure modernization, and FinOps across AWS and Azure.",
    icon: "☁️",
  },
  {
    title: "Cyber Security",
    desc: "Multi-layered enterprise security spanning cloud, OT, threat intelligence, and compliance.",
    icon: "🔐",
  },
  {
    title: "Experience Platforms",
    desc: "ERP, SCM, CRM, HCM transformation through advisory, implementation, and managed support.",
    icon: "⚡",
  },
  {
    title: "Product Engineering",
    desc: "Full-lifecycle product capabilities from ideation through modernization and sustenance.",
    icon: "🧪",
  },
  {
    title: "Data, AI & Automation",
    desc: "Generative AI, RAG, Agentic AI, data platforms, and hyper-automation turning data into advantage.",
    icon: "🤖",
  },
  {
    title: "IoT & Supply Chain",
    desc: "Edge-driven visibility, predictive intelligence, and connected operations for complex supply chains.",
    icon: "🔗",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="w-full relative py-20 px-4 sm:px-6 pt-32 pb-24 overflow-hidden bg-white">

      {/* GRADIENT BACKGROUND */}
      <div
        className="absolute top-0 left-0 w-full h-[800px] z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 160% 120% at 50% -10%, #121926 45%, #8c35ff 58%, #2b6eff 65%, #ffffff 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-24 lg:mb-32">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-blue-300 mb-4 uppercase drop-shadow-lg">
              CORE CAPABILITIES
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg">
              What we{" "}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                deliver.
              </span>
            </h2>
          </div>

          <button className="mt-8 lg:mt-0 border border-white/50 bg-white/5 backdrop-blur-sm text-white rounded-full px-8 py-4 text-sm font-medium hover:bg-white/10 hover:border-white transition shadow-lg">
            All services →
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-white/40 backdrop-blur-xl border-none rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-gray-200/50">
          {services.map((item, index) => (
            <Card
              key={index}
              className="group border border-gray-100/30 bg-white/90 rounded-none shadow-none relative transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
            >
              {/* BLUE LOADER LINE */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />

              <CardContent className="p-6">
                {/* ICON */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* LINK */}
                <span className="text-sm text-gray-400 group-hover:text-blue-500 transition">
                  Explore ↗
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}