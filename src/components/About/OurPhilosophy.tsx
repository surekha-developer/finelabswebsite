// "use client";

// export default function OurPhilosophy() {
//   return (
    
//     <section className="w-full bg-white px-6 py-20">
        
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

//         {/* LEFT SIDE */}
//         <div>
//           <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-4">
//             — OUR PHILOSOPHY
//           </p>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
//             Consulting-led.
//             <br />
//             Delivery-proven.
//           </h2>
//         </div>

//         {/* RIGHT SIDE TEXT */}
//         <div className="space-y-6 text-gray-600 leading-relaxed">
//           <p>
//             At FineLabs, partnerships are a strategic cornerstone. Our ability to
//             deliver comprehensive, best-in-class solutions across every domain is
//             amplified by a carefully curated ecosystem of technology alliances.
//           </p>

//           <p>
//             We hold formalized partnerships with <span className="font-semibold text-black">Amazon Web Services (AWS)</span> and{" "}
//             <span className="font-semibold text-black">Microsoft</span>, backed by programs,
//             competencies, service delivery designations, and technical
//             specializations that validate our depth across both platforms.
//           </p>

//           <p>
//             Our partner ecosystem spans hyperscale cloud providers, enterprise SaaS
//             platforms including <span className="font-semibold text-black">SAP</span>,{" "}
//             <span className="font-semibold text-black">Oracle</span>,{" "}
//             <span className="font-semibold text-black">Salesforce</span>, and{" "}
//             <span className="font-semibold text-black">ServiceNow</span>, and the
//             world’s leading cybersecurity vendors — ensuring clients benefit from
//             an integrated, multi-vendor perspective rather than siloed point
//             solutions.
//           </p>
//         </div>

//       </div>

//       {/* Divider line */}
//       <div className="max-w-7xl mx-auto mt-24 border-t border-[#e9e9e9]" />
//     </section>
//   );
// }

//.........


"use client";

export default function OurPhilosophy() {
  return (
    <section className="w-full bg-white px-6 py-20">

      {/* TOP DIVIDER */}
      <div className="max-w-7xl mx-auto border-t border-[#e9e9e9] mb-14" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 mb-4">
            — OUR PHILOSOPHY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
            Consulting-led.
            <br />
            Delivery-proven.
          </h2>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            At FineLabs, partnerships are a strategic cornerstone. Our ability to
            deliver comprehensive, best-in-class solutions across every domain is
            amplified by a carefully curated ecosystem of technology alliances.
          </p>

          <p>
            We hold formalized partnerships with{" "}
            <span className="font-semibold text-black">
              Amazon Web Services (AWS)
            </span>{" "}
            and <span className="font-semibold text-black">Microsoft</span>, backed
            by programs, competencies, service delivery designations, and technical
            specializations that validate our depth across both platforms.
          </p>

          <p>
            Our partner ecosystem spans hyperscale cloud providers, enterprise SaaS
            platforms including <span className="font-semibold text-black">SAP</span>,{" "}
            <span className="font-semibold text-black">Oracle</span>,{" "}
            <span className="font-semibold text-black">Salesforce</span>, and{" "}
            <span className="font-semibold text-black">ServiceNow</span>, and the
            world’s leading cybersecurity vendors — ensuring clients benefit from
            an integrated, multi-vendor perspective rather than siloed point
            solutions.
          </p>
        </div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="max-w-7xl mx-auto mt-14 border-t border-[#e9e9e9]" />
    </section>
  );
}