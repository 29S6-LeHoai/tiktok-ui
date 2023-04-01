import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faCoins,
    faGear,
    faUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { UploadIcon, InboxIcon, MessageIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'langeage',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'langeage',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const useMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@hoaa',
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/coin',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },

    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    // handle logic
    const handleChange = (listItem) => {
        switch (listItem.type) {
            case 'language':
                //logic
                break;
            default:
        }
    };
    return (
        <header className={cx('wapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message" placement="bottom">
                                <button className={cx('icon-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>14</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={() => alert('onclick')}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? useMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6c1e969719867c09acad53236a2490d3~c5_100x100.jpeg?x-expires=1680440400&x-signature=ctZpldzfnt0eApEmFINSh2G%2FmI4%3D"
                                className={cx('user-avatar')}
                                alt="Image error"
                                // fallback là trường hợp ảnh lỗi thì sẽ lấy ảnh khác
                                fallback="https://lh3.googleusercontent.com/a/AGNmyxaVEA7i_t9VAM1eSW1S1luWUcJ2QLZ3SQYijGY0ag=s288"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
