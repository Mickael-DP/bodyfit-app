import { renderHook, act } from "@testing-library/react-native";
import { useFollowOrder } from "./useFollowOrder";

describe("useFilterOrder", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFollowOrder());

    expect(result.current.selectedFilter).toBe("Plus récents");
    expect(result.current.order).toEqual({ field: "created_at", asc: false });
  });

  it('should update to "Moins récents" when that filter is selected', () => {
    const { result } = renderHook(() => useFollowOrder());

    act(() => {
      result.current.handleFilterChange("Moins récents");
    });

    expect(result.current.selectedFilter).toBe("Moins récents");
    expect(result.current.order).toEqual({ field: "created_at", asc: true });
  });

  it('should update to "A-Z" when that filter is selected', () => {
    const { result } = renderHook(() => useFollowOrder());

    act(() => {
      result.current.handleFilterChange("A-Z");
    });

    expect(result.current.selectedFilter).toBe("A-Z");
    expect(result.current.order).toEqual({ field: "pseudo", asc: true });
  });

  it('should update to "Z-A" when that filter is selected', () => {
    const { result } = renderHook(() => useFollowOrder());

    act(() => {
      result.current.handleFilterChange("Z-A");
    });

    expect(result.current.selectedFilter).toBe("Z-A");
    expect(result.current.order).toEqual({ field: "pseudo", asc: false });
  });

  it('should reset to default "Plus récents" when an unknown filter is selected', () => {
    const { result } = renderHook(() => useFollowOrder());

    act(() => {
      result.current.handleFilterChange("Unknown Filter");
    });

    expect(result.current.selectedFilter).toBe("Plus récents");
    expect(result.current.order).toEqual({ field: "created_at", asc: false });
  });
});
