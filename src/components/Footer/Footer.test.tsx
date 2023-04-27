import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Footer from '.'

describe('Footer', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Footer>
        <div>
          <h1>Hello World</h1>
        </div>
      </Footer>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 36px auto 0;
        max-width: 580px;
      }

      <footer
        class="c0"
      >
        <div>
          <h1>
            Hello World
          </h1>
        </div>
      </footer>
    `)
  })

  it('should render correctly with the correct children', () => {
    render(
      <Footer>
        <span data-testid="firstSpan">Hello Span One</span>
        <span data-testid="secondSpan">Hello Span Two</span>
      </Footer>
    )

    expect(screen.getByTestId('firstSpan')).toBeInTheDocument()
    expect(screen.getByTestId('secondSpan')).toBeInTheDocument()
  })
})
