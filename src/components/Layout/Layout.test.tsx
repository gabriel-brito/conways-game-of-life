import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Layout from '.'

describe('Layout', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Layout>
        <div>
          <h1>Hello World</h1>
        </div>
      </Layout>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 0 auto;
        max-width: 1280px;
        padding: 64px 24px;
        text-align: center;
      }

      <main
        class="c0"
      >
        <div>
          <h1>
            Hello World
          </h1>
        </div>
      </main>
    `)
  })

  it('should render correctly with the correct children', () => {
    render(
      <Layout>
        <span data-testid="firstSpan">Hello Span One</span>
        <span data-testid="secondSpan">Hello Span Two</span>
      </Layout>
    )

    expect(screen.getByTestId('firstSpan')).toBeInTheDocument()
    expect(screen.getByTestId('secondSpan')).toBeInTheDocument()
  })
})
