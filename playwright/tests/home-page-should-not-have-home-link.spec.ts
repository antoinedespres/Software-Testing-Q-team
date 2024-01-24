import { test, expect } from "@playwright/test";
import { HomePageModel } from "../pageModels/home-page-model";

test("Home page should not have home link", async ({ page }) => {
  const homePage = new HomePageModel(page);
  const homeLink = homePage.page.locator("nav > a[href='/']");
  expect(homeLink).toBe(null);
});
