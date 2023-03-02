import { describe, it, expect, beforeAll } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import SearchBooks from "../SearchBooks.vue";

describe("SearchBooks", () => {
  beforeAll(() => {
    setActivePinia(createPinia());
  });

  it("book search renders properly", () => {
    const searchComponent = mount(SearchBooks);
    expect(searchComponent.isVisible());
  });
});
