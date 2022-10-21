/// <reference path="fourslash.ts" />

/////*end*/label: for (let a in obj) {
////  test: for (let a in obj) {
////    [|/*start*/break|] label;
////  }
////}

verify.goToDefinition("start", "end");
