//modal actions
export const openModal = (modalID) => ({
  type: 'OPEN_MODAL',
  modalID,
});

export const closeModal = (modalID) => ({
  type: 'CLOSE_MODAL',
  modalID,
});
