/// <reference path="fourslash.ts" />

////for (;;) {
////  /*end*/for (;;) {
////    [|/*start*/break|];
////  }
////}

verify.goToDefinition("start", "end");
