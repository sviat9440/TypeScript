/// <reference path="fourslash.ts" />

////for (;;) {
////  /*end*/for (;;) {
////    [|/*start*/continue|];
////  }
////}

verify.goToDefinition("start", "end");
