import React from 'react';
//import { useTranslation } from 'react-i18next';
import style from './Infos.module.scss';

import Badge from 'components/assets/badge';
import CopyPaste from 'components/assets/copypaste';
import Twitter from 'components/assets/SocialMedias/Twitter';

import gradient from 'random-gradient';

import { middleEllipsis } from 'utils/strings';

const Infos: React.FC<any> = ({ user, setNotAvailable }) => {
  //const { t } = useTranslation();

  const bgGradient = { background: gradient(user.name) };

  return (
    <div className={style.Infos}>
      <div className={style.Container}>
        <div className={style.AvatarShell}>
          <div className={style.Avatar}>
            <div style={bgGradient} className={style.AvatarIMG} />
            {user.verified && <Badge className={style.Badge} />}
          </div>
        </div>
        <div className={style.ContainerInner}>
          <div className={style.Left}>
            <h1 className={style.Name}>{user.name}</h1>
            {user.twitter && (
              <a href="https://twitter.com/ternoa_" className={style.Twitter}>
                <Twitter onClick={() => true} className={style.TwitterSVG} />@
                {user.twitter}
              </a>
            )}
            <div className={style.Description}>{user.description}</div>
          </div>
          <div className={style.Right}>
            <div className={style.Top}>
              <div
                className={style.Address}
                onClick={() => {
                  navigator.clipboard.writeText(user.walletId);
                }}
              >
                {middleEllipsis(user.walletId, 20)}
                <CopyPaste className={style.CopyPaste} />
              </div>
              <div
                className={style.Button}
                onClick={() => setNotAvailable(true)}
              >
                Follow
              </div>
            </div>
            <div className={style.Bottom}>
              <span className={style.Bold}>{user.nbFollowers}</span>followers
              <span className={style.Separator}>·</span>
              <span className={style.Bold}>{user.nbFollowing}</span>following
              <span className={style.Separator}>·</span>
              <span className={style.Bold}>{user.views}</span>vues
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;