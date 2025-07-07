import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import AxeBuilder from "@axe-core/playwright";

test.describe("Pricing Page", () => {
  test.beforeEach(async ({ pricingPage, cookiesBanner }) => {
    await pricingPage.goto();
    await cookiesBanner.acceptIfVisible();
  });

  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
