/// <reference path="fourslash.ts" />

////test: /*end*/for (let a in obj) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
