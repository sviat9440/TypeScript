/// <reference path="fourslash.ts" />

////label: for (;;) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
