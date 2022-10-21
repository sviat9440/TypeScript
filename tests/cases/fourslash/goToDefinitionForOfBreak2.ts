/// <reference path="fourslash.ts" />

////for (let a of obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
