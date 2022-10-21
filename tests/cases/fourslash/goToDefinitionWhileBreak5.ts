/// <reference path="fourslash.ts" />

////label: while (true) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
