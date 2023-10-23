import { ModalKeys } from '../shared/types/modal';

export function closeModal(modalId: ModalKeys) {
  // Close the modal by triggering a click event
  const modalElement = document.getElementById(modalId);

  if (modalElement) {
    modalElement.click();
  }
}
