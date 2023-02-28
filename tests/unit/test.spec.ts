import { shallowMount } from "@vue/test-utils";
import Test from "@/components/Test.vue";

describe("Test Cmpt", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("default focus", async () => {
    const wrapper = await shallowMount(Test, {
      attachTo: document.body, // ← added!
    });
    // const wrapper = shallowMount(Test);
    await wrapper.vm.$nextTick();
    const input = wrapper.find('[data-testid="tempFocusElement"]');
    // expect(input).toBe(document.activeElement.tagName);
    expect(input.attributes("tabindex")).toBe("-1");
    const input2 = wrapper.find('[data-testid="focusableItem"]');
    expect(input2.attributes("tabindex")).toBe("-1");
  });
  it("updated focus", async () => {
    const wrapper = shallowMount(Test);
    await wrapper.vm.$nextTick();
    // expect(input).toBe(document.activeElement);
    // let input = wrapper.find('[data-testid="focusableItem"]');

    jest.advanceTimersByTime(2500);
    await wrapper.vm.$nextTick();
    const input = wrapper.find('[data-testid="focusableItem"]');
    expect(input.attributes("tabindex")).toBe("-2");
  });
});
