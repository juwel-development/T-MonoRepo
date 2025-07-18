import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
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

  it('applies the correct CSS classes', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary-500');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('font-bold');
    expect(button).toHaveClass('py-2');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('rounded');
  });

  // it('handles click events', () => {
  //   const handleClick = vi.fn();
  //   render(<Button onClick={handleClick}>Click Me</Button>);
  //   const button = screen.getByRole('button');
  //
  //   fireEvent.click(button);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});
