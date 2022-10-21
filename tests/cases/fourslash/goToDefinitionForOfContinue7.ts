/// <reference path="fourslash.ts" />

////for (let a of obj) {
////  /*end*/for (let a of obj) {
////    [|/*start*/continue|];
////  }
////}

verify.goToDefinition("start", "end");
