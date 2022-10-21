/// <reference path="fourslash.ts" />

////test: /*end*/while (true) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", "end");
