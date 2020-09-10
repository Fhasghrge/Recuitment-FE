/* 用户信息数据
 */
const initData = {
  info: {
    user_id: '',
    user_name: '昵称',
    username: '',
    password: 'defau',
    role_name: [],
  },
  login: false,
}

const reducer = (state = initData, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state,
        {
          info: {
            ...state.info,
            ...action.userinfo,
            ...action.resinfo
          },
          login: true
        })
    case 'GRADE':
      return Object.assign({}, state,
        {
          grade: action.grade.score,
          try: action.grade.try
        })
    case 'ANSWER':
      return Object.assign({}, state, {
        haveAnswered: true
      })
    case 'RETEXT':
      return Object.assign({}, state, {
        haveAnswered: false,
        grade: 0
      })
    case 'WXINFO':
      return Object.assign({}, state, {
        info: {
          ...state.info,
          url: action.wxinfo.iconurl,
          name: action.wxinfo.nickname,
          openid: action.wxinfo.openid
        }
      })
    default:
      return state
  }
}
export default reducer