import React, { CSSProperties } from 'react';
import { Children } from '../interface/children';
import styles from './layout.module.scss';

interface Props extends Children {
  style?: CSSProperties | undefined;
  className?: string;
}

interface NavbarProps extends Props {
  fixed?: boolean;
}

const Layout = ({ children, style, className }: Props) => {
  className = `${styles.container} ${className}`;

  return (
    <div className={className} {...{ style }}>
      {children}
    </div>
  );
};

const Content = ({ children, style, className }: Props) => {
  className = `${styles.content} ${className}`;

  return (
    <div className={className} {...{ style }}>
      {children}
    </div>
  );
};

const Navbar = ({ children, style, fixed, className }: NavbarProps) => {
  if (fixed) {
    className = `${styles.navbar} ${className}`;

    return (
      <div className={className} {...{ style }}>
        {children}
      </div>
    );
  } else {
    return (
      <div className={className} {...{ style }}>
        {children}
      </div>
    );
  }
};

const Footer = ({ children, style, className }: Props) => {
  className = `${styles.footer} ${className}`;

  return (
    <div className={className} {...{ style }}>
      {children}
    </div>
  );
};

Layout.Content = Content;
Layout.Navbar = Navbar;
Layout.Footer = Footer;

export default Layout;
