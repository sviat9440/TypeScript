/// <reference path="fourslash.ts" />

/////*end*/while (true) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", "end");
