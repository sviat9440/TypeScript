/// <reference path="fourslash.ts" />

/////*end*/for (let a in obj) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", `end`);
