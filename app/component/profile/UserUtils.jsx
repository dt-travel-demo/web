
const defaultAvatar1 = require('../../assets/image/common/icon_avatar_1.png');
const defaultAvatar2 = require('../../assets/image/common/icon_avatar_2.png');

let UserUtils = {
    avatar: (user = {}) => {
        let { avatar, gender } = user;
        return avatar || (gender == 2 ? defaultAvatar2 : defaultAvatar1);
    }
}

export default UserUtils;