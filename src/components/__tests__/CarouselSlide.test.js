import React from 'react';
import { shallow } from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default,jpg"
        description="default"
      />
    );
  });

  it('renders a <figure/>', () => {
    expect(wrapper.type()).toBe('figure');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an <img> and a <figcaption> as children', () => {
    expect(wrapper.childAt(0).type()).toBe('img');
    expect(wrapper.childAt(1).type()).toBe('figcaption');
    expect(wrapper).toMatchSnapshot();
  });

  it('passes `imgUrl` through to the <img>', () => {
    const imgUrl = 'https://example.com/image.png';
    wrapper.setProps({ imgUrl });
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(imgUrl);
    expect(wrapper).toMatchSnapshot();
  });

  it('uses `description` and `attribution` as the <figcaption></figcaption>', () => {
    const description = 'A jaw droppingly spectacular image';
    const attribution = 'Trevor Burnham';
    wrapper.setProps({ description, attribution });
    expect(wrapper.find('figcaption').text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find('figcaption strong').text()).toBe(description);
    expect(wrapper).toMatchSnapshot();
  });

  it('passes other props through to <figure></figure>', () => {
    const style = {};
    const onClick = () => {};
    const className = 'my-carousel-slide';
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop('style')).toBe(style);
    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper).toMatchSnapshot();
  });
});
