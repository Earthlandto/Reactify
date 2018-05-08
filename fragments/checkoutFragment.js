import { gql } from 'react-apollo';

const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          quantity
          variant {
            id
            title
            price
            compareAtPrice
            image {
              src
            }
            product {
              id
              title
              onlineStoreUrl
              images(first: 250) {
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CheckoutFragment;
