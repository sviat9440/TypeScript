/// <reference path="fourslash.ts" />

/////*end*/label: for (;;) {
////  test: for (;;) {
////    [|/*start*/break|] label;
////  }
////}

verify.goToDefinition("start", "end");
