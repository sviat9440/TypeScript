/// <reference path="fourslash.ts" />

////label: for (let a in obj) {
////  [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
