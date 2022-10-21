/// <reference path="fourslash.ts" />

/////*end*/test: for (;;) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", "end");
