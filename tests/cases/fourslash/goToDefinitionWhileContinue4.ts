/// <reference path="fourslash.ts" />

/////*end*/test: while (true) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", "end");
