import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Board from '.'

describe('Board', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Board>
        <div>
          <h1>Hello World</h1>
        </div>
      </Board>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(35,20px);
        margin: 0 auto;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
      }

      <div
        class="c0"
      >
        <div>
          <h1>
            Hello World
          </h1>
        </div>
      </div>
    `)
  })

  it('should render correctly with the correct children', () => {
    render(
      <Board>
        <span data-testid="firstSpan">Hello Span One</span>
        <span data-testid="secondSpan">Hello Span Two</span>
      </Board>
    )

    expect(screen.getByTestId('firstSpan')).toBeInTheDocument()
    expect(screen.getByTestId('secondSpan')).toBeInTheDocument()
  })
})
