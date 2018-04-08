import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CategoryWidget from './categoryWidget';
import mockData from './categoryWidget.fixtures';

describe('<CategoryWidget />', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<CategoryWidget />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with data', () => {
    const component = renderer.create(<CategoryWidget data={mockData} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when a category is clicked', () => {
    describe('when onCategoryClick is provided', () => {
      it('adds the category to the state', () => {
        const component = mount(<CategoryWidget data={mockData} onCategoryClick={() => {}} />);
        const instance = component.instance();

        expect(instance.state.selected.length).toEqual(0);

        component.find('Category').at(1).simulate('click');
        component.update();

        expect(instance.state.selected.length).toEqual(1);
        expect(instance.state.selected[0]).toEqual(mockData.categories[1]);
      });

      it('calls onCategoryClick with the selected categories', () => {
        const clickMock = jest.fn();
        const component = mount(<CategoryWidget data={mockData} onCategoryClick={clickMock} />);


        component.find('Category').at(0).simulate('click');
        component.find('Category').at(1).simulate('click');

        expect(clickMock).toHaveBeenCalledWith([
          mockData.categories[0],
          mockData.categories[1],
        ]);
      });
    });
  });

  describe('when selected prop is changed', () => {
    it('updates the state with the new data', () => {
      const component = mount(
        <CategoryWidget
          data={mockData}
          selected={mockData.categories}
        />
      );
      const instance = component.instance();

      expect(instance.state.selected.length).toEqual(mockData.categories.length);

      component.setProps({ selected: [] });
      component.update();

      expect(instance.state.selected.length).toEqual(0);
    });
  });
});
