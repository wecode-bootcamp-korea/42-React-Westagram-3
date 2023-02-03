import React from 'react';
import './Footer.scss';

const FOOTER_INFO_LIST = [
  { id: 1, link: '#', text: '소개' },
  { id: 2, link: '#', text: '도움말' },
  { id: 3, link: '#', text: '홍보센터' },
  { id: 4, link: '#', text: 'API' },
  { id: 5, link: '#', text: '채용정보' },
  { id: 6, link: '#', text: '개인정보처리방침' },
  { id: 7, link: '#', text: '약관' },
  { id: 8, link: '#', text: '위치' },
  { id: 9, link: '#', text: '인기 계정' },
  { id: 10, link: '#', text: '해시태그' },
  { id: 11, link: '#', text: '언어' },
];

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        {FOOTER_INFO_LIST.map(footerInfo => (
          <li>
            <a href="#">{footerInfo.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
