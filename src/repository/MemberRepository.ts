import {API} from "../common/CustomAxios";

class MemberRepo {
    prefix = '/members'

    duplicateCheckId(id: string): Promise<boolean> {
        if (id !== '') {
            const url = `members/duplicate-check/web-id/${id}`;
            return API.get<boolean>(url);
        } else {
            return new Promise((() => true));
        }
    }

    duplicateCheckNickName(id: string): Promise<boolean> {
        if (id !== '') {
            const url = `members/duplicate-check/web-id/${id}`;
            return API.get<boolean>(url);
        } else {
            return new Promise((() => true));
        }
    }

}

export const MemberRepository = new MemberRepo();