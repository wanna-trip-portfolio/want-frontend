import React, {useCallback} from "react";

export const VALID_TYPE = {
    KR: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
    EN_NO: /[a-z|A-Z|0-9]/,
    EN_KR_NO: /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]/,
    NO: /[0-9]/,
}

export const useOnChangeValidation = (stateArr: string[],
                                      setState: React.Dispatch<React.SetStateAction<string>>,
                                      validType: RegExp) => {
    return useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const lastInput = value.charAt(value.length - 1);
        if (validType.test(lastInput) || value === '') setState(value);
        else {
            e.target.value = value.substring(0, value.length - 1);
        }
    }, [...stateArr]);
};

export const onChangeExp = (validType: RegExp) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const length = value.length;
        const lastChar = value.substring(length - 1);
        if (!validType.test(lastChar!)) {
            e.target.value = value.substring(0, length - 1)
            return false;
        } else {
            return true;
        }
    }
}


export const DebounceCallAPI = <ResT>(timer: NodeJS.Timeout | undefined,
                                      api: (input: string) => Promise<ResT>,
                                      result: ResT) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            api(e.target.value).then(r => result = r);
        }, 200);
        console.log(result);
    }
};