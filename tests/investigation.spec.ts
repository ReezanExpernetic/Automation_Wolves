import { test, expect } from "@playwright/test";

/**
 * Investigation Tests - Based on The Wolf Among Us murder mystery
 * These tests represent various investigations and discoveries
 * MIXED RESULTS: Some tests pass ✅, some fail ❌
 */

test.describe("Fabletown Investigations", () => {
  test("Crime Scene - Faith was found dead", async ({ page }) => {
    // Faith (Donkeyskin) was found murdered - this is a true fact
    const victim = {
      name: "Faith",
      alias: "Donkeyskin",
      isAlive: false,
      locationFound: "Woodland Steps",
    };

    expect(victim.name).toBe("Faith");
    expect(victim.isAlive).toBeFalsy();
    expect(victim.locationFound).toBe("Woodland Steps");
  });

  test("Suspect - Woodsman is innocent", async ({ page }) => {
    // The Woodsman was a suspect but not the killer
    const woodsman = {
      name: "Woodsman",
      wasViolent: true,
      isKiller: false,
      wasQuestioned: true,
    };

    expect(woodsman.wasViolent).toBeTruthy();
    expect(woodsman.isKiller).toBeFalsy();
    expect(woodsman.wasQuestioned).toBeTruthy();
  });

  test.fail("Evidence - The ribbon is just decorative", async ({ page }) => {
    // INTENTIONAL FAIL: The ribbon is NOT just decorative - it's magical!
    const ribbon = {
      isDecorative: false, // The ribbon has magical properties
      isMagical: true,
      preventsRevealing: true,
    };

    // This assertion will fail because the ribbon IS magical
    expect(ribbon.isDecorative).toBeTruthy(); // ❌ This will fail
    expect(ribbon.isMagical).toBeFalsy(); // ❌ This will also fail
  });

  test("Location - Trip Trap Bar exists", async ({ page }) => {
    // The Trip Trap Bar is a real location in the game
    const tripTrap = {
      name: "Trip Trap Bar",
      owner: "Holly",
      isOperating: true,
      acceptsFables: true,
    };

    expect(tripTrap.name).toBe("Trip Trap Bar");
    expect(tripTrap.isOperating).toBeTruthy();
    expect(tripTrap.acceptsFables).toBeTruthy();
  });

  test.fail("Suspect - Crane is the murderer", async ({ page }) => {
    // INTENTIONAL FAIL: Crane is corrupt but NOT the murderer
    const crane = {
      name: "Ichabod Crane",
      position: "Mayor",
      isCorrupt: true,
      isMurderer: false, // He's guilty of other things, not murder
    };

    expect(crane.isCorrupt).toBeTruthy();
    // This will fail - Crane is not the actual murderer
    expect(crane.isMurderer).toBeTruthy(); // ❌ FAIL
  });

  test("Discovery - Lily was glamoured as Snow", async ({ page }) => {
    // Lily (a troll) was glamoured to look like Snow White
    const lily = {
      realName: "Lily",
      species: "Troll",
      wasGlamoured: true,
      glamourTarget: "Snow White",
    };

    expect(lily.realName).toBe("Lily");
    expect(lily.wasGlamoured).toBeTruthy();
    expect(lily.glamourTarget).toBe("Snow White");
  });
});
