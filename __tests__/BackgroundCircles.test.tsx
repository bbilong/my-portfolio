import { render } from '@testing-library/react';
import BackgroundCircles from '../components/BackgroundCircles/BackgroundCircles';

describe('Home', () => {
  it('should render heading', () => {
    const { baseElement } = render(<BackgroundCircles />);

    expect(baseElement).toMatchSnapshot();
  });
});
