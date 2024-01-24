import { test, expect } from "@playwright/test";
import { AddEmployeePageModel } from "../pageModels/add-employee-page-model";

test("add employee should not add the employee to the list when the date is malformed", async ({
  page,
}) => {
  const addEmployeePage = new AddEmployeePageModel(page);

  await addEmployeePage.fillForm(
    "Daniel",
    "daniel@gmail.com",
    "12 rue de la liberté",
    "Paris",
    "75000",
    "0001-01-16",
    "Developer"
  );

  
  const MalformedDate = addEmployeePage.getByName("hiring_date");
  await addEmployeePage.clickOnAddButton();

  expect(addEmployeePage.isTheSamePage).toBe(true);
  expect(addEmployeePage.isInputValid(MalformedDate)).toBe(false);
});
