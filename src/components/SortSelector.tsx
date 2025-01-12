import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    sortOrder: string;
    onSelectedSort: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectedSort }: Props) => {
    const sortOrders = [
        { key: "", value: "Relevance" },
        { key: "-added", value: "Date added" },
        { key: "name", value: "Name" },
        { key: "-released", value: "Release date" },
        { key: "-metacritic", value: "Popularity" },
        { key: "-rating", value: "Average rating" }
    ];

    const currentSortOrder = sortOrders.find(order => order.key === sortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.value || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder =>
                    <MenuItem onClick={() => onSelectedSort(sortOrder.key)} key={sortOrder.key} value={sortOrder.key}>
                        {sortOrder.value}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;