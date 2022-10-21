/// <reference path="fourslash.ts" />

/////*end*/for (;;) {
////  [|/*start*/continue|];
////}

verify.goToDefinition("start", `end`);
