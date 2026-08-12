import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders brand logo and nav items', () => {
    render(<Navbar />);
    
    expect(screen.getByAltText('Nexcent')).toBeInTheDocument();
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Service')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Product')[0]).toBeInTheDocument();
  });

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />);
    
    const hamburgerBtn = screen.getByRole('button', { name: /open menu/i });
    expect(hamburgerBtn).toBeInTheDocument();
    
    fireEvent.click(hamburgerBtn);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });
});


