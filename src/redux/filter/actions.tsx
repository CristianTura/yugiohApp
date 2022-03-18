import { types } from './types';

export const handleChangeInput = (input: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.changeInput,
            payload: input
        })
    }
}