/// <reference path="fourslash.ts" />

/////*end*/test: for (;;) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", "end");
