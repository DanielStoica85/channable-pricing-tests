import { Page, Locator, expect } from "@playwright/test";

export class PricingPage {
  readonly page: Page;
  readonly choosePlanButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.choosePlanButton = page.getByText("+ Choose plan", { exact: true });
  }

  async goto() {
    await this.page.goto("/pricing");
    await expect(this.page).toHaveTitle(/Pricing/i);
  }

  async selectNumberOfItems(label: string) {
    await this.page.getByRole("button", { name: label }).click();
  }

  // Although these two methods (expectPackageLimitVisibleWithText and expectPackageNameVisibleWithText) are functionally identical, I chose to keep both for semantic clarity.
  // They help communicate what type of information is being validated — one refers to the package limit text and the other to the package name, even if they share the same structure behind the scenes.
  async expectPackageLimitVisibleWithText(text: string, index = 0) {
    await expect(this.page.getByText(text).nth(index)).toBeVisible();
  }

  async expectPackageNameVisibleWithText(text: string, index = 0) {
    await expect(this.page.getByText(text).nth(index)).toBeVisible();
  }

  async clickChoosePlanButton(nthIndex = 0) {
    await this.choosePlanButton.nth(nthIndex).click();
  }

  async expectPlanNameVisibleWithText(text: string, nthIndex = 1) {
    await expect(this.page.getByText(text).nth(nthIndex)).toBeVisible();
  }
}
