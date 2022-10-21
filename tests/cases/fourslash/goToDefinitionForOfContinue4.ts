/// <reference path="fourslash.ts" />

/////*end*/test: for (let a of obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", "end");
