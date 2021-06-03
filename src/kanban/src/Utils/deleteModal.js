export const deleteModal = (el) => {
    el.modal.addEventListener('click', () => {
        el.modal.remove();
        el.element.remove();
    });
}
