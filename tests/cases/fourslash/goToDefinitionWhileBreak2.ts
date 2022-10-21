/// <reference path="fourslash.ts" />

////while (true) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
