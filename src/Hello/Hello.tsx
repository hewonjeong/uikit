import React from 'react'
import { string, bool, func } from 'prop-types'

type HelloProps = {
  /** 보여주고 싶은 이름 (설명~~) */
  name: string
  /** 이 값을 `true` 로 설정하면 h1 태그로 렌더링합니다. */
  big?: boolean
  /** Hello 버튼 누를 때 호출 할 함수 */
  onHello?: () => void
  /** Bye 버튼 누를 때 호출 할 함수 */
  onBye?: () => void
}

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}</h1> : <p>안녕하세요. {name}</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  )
}

Hello.defaultProps = {
  big: false
}

export default Hello
