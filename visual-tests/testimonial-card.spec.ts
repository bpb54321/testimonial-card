import { test, expect } from "@playwright/test";

test.describe("testimonial card", () => {
  test("desktop", async ({ page }) => {
    await page.goto(
      "/iframe.html?args=&id=testimonialcard--desktop&viewMode=story"
    );

    await expect(page.getByTestId("testimonial-card")).toHaveScreenshot();
  });
});
