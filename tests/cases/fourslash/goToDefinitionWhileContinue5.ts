/// <reference path="fourslash.ts" />

////label: while (true) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
