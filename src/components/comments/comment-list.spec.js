import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentList from './comment-list'
import mockedArticles from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

describe('Comment', function () {
    it('should render comment', () => {
        const wrapper = mount(
            <CommentList />
        )

        expect(wrapper.find('.test--comment__container').length)
            .toEqual(1)
    });

    it('should show comments after click on button', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        )

        wrapper.find('.test--comment__btn').at(0).simulate('click');

        expect(wrapper.find('.test--comment_body').length > 0)
            .toEqual(true)
    });

    it('should close comments after double click on button', () => {
        const wrapper = mount(
            <CommentList comments={mockedArticles[0].comments} />
        )

        wrapper.find('.test--comment__btn').at(0).simulate('doubleclick');

        expect(wrapper.find('.test--comment_body').length > 0)
            .toEqual(false)
    });
});