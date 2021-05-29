"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
    //let s: string = await response.json();
    let s = await response.text();
    console.log(s);
}
console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/2-chapter/L2.5/testjson.json");
console.log("Ende");
//# sourceMappingURL=script.js.map