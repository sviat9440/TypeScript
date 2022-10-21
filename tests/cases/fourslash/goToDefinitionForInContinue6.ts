/// <reference path="fourslash.ts" />

/////*end*/label: for (let a in obj) {
////  test: for (let a in obj) {
////    [|/*start*/continue|] label;
////  }
////}

verify.goToDefinition("start", "end");
