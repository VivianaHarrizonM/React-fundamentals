import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn( (_props: unknown) => {
  return  <div data-testid="ItemCounter" />
});

vi.mock('./shopping-card/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),  
}));

// vi.mock('./shopping-card/ItemCounter', () => ({
//   ItemCounter: (props: unknown) => 
//   <div data-testid="ItemCounter" name="{props.name}" quantity={props.quantity} />,
  
// }));

describe('FirstStepsApp', () => {
  afterEach(() => {
    vi.clearAllMocks()
  });
  test('should match snapshot', () => {
    const {container} = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');
    expect(itemCounters.length).toBe(4);
    // screen.debug();
  });

  test('Should render ItemCounter whit correct props', () =>{
    render(<FirstStepsApp/>);

    expect(mockItemCounter).toHaveBeenCalledTimes(4);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name:'Nintendo Swicht 2' , quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name:'Pro Controller' , quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name:'Super Smash' , quantity: 3,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name:'Super Mario' , quantity: 1,
    });
  });
});


      
    