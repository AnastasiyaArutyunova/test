import Cookies from 'js-cookie'
const user={
    state:{
        name:'Ivanov Andrey',
        age:19,
        avatar:'https://viralcontent.net/gallery/shutterstock_128232179_large.jpg',
        games:15,
        download:2,
        like:17,
        id:Cookies.get('id') || null
    },
    mutations:{
        SET_ID:(state,id)=>{
            state.id = +id
            Cookies.set('id', +id, { expires: 1 })
        }
    },
    actions:{
        login({commit},payload){
            console.log(payload)
            commit('SET_ID',1)
        }
    },
    getters:{
        getId: state => {
            return state.id
        },
        getUser: state => {
            return state
        }
    }
}
export default user