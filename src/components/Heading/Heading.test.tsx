import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Heading from '.'

describe('Heading', () => {
  it('should render correctly', () => {
    const { container } = render(<Heading>Testing</Heading>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 60px;
        line-height: 60px;
        margin: 16px auto 36px;
        position: relative;
      }

      <h1
        class="c0"
      >
        Testing
      </h1>
    `)
  })

  it('should render correctly with a different children', () => {
    render(<Heading>Different children</Heading>)

    expect(
      screen.getByRole('heading', { name: /different children/i })
    ).toBeInTheDocument()
  })
})
