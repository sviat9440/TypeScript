/// <reference path="fourslash.ts" />

/////*end*/label: for (let a of obj) {
////  test: for (let a of obj) {
////    [|/*start*/continue|] label;
////  }
////}

verify.goToDefinition("start", "end");
