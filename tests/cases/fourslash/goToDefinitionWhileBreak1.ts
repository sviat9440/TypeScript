/// <reference path="fourslash.ts" />

/////*end*/while (true) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
