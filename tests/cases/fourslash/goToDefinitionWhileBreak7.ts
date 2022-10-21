/// <reference path="fourslash.ts" />

////while (true) {
////  /*end*/while (true) {
////    [|/*start*/break|];
////  }
////}

verify.goToDefinition("start", "end");
