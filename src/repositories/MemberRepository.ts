import { SignUpInfo } from '../pages/SignUpPage';
import { API } from './CustomAxios';
import { SignInInfo } from '../pages/SignInPage';

export interface SessionInfo {
  memberId: number;
  webId: string;
  name: string;
  nickName: string;
  role: 'ADMIN' | 'MANAGER' | 'USER';
}

const PREFIX = 'members';
const url = {
  signUp: PREFIX + `/sign-up`,
  signIn: PREFIX + `/login`,
  logOut: PREFIX + `/logout`,
  checkIdDuplicate: (webId: string) => PREFIX + `/duplicate-check/web-id/${webId}`,
  checkNickNameDuplicate: (nickname: string) => PREFIX + `/duplicate-check/nickname/${nickname}`,
  checkEmailDuplicate: (email: string) => PREFIX + `/duplicate-check/email/${email}`,
};

class MemberRepo {
  signUp(signUpInfo: SignUpInfo): Promise<string> {
    return API.post<SignUpInfo, string>(url.signUp, signUpInfo);
  }

  signIn(signInInfo: SignInInfo): Promise<SessionInfo> {
    return API.post<SignInInfo, SessionInfo>(url.signIn, signInInfo);
  }

  signOut(): Promise<string> {
    return API.get<string>(url.logOut);
  }

  checkIdDuplicate(webId: string): Promise<boolean> {
    return API.get<boolean>(url.checkIdDuplicate(webId));
  }

  checkNickNameDuplicate(nickname: string): Promise<boolean> {
    return API.get<boolean>(url.checkNickNameDuplicate(nickname));
  }

  checkEmailDuplicate(email: string): Promise<boolean> {
    return API.get<boolean>(url.checkEmailDuplicate(email));
  }
}

export const MemberRepository = new MemberRepo();
