import { render, screen } from '@testing-library/react';
import Nominee from './index';


describe('Nominee test', () => {
  const nominee = {
    title: 'Nomadland',
    photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
    id: 'nomadland'
  }
  

  it('displays card on the page', () => {
    render(<Nominee nominee={nominee} />);
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
  
  it('displays card title properly', () => {
    render(<Nominee nominee={nominee} />);
    const title = screen.getByText(/nomadland/i);
    expect(title).toBeInTheDocument();
  });
});
