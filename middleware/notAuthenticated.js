export default function ({ store, redirect }) {
//  if the user notAuthenticated
  if(store.state.user) {
    return redirect('/')
  }
}
