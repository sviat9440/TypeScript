/// <reference path="fourslash.ts" />

/////*end*/label: switch (null) {
////  case null: {
////    test: switch (null) {
////      case null: [|/*start*/break|] label;
////    }
////  }
////}

verify.goToDefinition("start", "end");
