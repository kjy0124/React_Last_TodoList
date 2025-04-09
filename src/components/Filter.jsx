const Filter = ({ selectedFilterId, setSelectedFilterId }) => {
  const filter = [
    { id: 0, label: "전체보기" },
    { id: 1, label: "완료된 항목 숨기기" },
    { id: 2, label: "완료된 항목만 보기" },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilterId(Number(e.target.value));
    console.log(e.target.value);
    // console.log("setstate: ", filter);
  };

  return (
    <div>
      <select onChange={handleFilterChange} value={selectedFilterId}>
        {filter.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
