/// <reference path="fourslash.ts" />

////test: switch (null) {
////  case null: [|/*start*/continue|];
////}

verify.goToDefinition("start", []);
