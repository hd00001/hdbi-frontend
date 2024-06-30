import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} `}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/hd00001?tab=repositories',
          blankTarget: true,
        },
        {
          key: 'HD智能 BI',
          title: 'HD智能 BI',
          href: 'https://github.com/hd00001?tab=repositories',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '鲁ICP备2024065419号',
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
