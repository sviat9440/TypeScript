/// <reference path="fourslash.ts" />

////for (let a in obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
