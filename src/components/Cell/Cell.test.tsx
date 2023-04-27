import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Cell from '.'

describe('Cell', () => {
  it('should render correctly', () => {
    const { container } = render(<Cell />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: transparent;
        border: 1px solid #595959;
        cursor: pointer;
        display: block;
        height: 20px;
        width: 20px;
      }

      <span
        class="c0"
        data-testid="cell"
      />
    `)
  })

  it('should trigger the function once on UserEvent', () => {
    const jestFn = jest.fn()
    render(<Cell setNewState={jestFn} />)

    userEvent.click(screen.getByTestId('cell'))

    expect(jestFn).toHaveBeenCalledTimes(1)
  })

  it('should change the background color when Cell is alive', () => {
    const { rerender } = render(<Cell />)

    expect(screen.getByTestId('cell')).toHaveStyle(
      'background-color: transparent'
    )

    rerender(<Cell isAlive={1} />)

    expect(screen.getByTestId('cell')).toHaveStyle('background-color: #ffb86c')
  })
})
