import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BalanceCheckerInput } from './BalanceCheckerInput';

describe('BalanceCheckerInput', () => {
    const inputContent = {
        placeholder: "xxxx xxxx xxxx xxxx",
    }

    const mockProps = {
        onChange: jest.fn()
    }

    const renderBalanceCheckerInput = () => {
        render(<BalanceCheckerInput {...mockProps} />)

        return {
            $queryByText: (text) => screen.queryByText(text),
            $getInput: () => screen.getByPlaceholderText(inputContent.placeholder),
        }
    }
    it('should render an input', () => {
        const { $getInput } = renderBalanceCheckerInput();
        expect($getInput()).toBeVisible()
    });

    //Skipped due to issues around enforcing act()
    it.skip('should allow onChange to receive events from input', async () => {
        const { $getInput } = renderBalanceCheckerInput();

        userEvent.type($getInput(), '11111', { delay: 1 })
        expect(mockProps.onChange).toHaveBeenCalledTimes(2);
    });
});