import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Button from '.'

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>Testing</Button>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #9580ff;
        border-radius: 8px;
        border: none;
        color: #21222c;
        cursor: pointer;
        font-family: monospace;
        font-size: 16px;
        font-weight: 600;
        padding: 8px 16px;
        text-transform: uppercase;
        width: 150px;
      }

      <button
        class="c0"
      >
        Testing
      </button>
    `)
  })

  it('should call func if clicked', () => {
    const fn = jest.fn()
    render(<Button clickFunction={fn}>Testing</Button>)
    const button = screen.getByRole('button', { name: /Testing/i })

    userEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(1)

    userEvent.click(button)

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should have a different text (children)', () => {
    render(<Button>different text</Button>)

    expect(
      screen.getByRole('button', { name: /different text/i })
    ).toBeInTheDocument()
  })
})
