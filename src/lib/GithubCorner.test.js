import { mount, shallow } from 'enzyme';

import GithubCorner from './GithubCorner';
import React from 'react';

beforeEach(() => {
  document.open();
  document.write('<html></html>');
  document.close();
});

describe('when newTab is false', () => {
  test('default <GithubCorner />', () => {
    const wrapper = shallow(<GithubCorner />);
    expect(wrapper).toMatchSnapshot();
  });

  test('<GithubCorner direction="left" />', () => {
    const wrapper = shallow(<GithubCorner direction="left" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('GithubCorner with non-left directions', () => {
    const wrappers = [];
    ['right', 'invalid'].forEach(dir => {
      const wrapper = shallow(<GithubCorner direction={dir} />);
      wrappers.push(wrapper);
      expect(wrapper).toMatchSnapshot();
    });
    expect(wrappers[0]).toEqual(wrappers[1]);
  });

  test('with additional props', () => {
    const wrapper = shallow(<GithubCorner style="display:none" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('merge className attribute', () => {
    const wrapper = shallow(<GithubCorner className="wow cool" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.github-corner').hasClass('wow')).toEqual(true);
    expect(wrapper.find('.github-corner').hasClass('cool')).toEqual(true);
  });

  test('it mounts', () => {
    const headBefore = document.head.innerHTML;
    const wrapper = mount(<GithubCorner />);
    const headAfter = document.head.innerHTML;
    expect(wrapper.html()).toMatchSnapshot();
    expect(headBefore).not.toEqual(headAfter);
    expect({
      headBefore,
      headAfter
    }).toMatchSnapshot();
  });

  test('styles have already been injected', () => {
    document.head.innerHTML =
      '<style id="____GITHUB_CORNER_SUPER_SECRET___">.mock {}</style>';
    const headBefore = document.head.innerHTML;
    mount(<GithubCorner />);
    const headAfter = document.head.innerHTML;
    expect(headBefore).toEqual(headAfter);
    expect({
      headBefore,
      headAfter
    }).toMatchSnapshot();
  });

  test('when document.head does not exist', () => {
    document.head.remove();
    const mockHead = jest.fn();
    mockHead.appendChild = jest.fn();
    const original = document.getElementsByTagName;
    document.getElementsByTagName = jest.fn(() => [mockHead]);
    const wrapper = mount(<GithubCorner />);
    expect(wrapper.html()).toMatchSnapshot();
    expect(mockHead.appendChild.mock.calls).toMatchSnapshot();
    document.getElementsByTagName = original;
  });

  test('when style.stylesheet exists we use cssText', () => {
    let style;
    const original = document.createElement;
    document.createElement = () => {
      style = original.call(document, 'style');
      style.styleSheet = { cssText: '' };
      return style;
    };
    mount(<GithubCorner />);
    expect(style.styleSheet.cssText).toMatchSnapshot();
    document.createElement = original;
  });

  test('can use svgStyle prop', () => {
    const svgStyle = { mixBlendMode: 'darken' };
    const wrapper = shallow(<GithubCorner svgStyle={svgStyle} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('when newTab is true', () => {
  test('default <GithubCorner newTab={true} />', () => {
    const wrapper = shallow(<GithubCorner newTab={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('<GithubCorner direction="left" newTab={true} />', () => {
    const wrapper = shallow(<GithubCorner direction="left" newTab={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('GithubCorner with non-left directions', () => {
    const wrappers = [];
    ['right', 'invalid'].forEach(dir => {
      const wrapper = shallow(<GithubCorner direction={dir} newTab={true} />);
      wrappers.push(wrapper);
      expect(wrapper).toMatchSnapshot();
    });
    expect(wrappers[0]).toEqual(wrappers[1]);
  });

  test('with additional props', () => {
    const wrapper = shallow(<GithubCorner style="display:none" newTab={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('merge className attribute', () => {
    const wrapper = shallow(<GithubCorner className="wow cool" newTab={true} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.github-corner').hasClass('wow')).toEqual(true);
    expect(wrapper.find('.github-corner').hasClass('cool')).toEqual(true);
  });

  test('it mounts', () => {
    const headBefore = document.head.innerHTML;
    const wrapper = mount(<GithubCorner newTab={true} />);
    const headAfter = document.head.innerHTML;
    expect(wrapper.html()).toMatchSnapshot();
    expect(headBefore).not.toEqual(headAfter);
    expect({
      headBefore,
      headAfter
    }).toMatchSnapshot();
  });

  test('styles have already been injected', () => {
    document.head.innerHTML =
      '<style id="____GITHUB_CORNER_SUPER_SECRET___">.mock {}</style>';
    const headBefore = document.head.innerHTML;
    mount(<GithubCorner newTab={true} />);
    const headAfter = document.head.innerHTML;
    expect(headBefore).toEqual(headAfter);
    expect({
      headBefore,
      headAfter
    }).toMatchSnapshot();
  });

  test('when document.head does not exist', () => {
    document.head.remove();
    const mockHead = jest.fn();
    mockHead.appendChild = jest.fn();
    const original = document.getElementsByTagName;
    document.getElementsByTagName = jest.fn(() => [mockHead]);
    const wrapper = mount(<GithubCorner newTab={true} />);
    expect(wrapper.html()).toMatchSnapshot();
    expect(mockHead.appendChild.mock.calls).toMatchSnapshot();
    document.getElementsByTagName = original;
  });

  test('when style.stylesheet exists we use cssText', () => {
    let style;
    const original = document.createElement;
    document.createElement = () => {
      style = original.call(document, 'style');
      style.styleSheet = { cssText: '' };
      return style;
    };
    mount(<GithubCorner newTab={true} />);
    expect(style.styleSheet.cssText).toMatchSnapshot();
    document.createElement = original;
  });

  test('can use svgStyle prop', () => {
    const svgStyle = { mixBlendMode: 'darken' };
    const wrapper = shallow(<GithubCorner svgStyle={svgStyle} newTab={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
