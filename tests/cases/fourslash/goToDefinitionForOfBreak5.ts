/// <reference path="fourslash.ts" />

////label: for (let a of obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
