/// <reference path="fourslash.ts" />

/////*end*/test: switch (null) {
////  case null: [|/*start*/break|] test;
////}

verify.goToDefinition("start", "end");
