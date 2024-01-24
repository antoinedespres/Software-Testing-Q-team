import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";
import { EmployeeListPageModel } from "../pageModels/employee-list-page-model";
import { UpdateEmployeeBasicInfoPageModel } from "../pageModels/update-employee-basic-info-page-model";

test("Update an employee basic info should update the employee basic info", async ({
  page,
}) => {
  // Add new employee
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

  page.locator("table > tbody > tr").last().locator("td").nth(1).textContent;

  // Update the employee basic info
  const updateEmployeeBasicInfoPage = new UpdateEmployeeBasicInfoPageModel(
    page,
    54
  );
  await updateEmployeeBasicInfoPage.UpdateEmployeeBasicInfoForm(
    "Danny",
    "daniel@gmail.com"
  );

  await updateEmployeeBasicInfoPage.clickOnUpdateButton();

  // TODO: Fix this test
  // const employeePath = page.url().startsWith("employee");

  // // Verify that the employee has his info updated
  // expect(updateEmployeeBasicInfoPage.isTheSamePage()).toBe(true);

  // expect(page.url()).toBe("https://q.hr.dmerej.info/" + { employeePath });
});
