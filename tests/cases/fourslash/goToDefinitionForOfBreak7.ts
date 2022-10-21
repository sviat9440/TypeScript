/// <reference path="fourslash.ts" />

////for (let a of obj) {
////  /*end*/for (let a of obj) {
////    [|/*start*/break|];
////  }
////}

verify.goToDefinition("start", "end");
