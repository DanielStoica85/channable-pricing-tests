import { test } from "../fixtures/fixtures";

test.describe("Pricing Page", () => {
  test.beforeEach(async ({ pricingPage, cookiesBanner }) => {
    await pricingPage.goto();
    await cookiesBanner.acceptIfVisible();
  });

  test.describe("Step 1 - Package selection", () => {
    /**
     * This test is currently written for a specific package size ("30K"), but it could easily be extended to support data-driven testing.
     *
     * For example, we could define a list of item options (like "1K", "5K", "30K", etc.), each paired with the expected plan name and package details and then we could use `test.each()` to run the same logic for each option.
     *
     * This would improve coverage for pricing tiers without duplicating test logic.
     */
    test("Pricing selection should update the package limit based on selected item count", async ({
      pricingPage,
    }) => {
      await test.step("When the user selects a number of items", async () => {
        await pricingPage.selectNumberOfItems("30K");
      });
      await test.step("Then the Package limit and name should be updated and displayed properly in the step 1 section of the page", async () => {
        await pricingPage.expectPackageLimitVisibleWithText(
          "30,000 items, 5 projects, 30 channels"
        );
        await pricingPage.expectPackageNameVisibleWithText("XL Business");
      });
      await test.step("Then the Package limit and name should be updated and displayed properly in the Summary section of the page", async () => {
        await pricingPage.expectPackageLimitVisibleWithText(
          "30,000 items, 5 projects, 30 channels",
          1
        );
        await pricingPage.expectPackageNameVisibleWithText("XL Business", 1);
      });
    });
  });

  test.describe("Step 2 - Core plan selection", () => {
    /**
     * This test is currently written for a specific plan ("30K"), but it could easily be extended to support data-driven testing.
     *
     * For example, we could define a list of plan options, each paired with the expected plan name and price and then we could use `test.each()` to run the same logic for each option.
     *
     * This would improve coverage for plans without duplicating test logic.
     */
    test("Core plan selection should update the summary", async ({
      pricingPage,
    }) => {
      await test.step("When the user selects the 'Pro' core plan", async () => {
        await pricingPage.clickChoosePlanButton(1);
      });
      await test.step("Then the 'Pro' core plan and the corresponding price should be displayed in the Summary section of the page", async () => {
        await pricingPage.expectPlanNameVisibleWithText("Core Pro");
      });
    });
  });
});
