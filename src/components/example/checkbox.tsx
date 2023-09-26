import type { QwikIntrinsicElements} from '@builder.io/qwik';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const Checkbox = component$(
  ({
    class: classProp,
    variant = 'primary',
    indeterminate,
    ...props
  }: Omit<QwikIntrinsicElements['input'], 'class' | 'type'> & {
    variant?: 'primary' | 'action';
    class?: string;
    indeterminate?: boolean;
  }) => {
    const ref = useSignal<HTMLInputElement>();

    useVisibleTask$(({ track }) => {
      track(() => ref.value);
      if (ref.value && indeterminate) {
        ref.value.indeterminate = indeterminate;
      }
    });

    const variants = {
      primary:
        'checked:bg-bgcolor-button-default indeterminate:bg-bgcolor-button-default border-bordercolor-button',
      action:
        'checked:bg-bgcolor-action-emphasis indeterminate:bg-bgcolor-action-emphasis border-fg-action-default',
    };

    return (
      <input
        ref={ref}
        type="checkbox"
        class={[
          classProp,
          'appearance-none border',
          'rounded-sm w-4 h-4',
          'checked:bg-check-mark-icon-white',
          'indeterminate:bg-minus-icon-white',
          'bg-no-repeat bg-center',
          'disabled:border-bgcolor-button-disabled disabled:checked:bg-bgcolor-button-disabled disabled:indeterminate:bg-bgcolor-button-disabled',
          {
            [variants.action]: variant === 'action',
            [variants.primary]: variant === 'primary',
          },
        ]}
        {...props}
      />
    );
  },
);
