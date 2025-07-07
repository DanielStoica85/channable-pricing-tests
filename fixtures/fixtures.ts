import { test as base } from "@playwright/test";
import { CookiesBanner } from "../pom/CookiesBanner";
import { PricingPage } from "../pom/PricingPage";

type Fixtures = {
  pricingPage: PricingPage;
  cookiesBanner: CookiesBanner;
};

export const test = base.extend<Fixtures>({
  pricingPage: async ({ page }, use) => {
    const pricingPage = new PricingPage(page);
    await pricingPage.goto();
    await use(pricingPage);
  },
  cookiesBanner: async ({ page }, use) => {
    const cookiesBanner = new CookiesBanner(page);
    await cookiesBanner.acceptIfVisible();
    await use(cookiesBanner);
  },
});
