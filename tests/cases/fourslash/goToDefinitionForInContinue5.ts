/// <reference path="fourslash.ts" />

////label: for (let a in obj) {
////  [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
