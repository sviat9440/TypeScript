/// <reference path="fourslash.ts" />

/////*end*/for (;;) {
////  [|/*start*/break|];
////}

verify.goToDefinition("start", `end`);
