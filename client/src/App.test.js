import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => { // Need tests for: adding stuff to the balance form component and verifying it shows on the screen
  const appContent = {
    header: "Balance checker",
    description: "Enter your card number to check its balance.",
    cta: "Check",
    errorMessage: "Invalid number",
  }

  const renderApp = () => {
    render(<App />)

    return {
      $queryByText: (text) => screen.queryByText(text),
      $getByText: (text) => screen.getByText(text),
      $getInput: () => screen.getByPlaceholderText('xxxx xxxx xxxx xxxx'),
      $getButton: () => screen.getByRole('button', { name: appContent.cta })
    }
  }
  test('renders the initial balance checker app screen', () => {
    const { $queryByText, $getByText, $getInput, $getButton } = renderApp();

    expect($getByText(appContent.header)).toBeVisible()
    expect($getByText(appContent.description)).toBeVisible()
    expect($queryByText(appContent.errorMessage)).not.toBeInTheDocument()
    expect($getInput()).toBeVisible()
    expect($getButton()).toBeVisible()
  });
});