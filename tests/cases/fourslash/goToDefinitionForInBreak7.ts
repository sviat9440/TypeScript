/// <reference path="fourslash.ts" />

////for (let a in obj) {
////  /*end*/for (let a in obj) {
////    [|/*start*/break|];
////  }
////}

verify.goToDefinition("start", "end");
