/* LIE_CRANE V2: optional, privacy-first website page-view statistics.
   Cloudflare Web Analytics reports aggregate operating-system breakdowns.
   Without a valid owner-generated site token this script sends no analytics requests.
   It does not transmit crane identifiers, access codes, registration data or form contents.
*/
(function () {
  "use strict";
  var token = window.LIE_CRANE_WEB_ANALYTICS_TOKEN;
  if (typeof token !== "string" || !/^[a-f0-9]{32}$/i.test(token)) {
    return;
  }
  var beacon = document.createElement("script");
  beacon.type = "module";
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: token }));
  document.head.appendChild(beacon);
})();
