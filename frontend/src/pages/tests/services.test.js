import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from '../Services/Services';
import '@testing-library/jest-dom';

describe('Services', () => {
  it('renders without crashing', () => {
    render(<Router>
        <Services />
      </Router>);
    expect(screen.getByTestId('services')).toBeInTheDocument();
  });

  // it('renders the Sidebar component', () => {
  //   render(<Router>
  //       <Services />
  //     </Router>);
  //   expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  // });
  // it('renders the Navbar component', () => {
  //   render(<Router>
  //       <Services />
  //     </Router>);
  //   expect(screen.getByTestId('navbar')).toBeInTheDocument();
  // });
  // it('renders the DatatableServices component', () => {
  //   render(<Router>
  //       <Services />
  //     </Router>);
  //   expect(screen.getByTestId('datatableServices')).toBeInTheDocument();
  // });
});