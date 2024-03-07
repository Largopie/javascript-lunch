import ICON from '../icons';

export default class Header {
  constructor() {
    this.handleButtonClick();
  }

  render() {
    /*html*/
    return `
      <h1 class="gnb__title text-title">점심 뭐 먹지</h1>
      <button type="button" id="gnb__button" class="gnb__button" aria-label="음식점 추가">
        <img src="${ICON.추가버튼}" alt="음식점 추가" />
      </button>
    `;
  }

  handleButtonClick() {
    document.getElementById('header').addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'gnb__button') {
        document.getElementById('restaurant-creation-modal').classList.add('modal--open');
      }
    });
  }
}