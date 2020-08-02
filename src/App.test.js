// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toHaveLength(1);
  })
  describe('it should render props correctly', () => {
    const component = shallow(<App name="app"/>);
    expect(component.instance().props.name).toBe('app');
    //using destructuring maybe is blocking the test
  })
})
