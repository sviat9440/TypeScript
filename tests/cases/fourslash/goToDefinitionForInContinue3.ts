/// <reference path="fourslash.ts" />

////test: /*end*/for (let a in obj) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", "end");
