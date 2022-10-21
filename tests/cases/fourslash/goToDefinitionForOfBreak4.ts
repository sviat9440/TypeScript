/// <reference path="fourslash.ts" />

/////*end*/test: for (let a of obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", "end");
