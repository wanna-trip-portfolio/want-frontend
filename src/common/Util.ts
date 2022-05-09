import React from "react";

class CommonUtil {

    constructor() {
    }

    checkInputLength(input = '', min = 0, max = 12): boolean {
        console.log(input.length >= min && input.length <= max);
        return input.length >= min && input.length <= max;
    }

}

export const Util = new CommonUtil();