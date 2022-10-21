/// <reference path="fourslash.ts" />

////while (true) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
