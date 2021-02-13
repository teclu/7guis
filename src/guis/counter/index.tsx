import React from 'react'

const Counter = (): JSX.Element => {
  const [count, setCount] = React.useState<number>(0)

  const onCountClick = (): void => setCount(count + 1)

  return (
    <>
      <div className="row mb-3">
        <div className="col-auto">
          <input className="form-control" value={count} disabled />
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={onCountClick}>
        Count
      </button>
    </>
  )
}

export default Counter
