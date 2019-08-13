import React from 'react';
import { mount } from 'enzyme';
import ClientCaptcha from '../src/index';

const defaultProps = {
  captchaCode: jest.fn()
};

const mockEvent = {
  stopPropagation: jest.fn(),
  target: {},
};

const wait = (time = 100) => new Promise(resolve => setTimeout(resolve, time));

describe('Captcha', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockEvent.target = {};
  });

  it('Should have a default export', () => {
    expect(typeof ClientCaptcha).toBe('function');
  });

  describe('Render', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
          <ClientCaptcha {...defaultProps} />
      );
    });

    afterAll(() => {
      wrapper.unmount();
    });

    it('Should render the captcha', () => {
      expect(wrapper.find(ClientCaptcha).length).toBe(1);
      expect(wrapper.find(ClientCaptcha)).toMatchSnapshot();
    });
  })

  describe('generateCode',() => {
    const wrapper = mount(
        <ClientCaptcha {...defaultProps} charsCount={6} chars="0123456789"/>
    );

    it('Should return a 6 chars length captcha code', () => {
      expect(wrapper.instance().generateCode()).toHaveLength(6)
    })

    it('Should return a captcha code with characters: 0123456789', () => {
      expect(wrapper.instance().generateCode()).toMatch(/[1-9]/g)
    })
  })

  describe('generateCaptcha',() => {
    const wrapper = mount(
        <ClientCaptcha {...defaultProps} />
    );

    it('Should get canvas object', () => {
      expect(wrapper.instance().canvasRef.current.getContext('2d')).toBeInstanceOf(CanvasRenderingContext2D)
    })

  })
});
