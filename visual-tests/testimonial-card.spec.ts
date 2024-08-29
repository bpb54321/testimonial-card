import { test, expect } from "@playwright/test";

import { testViewports } from "../test-viewports";

test.describe("testimonial card", () => {
  Object.values(testViewports).forEach((viewport) => {
    test(viewport.name, async ({ page }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto(
        "/iframe.html?args=&id=testimonialcard--primary&viewMode=story"
      );

      await expect(page).toHaveScreenshot();
    });
  });
  ["large", "very-large", "small", "very-small"].forEach((fontSize) => {
    test(`root font size ${fontSize}`, async ({ page }) => {
      await page.goto(
        `iframe.html?args=&id=testimonialcard--font-size-${fontSize}&viewMode=story`
      );

      await expect(page).toHaveScreenshot();
    });
  });
});
