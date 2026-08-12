import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders label correctly', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events when enabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes properly', () => {
    render(<Button label="Outline Button" variant="outline" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn--outline');
  });
});

