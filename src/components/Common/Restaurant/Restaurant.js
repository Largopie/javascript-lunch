import ICON from '../../../icons';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { FAVORITE_ICON } from '../../../constants/rules';

const Restaurant = ({ category, name, walkingTimeFromCampus, description, favorite }) => {
  return `
    <li id="${name}" class="restaurant">
      <div class="restaurant__category">
        <img src="${ICON[category]}" alt="${category}" class="category-icon">
      </div>
      <div class="restaurant__info">
        <h3 class="restaurant__name text-subtitle">${name}</h3>
        <span class="restaurant__distance text-body">캠퍼스부터 ${walkingTimeFromCampus}분 내</span>
        <p class="restaurant__description text-body">${description}</p>
      </div>
      ${FavoriteButton(name, favorite ? FAVORITE_ICON.add : FAVORITE_ICON.remove)}
    </li>
    `;
};

export default Restaurant;
