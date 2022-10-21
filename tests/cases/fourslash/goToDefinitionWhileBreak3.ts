/// <reference path="fourslash.ts" />

////test: /*end*/while (true) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
