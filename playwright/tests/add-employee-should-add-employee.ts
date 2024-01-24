import { test, expect } from "@playwright/test";

test("Add an employee should add the employee to the list", async ({
  page,
}) => {
  await page.goto("https://q.hr.dmerej.info/");
  await page.getByRole("link", { name: "Add new employee" }).click();
  await page.getByPlaceholder("Name").fill("Daniel");
  await page.getByPlaceholder("Email").fill("daniel@gmail.com");
  await page.locator("#id_address_line1").fill("12 rue de la liberté");
  await page.getByPlaceholder("City").fill("Paris");
  await page.getByPlaceholder("Zip code").fill("75008");
  await page.getByPlaceholder("Hiring date").fill("2024-01-16");
  await page.getByPlaceholder("Job title").fill("Developer");
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByRole("cell", { name: "daniel@gmail.com" }).last();
});
