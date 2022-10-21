/// <reference path="fourslash.ts" />

/////*end*/for (let a of obj) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", `end`);
