import { render, screen} from "@testing-library/react";
import { Main } from ".";

describe('<Main/>', () => {
  it(' shoulder render the heading', () => {
     render( <Main/> )

    expect(
      screen.getByRole('heading', {name: /react avançado/i})
    ).toBeInTheDocument()
  })
})
