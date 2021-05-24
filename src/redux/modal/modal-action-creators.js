export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModalAC = () => {
   return {type: OPEN_MODAL};
}

export const closeModalAC = () => {
    return {type: CLOSE_MODAL};
}
