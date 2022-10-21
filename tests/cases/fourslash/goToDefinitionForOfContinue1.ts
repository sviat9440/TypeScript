/// <reference path="fourslash.ts" />

/////*end*/for (let a of obj) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", `end`);
