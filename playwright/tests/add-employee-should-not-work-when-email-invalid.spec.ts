import { test, expect } from "@playwright/test";

test("add employee should not add employee when email format is invalid", async ({
  page,
}) => {
  await page.goto("https://q.hr.dmerej.info/");
  await page.getByRole("link", { name: "Add new employee" }).click();
  await page.getByPlaceholder("Name").fill("Test");
  const email = page.getByPlaceholder("Email");
  await email.fill("test.fr");
  await page.locator("#id_address_line1").fill("Test rue");
  await page.getByPlaceholder("City").fill("Test city");
  await page.getByPlaceholder("Zip code").fill("00000");
  await page.getByPlaceholder("Hiring date").fill("2024-01-24");
  await page.getByPlaceholder("Job title").fill("Test job title");
  await page.getByRole("button", { name: "Add" }).click();
  expect(page.url()).toBe("https://q.hr.dmerej.info/add_employee");
  const emailValidity = await email.evaluate((element) => {
    const input = element as HTMLInputElement;
    return input.validity.valid;
  });
  expect(emailValidity).toBe(false);
});
