/// <reference path="fourslash.ts" />

/////*end*/test: switch (null) {
////  case null: [|/*start*/continue|] test;
////}

verify.goToDefinition("start", "end");
