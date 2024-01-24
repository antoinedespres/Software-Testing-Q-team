import { Locator, Page } from "@playwright/test";
import { GlobalPageModel } from "./global-page-model";

export class GlobalFormPageModel extends GlobalPageModel {
  readonly page: Page;

  constructor(page: Page, url: string) {
    super(page, url);
    this.page = page;
  }

  async isInputValid(input: Locator) {
    return await input.evaluate((element) => {
      const input = element as HTMLInputElement;
      return input.validity.valid;
    });
  }

  getByName(name: string) {
    return this.page.locator(`input[name="${name}"]`);
  }
}
