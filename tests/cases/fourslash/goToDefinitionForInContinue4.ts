/// <reference path="fourslash.ts" />

/////*end*/test: for (let a in obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", "end");
