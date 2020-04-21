const initialState = { count : 0, products: [] };

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      //localStorage.setItem( 'products',[...state.products, action.payload] );
      return { count: state.count + 1, products: [...state.products, action.payload]}
    case 'REMOVE':
    return { count: state.count - 1, products: state.products.pop()}
  
    default:
     return state;
  }
}