import { MemberRepository, SessionInfo } from '../repositories/MemberRepository';
import { makeAutoObservable } from 'mobx';
import { SignInInfo } from '../pages/SignInPage';

const initInfo: SessionInfo = {
  memberId: 0,
  webId: '',
  name: '',
  nickName: '',
  role: 'USER',
};

class UserStore {
  isLogin = false;

  memberInfo: SessionInfo = initInfo;

  constructor() {
    makeAutoObservable(this);
  }

  signIn(signInInfo: SignInInfo) {
    return MemberRepository.signIn(signInInfo)
      .then((r) => {
        this.memberInfo = r;
        this.isLogin = true;
        return true;
      })
      .catch(() => {
        this.memberInfo = initInfo;
        this.isLogin = false;
        return false;
      });
  }

  signOut() {
    MemberRepository.signOut().then(() => {
      this.isLogin = false;
      this.memberInfo = initInfo;
    });
  }
}

export const userStore = new UserStore();
