/// <reference path="fourslash.ts" />

/////*end*/label: for (let a of obj) {
////  test: for (let a of obj) {
////    [|/*start*/break|] label;
////  }
////}

verify.goToDefinition("start", "end");
