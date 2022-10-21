/// <reference path="fourslash.ts" />

/////*end*/switch (null) {
////  case null: [|/*start*/break|];
////}

verify.goToDefinition("start", "end");
