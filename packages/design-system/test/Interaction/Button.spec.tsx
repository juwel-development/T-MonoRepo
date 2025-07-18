import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { Subject } from 'rxjs';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../../src/Interaction/Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('displays the children content', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('has the correct button type', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('handles click events via Subjects', () => {
    const onClick$ = new Subject<void>();

    const handleClick = vi.fn();
    onClick$.subscribe(handleClick);
    render(<Button onClick$={onClick$}>Click Me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
