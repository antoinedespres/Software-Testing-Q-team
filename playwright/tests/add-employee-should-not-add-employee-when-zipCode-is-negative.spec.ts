import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";

test("add employee should not add the employee to the list when zipCode has negative value", async ({
  page,
}) => {
  const addEmployeePage = new AddEmployeePageModel(page);

  await addEmployeePage.fillForm(
    "Daniel",
    "daniel@gmail.com",
    "12 rue de la liberté",
    "Paris",
    "-1",
    "2024-01-16",
    "Developer"
  );
  const zipCode = addEmployeePage.getByName("zip_code");
  await addEmployeePage.clickOnAddButton();

  expect(addEmployeePage.isTheSamePage).toBe(true);
  expect(addEmployeePage.isInputValid(zipCode)).toBe(false);
});
