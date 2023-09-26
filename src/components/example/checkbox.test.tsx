import { createDOM } from '@builder.io/qwik/testing';
import { test, describe, expect } from 'vitest';

import { Checkbox } from './checkbox';

describe('<Checkbox />', () => {
  test(`Should render primary variant`, async () => {
    const { screen, render } = await createDOM();
    await render(<Checkbox checked={true} variant="primary" />);
    expect(screen.innerHTML).toMatchSnapshot();
  });
  
  test(`Should select / deselect (but doesn't)`, async () => {
    const { screen, render, userEvent } = await createDOM();
    await render(<Checkbox variant="action" />);

    const selector = 'input[type="checkbox"]';
    const checkbox = screen.querySelector(selector) as HTMLInputElement;

    expect(checkbox.checked).toBeFalsy();

    await userEvent(selector, 'click'); // doesn't work
    // await userEvent(checkbox, 'click'); // doesn't work
    // await userEvent('input[type="checkbox"]', 'click'); // doesn't work
    // await userEvent(screen.querySelector(selector) as HTMLInputElement, 'click'); // doesn't work

    expect(checkbox.checked).toBeTruthy();
  });
  // works!
  test(`Should select / deselect`, async () => {
    const { screen, render } = await createDOM();
    await render(<Checkbox variant="action" />);

    const selector = 'input[type="checkbox"]';
    const checkbox = screen.querySelector(selector) as HTMLInputElement;

    expect(checkbox.checked).toBeFalsy();

    checkbox.click();
    expect(checkbox.checked).toBeTruthy();

    (screen.querySelector(selector) as HTMLInputElement).click();
    expect(checkbox.checked).toBeFalsy();

    checkbox.click();
    expect(checkbox.checked).toBeTruthy();
  });
  test(`Should render indeterminate option `, async () => {
    const { screen, render } = await createDOM();
    await render(<Checkbox indeterminate />);
    expect(screen.innerHTML).toMatchSnapshot();

    const checkbox = screen.querySelector('input') as HTMLInputElement;
    expect(checkbox.indeterminate).toBeTruthy();
    
    checkbox.click();
    expect(checkbox.checked).toBeTruthy();
  });
});
