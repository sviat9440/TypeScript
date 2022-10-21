/// <reference path="fourslash.ts" />

////test: /*end*/for (;;) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", "end");
