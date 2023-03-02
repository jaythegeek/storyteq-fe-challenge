import { useMainStore } from "@/store";
import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeAll } from "vitest";

describe("Main Search Store", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });

  it("can add to store", () => {
    const store = useMainStore();
    expect(store.citySearchResults).toHaveLength(0);
    store.updateCityResults(["London", "Paris", "Tokyo"]);
    expect(store.citySearchResults).toHaveLength(3);
  });
});
