import { test, expect } from "@playwright/test";

test.describe("testimonial card", () => {
  test("desktop", async ({ page }) => {
    await page.setViewportSize({
      width: 1440,
      height: 768,
    });
    await page.goto(
      "/iframe.html?args=&id=testimonialcard--primary&viewMode=story"
    );

    await expect(page).toHaveScreenshot();
  });
  test("tablet", async ({ page }) => {
    await page.setViewportSize({
      width: 768,
      height: 1024,
    });
    await page.goto(
      "/iframe.html?args=&id=testimonialcard--primary&viewMode=story"
    );

    await expect(page).toHaveScreenshot();
  });
  test("mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 375,
      height: 812,
    });
    await page.goto(
      "/iframe.html?args=&id=testimonialcard--primary&viewMode=story"
    );

    await expect(page).toHaveScreenshot();
  });
});
