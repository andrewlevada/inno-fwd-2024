import Image from 'next/image';

export interface LinkWithIconProps {
    href: string;
    iconSrc: string;
    label: string;
}

export default function LinkWithIcon(props: LinkWithIconProps) {
    return (
        <a className="flex flex-row gap-1.5" href={props.href} target="_blank">
            <Image src={props.iconSrc} alt={props.label} width={16} height={16} />
            <p>{props.label}</p>
        </a>
    )
}