import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import Link from 'components/common/Link';
import Icon from 'components/common/Icon';
import LanguageButton from 'components/settings/LanguageButton';
import ThemeButton from 'components/settings/ThemeButton';
import HamburgerButton from 'components/common/HamburgerButton';
import UpdateNotice from 'components/common/UpdateNotice';
import UserButton from 'components/settings/UserButton';
import { HOMEPAGE_URL } from 'lib/constants';
import useConfig from 'hooks/useConfig';
import useUser from 'hooks/useUser';
import Logo from 'assets/logo.svg';
import styles from './Header.module.css';

export default function Header() {
  const { user } = useUser();
  const { pathname } = useRouter();
  const { updatesDisabled } = useConfig();
  const isSharePage = pathname.includes('/share/');
  const allowUpdate = user?.is_admin && !updatesDisabled && !isSharePage;

  return (
    <>
      {allowUpdate && <UpdateNotice />}
      <header className={classNames(styles.header, 'row')}>
        <div className={styles.title}>
          <svg width="143" height="34" viewBox="0 0 143 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M61 27.7C60 27.7 59.3 26.9 59.3 26V18.6C59.3 16.1 58.1 14.1 55.4 14.1C52.7 14.1 51 16.2 51 18.6V25.9C51 26.9 50.3 27.6 49.3 27.6C48.3 27.6 47.6 26.8 47.6 25.9V18.5C47.6 16 46.3 14 43.6 14C40.8 14 39.4 16.1 39.4 18.5V25.8C39.4 26.8 38.7 27.5 37.7 27.5C36.7 27.5 36 26.7 36 25.8V12.9C36 11.9 36.7 11.1 37.7 11.1C38.9 11.1 39.4 11.9 39.4 12.9V14.1C40.4 12.2 42.4 11 44.6 11C47.2 11 49.2 12.3 50.2 14.3C51.6 12.1 53.7 11 56.3 11C60.7 11 62.9 14.1 62.9 18.4V26C62.8 26.9 62.1 27.7 61 27.7Z" fill="black"></path>
            <path d="M74.2 13C71.2 13 69.3 15.6 69.3 18.6C69.3 21.5 71.3 24.2 74.2 24.2C77.2 24.2 79.1 22 79.1 18.6C79.1 15.2 77.2 13 74.2 13ZM74.9 27C72.4 27 70.4 25.7 69.3 23.8V32C69.3 33 68.6 33.7 67.6 33.7C66.6 33.7 65.9 32.9 65.9 32V12C65.9 11 66.5 10.3 67.5 10.3C68.5 10.3 69.2 11.1 69.2 12.1V13.4C70.3 11.5 72.5 10.2 74.9 10.2C79.1 10.2 82.5 13.7 82.5 18.6C82.5 23.6 79.1 27 74.9 27Z" fill="black"></path>
            <path d="M92.3 13.1C89.4 13.1 87.3 15.6 87.3 18.6C87.3 21.8 89 24.1 92.3 24.1C95.3 24.1 97.3 21.5 97.3 18.6C97.2 15.1 95.2 13.1 92.3 13.1ZM100.7 25.1C100.7 26.1 100 26.8 99 26.8C98 26.8 97.3 26 97.3 25.1V24.3C96.3 25.8 94.3 27 92 27C86.9 27 83.9 23.2 83.9 18.6C83.9 14 87.2 10.2 92.4 10.2C97.7 10.2 100.8 13.7 100.8 18.6V25.1H100.7Z" fill="black"></path>
            <path d="M111 10.1C115.4 10.1 118.7 13.5 118.7 17.8V25.1C118.7 26.1 117.9 26.8 117 26.8C116 26.8 115.3 26 115.3 25.1V17.4C115.3 15.1 113.5 13.3 111.1 13.3C108.7 13.3 106.9 15.1 106.9 17.4V25.1C106.9 26.1 106.1 26.8 105.2 26.8C104.2 26.8 103.5 26 103.5 25.1V17.8C103.4 13.5 106.6 10.1 111 10.1Z" fill="black"></path>
            <path d="M129 12.9C126.5 12.9 124.8 14.7 124.4 17H133.4C133.1 14.7 131.5 12.9 129 12.9ZM136.6 18.6C136.6 19.2 136.3 19.8 135.3 19.8H124.4C124.6 22.3 126.3 24.2 129.3 24.2C131.2 24.2 132.3 23.5 133.5 22.4C133.8 22.1 134.2 21.8 134.6 21.8C135.4 21.8 136 22.4 136 23.2C136 23.6 135.8 23.9 135.6 24.2C134.2 25.8 131.7 26.9 129.1 26.9C123.6 26.9 120.8 23.1 120.8 18.5C120.8 13.7 124.3 10.1 129 10.1C133.6 10.1 136.6 13.9 136.6 18.6Z" fill="black"></path>
            <path d="M140.7 26.8C139.7 26.8 139 26 139 25.1V3.5C139 2.5 139.7 1.8 140.7 1.8C141.7 1.8 142.4 2.6 142.4 3.5V25.1C142.4 26 141.7 26.8 140.7 26.8Z" fill="black"></path>
            <path d="M16.9606 0.690665C16.3628 0.717912 15.769 0.804943 15.1888 0.949581C13.8988 1.27591 12.6919 1.86412 11.6441 2.67715C8.85926 4.81465 7.02433 8.45864 7.02433 12.5949V26.886H11.6441V12.9216C11.684 12.2252 11.9815 11.5678 12.4798 11.0752L14.5106 13.0857L16.5416 11.0752C16.8086 11.3385 17.0204 11.652 17.165 11.9977C17.3094 12.3424 17.3834 12.7123 17.3831 13.0857L17.394 13.0838V26.8867H22.0135C22.0135 26.8867 22.0069 14.3205 22.0069 13.0857C22.0073 11.865 21.7032 10.6637 21.1222 9.58788C20.5412 8.51111 19.7008 7.5933 18.6762 6.91526C17.6511 6.23768 16.4731 5.82042 15.2468 5.70085C14.0202 5.58144 12.7824 5.7636 11.6441 6.23099C11.6441 6.23099 13.1522 4.47431 16.0485 4.47431C16.4993 4.47431 16.949 4.51136 17.3943 4.58501C19.1578 4.87693 20.7788 5.72732 22.0139 7.00789C23.5521 8.59502 24.4082 10.7114 24.402 12.911V26.886H29.0218V13.1266C29.0212 5.51013 22.9565 0.678678 17.3937 0.678678C17.3937 0.678678 17.1042 0.681791 16.9606 0.690665V0.690665ZM11.6441 0.711685C8.47859 0.942422 5.51833 2.35066 3.35839 4.65367C1.1986 6.95652 -0.00125689 9.98349 9.88029e-07 13.1266V26.886H4.54378V12.911C4.53969 10.236 5.40968 7.63129 7.02433 5.48678C8.23472 3.87536 9.81918 2.57719 11.6441 1.70142C12.0412 1.51163 12.4482 1.34162 12.8626 1.19278C13.403 1.03412 13.9532 0.911441 14.5103 0.825343C14.4221 0.81242 14.3345 0.799651 14.2476 0.78813C13.6917 0.715422 13.1317 0.678989 12.5711 0.678678C12.2584 0.678678 11.9492 0.690667 11.6441 0.711685" fill="black"></path>
          </svg>
        </div>
        <HamburgerButton />
        {user && (
          <div className={styles.links}>
            <Link href="/dashboard">
              <FormattedMessage id="label.dashboard" defaultMessage="Dashboard" />
            </Link>
            <Link href="/realtime">
              <FormattedMessage id="label.realtime" defaultMessage="Realtime" />
            </Link>
            <Link href="/settings">
              <FormattedMessage id="label.settings" defaultMessage="Settings" />
            </Link>
          </div>
        )}
        <div className={styles.buttons}>
          <ThemeButton />
          <LanguageButton menuAlign="right" />
          {user && <UserButton />}
        </div>
      </header>
    </>
  );
}
