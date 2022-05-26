import { SignUpInfo } from '../pages/SignUpPage';
import { APITemplate } from './CustomAxios';
import { SignInInfo } from '../pages/SignInPage';

const API = new APITemplate('board');

export interface SessionInfo {
  memberId: number;
  webId: string;
  name: string;
  nickName: string;
  role: 'ADMIN' | 'MANAGER' | 'USER';
}

const url = {
  signUp: `/sign-up`,
  signIn: `/login`,
  logOut: `/logout`,
  checkIdDuplicate: (webId: string) => `/duplicate-check/web-id/${webId}`,
  checkNickNameDuplicate: (nickname: string) => `/duplicate-check/nickname/${nickname}`,
  checkEmailDuplicate: (email: string) => `/duplicate-check/email/${email}`,
};

class MemberRepo {
  signUp(signUpInfo: SignUpInfo): Promise<string> {
    return API.post<SignUpInfo, string>(url.signUp, signUpInfo);
  }

  signIn(signInInfo: SignInInfo): Promise<SessionInfo> {
    return API.post<SignInInfo, SessionInfo>(url.signIn, signInInfo);
  }

  logOut(): Promise<string> {
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
