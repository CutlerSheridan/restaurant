(()=>{"use strict";var e={513:(e,t,n)=>{e.exports=n.p+"67c412276260208ede73.jpeg"},224:(e,t,n)=>{e.exports=n.p+"cfaf6d66a53b9cf1b889.jpg"},413:(e,t,n)=>{e.exports=n.p+"8e5242e1f70d6dbedf21.jpg"},810:(e,t,n)=>{e.exports=n.p+"1f0926f8062555f257b0.jpg"}},t={};function n(a){var c=t[a];if(void 0!==c)return c.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(224),t=n(413),a=n(513);const c=()=>{const n=document.createElement("div");n.id="splash-tile";const c=document.createElement("h1");c.classList.add("splash-text"),c.id="restaurant-name",c.textContent="Mos Eisley Cantina";const s=document.createElement("h2");s.classList.add("splash-text"),s.id="restaurant-slogan",s.textContent="Live music! Cheap drinks!",n.append(c,s);const o=document.createElement("span");o.classList.add("photo-caption"),o.textContent="Figrin D'an and the Modal Nodes";const r=document.createElement("section");r.classList.add("grid-container");const i=[`url("${e}")`,"Looking to get drunk cheap?  You won't find cheaper, stronger drinks anywhere on Tatooine!","Toast your success or drown your sorrows while listening to the hottest bands in town!",`url("${t}")`,`url("${a}")`,"We don't care what you are — Mind your own business and you're welcome anytime \n (No droids)"];let d=4;const l=document.createDocumentFragment();for(let e=0;e<i.length;e++){const t=document.createElement("div");t.classList.add("small-tile"),d>2?(t.classList.add("img-tile"),t.style.backgroundImage=i[e]):(t.classList.add("desc-tile"),t.textContent=i[e]),4===d?d=1:d++,l.append(t)}const m=document.createElement("div");m.classList.add("big-tile"),m.id="testimonials";const u=["I love it so much, my favorite bar","I do all my business dealings here","Can't be beat if you're looking for a good time","Not for the faint-hearted"];for(let e=0;e<4;e++){const t=document.createElement("div");t.classList.add("testimony"),t.textContent=u[e],m.append(t)}r.append(l,m);const p=document.createElement("section");p.classList.add("content-container"),p.append(n,o,r),document.querySelector(".base-container").after(p)};var s=n(810);(()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.classList.add("base-container");const n=document.createElement("header"),a=document.createElement("div");a.classList.add("active-tab"),a.id="tab-home",a.textContent="About";const s=document.createElement("div");s.id="tab-menu",s.textContent="Menu";const o=document.createElement("div");o.id="tab-contact",o.textContent="Contact",[a,s,o].forEach((e=>{e.classList.add("tab"),n.append(e)})),t.append(n),e.append(t),c()})(),(()=>{const e=document.querySelectorAll(".tab");e.forEach((t=>t.addEventListener("click",(t=>{if(!t.target.classList.contains("active-tab")){e.forEach((e=>e.classList.remove("active-tab"))),t.target.classList.add("active-tab");try{(()=>{const e=document.querySelector(".content-container"),t=document.createRange();t.selectNode(e),t.deleteContents()})()}catch{}switch(t.target.id){case"tab-home":c();break;case"tab-menu":(()=>{const e=document.createElement("h1");e.classList.add("h1-m"),e.textContent="Menu";const t=document.createElement("h2");t.classList.add("h2-m"),t.textContent="Cocktails";const n=[{name:"Fuzzy Tauntaun",desc:"Numbing foam gives this drink a special kick",pic:s},{name:"Tester",desc:"test test test",pic:"../src/index-images/alien-patron.jpeg"}],a=document.createElement("div");for(let e=0;e<n.length;e++){const t=document.createElement("div");t.classList.add("menu-item-container");const c=document.createElement("div");c.classList.add("menu-text-container");const s=document.createElement("p");s.classList.add("menu-item-name"),s.textContent=n[e].name;const o=document.createElement("p");o.classList.add("menu-item-desc"),o.textContent=n[e].desc,c.append(s,o);const r=document.createElement("img");r.classList.add("menu-item-pic"),r.src=n[e].pic,t.append(c,r),a.append(t)}const c=document.createElement("section");c.classList.add("content-container"),c.append(e,t,a),document.querySelector(".base-container").after(c)})()}}}))))})()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTFCTCxFQUFhMUMsT0FBTzJDLEdBRXhCLE1BQU1LLEVBQWdCakUsU0FBU1UsY0FBYyxXQUM3Q3VELEVBQWNwRCxVQUFVQyxJQUFJLHFCQUM1Qm1ELEVBQWNoRCxPQUFPb0MsRUFBWUMsRUFBaUJLLEdBRTVCM0QsU0FBU2dDLGNBQWMsbUJBQy9CQyxNQUFNZ0MsSUZMSixXQWRBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS1jb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jbGVhci1ET00tYm9keS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBEcmlua3MgZnJvbSBcIi4vaW5kZXgtaW1hZ2VzL2RyaW5rcy5qcGdcIjtcbmltcG9ydCBNYXpCYW5kIGZyb20gXCIuL2luZGV4LWltYWdlcy9tYXotYmFuZC5qcGdcIjtcbmltcG9ydCBBbGllblBhdHJvbiBmcm9tIFwiLi9pbmRleC1pbWFnZXMvYWxpZW4tcGF0cm9uLmpwZWdcIjtcblxuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBzcGxhc2hUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGxhc2hUaWxlLmlkID0gXCJzcGxhc2gtdGlsZVwiO1xuICAgIGNvbnN0IHNwbGFzaFJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHNwbGFzaFJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJzcGxhc2gtdGV4dFwiKTtcbiAgICBzcGxhc2hSZXN0YXVyYW50TmFtZS5pZCA9IFwicmVzdGF1cmFudC1uYW1lXCI7XG4gICAgc3BsYXNoUmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIk1vcyBFaXNsZXkgQ2FudGluYVwiO1xuICAgIGNvbnN0IHNwbGFzaFJlc3RhdXJhbnRTbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc3BsYXNoUmVzdGF1cmFudFNsb2dhbi5jbGFzc0xpc3QuYWRkKFwic3BsYXNoLXRleHRcIik7XG4gICAgc3BsYXNoUmVzdGF1cmFudFNsb2dhbi5pZCA9IFwicmVzdGF1cmFudC1zbG9nYW5cIjtcbiAgICBzcGxhc2hSZXN0YXVyYW50U2xvZ2FuLnRleHRDb250ZW50ID0gXCJMaXZlIG11c2ljISBDaGVhcCBkcmlua3MhXCI7XG4gICAgc3BsYXNoVGlsZS5hcHBlbmQoc3BsYXNoUmVzdGF1cmFudE5hbWUsIHNwbGFzaFJlc3RhdXJhbnRTbG9nYW4pO1xuXG4gICAgY29uc3QgcGhvdG9DYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcGhvdG9DYXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwaG90by1jYXB0aW9uXCIpO1xuICAgIHBob3RvQ2FwdGlvbi50ZXh0Q29udGVudCA9IFwiRmlncmluIEQnYW4gYW5kIHRoZSBNb2RhbCBOb2Rlc1wiO1xuXG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHNtYWxsVGlsZUNvbnRlbnQgPSBbXG4gICAgICAgIGB1cmwoXCIke0RyaW5rc31cIilgLFxuICAgICAgICBcIkxvb2tpbmcgdG8gZ2V0IGRydW5rIGNoZWFwPyAgWW91IHdvbid0IGZpbmQgY2hlYXBlciwgc3Ryb25nZXIgZHJpbmtzIGFueXdoZXJlIG9uIFRhdG9vaW5lIVwiLFxuICAgICAgICBcIlRvYXN0IHlvdXIgc3VjY2VzcyBvciBkcm93biB5b3VyIHNvcnJvd3Mgd2hpbGUgbGlzdGVuaW5nIHRvIHRoZSBob3R0ZXN0IGJhbmRzIGluIHRvd24hXCIsXG4gICAgICAgIGB1cmwoXCIke01hekJhbmR9XCIpYCxcbiAgICAgICAgYHVybChcIiR7QWxpZW5QYXRyb259XCIpYCxcbiAgICAgICAgXCJXZSBkb24ndCBjYXJlIHdoYXQgeW91IGFyZSDigJQgTWluZCB5b3VyIG93biBidXNpbmVzcyBhbmQgeW91J3JlIHdlbGNvbWUgYW55dGltZSBcXG4gKE5vIGRyb2lkcylcIlxuICAgIF07XG4gICAgbGV0IHNtYWxsVGlsZVRyYWNrZXIgPSA0O1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc21hbGxUaWxlQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3VGlsZS5jbGFzc0xpc3QuYWRkKFwic21hbGwtdGlsZVwiKTtcbiAgICAgICAgaWYgKHNtYWxsVGlsZVRyYWNrZXIgPiAyKSB7XG4gICAgICAgICAgICBuZXdUaWxlLmNsYXNzTGlzdC5hZGQoXCJpbWctdGlsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc21hbGxUaWxlQ29udGVudFtpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RpbGUuY2xhc3NMaXN0LmFkZChcImRlc2MtdGlsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpbGUudGV4dENvbnRlbnQgPSBzbWFsbFRpbGVDb250ZW50W2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzbWFsbFRpbGVUcmFja2VyID09PSA0KSB7XG4gICAgICAgICAgICBzbWFsbFRpbGVUcmFja2VyID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNtYWxsVGlsZVRyYWNrZXIrKztcbiAgICAgICAgfVxuICAgICAgICBmcmFnbWVudC5hcHBlbmQobmV3VGlsZSk7XG4gICAgfVxuICAgIGNvbnN0IHRlc3RpbW9uaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVzdGltb25pYWxzLmNsYXNzTGlzdC5hZGQoXCJiaWctdGlsZVwiKTtcbiAgICB0ZXN0aW1vbmlhbHMuaWQgPSBcInRlc3RpbW9uaWFsc1wiO1xuICAgIGNvbnN0IHRlc3RpbW9uaWFsc0FycmF5ID0gW1xuICAgICAgICBcIkkgbG92ZSBpdCBzbyBtdWNoLCBteSBmYXZvcml0ZSBiYXJcIixcbiAgICAgICAgXCJJIGRvIGFsbCBteSBidXNpbmVzcyBkZWFsaW5ncyBoZXJlXCIsXG4gICAgICAgIFwiQ2FuJ3QgYmUgYmVhdCBpZiB5b3UncmUgbG9va2luZyBmb3IgYSBnb29kIHRpbWVcIixcbiAgICAgICAgXCJOb3QgZm9yIHRoZSBmYWludC1oZWFydGVkXCJcbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlc3RpbW9ueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlc3RpbW9ueS5jbGFzc0xpc3QuYWRkKFwidGVzdGltb255XCIpO1xuICAgICAgICB0ZXN0aW1vbnkudGV4dENvbnRlbnQgPSB0ZXN0aW1vbmlhbHNBcnJheVtpXTtcbiAgICAgICAgdGVzdGltb25pYWxzLmFwcGVuZCh0ZXN0aW1vbnkpO1xuICAgIH1cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZChmcmFnbWVudCwgdGVzdGltb25pYWxzKTtcblxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZChzcGxhc2hUaWxlLCBwaG90b0NhcHRpb24sIGdyaWRDb250YWluZXIpO1xuXG4gICAgY29uc3QgYmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFzZS1jb250YWluZXJcIik7XG4gICAgYmFzZUNvbnRhaW5lci5hZnRlcihob21lQ29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSBcIi4vaG9tZS1jb250ZW50XCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51LWNvbnRlbnRcIjtcbmltcG9ydCBjbGVhckRPTUJvZHkgZnJvbSBcIi4vY2xlYXItRE9NLWJvZHlcIjtcblxuY29uc3QgY3JlYXRlQmFzZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGVudEJhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgYmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGJhc2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhc2UtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCB0YWJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJIb21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtdGFiXCIpO1xuICAgIHRhYkhvbWUuaWQgPSBcInRhYi1ob21lXCI7XG4gICAgdGFiSG9tZS50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBjb25zdCB0YWJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJNZW51LmlkID0gXCJ0YWItbWVudVwiO1xuICAgIHRhYk1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb25zdCB0YWJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJDb250YWN0LmlkID0gXCJ0YWItY29udGFjdFwiO1xuICAgIHRhYkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb25zdCB0YWJzID0gW3RhYkhvbWUsIHRhYk1lbnUsIHRhYkNvbnRhY3RdO1xuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChcInRhYlwiKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZCh0YWIpO1xuICAgIH0pO1xuICAgIGJhc2VDb250YWluZXIuYXBwZW5kKGhlYWRlcik7XG4gICAgY29udGVudEJhc2UuYXBwZW5kKGJhc2VDb250YWluZXIpO1xuICAgIGNyZWF0ZUhvbWUoKTtcbn0pKCk7XG5cbmNvbnN0IGNvbnRyb2xUYWJzID0gKCgpID0+IHtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIik7XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXRhYlwiKSkge1xuICAgICAgICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS10YWJcIikpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS10YWJcIik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNsZWFyRE9NQm9keSgpO1xuICAgICAgICAgICAgfSBjYXRjaCB7IH1cbiAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwidGFiLWhvbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlSG9tZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGFiLW1lbnVcIjpcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGFiLWNvbnRhY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSlcbn0pKCk7IiwiY29uc3QgY2xlYXJET01Cb2R5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGNvbnRlbnRDb250YWluZXIuc2VsZWN0Tm9kZShjb250ZW50RGl2KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmRlbGV0ZUNvbnRlbnRzKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyRE9NQm9keTsiLCJpbXBvcnQgZnV6enlUYXVudGF1biBmcm9tIFwiLi9tZW51LWltYWdlcy9mdXp6eS10YXVudGF1bi5qcGdcIjtcblxuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImgxLW1cIik7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGNvbnN0IGNvY2t0YWlsc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb2NrdGFpbHNIZWFkZXIuY2xhc3NMaXN0LmFkZChcImgyLW1cIik7XG4gICAgY29ja3RhaWxzSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb2NrdGFpbHNcIjtcblxuICAgIGNvbnN0IGNvY2t0YWlscyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJGdXp6eSBUYXVudGF1blwiLFxuICAgICAgICAgICAgZGVzYzogXCJOdW1iaW5nIGZvYW0gZ2l2ZXMgdGhpcyBkcmluayBhIHNwZWNpYWwga2lja1wiLFxuICAgICAgICAgICAgcGljOiBmdXp6eVRhdW50YXVuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiVGVzdGVyXCIsXG4gICAgICAgICAgICBkZXNjOiBcInRlc3QgdGVzdCB0ZXN0XCIsXG4gICAgICAgICAgICBwaWM6IFwiLi4vc3JjL2luZGV4LWltYWdlcy9hbGllbi1wYXRyb24uanBlZ1wiXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNvbnN0IGFsbE1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2NrdGFpbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1lbnVUZXh0LmNsYXNzTGlzdC5hZGQoXCJtZW51LXRleHQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLW5hbWVcIik7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gY29ja3RhaWxzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tZGVzY1wiKTtcbiAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBjb2NrdGFpbHNbaV0uZGVzYztcbiAgICAgICAgbWVudVRleHQuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtRGVzYyk7XG5cbiAgICAgICAgY29uc3QgaXRlbVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGl0ZW1QaWMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1waWNcIik7XG4gICAgICAgIGl0ZW1QaWMuc3JjID0gY29ja3RhaWxzW2ldLnBpYztcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVUZXh0LCBpdGVtUGljKTtcblxuICAgICAgICBhbGxNZW51SXRlbXMuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICB9XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVIZWFkZXIsIGNvY2t0YWlsc0hlYWRlciwgYWxsTWVudUl0ZW1zKTtcblxuICAgIGNvbnN0IGJhc2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2UtY29udGFpbmVyXCIpO1xuICAgIGJhc2VDb250YWluZXIuYWZ0ZXIobWVudUNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7Il0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsInNwbGFzaFRpbGUiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzcGxhc2hSZXN0YXVyYW50TmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50Iiwic3BsYXNoUmVzdGF1cmFudFNsb2dhbiIsImFwcGVuZCIsInBob3RvQ2FwdGlvbiIsImdyaWRDb250YWluZXIiLCJzbWFsbFRpbGVDb250ZW50Iiwic21hbGxUaWxlVHJhY2tlciIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImkiLCJuZXdUaWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXN0aW1vbmlhbHMiLCJ0ZXN0aW1vbmlhbHNBcnJheSIsInRlc3RpbW9ueSIsImhvbWVDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiYWZ0ZXIiLCJjb250ZW50QmFzZSIsImJhc2VDb250YWluZXIiLCJoZWFkZXIiLCJ0YWJIb21lIiwidGFiTWVudSIsInRhYkNvbnRhY3QiLCJmb3JFYWNoIiwidGFiIiwidGFicyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJjb250ZW50RGl2IiwiY29udGVudENvbnRhaW5lciIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZSIsImRlbGV0ZUNvbnRlbnRzIiwibWVudUhlYWRlciIsImNvY2t0YWlsc0hlYWRlciIsImNvY2t0YWlscyIsIm5hbWUiLCJkZXNjIiwicGljIiwiYWxsTWVudUl0ZW1zIiwibWVudUl0ZW0iLCJtZW51VGV4dCIsIml0ZW1OYW1lIiwiaXRlbURlc2MiLCJpdGVtUGljIiwibWVudUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=