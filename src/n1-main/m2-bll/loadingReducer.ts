export type LoadingStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initState = {
isLoading: 'idle' as LoadingStatusType
}
export type LoadingStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingACType): LoadingStateType => {
    switch (action.type) {
        case "CHANGE-LOADING": {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading:LoadingStatusType) => ({type: 'CHANGE-LOADING', isLoading} as const)

export type LoadingACType = ReturnType<typeof loadingAC>