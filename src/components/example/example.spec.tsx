import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import {  VitestTestBroken } from './example';

test(`[VitestTestBroken Component]: Should render`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(
    <VitestTestBroken />,
  );
  expect(screen.innerHTML).toMatchSnapshot();

  await userEvent('[data-test="button"]', 'click');
  expect(screen.innerHTML).toMatchSnapshot();
});
