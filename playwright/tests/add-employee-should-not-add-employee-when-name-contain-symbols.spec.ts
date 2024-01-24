import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";

test("add employee should not add the employee to the list when the name contain symbols", async ({
  page,
}) => {
  const addEmployeePage = new AddEmployeePageModel(page);

  await addEmployeePage.fillForm(
    "Dan' '/!",
    "daniel@gmail.com",
    "12 rue de la liberté",
    "Paris",
    "75000",
    "2023-01-16",
    "Developer"
  );

  
  const employeeName = addEmployeePage.getByName("name");
  await addEmployeePage.clickOnAddButton();

  expect(addEmployeePage.isTheSamePage).toBe(true);
  expect(addEmployeePage.isInputValid(employeeName)).toBe(false);
});