/// <reference path="fourslash.ts" />

////switch (null) {
////  case null: [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
