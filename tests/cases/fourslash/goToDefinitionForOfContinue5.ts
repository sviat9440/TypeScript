/// <reference path="fourslash.ts" />

////label: for (let a of obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
