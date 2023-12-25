
//quick type for the selector
interface MetaState {
    meta: {
        error: false
    }
}

interface RootState {
    meta: MetaState
}

export const getMeta = (state: RootState): MetaState => state.meta