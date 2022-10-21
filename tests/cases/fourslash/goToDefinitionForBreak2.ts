/// <reference path="fourslash.ts" />

////for (;;) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
