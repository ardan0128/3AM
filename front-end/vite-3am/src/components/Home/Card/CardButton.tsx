import { ExternalLink } from 'lucide-react';
import type { CardButtonProps } from '../types';

export default function CardButton({
  buttonProps,
}: {
  buttonProps: CardButtonProps;
}) {
  return (
    <div
      className="relative flex flex-1 items-center justify-between px-2"
      style={{
        backgroundImage: `linear-gradient(to right top, ${buttonProps.shade1}, ${buttonProps.mainColor})`,
      }}
    >
      <span>{buttonProps.buttonName}</span>
      <ExternalLink />
      <a
        href={`${buttonProps.buttonLink}`}
        target={`${buttonProps.target}`}
        rel="noopener noreferrer"
        className="absolute inset-0"
      />
    </div>
  );
}
