const initstate={
    projects:[
        {id:1,title:'help me find peach',content:'aaa'},
        {id:2,title:'collect all stars',content:'bbb'},
        {id:3,title:'egg hunt with yoshi',content:'ccc'}
    ]
}
const projectReducer=(state=initstate,action) =>{

    switch (action.type){
        case' CREATE_PROJECT':
        console.log(action.project)
        return state;

        case 'CREATE_PROJECT_ERROR':
          console.log('createproject error',action.err)
          return state
        default:
            return state
    }

}

export default projectReducer