import { Page } from "@playwright/test";
import { GlobalPageModel } from "./global-page-model";

export class HomePageModel extends GlobalPageModel {
  constructor(page: Page) {
    super(page, "https://q.hr.dmerej.info/");
  }
}
