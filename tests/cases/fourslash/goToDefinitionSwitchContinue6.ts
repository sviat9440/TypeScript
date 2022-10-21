/// <reference path="fourslash.ts" />

/////*end*/label: switch (null) {
////  case null: {
////    test: switch (null) {
////      case null: [|/*start*/continue|] label;
////    }
////  }
////}

verify.goToDefinition("start", "end");
