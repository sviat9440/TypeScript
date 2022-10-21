/// <reference path="fourslash.ts" />

////for (let a in obj) {
////  /*end*/for (let a in obj) {
////    [|/*start*/continue|];
////  }
////}

verify.goToDefinition("start", "end");
