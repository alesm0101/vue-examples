import { shallowMount, mount } from "@vue/test-utils";
import Test from "@/components/Test.vue";

describe("Test Cmpt", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("default focus after mounted nextTick", async () => {
    const wrapper = shallowMount(Test, {
      attachTo: document.body, // ← to support document.activeElement
    });
    // const wrapper = shallowMount(Test);
    await wrapper.vm.$nextTick(); // after mounted nextTick
    const input = wrapper.find('[data-testid="tempFocusElement"]');
    expect(input.attributes("tabindex")).toBe("-1");
    expect(document.activeElement).toBe(input.element);
  });
  it("updated focus", async () => {
    const wrapper = mount(Test, {
      // await mount(Test, {
      attachTo: document.body, // ← to support document.activeElement
    });
    // const wrapper = shallowMount(Test);
    await wrapper.vm.$nextTick(); // after mounted nextTick
    jest.advanceTimersByTime(2500);
    const input = wrapper.find('[data-testid="focusableItem"]');
    expect(document.activeElement).toBe(input.element);
  });
});
