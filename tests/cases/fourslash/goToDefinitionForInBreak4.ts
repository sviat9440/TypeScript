/// <reference path="fourslash.ts" />

/////*end*/test: for (let a in obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", "end");
