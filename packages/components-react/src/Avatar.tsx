import { IconBuilding, IconUser } from '@tabler/icons-react';
import * as clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';
import * as React from 'react';

export interface AvatarProps extends HTMLAttributes<HTMLButtonElement> {
  imageSrc?: string;
  altText?: string;
  privateProfile?: boolean;
}
export const Avatar = ({
  children,
  className,
  imageSrc,
  altText,
  privateProfile,
  ...props
}: PropsWithChildren<AvatarProps>) => {
  return (
    <button className={clsx('kernteam-avatar', className)} {...props}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="kernteam-avatar__image" />
      ) : children ? (
        children
      ) : privateProfile ? (
        <IconUser className="kernteam-avatar__icon" />
      ) : (
        <IconBuilding className="kernteam-avatar__icon" />
      )}
    </button>
  );
};

Avatar.displayName = 'Avatar';
