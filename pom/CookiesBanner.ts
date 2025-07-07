import { Page, Locator, expect } from "@playwright/test";

export class CookiesBanner {
  readonly page: Page;
  readonly allowAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowAllButton = page.getByRole("button", { name: "Allow all" });
  }

  async acceptIfVisible() {
    if (await this.allowAllButton.isVisible()) {
      await this.allowAllButton.click();
    }
    await expect(this.allowAllButton).not.toBeVisible();
  }
}
