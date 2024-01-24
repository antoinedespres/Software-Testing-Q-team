import { Page } from "@playwright/test";

export class GlobalPageModel {
  readonly page: Page;
  readonly url: string;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
    this.page.goto(url);
  }

  isTheSamePage() {
    return this.page.url() === this.url;
  }
}
