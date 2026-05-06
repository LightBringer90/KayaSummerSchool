import { test, expect, request } from "@playwright/test";

const locales = ["ro", "en"] as const;
const paths = [
  "",
  "/events",
  "/gallery",
  "/donate",
  "/register",
  "/play",
  "/unplug",
  "/program",
];

for (const locale of locales) {
  for (const path of paths) {
    test(`renders ${locale}${path || "/"}`, async ({ page }) => {
      const res = await page.goto(`/${locale}${path}`);
      expect(res?.ok(), `expected 2xx for /${locale}${path}`).toBeTruthy();
      await expect(page.locator("header a[href='/" + locale + "']")).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
      await expect(page.locator("h1, header a").first()).toBeVisible();
    });
  }
}

test("root redirects to /ro", async ({ page }) => {
  const res = await page.goto("/");
  expect(res?.url()).toMatch(/\/ro\/?$/);
});

test("language switch link toggles locale", async ({ page }) => {
  await page.goto("/ro");
  await page.locator("header a[aria-label='switch language']").click();
  await expect(page).toHaveURL(/\/en\/?$/);
});

test("event card links to register with event slug", async ({ page }) => {
  await page.goto("/ro/events");
  const firstRegister = page
    .locator("a[href*='/ro/register?event=']")
    .first();
  await expect(firstRegister).toBeVisible();
  await firstRegister.click();
  await expect(page).toHaveURL(/\/ro\/register\?event=/);
  await expect(page.locator("select[name='event']")).toBeVisible();
});

test("register form submits and redirects", async ({ page, baseURL }) => {
  const ctx = await request.newContext({ baseURL });
  const res = await ctx.post("/api/register", {
    multipart: {
      childName: "Ana",
      parentName: "Maria",
      email: "test@example.com",
      phone: "0700000000",
      event: "atelier-pictura",
      notes: "—",
    },
    maxRedirects: 0,
  });
  expect([303, 307, 302]).toContain(res.status());
});

test("free-play game: clicking each character increments smiles", async ({
  page,
}) => {
  await page.goto("/ro/play");
  const counter = page.getByTestId("smile-count");
  await expect(counter).toHaveText("0");

  const animClass: Record<string, string> = {
    bunny: "anim-jump",
    cat: "anim-spin",
    dragon: "anim-shake",
    butterfly: "anim-fly",
    frog: "anim-hop",
    star: "anim-twinkle",
  };

  for (const id of Object.keys(animClass)) {
    const btn = page.getByTestId(`char-${id}`);
    await btn.click();
    await expect(btn.locator(`span.${animClass[id]}`)).toBeVisible();
  }
  await expect(counter).toHaveText("6");

  await page.getByTestId("reset-smiles").click();
  await expect(counter).toHaveText("0");
});

test("forest adventure: full happy path through all 6 steps", async ({
  page,
}) => {
  await page.goto("/en/play");
  await page.getByTestId("mode-story").click();
  await expect(page.getByTestId("story-intro")).toBeVisible();
  await page.getByTestId("story-start").click();

  const order: { char: string; correct: string }[] = [
    { char: "bunny", correct: "carrot" },
    { char: "cat", correct: "yarn" },
    { char: "dragon", correct: "log" },
    { char: "butterfly", correct: "flower" },
    { char: "frog", correct: "water" },
    { char: "star", correct: "shooting-star" },
  ];

  for (let i = 0; i < order.length; i++) {
    await expect(page.getByTestId("story-step")).toHaveText(
      `Step ${i + 1} of ${order.length}`,
    );
    await page.getByTestId(`target-${order[i].correct}`).click();
  }

  const finished = page.getByTestId("story-finished");
  await expect(finished).toBeVisible();
  await expect(finished.getByRole("link", { name: /outdoor play/i })).toHaveAttribute(
    "href",
    "/en/unplug",
  );
});

test("forest adventure: wrong answer shows feedback and does not advance", async ({
  page,
}) => {
  await page.goto("/en/play");
  await page.getByTestId("mode-story").click();
  await page.getByTestId("story-start").click();

  await expect(page.getByTestId("story-step")).toHaveText("Step 1 of 6");
  await page.getByTestId("target-rock").click();
  await expect(page.getByTestId("story-prompt")).toContainText("try");
  // Still on step 1
  await expect(page.getByTestId("story-step")).toHaveText("Step 1 of 6");
  // Right answer advances
  await page.getByTestId("target-carrot").click();
  await expect(page.getByTestId("story-step")).toHaveText("Step 2 of 6");
});

test("unplug: pledge widget toggles and shows perfect message when all picked", async ({
  page,
}) => {
  await page.goto("/ro/unplug");
  const count = page.getByTestId("pledge-count");
  await expect(count).toHaveText("0");
  for (let i = 0; i < 6; i++) {
    await page.getByTestId(`pledge-${i}`).click();
  }
  await expect(count).toHaveText("6");
  await expect(page.getByTestId("pledge-perfect")).toBeVisible();

  await page.getByTestId("pledge-reset").click();
  await expect(count).toHaveText("0");
});

test("program page: RO renders schedule, budget, total, and strategies", async ({
  page,
}) => {
  await page.goto("/ro/program");
  await expect(
    page.getByRole("heading", { name: "Programul săptămânal" }),
  ).toBeVisible();
  await expect(page.getByText("Antrenament Sportiv")).toBeVisible();
  await expect(page.getByText("Catering (Gustări)")).toBeVisible();
  await expect(page.getByText("470 RON")).toBeVisible();
  await expect(page.getByText("Regula Break-Even")).toBeVisible();
});

test("program page: EN renders schedule, budget, total, and strategies", async ({
  page,
}) => {
  await page.goto("/en/program");
  await expect(
    page.getByRole("heading", { name: "Weekly schedule" }),
  ).toBeVisible();
  await expect(page.getByText("Sports training")).toBeVisible();
  await expect(page.getByText("470 RON")).toBeVisible();
  await expect(page.getByText("Break-even rule")).toBeVisible();
});

test("RO and EN headlines differ", async ({ page }) => {
  await page.goto("/ro");
  const ro = await page.locator("h1").first().innerText();
  await page.goto("/en");
  const en = await page.locator("h1").first().innerText();
  expect(ro).not.toEqual(en);
});
