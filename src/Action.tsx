import { SUBMIT } from "./actionTypes";

export function submitAction(data: any) {
    console.log(data)
    return {
        type: SUBMIT,
        payload: data
    };
}



