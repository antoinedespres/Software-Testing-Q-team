import { Locator, Page } from "@playwright/test";

export class AddEmployeePageModel {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly hiringDateInput: Locator;
  readonly jobTitleInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#id_name");
    this.emailInput = page.locator("#id_email");
    this.addressInput = page.locator("#id_address_line1");
    this.cityInput = page.locator("#id_city");
    this.zipCodeInput = page.locator("#id_zip_code");
    this.hiringDateInput = page.locator("#id_hiring");
    this.jobTitleInput = page.locator("#id_job_title");
  }

  async goToPage() {
    await this.page.goto("https://q.hr.dmerej.info/add_employee");
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
}
