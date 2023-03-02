import { describe, it, expect, beforeAll } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import SearchCities from "../SearchCities.vue";
import { useMainStore } from "@/store";

describe("SearchBooks", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });

  it("city search renders properly", () => {
    const searchComponent = mount(SearchCities);
    expect(searchComponent.isVisible());
  });

  it(`searching "sant" returns 2 results`, async () => {
    const searchComponent = mount(SearchCities);

    const input = searchComponent.find("input");
    await input.setValue("sant");

    const resultsList = searchComponent.find("ul");
    expect(resultsList.findAll("li")).toHaveLength(2);

    const store = useMainStore();
    expect(store.citySearchResults).contains("santiago", "santa rosa");
  });
});
