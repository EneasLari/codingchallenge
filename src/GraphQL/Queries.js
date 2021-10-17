import { gql } from "@apollo/client";

const GetContinents = gql`
{
    continents {
      name
      code
      countries{
        code
        name
        native
        emoji
        languages {
            code
            name
        }
        continent{
          name
        }
        capital
        currency
        phone
      }
    }
}
`

const GetCountries = gql`
{
  countries {
    name
    code
    native
    emoji
    languages {
        code
        name
    }
    continent{
      code
      name
    }
    capital
    currency
    phone
  }
}
`;

export {GetContinents,GetCountries}