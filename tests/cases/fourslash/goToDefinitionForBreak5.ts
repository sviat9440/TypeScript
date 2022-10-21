/// <reference path="fourslash.ts" />

////label: for (;;) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
