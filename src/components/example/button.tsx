import { component$, Slot } from "@builder.io/qwik";

export const Button = component$((props: Record<string, unknown>) => {
  return (
    <button {...props}>
      <Slot />
    </button>
  );
});
