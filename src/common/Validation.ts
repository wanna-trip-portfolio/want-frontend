import React, {useCallback} from "react";

export const VALID_TYPE = {
    EN_NUM: /[a-z|A-Z|0-9]/g,
    EN_KR_NUM: /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]/g,
}

export const useInputValidate = (state: string,
                                 setState: React.Dispatch<React.SetStateAction<string>>,
                                 validType: RegExp) => {
    return useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const lastInput = value.charAt(value.length - 1);
        if (validType.test(lastInput) || value === '') setState(value);
        else {
            e.target.value = value.substring(0, value.length - 1);
        }
    }, []);
};
