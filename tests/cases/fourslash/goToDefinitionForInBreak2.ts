/// <reference path="fourslash.ts" />

////for (let a in obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
