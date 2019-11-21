import React from 'react'
import Hello from './Hello'

export default {
  title: 'components|basic/Hello', // 메뉴 리스트에서 차지할 이름!
  component: Hello
}

export const standard = () => <Hello name="Storybook" />

export const big = () => <Hello name="Storybook" big />
