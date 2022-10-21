/// <reference path="fourslash.ts" />

////switch (null) {
////  case null: [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
