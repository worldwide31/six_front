/** Объект настроек для работы с API
 * @type {{headers: {authorization: string, "Content-Type": string}, serverURL: string}}
 */
export const apiSettings = {
  serverURL: 'https://mesto.nomoreparties.co/v1/frontend-st-cohort-201',
  headers: {
    authorization: 'd108d9a9-e7fa-439e-8d6f-f77a8486cf87',
    'Content-Type': 'application/json'
  }
};

/**
 * Настройки валидации
 * @param {string} formSelector - класс формы
 * @param {string} inputSelector - класс инпута
 * @param {string} submitButtonSelector - класс кнопки отправки формы
 * @param {string} inactiveButtonClass - класс, к-рый делает кнопку отправки формы заблокированной
 * @param {string} inputErrorClass - класс, подсвечивающий поле с ошибками
 * @param {string} errorClass - класс, делающий ошибку видимой
 */
/** @type {Object} */
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
