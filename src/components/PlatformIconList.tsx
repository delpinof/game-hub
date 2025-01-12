import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid, FaAppStoreIos } from 'react-icons/fa6';
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";


interface Props {
    platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: BsNintendoSwitch,
        mac: FaApple,
        linux: FaLinux,
        ios: FaAppStoreIos,
        android: FaAndroid,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {
                platforms.map((platform) =>
                    <Icon key={platform.slug} as={iconMap[platform.slug]} color={"gray.500"} />
                )
            }
        </HStack >
    );
}
export default PlatformIconList;