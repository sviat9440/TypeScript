/// <reference path="fourslash.ts" />

/////*end*/label: while (true) {
////  test: while (true) {
////    [|/*start*/continue|] label;
////  }
////}

verify.goToDefinition("start", "end");
