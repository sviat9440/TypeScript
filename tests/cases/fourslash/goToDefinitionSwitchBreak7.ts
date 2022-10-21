/// <reference path="fourslash.ts" />

////switch (null) {
////  case null: /*end*/switch (null) {
////    case null: [|/*start*/break|];
////  }
////}

verify.goToDefinition("start", "end");
