import { test, expect } from '@playwright/test'

const breakpoints = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
]

for (const bp of breakpoints) {
  test(`homepage renders at ${bp.name} (${bp.width}px)`, async ({ page }) => {
    await page.setViewportSize({ width: bp.width, height: bp.height })
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByText('Common Tech')).toBeVisible()
  })

  test(`homepage shows all 4 exhibit cards at ${bp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: bp.width, height: bp.height })
    await page.goto('/')

    await expect(page.getByText('Personal Computers')).toBeVisible()
    await expect(page.getByText('Mobile Phones')).toBeVisible()
    await expect(page.getByText('Music Players')).toBeVisible()
    await expect(page.getByText('The Early Internet')).toBeVisible()
  })
}
