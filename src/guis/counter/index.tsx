import React from 'react'

const Counter = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0)

  const onCountClick = (): void => setCount(count + 1)

  return (
    <div className="row">
      <div className="col-auto">
        <input className="form-control" value={count} disabled />
      </div>
      <div className="col-auto">
        <button
          type="button"
          className="btn btn-primary"
          onClick={onCountClick}
        >
          Count
        </button>
      </div>
    </div>
  )
}

export default Counter
