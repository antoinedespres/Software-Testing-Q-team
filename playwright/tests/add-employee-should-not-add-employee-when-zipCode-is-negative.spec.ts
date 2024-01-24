import { test, expect } from "@playwright/test";

test("add employee should not add the employee to the list when zipCode has negative value", async ({
  page,
}) => {
  await page.goto("https://q.hr.dmerej.info/add_employee");
  await page.getByPlaceholder("Name").fill("Daniel");
  await page.getByPlaceholder("Email").fill("daniel@gmail.com");
  await page.locator("#id_address_line1").fill("12 rue de la liberté");
  await page.getByPlaceholder("City").fill("Paris");
  const zipCode = await page.getByPlaceholder("Zip code");
  await page.getByPlaceholder("Zip code").fill("-1");
  await page.getByPlaceholder("Hiring date").fill("2024-01-16");
  await page.getByPlaceholder("Job title").fill("Developer");
  await page.getByRole("button", { name: "Add" }).click();
  expect(page.url()).toBe("https://q.hr.dmerej.info/add_employee");

  const zipCodeValidity = await zipCode.evaluate((element) => {
    const input = element as HTMLInputElement;
    return input.validity.valid;
  });
  expect(zipCodeValidity).toBe(false);
});
