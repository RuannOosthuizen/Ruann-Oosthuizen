// // script.js
// console.log("JavaScript file loaded");

// document.addEventListener('DOMContentLoaded', function() {
//     console.log("DOM fully loaded and parsed");
//     document.addEventListener('wheel', function(e) {
//         if (e.deltaY !== 0) {
//             e.preventDefault();
//             document.querySelector('.horizontal-scroll-content').scrollBy({
//                 left: e.deltaY,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// Navigation hidden and re apear effect:
// let prevScrollPos = window.pageYOffset;

// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//         document.getElementById("navigation").classList.remove("navbar-hidden");
//     } else {
//         document.getElementById("navigation").classList.add("navbar-hidden");
//     }

//     prevScrollPos = currentScrollPos;
// };