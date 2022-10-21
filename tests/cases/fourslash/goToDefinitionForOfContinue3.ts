/// <reference path="fourslash.ts" />

////test: /*end*/for (let a of obj) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", "end");
