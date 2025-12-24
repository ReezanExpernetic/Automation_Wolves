import { test, expect } from "@playwright/test";

/**
 * Character Tests - Based on The Wolf Among Us characters
 * These tests represent the main characters from Fabletown
 * All tests in this suite PASS ✅
 */

test.describe("Fabletown Characters", () => {
  test("Bigby Wolf - The Big Bad Wolf can transform", async ({ page }) => {
    // Bigby is the sheriff of Fabletown and can transform into a wolf
    const bigby = {
      name: "Bigby Wolf",
      role: "Sheriff",
      canTransform: true,
      isFromMundyWorld: false,
    };

    expect(bigby.name).toBe("Bigby Wolf");
    expect(bigby.role).toBe("Sheriff");
    expect(bigby.canTransform).toBeTruthy();
    expect(bigby.isFromMundyWorld).toBeFalsy();
  });

  test("Snow White - Deputy Mayor of Fabletown", async ({ page }) => {
    // Snow White is the capable deputy mayor of Fabletown
    const snow = {
      name: "Snow White",
      role: "Deputy Mayor",
      isRoyalty: true,
      workingWithBigby: true,
    };

    expect(snow.name).toBe("Snow White");
    expect(snow.role).toBe("Deputy Mayor");
    expect(snow.isRoyalty).toBeTruthy();
    expect(snow.workingWithBigby).toBeTruthy();
  });

  test("Beauty and Beast - Married couple in Fabletown", async ({ page }) => {
    // Beauty and Beast are struggling financially in Fabletown
    const beauty = { name: "Beauty", isMarried: true };
    const beast = { name: "Beast", isMarried: true, canTransform: true };

    expect(beauty.isMarried).toBeTruthy();
    expect(beast.isMarried).toBeTruthy();
    expect(beast.canTransform).toBeTruthy();
  });

  test("Bufkin - The flying monkey librarian", async ({ page }) => {
    // Bufkin is the helpful librarian at the Woodland
    const bufkin = {
      name: "Bufkin",
      species: "Flying Monkey",
      occupation: "Librarian",
      isHelpful: true,
    };

    expect(bufkin.name).toBe("Bufkin");
    expect(bufkin.species).toBe("Flying Monkey");
    expect(bufkin.isHelpful).toBeTruthy();
  });

  test("Colin - One of the Three Little Pigs", async ({ page }) => {
    // Colin is living with Bigby without permission
    const colin = {
      name: "Colin",
      species: "Pig",
      livesWithBigby: true,
      hasPermission: false, // He's staying illegally
    };

    expect(colin.name).toBe("Colin");
    expect(colin.livesWithBigby).toBeTruthy();
    // This might seem like it should fail, but we're checking the actual state
    expect(colin.hasPermission).toBeFalsy();
  });
});
