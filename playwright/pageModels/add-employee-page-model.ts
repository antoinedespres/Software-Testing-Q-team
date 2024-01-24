import { Locator, Page } from "@playwright/test";
import { GlobalFormPageModel } from "./global-form-page-model";

export class AddEmployeePageModel extends GlobalFormPageModel {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly hiringDateInput: Locator;
  readonly jobTitleInput: Locator;

  constructor(page: Page) {
    super(page, "https://q.hr.dmerej.info/add_employee");
    this.page = page;
    this.nameInput = this.getByName("name");
    this.emailInput = this.getByName("email");
    this.addressInput = this.getByName("address_line1");
    this.cityInput = this.getByName("city");
    this.zipCodeInput = this.getByName("zip_code");
    this.hiringDateInput = this.getByName("hiring_date");
    this.jobTitleInput = this.getByName("job_title");
  }

  async fillForm(
    name: string,
    email: string,
    address: string,
    city: string,
    zipCode: string,
    hiringDate: string,
    jobTitle: string
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.zipCodeInput.fill(zipCode);
    await this.hiringDateInput.fill(hiringDate);
    await this.jobTitleInput.fill(jobTitle);
  }

  async clickOnAddButton() {
    await this.page.locator("button", { hasText: "Add" }).click();
  }
}
