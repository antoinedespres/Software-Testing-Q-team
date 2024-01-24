import { Locator, Page } from "@playwright/test";
import { GlobalPageModel } from "./global-page-model";

export class EmployeeListPageModel extends GlobalPageModel {
  readonly page: Page;
  readonly table: Locator;

  constructor(page: Page) {
    super(page, "https://q.hr.dmerej.info/employees");
    this.page = page;
    this.table = page.locator("table");
  }

  getCountRow() {
    return this.table.locator("tbody > tr").count();
  }

  getRow(index: number): Locator {
    return this.table.locator(`tbody > tr:nth-child(${index})`);
  }

  getEditAction(rowIndex: number): Locator {
    return this.getRow(rowIndex).locator("td > a");
  }

  getRowCell(index: number, cellIndex: number): Locator {
    return this.table.locator(
      `tbody > tr:nth-child(${index}) > td:nth-child(${cellIndex})`
    );
  }
}
