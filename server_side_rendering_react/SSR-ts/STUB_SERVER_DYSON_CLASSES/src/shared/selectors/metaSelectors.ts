// quick type for the selector
interface MetaState {
  savedPaymentMethods: any[];
  error: boolean;
}

interface RootState {
  meta: MetaState;
}

export const getMeta = (state: RootState): MetaState => {
  console.log("state.meta", state.meta);
  return state.meta;
};
