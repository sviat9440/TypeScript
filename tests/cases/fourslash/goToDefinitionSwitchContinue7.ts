/// <reference path="fourslash.ts" />

////switch (null) {
////  case null: switch (null) {
////    case null: [|/*start*/continue|];
////  }
////}

verify.goToDefinition("start", []);
