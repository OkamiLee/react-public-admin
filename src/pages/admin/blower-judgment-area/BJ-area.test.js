import React from 'react';
import { render } from '@testing-library/react';
import BlowerJudgmentArea from './blower-judgment-area'



test('renders learn react link', () => {
  const { getByText } = render(<BlowerJudgmentArea />);
  const linkElement = getByText('查看');
  const getText = ()=>{
    return 'Lee'
  }
  expect(linkElement).toBeInTheDocument();
  expect(getText()).toBe('Lee')
});
