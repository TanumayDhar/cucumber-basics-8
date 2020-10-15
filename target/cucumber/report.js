$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Extent reports"
    },
    {
      "line": 2,
      "value": "#add library"
    },
    {
      "line": 3,
      "value": "#add extent-confif.xml file"
    },
    {
      "line": 4,
      "value": "#add plugin \"com.cucumber.listener.ExtentCucumberFormatter\""
    },
    {
      "line": 5,
      "value": "#add Extentreportformatter in a class in runner class"
    }
  ],
  "line": 10,
  "name": "Login",
  "description": "\r\nIn order to perform successful login\r\nAs a user\r\ni want to enter the correct username and password",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 198900,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 16,
      "value": "#background is used if same steps in multiple scenario"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 18,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 68383900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify the login to facebook",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user entered \"valid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user entered \"valid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user \"shouldbe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 2823700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 161200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.after({
  "duration": 70300,
  "status": "passed"
});
formatter.before({
  "duration": 87900,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 16,
      "value": "#background is used if same steps in multiple scenario"
    }
  ],
  "line": 17,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 18,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 165400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 125800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#adding multiple scenario also mapped with Login steps"
    }
  ],
  "line": 27,
  "name": "In order to verify the login to facebook with Invalid user",
  "description": "",
  "id": "login;in-order-to-verify-the-login-to-facebook-with-invalid-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user entered \"Invalid\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user entered \"Invalid\" password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user \"shouldnotbe\" successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 136700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 173800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnotbe",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.after({
  "duration": 71600,
  "status": "passed"
});
formatter.uri("logintoProduction.feature");
formatter.feature({
  "line": 2,
  "name": "Login to production (Data table)",
  "description": "\r\nIn order to perform successful login production\r\nAs a user\r\ni want to enter the correct username and password",
  "id": "login-to-production-(data-table)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"\u003clogintype\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "logintype"
      ],
      "line": 20,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ],
      "line": 21,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;2"
    },
    {
      "cells": [
        "Invalid",
        "Invalid",
        "Shouldnot"
      ],
      "line": 22,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 278400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"valid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldbe\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 90800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 178100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 117400,
  "status": "passed"
});
formatter.match({
  "location": "logintoProduction.user_select_Age_category(DataTable)"
});
formatter.result({
  "duration": 1558300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 142100,
  "status": "passed"
});
formatter.after({
  "duration": 101300,
  "status": "passed"
});
formatter.before({
  "duration": 97200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"Invalid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"Invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"Shouldnot\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 119500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 89400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 100400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 133200,
  "status": "passed"
});
formatter.match({
  "location": "logintoProduction.user_select_Age_category(DataTable)"
});
formatter.result({
  "duration": 172400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 267500,
  "status": "passed"
});
formatter.after({
  "duration": 143400,
  "status": "passed"
});
});