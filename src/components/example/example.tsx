import { component$, useSignal } from "@builder.io/qwik";

import { Button } from "./button";

export const VitestTestBroken = component$(() => {
  const showButton = useSignal(true);

  return (
    <div>
      {showButton.value ? (
        <Button // wrap a div around this button or use regular <button /> to make the test pass
          data-test="button"
          type="button"
          onClick$={() => (showButton.value = !showButton.value)}
        >
          hide button
        </Button>
      ) : (
        <span>bbye</span>
      )}
    </div>
  );
});
