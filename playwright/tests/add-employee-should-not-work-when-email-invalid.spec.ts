import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";

test("add employee should not add employee when email format is invalid", async ({
  page,
}) => {
  const addEmployeePage = new AddEmployeePageModel(page);

  await addEmployeePage.fillForm(
    "Test",
    "test.fr",
    "Test rue",
    "Test city",
    "00000",
    "2024-01-24",
    "Test job title"
  );
  const email = addEmployeePage.getByName("email");
  await addEmployeePage.clickOnAddButton();
  expect(addEmployeePage.isTheSamePage).toBe(true);
  expect(addEmployeePage.isInputValid(email)).toBe(false);
});
