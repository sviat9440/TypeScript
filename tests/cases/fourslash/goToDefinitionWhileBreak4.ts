/// <reference path="fourslash.ts" />

/////*end*/test: while (true) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", "end");
