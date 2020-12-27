import { observable, action, runInAction} from 'mobx'

class User {
  @observable userInfo = {
    username: '',
    email: ''
  }

  @action.bound
  async login(param) {
    try {
      const res = await fetch('/api/join/demo', param)
      runInAction(() => {
        this.userInfo = res.data
      })
    }catch (e){
      console.error(e)
    }
  }
}

export default new User()