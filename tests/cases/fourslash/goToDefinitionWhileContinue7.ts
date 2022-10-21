/// <reference path="fourslash.ts" />

////while (true) {
////  /*end*/while (true) {
////    [|/*start*/continue|];
////  }
////}

verify.goToDefinition("start", "end");
