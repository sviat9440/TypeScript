/// <reference path="fourslash.ts" />

////for (let a of obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
