/// <reference path="fourslash.ts" />

/////*end*/label: while (true) {
////  test: while (true) {
////    [|/*start*/break|] label;
////  }
////}

verify.goToDefinition("start", "end");
