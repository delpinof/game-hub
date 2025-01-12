import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
    const { data, error, loading } = usePlatforms();
    if (error) return null;
    if (loading) return <Spinner />
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Platform"}
            </MenuButton>
            <MenuList>
                {data
                    .map((platform) =>
                        <MenuItem
                            onClick={() => onSelectPlatform(platform)}
                            key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;