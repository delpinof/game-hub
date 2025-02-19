import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store.ts";

const SortSelector = () => {
    const sortOrders = [
        { key: "", value: "Relevance" },
        { key: "-added", value: "Date added" },
        { key: "name", value: "Name" },
        { key: "-released", value: "Release date" },
        { key: "-metacritic", value: "Popularity" },
        { key: "-rating", value: "Average rating" }
    ];

    const sortOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
    const setSelectedSortOrder = useGameQueryStore(s=>s.setSortOrder);

    const currentSortOrder = sortOrders.find(order => order.key === sortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSortOrder?.value || "Relevance"}
            </MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder =>
                    <MenuItem onClick={() => setSelectedSortOrder(sortOrder.key)} key={sortOrder.key} value={sortOrder.key}>
                        {sortOrder.value}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;