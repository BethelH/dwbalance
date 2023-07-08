import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BalanceCheckerForm } from './BalanceCheckerForm';

describe('BalanceCheckerForm', () => {
    const appContent = {
        header: "Balance checker",
        description: "Enter your card number to check its balance.",
        cta: "Check",
        errorMessage: "Invalid number",
    }

    const mockProps = {
        onClick: jest.fn(),
        onChange: jest.fn()
    }

    const renderBalanceCheckerForm = () => {
        render(<BalanceCheckerForm {...mockProps} />)

        return {
            $queryByText: (text) => screen.queryByText(text),
            $getByText: (text) => screen.getByText(text),
            $getInput: () => screen.getByPlaceholderText('xxxx xxxx xxxx xxxx'),
            $getButton: () => screen.getByRole('button', { name: appContent.cta })
        }
    }
    it('should render the initial balance checker form', () => {
        const { $queryByText, $getByText, $getInput, $getButton } = renderBalanceCheckerForm();

        expect($getByText(appContent.header)).toBeVisible()
        expect($getByText(appContent.description)).toBeVisible()
        expect($queryByText(appContent.errorMessage)).not.toBeInTheDocument()
        expect($getInput()).toBeVisible()
        expect($getButton()).toBeVisible()
    });

    //Skipped due to issues around enforcing act()
    it.skip('should render an error message on incorrect input', async () => {
        const { $queryByText, $getInput, $getButton } = renderBalanceCheckerForm();
        const button = $getButton();
   
        userEvent.type($getInput(), '11111', { delay: 1 })
        userEvent.click(button);
        await waitFor(() => expect($queryByText(appContent.errorMessage)).toBeInTheDocument())


        expect(mockProps.onClick).toHaveBeenCalledTimes(0);
    });
});