import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import GenerationInfo from '.'

describe('Cell', () => {
  it('should render correctly', () => {
    const { container } = render(<GenerationInfo generations={1} />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 8px auto;
      }

      <h3
        class="c0"
      >
        Number of generations: 
        1
      </h3>
    `)
  })

  it('should render the generation number correctly', () => {
    const { rerender } = render(<GenerationInfo generations={17} />)

    expect(
      screen.getByRole('heading', { name: /Number of generations: 17/i })
    ).toBeInTheDocument()

    rerender(<GenerationInfo generations={345} />)

    expect(
      screen.getByRole('heading', { name: /Number of generations: 345/i })
    ).toBeInTheDocument()
  })
})
