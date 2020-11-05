import React from 'react';
import { render, screen } from '@testing-library/react';
import { Coin } from './index';

it('Check coin label', () => {
    render(<Coin coin="BTC" currentPrice={5} oldPrice={7}/>)
    expect(screen.getByText('BTC'))
})