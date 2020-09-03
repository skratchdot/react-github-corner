import * as React from 'react';
import { CSSProperties, AnchorHTMLAttributes } from 'react';

interface GithubCornerProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    size?: number | string;
    direction?: string;
    octoColor?: string;
    bannerColor?: string;
    ariaLabel?: string;
    className?: string;
    svgStyle?: CSSProperties;
}

export default class GithubCorner extends React.Component<GithubCornerProps, any> {
}
