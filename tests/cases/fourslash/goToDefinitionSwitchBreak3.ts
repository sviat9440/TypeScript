/// <reference path="fourslash.ts" />

////test: /*end*/switch (null) {
////  case null: [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
