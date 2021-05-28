export function set(CardsCounter, value) {
  window.localStorage.setItem(CardsCounter, JSON.stringify(value));
}

export function get(CardsCounter, subst = null) {
  return JSON.parse(window.localStorage.getItem(CardsCounter) || subst);
}

export function del(CardsCounter) {
  localStorage.removeItem(CardsCounter);
}
