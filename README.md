# Balance Checker
<img src="./resources/readme/balance-checker">

## Libraries/Frameworks used
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Backend Framework [ExpressJs](https://github.com/facebook/create-react-app), Bootstrapped using [Express Generator](https://expressjs.com/en/starter/generator.html)
- [MaterialUI](https://mui.com/material-ui) for a styling/component library


### Planning

<img src="./resources/readme/planning-sketch">


##### Frontend 'ticket' breakdown
- Create component to show the balance checker component and button
    - Create component to hold list of balances
    - Create component for balance row + formatting
    - Sort the cards in order of balance {cardNumber, balance}
    - Validate on correct format/
- Test for each component + its validation

#### Backend 'ticket' breakdown
- Research frameworks for quick spin-up
-  Make an api that accepts a 16 digit number
    - Make a provider that takes in the input
        - Last digit ends in 5 or 2, sum up first 12 numbers
        - else return 0
    - Test

### Good additions I didn't have time to do but would be nice
- Using Yup for validation
- Creating a flexible theme setup for the Mui components
- Disabling the button on invalid number (not done in favor of design)
- Setting up github actions for auto running tests
- Creating a more fleshed out api structure to accommodate future moves to a db
- Modal to ask them to enter the full card number in order to delete it (+ are you sure check)
- Tests
- Integration test
- Testing/Screenshots on additional browsers/device sizes



