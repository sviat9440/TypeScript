/// <reference path="fourslash.ts" />

////for (;;) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
