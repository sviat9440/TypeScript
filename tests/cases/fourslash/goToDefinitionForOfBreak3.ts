/// <reference path="fourslash.ts" />

////test: /*end*/for (let a of obj) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
