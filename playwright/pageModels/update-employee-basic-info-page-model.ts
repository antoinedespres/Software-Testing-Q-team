import { Locator, Page } from "@playwright/test";
import { GlobalFormPageModel } from "./global-form-page-model";

export class UpdateEmployeeBasicInfoPageModel extends GlobalFormPageModel {
  readonly page: Page;
  readonly employeeID: Number;
  readonly nameInput: Locator;
  readonly emailInput: Locator;

  constructor(page: Page, employeeID: Number) {
    super(page, "https://q.hr.dmerej.info/add_employee");
    this.page = page;
    this.employeeID = this.employeeID;
    this.nameInput = this.getByName("name");
    this.emailInput = this.getByName("email");
  }

  async UpdateEmployeeBasicInfoForm(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
  }

  async clickOnUpdateButton() {
    await this.page.locator("button", { hasText: "Update" }).click();
  }
}
