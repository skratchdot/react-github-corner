import * as React from 'react';

interface GithubCornerProps {
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
