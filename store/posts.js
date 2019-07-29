
 const actions = {
  async fetchPosts() {
      try {
         let posts = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
        return {posts}
      }
      catch (e){
        throw e
      }
    }
};

 const state = {
   routerPath: '/'
 };

 const mutations = {
   SET_ROUTER_PATH(payload){
     state.routerPath = payload
   }
 };

 const getters = {
   getState(){
     return state.routerPath
   }
 };
 export {
   actions,
   state,
   mutations,
   getters
 }


// export default {
//   state: {
//     posts: []
//   },
//   mutations: {
//     SET_POSTS({state}, payload){
//       state.posts = payload
//     }
//   },
//   actions: {
//     async fetchPosts() {
//       try {
//         let users = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
//         console.log(users)
//         return users
//        // commit('SET_POSTS', users);
//       }
//       catch (e){
//         throw e
//       }
//     }
//   },
// }
