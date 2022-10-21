/// <reference path="fourslash.ts" />

/////*end*/for (let a in obj) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", `end`);
