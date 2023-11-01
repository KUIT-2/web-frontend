import React from "react";

/* SearchBar 함수형 컴포넌트 정의

props
filterText: 검색 필터 텍스트
inStockOnly: 재고 여부 필터
onFilterTextchange: 검색 필터 텍스트를 업데이트하기 위한 콜백 함수
onInStockOnlyChange: 재고 여부 필터를 업데이트하기 위한 콜백 함수

*/
const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  // 이벤트 핸들러 함수
  // 부모 컴포넌트로 이벤트를 전파
  const handleTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };

  return (
    // value prop은 filterText 값을 표시
    // onChange 이벤트 핸들러는 handleTextChange 함수를 호출하여 검색 필터 텍스트의 변경을 처리
    <form>
      <input
        type={"text"}
        value={filterText}
        placeholder="Search..."
        onChange={handleTextChange}
      />
      <label>
        <input
          type={"checkbox"}
          checked={inStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
