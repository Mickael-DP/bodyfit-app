import { useState } from "react";

/**
 * Custom hook `useFilterOrder` for managing sorting and filtering orders.
 *
 * This hook provides functionality to change the sorting order of a list based on filters like
 * "Most Recent", "Oldest", "A-Z", and "Z-A". It maintains the sorting field and direction (ascending or descending).
 *
 * @returns {Object} - The filtering and ordering object with the following properties and methods:
 * @property {string} selectedFilter - The currently selected filter (e.g., "Most Recent", "A-Z").
 * @property {Object} order - The current order object with field and direction (asc/desc).
 * @property {string} order.field - The field used for sorting (e.g., "created_at", "title").
 * @property {boolean} order.asc - Whether the sorting is ascending (`true`) or descending (`false`).
 * @property {function} handleFilterChange - Function to change the current filter based on the selected filter string.
 * @property {string[]} filterList - The list of available filters ("Most Recent", "Oldest", "A-Z", "Z-A").
 *
 * @example
 * const { selectedFilter, order, handleFilterChange, filterList } = useFilterOrder();
 *
 * // Example usage in a dropdown
 * return (
 *   <Dropdown
 *     options={filterList}
 *     value={selectedFilter}
 *     onChange={(filter) => handleFilterChange(filter)}
 *   />
 * );
 */

export const useFilterOrder = () => {
  const filterList = ["Plus récents", "Moins récents", "A-Z", "Z-A"];
  const [order, setOrder] = useState<{
    field: "created_at" | "title";
    asc: boolean;
  }>({
    field: "created_at",
    asc: false,
  });

  const handleFilterChange = (selectedFilter: string) => {
    switch (selectedFilter) {
      case "Plus récents":
        setOrder({ field: "created_at", asc: false });
        break;
      case "Moins récents":
        setOrder({ field: "created_at", asc: true });
        break;
      case "A-Z":
        setOrder({ field: "title", asc: true });
        break;
      case "Z-A":
        setOrder({ field: "title", asc: false });
        break;
      default:
        setOrder({ field: "created_at", asc: false });
    }
  };

  const selectedFilter = (() => {
    if (order.field === "created_at" && order.asc === false)
      return "Plus récents";
    if (order.field === "created_at" && order.asc === true)
      return "Moins récents";
    if (order.field === "title" && order.asc === true) return "A-Z";
    if (order.field === "title" && order.asc === false) return "Z-A";
    return "Plus récents";
  })();

  return {
    selectedFilter,
    order,
    handleFilterChange,
    filterList,
  };
};
