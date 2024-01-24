import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";

test("Add an employee should add the employee to the list", async ({
  page,
}) => {
  const addEmployeePage = new AddEmployeePageModel(page);
  await addEmployeePage.fillForm(
    "Daniel",
    "daniel@gmail.com",
    "12 rue de la liberté",
    "Paris",
    "75008",
    "2024-01-16",
    "Developer"
  );

  await addEmployeePage.clickOnAddButton();
  expect(addEmployeePage.isTheSamePage()).toBe(false);
  expect(page.url()).toBe("https://q.hr.dmerej.info/employees");

  const emailCell = page
    .locator("table > tbody > tr")
    .last()
    .locator("td", { hasText: "daniel@gmail.com" });

  expect(emailCell).toBeTruthy();
});
