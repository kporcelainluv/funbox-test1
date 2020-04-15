// // 1. Keep a DOM reference to the SVG element
// import React from "react";
// const a = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="320"
//     height="480"
//     viewBox="0 0 320 480"
//     id="mySvgElement"
//   >
//     <g>
//       <g>
//         <path
//           fill="none"
//           stroke="#1698d9"
//           strokeMiterlimit="20"
//           strokeWidth="8"
//           d="M308 0c6.627 0 12 5.372 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V43L43 0z"
//           clipPath='url("#94gxa")'
//         />
//       </g>
//     </g>
//   </svg>
// );
// // 2. Serialize element into plain SVG
// const serializedSVG = new XMLSerializer().serializeToString(a);
//
// // 3. convert svg to base64
// const base64Data = window.btoa(serializedSVG);
// // The generated string will be something like:
// // PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdm.........
//
// // If you want to display it in the browser via URL:
// console.log("data:image/svg+xml;base64," + base64Data);
