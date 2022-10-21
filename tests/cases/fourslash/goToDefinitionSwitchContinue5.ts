/// <reference path="fourslash.ts" />

////label: switch (null) {
////  case null: [|/*start*/continue|] test;
////}

verify.goToDefinition("start", []);
