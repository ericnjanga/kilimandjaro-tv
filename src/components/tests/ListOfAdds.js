import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../settings/theme';

import styled from 'styled-components'; //https://www.styled-components.com/docs/basics#styling-any-components
import CheckLinkIcon from '@material-ui/icons/RemoveRedEye';
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';
// import CloseIcon from '@material-ui/icons/Close';
 



const DivContainer = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .add {
    position: relative;
    cursor: pointer;
    // min-height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    img {
      max-width: 100%;
    }
    .icon {
      position: absolute;
      transform: translateY(-50px);
      font-size: 32px;
      left: calc(50% - ${32/2}px);
      color: ${theme.color.secondary};
      opacity: 0;
      transition: ${theme.transition.basic};
    }
    &:hover {
      &:before {
        opacity: .4;
      }
      .icon {
        opacity: 1;
        transform: translateY(50%);
      }
    }
    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 1);
      opacity: 0;
      transition: ${theme.transition.basic};
    }
  }
`;


const ListOfAdds = () => {
    
  const list = [
    {
      url: 'https://afrotonez.com/wp-content/uploads/2017/10/Davido-Thisdaystyle-TYbello-son-of-mercy-3-DonakTv.jpg',
      alt: '...',
    },
    {
      url: 'https://cps-static.rovicorp.com/3/JPG_500/MI0004/046/MI0004046264.jpg?partner=allrovi.com',
      alt: '...',
    },
    {
      url: 'https://img.over-blog-kiwi.com/1/01/06/12/20180828/ob_bc5ef0_20347586-106764313331618-9129293733173.jpg',
      alt: '...',
    },
    {
      url: 'http://www.concertmonkey.be/sites/default/files/styles/large/public/news/25508007_1505164542937860_6723615198505104587_n.jpg?itok=bA730KDX',
      alt: '...',
    },
    {
      url: 'https://yt3.ggpht.com/a-/AN66SAz_83b9iCusIvDTFArJHHttLH9SiYM5uV4FUg=s900-mo-c-c0xffffffff-rj-k-no',
      alt: '...',
    },
    {
      url: 'http://1.bp.blogspot.com/-IdBj0LtSJWs/UfZt_cveZOI/AAAAAAAADCI/yylq_sKYqqw/s1600/Wizkid1.jpg',
      alt: '...',
    },
    {
      url: 'https://www.afromicro.com/File/Music/CoverOriginale/2396_dj-arafat.jpg',
      alt: '...',
    },
  ];

  
 
  return (
    <DivContainer>
      {
        list.map(add => {
          return (
            <li key={add.url}>
              <div className="add">
                <CheckLinkIcon className="icon" />
                <img
                  src={add.url}
                  alt={add.alt}
                />
              </div>
            </li>
          )
        })
      }
    </DivContainer>
  );
  
}

// ListOfAdds.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default ListOfAdds;
