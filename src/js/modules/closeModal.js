const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);

        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');
}
export default closeModal;