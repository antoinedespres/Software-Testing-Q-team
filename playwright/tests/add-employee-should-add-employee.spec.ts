import { test } from "@playwright/test";
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

  await page.getByRole("cell", { name: "daniel@gmail.com" }).last();
});
