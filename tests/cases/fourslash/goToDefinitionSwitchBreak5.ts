/// <reference path="fourslash.ts" />

////label: switch (null) {
////  case null: [|/*start*/break|] test;
////}

verify.goToDefinition("start", []);
