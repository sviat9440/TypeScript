/// <reference path="fourslash.ts" />

/////*end*/label: for (;;) {
////  test: for (;;) {
////    [|/*start*/continue|] label;
////  }
////}

verify.goToDefinition("start", "end");
