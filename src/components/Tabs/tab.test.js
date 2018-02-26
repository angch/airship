import React from 'react';
import Tabs from './Tab';
import renderer from 'react-test-renderer';

describe('render', () => {
  it('renders without crashing', () => {
    const component = renderer.create(
      <Tabs>
        <Tabs.Panel label="wadus">Hola</Tabs.Panel>
        <Tabs.Panel label="world">Mundo</Tabs.Panel>
      </Tabs>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with large param', () => {
    const component = renderer.create(
      <Tabs large>
        <Tabs.Panel label="wadus">Hola</Tabs.Panel>
        <Tabs.Panel label="world">Mundo</Tabs.Panel>
      </Tabs>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with selected as number', () => {
    const component = renderer.create(
      <Tabs selected={1}>
        <Tabs.Panel label="wadus">Hola</Tabs.Panel>
        <Tabs.Panel label="world">Mundo</Tabs.Panel>
      </Tabs>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with selected as string', () => {
    const component = renderer.create(
      <Tabs selected="world">
        <Tabs.Panel label="wadus">Hola</Tabs.Panel>
        <Tabs.Panel label="world">Mundo</Tabs.Panel>
      </Tabs>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});