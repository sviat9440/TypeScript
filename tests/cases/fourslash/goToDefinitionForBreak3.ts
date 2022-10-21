/// <reference path="fourslash.ts" />

////test: /*end*/for (;;) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
