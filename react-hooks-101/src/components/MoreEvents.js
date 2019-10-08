import React, { useContext } from 'react'

import MoreEvent from './MoreEvent'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <h4>もっとイベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.moreEvents.map((event, index) => (<MoreEvent key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events