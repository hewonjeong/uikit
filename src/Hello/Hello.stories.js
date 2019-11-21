import React from 'react'
import Hello from './Hello'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'components|basic/Hello', // 메뉴 리스트에서 차지할 이름!
  component: Hello,
  decorators: [withKnobs] // 애드온 적용
}

export const hello = () => {
  // knobs 만들기
  const big = boolean('big', false)
  const name = text('name', 'Storybook')
  return <Hello name={name} big={big} />
}

hello.story = {
  name: 'Default'
}

export const standard = () => <Hello name="Storybook" />
export const big = () => <Hello name="Storybook" big />
